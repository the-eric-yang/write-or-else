function writeOrElse() {
  const queries = new URLSearchParams(window.location.search);
  if(!(queries.has('words') && queries.has('target') && queries.has('grace'))) {
    document.location.index = "index.html";
  } else {
    let wordGoal = queries.get('words');
    let grace = queries.get('grace');
    let numGracePeriods = (queries.get('target') * 60) / grace;
    let wordInterval = wordGoal / numGracePeriods;
    let textbox = document.getElementById("writing-box");
    setTimeout(1000 * grace, tracker(grace, wordInterval, 0, numGracePeriods, wordGoal));
  }
}

function tracker(gracePeriod, wordInterval, numPeriods, maxPeriods, wordGoal) {
  let textbox = document.getElementById("writing-box");
  if(numPeriods * wordInterval > countWords(textbox.value)) {
        alert("Write Faster!!!!");
        // more "punishments" can and will be added later on
        if (numPeriods < maxPeriods) {
          setTimeout(gracePeriod * 1000, tracker(gracePeriod, wordInterval, numPeriods + 1, maxPeriods, wordGoal));
        } else {
          setTimeout(gracePeriod * 1000, tracker(gracePeriod, wordInterval, maxPeriods, maxPeriods, wordGoal));
        }
      }
  else if(countWords(textbox.value) > wordGoal)  {
      alert("You did it!");
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
