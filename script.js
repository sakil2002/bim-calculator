const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(form.querySelector("#height").value);
  const weight = parseInt(form.querySelector("#weight").value);
  const result = form.querySelector(".result");
  const result2 = form.querySelector(".result2");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please provide a valid height.";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please provide a valid weight.";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = bmi;

    if (bmi < 18.6) {
      result2.innerHTML = "Under Weight";
      result2.style.backgroundColor = "yellowgreen"; // Set background color for underweight
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      result2.innerHTML = "Normal Range";
      result2.style.backgroundColor = "green"; // Set background color for normal range
    } else {
      result2.innerHTML = "Over Weight";
      result2.style.backgroundColor = "lightcoral"; // Set background color for overweight
    }
  }
});

form.addEventListener(
  "reset",
  function () {
    form.reset();
    form.querySelector(".result").innerHTML = "";
    form.querySelector(".result2").innerHTML = "";
    form.querySelector(".result2").style.backgroundColor = ""; // Reset background color
  },
  false
);
