let queries = new URLSearchParams(window.location.search);
let checkNum = 0;
let intervalId = 0;

function writeOrElse() {
  queries = new URLSearchParams(window.location.search);
  if(!(queries.has('words') && queries.has('target') && queries.has('grace'))) {
    document.location.index = "index.html";
  } else {
    let wordGoal = queries.get('words');
    let grace = queries.get('grace');
    let numGracePeriods = (queries.get('target') * 60) / grace;
    let wordInterval = wordGoal / numGracePeriods;
    let textbox = document.getElementById("writing-box");
    let i = 0;
    intervalId = setInterval(tracker(), grace * 1000);
  }
}

function tracker() {
  let textbox = document.getElementById("writing-box");
  let wordGoal = queries.get('words');
  let grace = queries.get('grace');
  let numGracePeriods = (queries.get('target') * 60) / grace;
  let wordInterval = wordGoal / numGracePeriods;
  if (Math.min(checkNum * wordInterval, wordGoal) > countWords(textbox.value)) {
        alert("Write Faster!!!!");
        // more "punishments" can and will be added later on
      }
  else if(countWords(textbox.value) > wordGoal)  {
      alert("You did it!");
      clearInterval(intervalId);
      
  }
}

function countWords(string) {
  return string.split(" ").filter(w => w.length > 0).length;
}

function countWordsChars() {
  let wordSpan = document.getElementById("word-count");
  let charSpan = document.getElementById("char-count");
  let textbox = document.getElementById("writing-box");
  wordSpan.innerText = countWords(textbox.value);
  charSpan.innerText = textbox.value.length;
}
