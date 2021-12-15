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
        "Juan is safe in the shelter. He will wait until it stops raining. What should Juan do",
      options: [
        {
          buttontext: "Leave the cave as soon as it stops raining",
          setState: { headback: true },
        },
        {
          buttontext: "Wait until the sun comes out again and continue walking",
          setState: { daylight: true },
          nexttext: 4,
        },
      ],
    },
    {
      id: 4,
      // message: console.log('Thank you for helping Juan!')
      message: "Thank you for helping Juan!",
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

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn1')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}



function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Welcome to the world of Runeterra.',
    options: [
      {
        text: 'Noxus',
        nextText: 2
      },
      {
        text: 'Demacia',
        nextText: 3
      },

      {
        text: 'Ionia',
        nextText: 4
      },

      {
        text: 'Shurima',
        nextText: 5
      },




    ]
  },
  {
    id: 2,
    text: 'Choose your champion.',
    options: [
      {
        text: 'Darius',
        nextText: 22
      },
      {
        text: 'Swain',
        nextText: 23
      },
      {
        text: 'Cassiopea',
        nextText: 24
      },
      {
        text: 'Riven',
        nextText: 25
      }
    ]
  },
  {
    id: 3,
    text: 'Choose your champion.',
    options: [
      {
        text: 'Garen',
        nextText: 33
      },
      {
        text: 'Lux',
        nextText: 32
      },
      {
        text: 'Jarvan IV',
        nextText: 34
      },
      {
        text: 'Fiora',
        nextText: 35
      }
    ]
  },
  {
    id: 4,
    text: 'Choose your champion.',
    options: [
      {
        text: 'Irelia',
        nextText: 44
      },
      {
        text: 'Karma',
        nextText: 45
      },
      {
        text: 'Jhin',
        nextText: 46
      },
      {
        text: 'Yasuo',
        nextText: 47
      }
    ]
  },
  {
    id: 5,
    text: 'Choose your champion.',
    options: [
      {
        text: 'Azir',
        nextText: 56
      },
      {
        text: 'Nidalee',
        nextText: 57
      },
      {
        text: 'Amumu',
        nextText: 58
      },
      {
        text: 'Skarner',
        nextText: 59
      }
    ]
  },
  {
    id: 6,
    text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',
        nextText: -1
      }
    ]
  }
]

startGame()
