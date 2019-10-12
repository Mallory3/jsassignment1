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

// var index 
// const cardDiv = createCard(data)
// for (let index = 0; index < data.length; index++) {
//     const cardData = data[index];
//     const completeCard = createCard(data);
//     cardDiv.appendChild(completeCard)
//   }



/*function to create div*/
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
    // createButtonDiv.textContent = [data[0].price]
    return createButtonDiv
}

/*function for putting data into card*/
function createCard() {
   const cardDiv = createDiv()
   const createTitlesDiv = createTitleDiv()
   const createTopicsDiv = createTopicDiv()
   const createButtonDiv = createButton()
   createTitlesDiv.textContent = (data[0].title)
   createTopicsDiv.textContent = [data[0].topic]
   createButtonDiv.textContent = [data[0].price]
   cardDiv.appendChild(createTitlesDiv)
   cardDiv.appendChild(createTopicsDiv)
   cardDiv.appendChild(createButtonDiv)
   return cardDiv
}

/* creates 6 tiles */
for(let i = 0; i != data.length; i++){
    createCard();
}



// for(let i = 0; i < data[i].price.length; i++){
//     createButton(data[0].price); 
// }

/* color 6 titles */
// for (let index = 0; index < data.length; index++) {
//     createTopicDiv(data[index].topic);
    
// }







// const createTopicsDiv = createTopicDiv()
// const createTitlesDiv = createTitleDiv()
// const createButtonDiv = createButton()



// const locateTopicsDiv = document.querySelector('.card')
// const topicDiv = locateTopicsDiv.appendChild(createTopicsDiv)