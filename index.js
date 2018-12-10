function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rl = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < rl.length; i++) {
    rl[i].innerHTML = parseInt(rl[i].innerHTML) + n;
  }
}
  
function deepestChild() {
  const gndivs = document.querySelectorAll('#grand-node div');
  if (!gndivs.length) return false;
  return gndivs[gndivs.length - 1];
}

    
