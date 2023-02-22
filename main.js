
function runDistance(){
  let burned = document.querySelector('.burned');
  let weight = document.getElementById("distance-weight").value;
  let distance = document.getElementById("distance-run").value;
  let form = document.querySelector('#myForm'); 
  let result = weight * distance;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
  })

  burned.innerHTML = `
  <p>${result} calories</p>
  `
}

function runDistanceHeart(){
  
  let burned = document.querySelector('.burned-pulse');
  let heartWeight = document.getElementById("heart-weight").value;
  let distance = document.getElementById("distance-run-time").value;
  let runHours = document.getElementById("running-time").value;
  let myForm = document.querySelector('#myFormHeart'); 
  let caloriesKmPerKg = 0.75 * heartWeight;
  let result = caloriesKmPerKg * runHours * distance;
  
  myForm.addEventListener('submit', function(e) {
    e.preventDefault();
  })

  burned.innerHTML = `
  <p>${result} calories</p>
  `
}