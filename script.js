/* the codes that i comment are mine before i checked chatGpt 
to help me make em neat, then i decided to try wriing a beter code*/

const btn = document.querySelector(".calc-weight");
const mass = document.querySelector(".mass");
const planetInput = document.getElementById("planetInput");
const lastContainer = document.querySelector("lastContainer");
const planetImage = document.querySelector(".planet-image");
const errorMessage = document.createElement("div");
const weightContainer = document.querySelector(".weight-container");
const answer = document.querySelector(".answer");
const planetName = document.querySelector(".planet-name");

// Display error message
errorMessage.classList.add("error-container");

const gravityValues = {
  Mercury: 3.7,
  Venus: 8.87,
  Earth: 9.81,
  Mars: 3.71,
  Jupiter: 24.79,
  Saturn: 10.44,
  Uranus: 8.69,
  Neptune: 11.15,
  Pluto: 0.62,
  Moon: 1.62,
};

// Calculate weight per planet
const calculateWeight = () => {
  const massValue = parseFloat(mass.value);
  const planetValue = planetInput.value;
  const planetGrav = gravityValues[planetValue];
  const weight = Math.floor(massValue * planetGrav * 10) / 10;
  answer.textContent = `${weight.toFixed(2)} N`;
  planetName.textContent = planetValue;
  planetImage.src = `images/${planetValue.toLowerCase()}.png`;
};

// working on claculating the weight of a planet
// let weightPerPlanet = () => {
//   let massValue = mass.value;
//   let planetValue = planetInput.value;
//   let planetGrav;
//   let newPlanetName;
//   // declaring gravity of each panet
//   let mecuryGrav = Number.parseFloat("3.7m/s^2");
//   let venusGrav = Number.parseFloat("8.87m/s^2");
//   let eartGrav = Number.parseFloat("9.81m/s^2");
//   let marsGrav = Number.parseFloat("3.71m/s^2");
//   let jupiterGrav = Number.parseFloat("24.79m/s^2");
//   let saturnGrav = Number.parseFloat("10.44m/s^2");
//   let uranusGrav = Number.parseFloat("8.69m/s^2");
//   let neptuneGrav = Number.parseFloat("11.15m/s^2");
//   let plutoGrav = Number.parseFloat("0.62m/s^2");
//   let moonGrav = Number.parseFloat("1.62m/s^2");
//   let selectedPlanet = planetValue;
//   newPlanetName = selectedPlanet;
//   planetName.textContent = newPlanetName;

//   switch (selectedPlanet) {
//     case "Mercury":
//       planetGrav = mecuryGrav;
//       break;
//     case "Venus":
//       planetGrav = venusGrav;
//       break;
//     case "Earth":
//       planetGrav = eartGrav;
//       break;
//     case "Mars":
//       planetGrav = marsGrav;
//       break;
//     case "Jupiter":
//       planetGrav = jupiterGrav;
//       break;
//     case "Saturn":
//       planetGrav = saturnGrav;
//       break;
//     case "Uranus":
//       planetGrav = uranusGrav;
//       break;
//     case "Neptune":
//       planetGrav = neptuneGrav;
//       break;
//     case "Pluto":
//       planetGrav = plutoGrav;
//       break;
//     case "Moon":
//       planetGrav = moonGrav;
//       break;

//     default:
//       break;
//   }
//   let calcWeight = () => {
//     const weight = Math.floor(massValue * (Math.round(planetGrav * 10) / 10));
//     answer.textContent = `${weight.toFixed(2)} N`;
//   };
//   calcWeight();
// };

btn.addEventListener("click", () => {
  let massValue = mass.value;
  let planetValue = planetInput.value;
  const isValidNumber = massValue !== "" && !isNaN(parseFloat(massValue));

  planetImage.style.display = "none";
  // Remove any previous error messages
  errorMessage.textContent = "";

  if (massValue == "" && planetValue == "") {
    errorMessage.textContent = "Input Both Fields";
    planetImage.insertAdjacentElement("beforebegin", errorMessage);
  } else if (massValue === "") {
    errorMessage.textContent = "Mass is required";
    planetImage.insertAdjacentElement("beforebegin", errorMessage);
  } else if (planetValue === "") {
    errorMessage.textContent = "planet is required";
    planetImage.insertAdjacentElement("beforebegin", errorMessage);
  } else if (!isValidNumber) {
    errorMessage.textContent = "A valid number is required";
    planetImage.insertAdjacentElement("beforebegin", errorMessage);
  } else {
    errorMessage.style.display = "none";
    weightContainer.style.display = "flex";
    planetImage.style.display = "flex";
    calculateWeight();
  }


  
  // if (isValidNumber) {
  //   errorMessage.style.display = "none";
  //   weightContainer.style.display = "flex";
  //   planetImage.style.display = "flex";
  //   switch (planetValue) {
  //     case "Mercury":
  //       planetImage.src = "images/mercury.png";
  //       break;
  //     case "Venus":
  //       planetImage.src = "images/venus.png";
  //       break;
  //     case "Earth":
  //       planetImage.src = "images/earth.png";
  //       break;
  //     case "Jupiter":
  //       planetImage.src = "images/jupiter.png";
  //       break;
  //     case "Mars":
  //       planetImage.src = "images/mars.png";
  //       break;
  //     case "Moon":
  //       planetImage.src = "images/moon.png";
  //       break;
  //     case "Neptune":
  //       planetImage.src = "images/neptune.png";
  //       break;
  //     case "Pluto":
  //       planetImage.src = "images/pluto.png";
  //       break;
  //     case "Saturn":
  //       planetImage.src = "images/saturn.png";
  //       break;
  //     case "Uranus":
  //       planetImage.src = "images/uranus.png";
  //       break;
  //   }

  //   weightPerPlanet();
  // }
});
