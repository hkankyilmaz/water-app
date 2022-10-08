let totalWater = document.querySelector(".total-water");
let glass = document.querySelectorAll(".glass");
let p = document.querySelector(".p");

getHowMuchDrunk();

function getHowMuchDrunk() {
  let sayac = 0;
  glass.forEach((element) => {
    element.addEventListener("click", () => {
      if (!element.classList.contains("clicked")) {
        element.classList.add("clicked");
        sayac = sayac + 1;

        uptadeDrunk(sayac);
      } else {
        element.classList.remove("clicked");
        sayac = sayac - 1;

        uptadeDrunk(sayac);
      }
    });
  });
}

function uptadeDrunk(sayac) {
  let percantage = sayac * 12.5;
  p.innerHTML = `%${percantage}`;
  let percantageCup = sayac * 41;
  document.querySelector(".percantage").style.height = `${percantageCup}px`;
  let restLiters = 2 - sayac * 0.25;
  document.querySelector(".restLiters").innerHTML = `${restLiters} lt remained`;

  if (restLiters == 0) {
    document.querySelector(".restLiters").style.visibility = "hidden";
    console.log("1");
  } else if (!restLiters == 0) {
    console.log("2");
    document.querySelector(".restLiters").style.visibility = "visible";
  }

  if (percantage == 0) {
    p.style.visibility = "hidden";
    console.log("3");
  } else {
    p.style.visibility = "visible";
    console.log("4");
  }
}
