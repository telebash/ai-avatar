'use strict';
import DID_API from './api.json' assert { type: 'json' };
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const api = axios.create({
    baseURL: 'https://api.d-id.com/',
    headers: {
        'Authorization': `Client-Key ${DID_API.key}`,
        'Content-Type': 'application/json',
    }
});

if (DID_API.key == '🤫') alert('Please put your API key inside ./api.json and restart.');

const messages = [{
  role: 'assistant',
  content: 'Привет! Я Дария, добро пожаловать в "Агенты". Чем я могу вам помочь?',
  created_at: new Date().toISOString(),
}];

async function fetchAIResponse() {
  const response = await api.post(`/agents/${DID_API.agent_id}/chat/${chatId}`, {
      sessionId,
      streamId,
      messages: messages,
  });

  if (!response.ok) {
    throw new Error(`Local server request failed with status ${response.status}`);
  }
}

const RTCPeerConnection = (
  window.RTCPeerConnection ||
  window.webkitRTCPeerConnection ||
  window.mozRTCPeerConnection
).bind(window);

let peerConnection;
let streamId;
let sessionId;
let sessionClientAnswer;
let idle_video;
let source_url;
let chatId;
let statsIntervalId;
let videoIsPlaying;
let lastBytesReceived;

const talkVideo = document.getElementById('talk-video');
talkVideo.setAttribute('playsinline', '');
const peerStatusLabel = document.getElementById('peer-status-label');
const iceStatusLabel = document.getElementById('ice-status-label');
const iceGatheringStatusLabel = document.getElementById('ice-gathering-status-label');
const signalingStatusLabel = document.getElementById('signaling-status-label');
const streamingStatusLabel = document.getElementById('streaming-status-label');
const audioPlayer = document.getElementById('audioPlayer');

const voiceTypingButton = document.getElementById('voice-typing-button');
voiceTypingButton.addEventListener('click', async () => {
  async function getUserMedia(constraints) {
    if (window.navigator.mediaDevices) {
      return window.navigator.mediaDevices.getUserMedia(constraints);
    }
    let legacyApi =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    if (legacyApi) {
      return new Promise(function (resolve, reject) {
        legacyApi.bind(window.navigator)(constraints, resolve, reject);
      });
    } else {
      alert("user api not supported");
    }
  }
  let audioChunks = [];
  let rec;
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
      document.getElementById('user-input-field').value = response.data.output.text;
    }
  }
  function startusingBrowserMicrophone(boolean) {
    getUserMedia({ audio: boolean }).then((stream) => {
      handlerFunction(stream);
    });
  }
  startusingBrowserMicrophone(true);
  const voiceTypingStopButton = document.getElementById('voice-typing-stop-button');
  voiceTypingStopButton.addEventListener('click',  async () => {
    rec.stop();
  })
})

let socket;

const connectButton = document.getElementById('connect-button');
connectButton.onclick = async () => {
  const agentResponse = await api.get(`agents/${DID_API.agent_id}`);
  const { presenter } = agentResponse.data;
  idle_video = presenter.idle_video;
  source_url = presenter.source_url;
  talkVideo.src = idle_video.current;
  talkVideo.play()

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
    socket = new WebSocket(`wss://notifications.d-id.com/?authorization=Client-Key ${DID_API.key}`);
    socket.onopen = () => {
      console.log('Соединение установлено');
    }
  } catch (e) {
    console.log('error during streaming setup', e);
    stopAllStreams();
    closePC();
    return;
  }

  const sdpResponse = await api.post(`/talks/streams/${streamId}/sdp`, {
    answer: sessionClientAnswer, session_id: sessionId
  });

  const responseChat = await api.post(`agents/${DID_API.agent_id}/chat`)
    const { id: chat_id } = responseChat.data
    chatId = chat_id
};

// This section is modified to accept the local response as text input to D-ID #139
const talkButton = document.getElementById('talk-button');

talkButton.onclick = async () => {
    if (peerConnection?.signalingState === 'stable' || peerConnection?.iceConnectionState === 'connected') {
        const userInput = document.getElementById('user-input-field').value;
        messages.push({
          role: 'user',
          created_at: new Date().toISOString(),
          content: userInput,
        })
        await fetchAIResponse();
    }
};

const destroyButton = document.getElementById('destroy-button');
destroyButton.onclick = async () => {
  await api.delete(`${DID_API.url}/talks/streams/${streamId}`, { session_id: sessionId });

  stopAllStreams();
  closePC();
};

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
  if (!event.track) return;

  statsIntervalId = setInterval(async () => {
    const stats = await peerConnection.getStats(event.track);
    stats.forEach((report) => {
      if (report.type === 'inbound-rtp' && report.mediaType === 'video') {
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
  talkVideo.srcObject = stream;
  talkVideo.loop = false;

  // safari hotfix
  if (talkVideo.paused) {
    talkVideo
      .play()
      .then((_) => {})
      .catch((e) => {});
  }
}

function playIdleVideo() {
  talkVideo.srcObject = undefined;
  talkVideo.src = idle_video;
  talkVideo.loop = true;
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
