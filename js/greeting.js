let greetComment = '기본 텍스트';
function greeting(hours) {
  if (hours < 12) {
    greetComment = `좋은 아침이네요 🌤️`;
  } else if (hours >= 12 && hours < 18) {
    greetComment = `즐거운 오후네요 ☀️`;
  } else if (hours >= 18) {
    greetComment = `오늘 하루는 어땠나요? 🌙`;
  }
  greet.innerText = greetComment;
  return;
}
greeting(hours);
