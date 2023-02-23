function runDistance(){
  const burned = document.querySelector('.burned');
  const result = document.getElementById("distance-weight").value * document.getElementById("distance-run").value;

  burned.innerHTML = `
  <p>${result} calories</p>
  `
}


function runDistanceHeart(){
  const burned = document.querySelector('.burned-pulse');
  const result = 0.75 * document.getElementById("heart-weight").value * document.getElementById("distance-run-time").value * document.getElementById("running-time").value;
  
  burned.innerHTML = `
  <p>${result} calories</p>
  `
}
