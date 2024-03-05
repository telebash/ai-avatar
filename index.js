'use strict';
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

adapter.browserDetails.browser

const DID_API = {
  "old_key": "YXV0aDB8NjVlMWM2Y2IwZGJjZGYwZGZmMThlY2EwOlVUTDJWX2RrekktVXVVYjE5TXBCdg==",
  "key": "ZmFrZV9lcmFAbWFpbC5ydQ:wq9uULBXrCIdM5VwiIje1",
  "url": "https://api.d-id.com",
  "agent_id": "agt_QxDcTvTi"
};

const api = axios.create({
    baseURL: 'https://api.d-id.com/',
    headers: {
      // 'Authorization': `Client-Key ${DID_API.key}`,
      'Authorization': `Basic ${DID_API.key}`,
      'Content-Type': 'application/json',
    }
});

if (DID_API.key == '🤫') alert('Please put your API key inside ./api.json and restart.');

const messages = [{
  role: 'system',
  // created_at: new Date().toISOString(),
  content: `Ты Венди - кассир сети ресторанов быстрого питания Wendy’s.

  Инструкция:
  - Отвечай кратко и лаконично.
  - Если тебя просят о комбо или о гамбургерах, предложи 3 самых популярных вариантов и озвучь что есть и другие варианты, в ответе не долно быть нумирации. Пример: У нас есть несколько вариантов комбо: Wendy's Бургер комбо, Биффонатор Комбо, Двойной Чизбургер Комбо. Также есть другие комбо на выбор. Что желаете заказать?
  - При ответах не должна быть нумирация.

  Меню:
    Салаты:
      - Греческий салат. Стоимость: 1 400 тенге
      - Гриль Цезарь Салат. Стоимость: 2 100 тенге
    
    Комбо:
      - BBQ Cheese melt DoubleКомбо. Стоимость: 4 000 тенге. Состав: 1. Бургер 2. Порция картофеля фри (на выбор стандарт или крученая) 3. Напиток на выбор 500 мл
      - BBQ Cheese melt комбо. Стоимость: 3 200 тенге. Состав: 1. Бургер 2. Порция картофеля фри (на выбор стандарт или крученая) 3. Напиток на выбор 500 мл
      - Биффонатор Комбо. Стоимость: 4 150 тенге. Состав: 1. Бургер 2. Порция картофеля фри (на выбор стандарт или крученая) 3. Напиток на выбор 500 мл
      - Двойной Wendy's Бургер Комбо. Стоимость: 3 850 тенге. Состав: 1. Бургер 2. Порция картофеля фри (на выбор стандарт или крученая) 3. Напиток на выбор 500 мл
      - Wendy's Бургер комбо. Стоимость: 3 050 тенге. Состав: 1. Бургер 2. Порция картофеля фри (на выбор стандарт или крученая) 3. Напиток на выбор 500 мл
      - Джуниор Биффонатор Комбо. Стоимость: 3 100 тенге. Состав: 1. Бургер 2. Порция картофеля фри (на выбор стандарт или крученая) 3. Напиток на выбор 500 мл
      - Двойной Чизбургер Комбо. Стоимость: 2 750 тенге. Состав: 1. Бургер 2. Порция картофеля фри (на выбор стандарт или крученая) 3. Напиток на выбор 500 мл
      - Гриль Чикен Комбо. Стоимость: 3 050 тенге. Состав: 1. Бургер 2. Порция картофеля фри (на выбор стандарт или крученая) 3. Напиток на выбор 500 мл
      - Гриль Чикен рэп Комбо. Стоимость: 3 150 тенге. Состав: 1. Гриль чикен рэп 2. Порция картофеля фри (на выбор стандарт или крученая) 3. Напиток на выбор 500 мл
      - Криспи Чикен Комбо. Стоимость: 2 450 тенге. Состав: 1. Бургер 2. Порция картофеля фри (на выбор стандарт или крученая) 3. Напиток на выбор 500 мл
      - Ранч Криспи Чикен Комбо. Стоимость: 2 650 тенге. Состав: 1. Бургер 2. Порция картофеля фри (на выбор стандарт или крученая) 3. Напиток на выбор 500 мл
    
    Бургеры с говядиной:
      - BBQ Cheese Melt Double. Стоимость: 2 650 тенге. Состав: Мягкая булочка, двойная большая фирменная говяжья котлета Wendys, луковые кольца, сыр чеддер, соус барбекю
      - BBQ Cheese Melt. Стоимость: 1 850 тенге. Состав: Мягкая булочка, большая фирменная говяжья котлета Wendys, луковые кольца, сыр чеддер, соус барбекю
      - Биффонатор. Стоимость: 2 800 тенге. Состав: Мягкая булочка, большая двойная фирменная говяжья котлета Wendy's, 6  кусочков говяжьего бекона, двойной сыр чеддер, кетчуп, майонез
      - Двойной Wendy's Бургер. Стоимость: 2 500 тенге. Состав: Мягкая булочка, большая двойная фирменная говяжья котлета Wendy's, двойной сыр чеддер, листья салата айсберг, кольца лука, спелые томаты, пикули, кетчуп, майонез
      - Wendy's Бургер. Стоимость: 1 700 тенге. Состав: Мягкая булочка, большая фирменная говяжья котлета Weny's, двойной сыр чеддер, листья салата айсберг, кольца лука, спелые томаты, пикули, кетчуп, майонез
      - Джуниор Биффонатор. Стоимость: 1 750 тенге. Состав: Мягкая булочка, двойная маленькая фирменная говяжья котлета Wendys, 4 кусочка говяжьего бекона, двойной сыр чеддер, майонез, кетчуп
      - Двойной Чизбургер. Стоимость: 1 400 тенге. Состав: Булочка, маленькая двойная говяжья котлета, двойной сыр чеддер, кольца лука, пикули, кетчуп и горчица
      - Чизбургер. Стоимость: 850 тенге. Состав: Булочка, маленькая нежная говяжья котлета, сыр чеддер, кольца лука, нарезанные огурчики, кетчуп и горчица
      - Гамбургер. Стоимость: 750 тенге. Состав: Булочка, маленькая нежная говяжья котлета, кольца лука, нарезанные огурчики, кетчуп и горчица
      - Тост с говяжьим беконом. Стоимость: 650 тенге. Состав: Булочка, кусочки говяжьего бекона и двойной сыр чеддер
      - Халапеньо бургер. Стоимость: 1 850 тенге. Состав: Мягкая булочка, большая фирменная говяжья котлета Wendys, луковые кольца, сыр чеддер, соус шрирача, перчики халапеньо

    Бургеры с курицей:
      - Гриль чикен. Стоимость: 1 700 тенге. Состав: Булочка, куриное филе, листья салата, помидоры и сладкая горчица
      - Гриль чикен рэп. Стоимость: 1 800 тенге. Состав: Тортилья, куриное филе, сыр,  листья салата, помидоры и сладкая горчица
      - Ранч криспи чикен. Стоимость: 1 300 тенге. Состав: Мягкая булочка, нежная куриная котлета, листья салата айсберг, пикули, сыр чеддер, соус ранч
      - Криспи Чикен. Стоимость: 1 100 тенге. Состав: Мягкая булочка, нежная куриная котлета, листья салата айсберг, майонез
      - Наггетс Бургер. Стоимость: 700 тенге. Состав: Булочка, куриные наггетсы, майонез, кетчуп
    
    Детское меню:
      - Гамбургер Кидс Мил. Стоимость: 1 700 тенге. Состав: 1. Гамбургер 2. Маленькая фри 3. Напиток на выбор
      - Чизбургер Кидс Мил. Стоимость: 1 500 тенге. Состав: 1. Чизбургер 2. Маленькая фри 3. Напиток на выбор
      - Наггетс Бургер Кидс Мил. Стоимость: 1 500 тенге. Состав: 1. Наггетс 2. Маленькая фри 3. Напиток на выбор
      - Наггетс Кидс Мил. Стоимость: 1 450 тенге. Состав: 1. Чикен Наггетс (4шт) 2. Маленькая фри 3. Напиток на выбор

    Закуски:
      - Крученая картошка XL. Стоимость: 1 200 тенге
      - Крученая картошка L. Стоимость: 1 000 тенге
      - Крученая картошка M. Стоимость: 800 тенге
      - Картофель Фри XL. Стоимость: 1 100 тенге
      - Картофель Фри L. Стоимость: 1 100 тенге
      - Картофель Фри M. Стоимость: 900 тенге
      - Барбекю Фри. Стоимость: 1 800 тенге. Состав: Картофель фри, говяжья котлета и хрустящий говяжий бекон
      - Картофельные дольки. Стоимость: 1 000 тенге. Состав: Картофельные дольки, обжаренные во фритюре
      - Чикен Наггетс. Стоимость: 1 000 тенге. Состав: Филе куриной грудки в хрустящей панировке
    
    Напитки:
      - Coca-Сola. Стоимость: 300 тенге
      - Fanta. Стоимость: 300 тенге
      - Sprite. Стоимость: 300 тенге
    
    Соусы:
      - Горячий сырный соус. Стоимость: 250 тенге
      - Майонез. Стоимость: 150 тенге
      - Кетчуп. Стоимость: 150 тенге
      - Барбекю соус. Стоимость: 150 тенге
      - Рэнч соус. Стоимость: 150 тенге
      - Сладкая Горчица. Стоимость: 150 тенге
      - Кисло - сладкий соус. Стоимость: 150 тенге
      - Cальса. Стоимость: 150 тенге
  `,
}];

async function fetchAIResponse() {
  const response = await axios.post(`/chat`, {
      messages: messages,
  });

  if (response.status !== 200) {
    throw new Error(`Local server request failed with status ${response.status}`);
  }
  console.log(response.data)

  messages.push({
    role: response.data.message.role,
    // created_at: new Date().toISOString(),
    content: response.data.message.content,
  })

  const payload = {
    script: {
      type: 'text',
      subtitles: 'false',
      provider: {
        type: 'microsoft',
        voice_id: 'ru-RU-DariyaNeural'
      },
      ssml: 'false',
      input: response.data.message.content,
    },
    // config: {
    //   fluent: true,
    //   pad_audio: 0,
    //   driver_expressions: {
    //       expressions: [{ expression: 'neutral', start_frame: 0, intensity: 0 }],
    //       transition_frames: 0
    //   },
    //   align_driver: true,
    //   align_expand_factor: 0,
    //   auto_match: true,
    //   motion_factor: 0,
    //   normalization_factor: 0,
    //   sharpen: true,
    //   stitch: true,
    //   result_format: 'mp4'
    // },
    // 'driver_url': 'bank://lively/',
    // 'config': {
    //   'stitch': true,
    // },
    'session_id': sessionId,
    // audio_optimization: '2',
  }
  await api.post(`/talks/streams/${streamId}`, payload)
}

const RTCPeerConnection = (
  window.RTCPeerConnection ||
  window.webkitRTCPeerConnection ||
  window.mozRTCPeerConnection
).bind(window);

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

let peerConnection;
let streamId;
let sessionId;
let sessionClientAnswer;
let chatId;
let statsIntervalId;
let videoIsPlaying;
let lastBytesReceived;
let inputText;
let rec;

const talkVideo = document.getElementById('talk-video');
const resVideo = document.getElementById('res-video');
const peerStatusLabel = document.getElementById('peer-status-label');
const iceStatusLabel = document.getElementById('ice-status-label');
const iceGatheringStatusLabel = document.getElementById('ice-gathering-status-label');
const signalingStatusLabel = document.getElementById('signaling-status-label');
const streamingStatusLabel = document.getElementById('streaming-status-label');
const audioPlayer = document.getElementById('audioPlayer');

const recordButton = document.getElementById('record');
recordButton.onmousedown = () => {
  startRecord()
}
recordButton.onmouseup = async () => {
  if (rec && rec.state === 'recording') {
    rec.stop();
    rec.stream.getTracks().forEach(i => i.stop())
  }
}
recordButton.addEventListener('pointerdown', () => {
  startRecord()
})
recordButton.addEventListener('pointerup', () => {
  if (rec && rec.state === 'recording') {
    rec.stop();
    rec.stream.getTracks().forEach(i => i.stop())
  }
})

const startRecord = async () => {
  const audioChunks = [];

  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }

  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      // First get ahold of the legacy getUserMedia, if present
      let getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      // Some browsers just don't implement it - return a rejected promise with an error
      // to keep a consistent interface
      if (!getUserMedia) {
        return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
      }

      // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
      return new Promise(function(resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    }
  }

  function handlerFunction(stream) {
    rec = new MediaRecorder(stream);
    rec.start();

    rec.ondataavailable = (e) => {
      if (e.data.size > 0) {
        audioChunks.push(e.data);
      }
    };

    rec.onstop = async () => {
      const fileName = `audio-${new Date().toISOString()}.wav`
      const blob = new Blob(audioChunks, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(blob);
      audioPlayer.src = audioUrl;
      audioPlayer.style.opacity = 0;
      audioPlayer.style.display = 'block';
      const file = new File([blob], fileName, { type:"audio/wav" })
      const formData = new FormData();
      formData.append("file", file, fileName)
      const response = await axios.post('/upload', formData)
      inputText = response.data.output.text;
      if (peerConnection?.signalingState === 'stable' || peerConnection?.iceConnectionState === 'connected') {
        messages.push({
          role: 'user',
          // created_at: new Date().toISOString(),
          content: `Инструкция:
          - Отвечай кратко и лаконично.
          - Если тебя просят о комбо или о гамбургерах, предложи 3 самых популярных вариантов и озвучь что есть и другие варианты, в ответе не долно быть нумирации.
          - При ответах не должна быть нумирация.
          
          Клиент: ${inputText}`,
        })
        await fetchAIResponse();
      }
    }
  }

  function startusingBrowserMicrophone() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      handlerFunction(stream);
    });
  }

  startusingBrowserMicrophone();
}

// let socket;

// const connectButton = document.getElementById('connect-button');
// connectButton.onclick = async () => {
//   if (peerConnection && peerConnection.connectionState === 'connected') {
//     return;
//   }

//   stopAllStreams();
//   closePC();

//   const sessionResponse = await api.post(`${DID_API.url}/talks/streams`, {
//       source_url
//   });

//   const { id: newStreamId, offer, ice_servers: iceServers, session_id: newSessionId } = sessionResponse.data
//   streamId = newStreamId;
//   sessionId = newSessionId;

//   try {
//     sessionClientAnswer = await createPeerConnection(offer, iceServers);
//     socket = new WebSocket(`wss://notifications.d-id.com/?authorization=Client-Key ${DID_API.key}`);
//     socket.onopen = () => {
//       console.log('Соединение установлено');
//     }
//   } catch (e) {
//     console.log('error during streaming setup', e);
//     stopAllStreams();
//     closePC();
//     return;
//   }

//   const sdpResponse = await api.post(`/talks/streams/${streamId}/sdp`, {
//     answer: sessionClientAnswer, session_id: sessionId
//   });

//   const responseChat = await api.post(`agents/${DID_API.agent_id}/chat`)
//   const { id: chat_id } = responseChat.data
//   chatId = chat_id
// };

async function init() {
  if (!window.mobileCheck) talkVideo.play();

  // safari hotfix
  if (talkVideo.paused) {
    talkVideo
      .play()
      .then((_) => {})
      .catch((e) => {});
  }

  if (peerConnection && peerConnection.connectionState === 'connected') {
    return;
  }

  stopAllStreams();
  closePC();

  const sessionResponse = await api.post(`${DID_API.url}/talks/streams`, {
      source_url
  });
  const { id: newStreamId, offer, ice_servers: iceServers, session_id: newSessionId } = sessionResponse.data
  streamId = newStreamId;
  sessionId = newSessionId;

  try {
    sessionClientAnswer = await createPeerConnection(offer, iceServers);
    // socket = new WebSocket(`wss://notifications.d-id.com/?authorization=Client-Key ${DID_API.key}`);
    // socket.onopen = () => {
    //   console.log('Соединение установлено');
    // }
  } catch (e) {
    console.log('error during streaming setup', e);
    stopAllStreams();
    closePC();
    return;
  }

  const sdpResponse = await api.post(`/talks/streams/${streamId}/sdp`, {
    answer: sessionClientAnswer, session_id: sessionId
  });

  // const responseChat = await api.post(`agents/${DID_API.agent_id}/chat`)
  // const { id: chat_id } = responseChat.data
  // chatId = chat_id
}

init();

// const talkButton = document.getElementById('talk-button');
// talkButton.onclick = async () => {
//   if (peerConnection?.signalingState === 'stable' || peerConnection?.iceConnectionState === 'connected') {
//     messages.push({
//       role: 'user',
//       // created_at: new Date().toISOString(),
//       content: inputText,
//     })
//     await fetchAIResponse();
//   }
// };

// const destroyButton = document.getElementById('destroy-button');
// destroyButton.onclick = async () => {
//   await api.delete(`${DID_API.url}/talks/streams/${streamId}`, { session_id: sessionId });

//   stopAllStreams();
//   closePC();
// };

function onIceGatheringStateChange() {
  iceGatheringStatusLabel.innerText = peerConnection.iceGatheringState;
  iceGatheringStatusLabel.className = 'iceGatheringState-' + peerConnection.iceGatheringState;
}

function onIceCandidate(event) {
  console.log('onIceCandidate', event);
  if (event.candidate) {
    const { candidate, sdpMid, sdpMLineIndex } = event.candidate;

    api.post(`/talks/streams/${streamId}/ice`, {
        candidate,
        sdpMid,
        sdpMLineIndex,
        session_id: sessionId
    });
  }
}

function onIceConnectionStateChange() {
  iceStatusLabel.innerText = peerConnection.iceConnectionState;
  iceStatusLabel.className = 'iceConnectionState-' + peerConnection.iceConnectionState;
  if (peerConnection.iceConnectionState === 'failed' || peerConnection.iceConnectionState === 'closed') {
    stopAllStreams();
    closePC();
    init();
  }
}

function onConnectionStateChange() {
  peerStatusLabel.innerText = peerConnection.connectionState;
  peerStatusLabel.className = 'peerConnectionState-' + peerConnection.connectionState;
}

function onSignalingStateChange() {
  signalingStatusLabel.innerText = peerConnection.signalingState;
  signalingStatusLabel.className = 'signalingState-' + peerConnection.signalingState;
}

function onVideoStatusChange(videoIsPlaying, stream) {
  let status;
  if (videoIsPlaying) {
    status = 'streaming';
    const remoteStream = stream;
    setVideoElement(remoteStream);
  } else {
    status = 'empty';
    playIdleVideo();
  }
  streamingStatusLabel.innerText = status;
  streamingStatusLabel.className = 'streamingState-' + status;
}

function onTrack(event) {
  if (!peerConnection) return;
  if (!event || event && !event.track) return;
  console.log('onTrack', event);

  statsIntervalId = setInterval(async () => {
    const stats = await peerConnection.getStats(event.track);
    stats.forEach((report) => {
      if (report.type === 'inbound-rtp' && (report.mediaType === 'video' || report.kind === 'video')) {
        const videoStatusChanged = videoIsPlaying !== report.bytesReceived > lastBytesReceived;

        if (videoStatusChanged) {
          videoIsPlaying = report.bytesReceived > lastBytesReceived;
          onVideoStatusChange(videoIsPlaying, event.streams[0]);
        }
        lastBytesReceived = report.bytesReceived;
      }
    });
  }, 500);
}

async function createPeerConnection(offer, iceServers) {
  if (!peerConnection) {
    peerConnection = new RTCPeerConnection({ iceServers });
    peerConnection.addEventListener('icegatheringstatechange', onIceGatheringStateChange, true);
    peerConnection.addEventListener('icecandidate', onIceCandidate, true);
    peerConnection.addEventListener('iceconnectionstatechange', onIceConnectionStateChange, true);
    peerConnection.addEventListener('connectionstatechange', onConnectionStateChange, true);
    peerConnection.addEventListener('signalingstatechange', onSignalingStateChange, true);
    peerConnection.addEventListener('track', onTrack, true);
  }

  await peerConnection.setRemoteDescription(offer);
  console.log('set remote sdp OK');

  const sessionClientAnswer = await peerConnection.createAnswer();
  console.log('create local sdp OK');

  await peerConnection.setLocalDescription(sessionClientAnswer);
  console.log('set local sdp OK');

  return sessionClientAnswer;
}

function setVideoElement(stream) {
  if (!stream) return;
  talkVideo.style.opacity = 0;
  resVideo.style.opacity = 1;
  resVideo.srcObject = stream;
  console.log('streaming now')

  // safari hotfix
  if (resVideo.paused) {
    resVideo
      .play()
      .then((_) => {})
      .catch((e) => {});
  }
}

function playIdleVideo() {
  resVideo.style.opacity = 0;
  talkVideo.style.opacity = 1;
  if (talkVideo.paused) {
    talkVideo
      .play()
      .then((_) => {})
      .catch((e) => {});
  }
}

function stopAllStreams() {
  if (talkVideo.srcObject) {
    console.log('stopping video streams');
    talkVideo.srcObject.getTracks().forEach((track) => track.stop());
    talkVideo.srcObject = null;
  }
}

function closePC(pc = peerConnection) {
  if (!pc) return;
  console.log('stopping peer connection');
  pc.close();
  pc.removeEventListener('icegatheringstatechange', onIceGatheringStateChange, true);
  pc.removeEventListener('icecandidate', onIceCandidate, true);
  pc.removeEventListener('iceconnectionstatechange', onIceConnectionStateChange, true);
  pc.removeEventListener('connectionstatechange', onConnectionStateChange, true);
  pc.removeEventListener('signalingstatechange', onSignalingStateChange, true);
  pc.removeEventListener('track', onTrack, true);
  clearInterval(statsIntervalId);
  iceGatheringStatusLabel.innerText = '';
  signalingStatusLabel.innerText = '';
  iceStatusLabel.innerText = '';
  peerStatusLabel.innerText = '';
  console.log('stopped peer connection');
  if (pc === peerConnection) {
    peerConnection = null;
  }
}
