const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {

  const descriptionText = document.querySelector(".adventure-description");
  const optionButtons = document.getElementsByClassName("button");
  
  let startIndex = 0;
  
  function startAdventure(textAdventureIndex) {
    console.log("Adventure has started");
    showAdventureOptions(textAdventureIndex);
  }
  
  // create a function that shows the description
  function showAdventureOptions(textAdventureID) {
    // check fisrt
  
    const newDescriptionText = textAdventure.find(
      (gameNode) => gameNode.id === textAdventureID
    );
    if (!newDescriptionText.options) {
      // hide button
      document.getElementById("first_btn").style.display = "none";
  
      // show description
      descriptionText.innerHTML = newDescriptionText.message;
  
      document.getElementById("second_btn").innerHTML = "Play Again";
      return;
    }
  
    descriptionText.innerText = newDescriptionText.description;
    // iterate through the buttons and insert the option text in each button
    for (let i = 0; i < newDescriptionText.options.length; i++) {
      //console.log(newDescriptionText.options[i].buttontext);
      optionButtons[i].innerText = newDescriptionText.options[i].buttontext;
    }
  }
  
  // function that tracks options and passes the id to the showAdventureOptions function
  function buttonOptions() {
    const adventureIndex = textAdventure.find(
      (gameNode) => gameNode.id === startIndex
    );
  
    for (let i = 0; i < optionButtons.length; i++) {
      optionButtons.addEventListener("click", function () {});
    }
  }
  
  function onPlay() {
    let ids = textAdventure.map((item) => {
      return item.id;
    });
  
    if (startIndex > ids.length - 1) {
      startIndex = 0;
    }
  
    // show
    showAdventureOptions(ids[startIndex]);
  }
  
  function onNextOption(event) {
    event.preventDefault();
  
    startIndex++;
  
    onPlay();
  }
  
  function onPlayAgain(event) {
    event.preventDefault();
  
    // show button
    document.getElementById("first_btn").style.display = "inline";
  
    startIndex = 0;
  
    onPlay();
  }
  
  // optional: function that shows end of the game
  
  // create and object that holds the text for our game and options and also tracks state
  const textAdventure = [
    {
      id: 1,
      description: "Enter the world of Runeterra and explore one of its many regions! Shurima, Noxus, Demacia, Ionia...can you make it all the way through? Test your knowledge."
        ,
      options: [
        {
          buttontext: "Noxus",
          setState: { headback: true },
          nexttext: 2,
        },
        {
          buttontext: "Shurima",
          setState: { headback: true },
          nexttext: 3,
        },
        {
          buttontext: "Ionia",
          setState: { headback: true },
          nexttext: 4,
        },
        {
          buttontext: "Demacia",
          setState: { headback: true },
          nexttext: 5,
        },
      ],
    },
    {
      id: 2,
      description:
        "Choose a champion",
      options: [
        {
          buttontext: "Darius",
          setState: { headback: true },
          nexttext: 221,
        },
        {
          buttontext: "Swain",
          setState: { headback: true },
          nexttext: 222,
        },
        {
          buttontext: "Cassiopea",
          setState: { headback: true },
          nexttext: 223,
        },
        {
          buttontext: "Riven",
          setState: { headback: true },
          nexttext: 224,
        },
      ],
    },
    {
      id: 221,
      description:
        "",
      options: [
        {
          buttontext: "",
          setState: { headback: true },
        },
        {
          buttontext: "",
          setState: { daylight: true },
          nexttext: 4,
        },
      ],
    },
    {
      id: 4,
      // message: console.log('')
      message: "",
    },
  ];
  
  // get first index id
  // let ids = textAdventure.map(item => {
  //   return item.id;
  // });
  
  // let firstId = ids[startIndex];
  
  // startAdventure(firstId);
  
  onPlay();
  showTextNode(1)
}

