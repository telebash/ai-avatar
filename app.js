import aws from 'aws-sdk';
import dotenv from 'dotenv';
import multer from 'multer';
import OpenAI from "openai";
import express from 'express';
import { dirname } from 'path';
import Replicate from "replicate";
import { createServer } from 'http';
import { fileURLToPath } from 'url';
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
})
const replicate = new Replicate({
  auth: process.env.REPLICATE_KEY,
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: 'eu-north-1',
  signatureVersion: 'v4',
});
const s3 = new aws.S3();

const port = 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use('/static', express.static(__dirname))
app.get('/', async (req, res) => {
  const idle_video = "https://agents-results.d-id.com/auth0|65e1c6cb0dbcdf0dff18eca0/agt_QxDcTvTi/idle_1709307813608.mp4";
  const source_url = "https://create-images-results.d-id.com/DefaultPresenters/Noelle_f/v1_image.jpeg";
  res.render('pages/index', { idle_video, source_url })
});

app.post('/chat', async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: req.body.messages,
      model: "gpt-3.5-turbo",
    });

    console.log(completion)

    res.status(200).json({
      created_at: completion.created,
      message: completion.choices.at(0).message
    })
  } catch (e) {
    console.log(e)
    res.status(500).end()
  }
})

app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype
  }
  const { Location } = await s3.upload(params).promise()
  const output = await replicate.run(
    "vaibhavs10/incredibly-fast-whisper:3ab86df6c8f54c11309d4d1f930ac292bad43ace52d10c80d87eb258b3c9f79c",
    {
      input: {
        task: "transcribe",
        audio: Location,
        language: "None",
        timestamp: "chunk",
        batch_size: 64,
        diarise_audio: false
      }
    }
  );
  console.log(output)
  res.json({ output })
})

const server = createServer(app);

server.listen(port, () => console.log(`Server started on port localhost:${port}`));
