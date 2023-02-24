let weight = document.getElementById("distance-weight").value;
let distance = document.getElementById("distance-run").value;
let heartWeight = document.getElementById("heart-weight").value;
let runningTime = document.getElementById("running-time").value;
let runningDistanceTime = document.getElementById("distance-run-time").value;

function runDistance(weight, distance){
  return weight * distance;
}

function runDistanceRenderOne() {
  const burnedTextOne = document.querySelector('.burned');
  burnedTextOne.innerHTML =  runDistance(document.getElementById("distance-weight").value, document.getElementById("distance-run").value);

}


function runDistanceHeart(heartWeight, runningTime, runningDistanceTime){
  return 0.75 * heartWeight * runningTime * runningDistanceTime;
}

function runDistanceRenderTwo() {
  const burnedTextTwo = document.querySelector('.burned-pulse');
  burnedTextTwo.innerHTML = runDistanceHeart(document.getElementById("heart-weight").value, document.getElementById("running-time").value, document.getElementById("distance-run-time").value)
}
