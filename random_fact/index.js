// define section and div 
const mainSection = document.querySelector(".hero");
const parentDiv = document.querySelector(".hero-body");

// select section color
mainSection.classList.add(selectRandomClass());

// get fact
axios
  .get("https://asli-fun-fact-api.herokuapp.com/")
  .then((res) => {
    let fact = res.data.data.fact;
    printFact(fact);
  })
  .catch((err) => {
    console.log("no data returned", err);
  });

// generate section class
function selectRandomClass() {
  let classArray = [
    "is-danger",
    "is-success",
    "is-info",
    "is-link",
    "is-warning",
    "is-primary",
  ];
  let textClass = classArray[Math.floor(Math.random() * classArray.length)];
  return textClass;
}

// generate card
function printFact(fact) {
  // create elements
  let factDiv = document.createElement("div"),
      factText = document.createElement("p")
      factGetNew = document.createElement("p");

  // add classes
  factText.classList.add("title");
  factGetNew.classList.add("subtitle");
  factGetNew.classList.add("is-clickable");

  // add content
  factText.textContent = fact;
  factGetNew.textContent = "Ready for a new one?";

  // refresh page onclick
  factGetNew.onclick = function(){window.location.reload()};

  //append to div
  factDiv.append(factText);
  factDiv.append(factGetNew);

  // append parent div
  parentDiv.append(factDiv);

  return factText;
}
