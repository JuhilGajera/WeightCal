const planets = [
  {
    planetName: "Sun",
    gravity: 274,
    image: "Sun.jpg",
  },
  {
    planetName: "Moon",
    gravity: 1.62,
    image: "Moon.jpg",
  },
  {
    planetName: "Mercury",
    gravity: 3.7,
    image:
      "Mercury.jpg",
  },
  {
    planetName: "Venus",
    gravity: 8.87,
    image:
      "Venus.jpg",
  },
  {
    planetName: "Earth",
    gravity: 9.8,
    image:
      "Earth.jpg",
  },
  {
    planetName: "Mars",
    gravity: 3.721,
    image:
      "Mars.png",
  },
  {
    planetName: "Jupiter",
    gravity: 24.79,
    image:
      "Jupiter.jpg",
  },
  {
    planetName: "Saturn",
    gravity: 10.44,
    image: "Saturn.png",
  },
  {
    planetName: "Uranus",
    gravity: 8.87,
    image: "Uranus.png",
  },
  {
    planetName: "Neptune",
    gravity: 11.15,
    image:
      "Neptune.webp",
  },
];

planets.map((ele) => {
  const options = document.createElement("option");
  options.innerHTML = ele.planetName;
  options.value = ele.gravity;
  const selectPlanets = document.getElementById("selectPlanet");
  selectPlanets.appendChild(options);
});

function calculate() {
  const number = +document.getElementById("number").value;
  if (number == "") {
    alert("Please enter the mass of an object");
  } else {
    const selectPlanets = document.getElementById("selectPlanet");
    const index = selectPlanets.selectedIndex;
    const value = +selectPlanets.options[index].value;
    const weight = number * value;
    const weightOfObject = document.getElementById("para");
    weightOfObject.innerText = `The weight of the object on ${planets[index].planetName} `;
    const h = document.getElementById("h");
    h.innerText = weight.toFixed(2) + "N";
    const pimage = document.getElementById("img");
    pimage.src = planets[index].image;
    pimage.style.width = "100%";
    pimage.style.height = "100%";
  }
}
