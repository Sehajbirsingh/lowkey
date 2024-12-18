document.getElementById('copy-email').addEventListener('click', function () {
  const email = 'emaillowkeyi@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    alert('Email copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy email: ', err);
  });
});

// Add fade effect to the video
const video = document.getElementById('background-video');
video.addEventListener('ended', function() {
  this.currentTime = 0;
  this.style.opacity = 0;
  setTimeout(() => {
    this.style.opacity = 1;
  }, 1000);  // 1 second fade
});
