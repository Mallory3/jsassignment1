const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

const data = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue
    },
    {
        topic: 'Food',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue
    }
]

// Instructions
// Take the data above and display it as tiles on the page


/* function for creating div cards */

let index 
const cardDiv = createCard(data)
for (let index = 0; index < data.length; index++) {
    const cardData = data[index];
    const completeCard = createCard(data);
    cardDiv.appendChild(completeCard)
  }


function createDiv() {
    const locateCardDiv = document.querySelector('#content')
    const createCardDiv = document.createElement('div')
    createCardDiv.className = 'card'
    const cardDiv = locateCardDiv.appendChild(createCardDiv)
    return cardDiv
}


/* functions for creating title and topic div */
function createTopicDiv() {
    const createTopicsDiv = document.createElement('div')
    createTopicsDiv.className = 'topic'
    return createTopicsDiv
}

function createTitleDiv() {
    const createTitlesDiv = document.createElement('div')
    createTitlesDiv.className = 'title'
    return createTitlesDiv
}

function createButton() {
    const createButtonDiv = document.createElement('div')
    createButtonDiv.className = 'buy-button'
    createButtonDiv.textContent = "data.price"
    return createButtonDiv
}

/*function for putting data into card*/

function createCard(data) {
   const cardDiv = createDiv(data)
   const divTitle = createTitleDiv(data.title)
   const topicDiv = createTopicDiv(data.topic)
   const buttonDiv = createButton(data.price)
   cardDiv.appendChild(divTitle)
   cardDiv.appendChild(topicDiv)
   cardDiv.appendChild(buttonDiv)
   return cardDiv
}








// const createTopicsDiv = createTopicDiv()
// const createTitlesDiv = createTitleDiv()
// const createButtonDiv = createButton()



// const locateTopicsDiv = document.querySelector('.card')
// const topicDiv = locateTopicsDiv.appendChild(createTopicsDiv)