document.getElementById('copy-email').addEventListener('click', function () {
  const email = 'low-key_proton420@proton.me';
  navigator.clipboard.writeText(email).then(() => {
    // Create or reuse a "Copied!" message element
    let message = document.getElementById('copied-message');
    if (!message) {
      message = document.createElement('div');
      message.id = 'copied-message';
      message.textContent = 'Copied!';
      message.style.cssText = `
        position: absolute;
        margin-top: 5px;
        font-size: 1rem;
        color: white;
        opacity: 0;
        transition: opacity 1s ease-in-out;
      `;
      document.getElementById('copy-email').after(message);
    }

    // Trigger fade-in and fade-out
    message.style.opacity = '1';
    setTimeout(() => {
      message.style.opacity = '0';
    }, 1000); // Message fades out after 1 second
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
