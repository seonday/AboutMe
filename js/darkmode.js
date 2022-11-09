const darkStyle = document.querySelector('body');
const toggle = document.getElementById('toggleSwitch');

toggle.addEventListener('click', () => {
  if (darkStyle.classList.contains('darkmode')) {
    document.body.classList.remove('darkmode');
    console.log('light');
  } else {
    document.body.classList.add('darkmode');
    console.log('dark');
  }
});
