const darkStyle = document.querySelector('body');
const toggle = document.getElementById('toggleSwitch');

toggle.addEventListener('click', () => {
  if (darkStyle.classList.contains('darkmode')) {
    // lightmode
    document.body.classList.remove('darkmode');
    timeElement.style.color = 'black';
    settingBox.style.backgroundColor = 'rgba(239, 239, 244, 0.5)';
    footer.style.backgroundColor = 'rgba(239, 239, 244, 0.5)';
    for (let i = 0; i < whiteBoxSpan.length; i++) {
      whiteBoxSpan[i].style.backgroundColor = ' rgba(239, 239, 244, 1)';
      whiteBoxSpan[i].style.color = 'black';
    }
    goalRef.style.backgroundColor = 'rgba(239, 239, 244, 1)';
    goalRefP.style.backgroundColor = 'black';
    console.log('light');
  } else {
    // darkmode
    document.body.classList.add('darkmode');
    timeElement.style.color = 'white';
    settingBox.style.backgroundColor = 'rgba(239, 239, 244, 0.2)';
    footer.style.backgroundColor = 'rgba(239, 239, 244, 0.2)';
    for (let i = 0; i < whiteBoxSpan.length; i++) {
      whiteBoxSpan[i].style.backgroundColor = 'rgba(239, 239, 244, 0.2)';
      whiteBoxSpan[i].style.color = 'white';
    }
    goalRef.style.backgroundColor = 'rgba(239, 239, 244, 0.2)';
    goalRefP.style.backgroundColor = 'white';
    console.log('dark');
  }
});
