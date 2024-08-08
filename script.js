function writeOrDie() {
  const queries = new URLSearchParams(window.location.search);
  if(!(queries.has('words') && queries.has('target') && queries.has('grace'))) {
    document.location.index = "index.html";
  } else {
    let wordGoal = queries.get('words');
    let grace = queries.get('grace');
    let numGracePeriods = (queries.get('target') * 60 / grace;
    let wordInterval = wordGoal / numGracePeriods);
    let textbox = document.getElementById("writing-box");
    setTimeout(1000 * grace, tracker(grace, 0, numGracePeriods));
  }
}

function tracker(gracePeriod, numPeriods, maxPeriods) {
  if(numPeriods * wordInterval > countWords(textbox.value)) {
        alert("Write Faster!!!!");
        // more "punishments" can and will be added later on
        if (numPeriods < maxPeriods) {
          setTimeout(gracePeriod * 1000, tracker(gracePeriod, numPeriods + 1, maxPeriods);
        } else {
          setTimeout(gracePeriod * 1000, tracker(gracePeriod, maxPeriods, maxPeriods);
        }
      }
  else if(countWords(textbox.value) > wordGoal)  {
      alert("You did it!");
  }
}

function countWords(string) {
  let wordArray = string.split(" ")
  let numWords = 0;
  for(int i = 0; i < wordArray.length(); i++) {
    if(wordArray[i] > 0) {
      numWords++;
    }
  }
  return numWords;
}

function countWordsChars() {
  let wordSpan = document.getElementById("word-count");
  let charSpan = document.getElementById("char-count");
  let textbox = document.getElementById("writing-box");
  wordSpan.value = countWords(textbox.value);
  charSpan.value = textbox.value.length;
  setTimeout(100, countWordsChars());
}
