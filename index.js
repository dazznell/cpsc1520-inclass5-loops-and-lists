window.addEventListener('load', function(e){
    const playersData = getTeamMembers();
    const playerArray =   playersData.split(',')
    // console.table(playerArray)
    // parse the data into markup for
//     let markup = ``
//     playerArray.forEach(function(value, index){
//         markup += `<li>${value}</li>`

//     })
//      console.log(markup)
   
// 
// for in
// markup = ``
// for(let index in playerArray){
//     console.log( playerArray[index])
//     markup += `<li>${playerArray[index]}</li>`
// }
// console.log(markup)

// Template literal is a string innerHTML and insertAdjacentHTML place text into the DOM
// However we need to convert the string to an Element Node if we want to add an event listener
// before it is added into the DOM

// created a placeholder for my li
const ul = document.createElement('ul')
// ref to the  element container where I will place the ul
const markupContainer = document.querySelector('.markup-container');

playerArray.forEach(function(value, index){
    // created the markup
let li  = ` <li>${value}</li>`
// converted templaate literal to a document fragment
let markup = document.createRange().createContextualFragment(li)
// i grab the markup I want from the document fragment
let listItem = markup.firstElementChild
// add the list item to the ul
ul.append(listItem)
// i can now treat the markup as an Element Node
 listItem.addEventListener('click', function(){
     console.log(e.currentTarget)
 })
})
 console.log(ul)

})