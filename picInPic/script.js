const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcOject = mediaStream;
    videoElement.onloadeddata = () => {
      videoElement.play();
    }
  } catch (error) {
    // catch error here
  }
}

button.addEventListener('click', async () => {
  // disable button
  button.disabled = true;
  // start pic in pic 
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});




// on load
selectMediaStream();
