console.log("resume.html");

const veryLikely = document.getElementById("Very-Likely");
const likely = document.getElementById("Likely");
const neutral = document.getElementById("Neutral");
const unlikely = document.getElementById("Unlikely");
const veryUnlikely = document.getElementById("Very-Unlikely");

function fn1() {
  if (veryLikely.checked === true)
    alert("Thank you for your selection of: " + veryLikely.value);
  else if (likely.checked === true)
    alert("Thank you for your selection of: " + likely.value);
  else if (neutral.checked === true)
    alert("Thank you for your selection of: " + neutral.value);
  else if (unlikely.checked === true)
    alert("Thank you for your selection of: " + unlikely.value);
  else if (veryUnlikely.checked === true)
    alert("Thank you for your selection of: " + veryUnlikely.value);
  else alert("Please select an option.");
}

// The following function was supposed to be a function that set a counter for each selection (e.g. "Total 'Very Likely' Clicks: 39")
// that could be seen in the browser console. This could track the click data for each selection.

var clickTracker = 0;
var btn = document.getElementById("submit");

btn.addEventListener("click", function () {
  clickTracker = clickTracker + 1;
  console.log(clickTracker);
});
