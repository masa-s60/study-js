let capital = prompt('日本の首都は');
const answer = /^東京$|^東京都$|^とうきょう$|^とうきょうと$|^tokyo$/;

while (answer.test(capital) === false) {
  alert('不正解です');
  capital = '';
  capital = prompt('日本の首都は');
}

alert('正解です');