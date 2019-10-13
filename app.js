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

// data.forEach(function createDiv() {
    
//         const locateCardDiv = document.querySelector('#content')
//         const createCardDiv = document.createElement('div')
//         createCardDiv.className = 'card'
//         locateCardDiv.appendChild(createCardDiv)
// })




/*function to create div*/
// function createDiv() {
//     const locateCardDiv = document.querySelector('#content')
//     const createCardDiv = document.createElement('div')
//     createCardDiv.className = 'card'
//     const cardDiv = locateCardDiv.appendChild(createCardDiv)
//     return cardDiv
// }


/* functions for creating title and topic div */
data.forEach(function createCards(div) {

    const locateCardDiv = document.querySelector('#content')
    const createCardDiv = document.createElement('div')
    createCardDiv.className = 'card'
    const cardDiv = locateCardDiv.appendChild(createCardDiv)
    cardDiv.style.backgroundColor = div.color


    const createTopicsDiv = document.createElement('div')
    createTopicsDiv.className = 'topic'
    createTopicsDiv.textContent = div.topic
    cardDiv.appendChild(createTopicsDiv)

    const createTitlesDiv = document.createElement('div')
    createTitlesDiv.className = 'title'
    createTitlesDiv.textContent = div.title
    cardDiv.appendChild(createTitlesDiv)

    const createButtonDiv = document.createElement('div')
    createButtonDiv.className = 'buy-button'
    createButtonDiv.textContent = div.price
    cardDiv.appendChild(createButtonDiv)

})



// function createTopicDiv(div) {
//     const cardDiv = createDiv()
//     const createTopicsDiv = document.createElement('div')
//     createTopicsDiv.className = 'topic'
//     document.write(div.title)
//     cardDiv.appendChild(createTopicsDiv)
// }

// function createTitleDiv() {
//     const cardDiv = createDiv()
//     const createTitlesDiv = document.createElement('div')
//     createTitlesDiv.className = 'title'
//     cardDiv.appendChild(createTitlesDiv)
// }

// function createButton() {
//     const cardDiv = createDiv()
//     const createButtonDiv = document.createElement('div')
//     createButtonDiv.className = 'buy-button'
//     cardDiv.appendChild(createButtonDiv)
// }

/*function for putting data into card*/
// function createCard() {
//    const cardDiv = createDiv()
//    const createTitlesDiv = createTitleDiv()
//    const createTopicsDiv = createTopicDiv()
//    const createButtonDiv = createButton()
//    cardDiv.appendChild(createTitlesDiv)
//    cardDiv.appendChild(createTopicsDiv)
//    cardDiv.appendChild(createButtonDiv)
// }


/* creates 6 tiles */

// data.forEach(function(){
//     createCard()
// })






// data.forEach(function(titles) {
//     createButton() {
//     const createButtonDiv = createButton()
//     createButtonDiv.textContent(titles.title)
//     }
// })


// var i 
// var j
// var k

// for(let i = 0; i < data.length; i++) {
//     // for(let j =0; j < data[i].title.length; j++) {
        
//     // }
//     // for(let k =0; k < data[i].topic.length; j++) {
        
//     // }
//     createDiv()
// }



// var j




    


// var i
// function addButtonData() {
//     const card = createCard()
//     const createButtonDiv = createButton()
//     createButtonDiv.textContent = [data[i].price]
//     card.appendChild(createButtonDiv)
//     return createButtonDiv

// }

// for(let i = 0; i != data.length; i++){
//     addButtonData();
// }


// function createCard2() {
//     const cardDiv = createDiv()
//     const createTitlesDiv = createTitleDiv()
//     const createTopicsDiv = createTopicDiv()
//     const createButtonDiv = createButton()
//     createTitlesDiv.textContent = (data[1].title)
//     createTopicsDiv.textContent = [data[1].topic]
//     createButtonDiv.textContent = [data[1].price]
//     cardDiv.appendChild(createTitlesDiv)
//     cardDiv.appendChild(createTopicsDiv)
//     cardDiv.appendChild(createButtonDiv)
//  }
 
 /* creates 6 tiles */
//  for(let i = 0; i != data.length; i++){
//      createCard2();
//  }

 /* creates 6 tiles */
//  for(let i = 0; i != data.length; i++){
//      createCard3();
//  }


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