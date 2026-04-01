const intervalId = setInterval(() => {
  const button = document.querySelector(
    'div.button__65fca.buttonWhite__65fca.clickable__5c90e'
  );
  if (button) {
    button.click();
    console.log('Clicked!');
  } else {
    console.warn('Button not found');
  }
}, 200);

// To stop it, run: clearInterval(intervalId)
console.log('Auto-clicker started. To stop: clearInterval(' + intervalId + ')');
