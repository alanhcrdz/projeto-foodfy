// declaring attributes
const cards = document.querySelectorAll('.card');
const modalOverlay = document.querySelector('.modal-overlay')
const desc =document.querySelector ('.items')
let items =document.querySelectorAll ('.items') 








//Event for showing modal
for (const card of cards) {
  card.addEventListener("click", () => {
    const recipe_id = card.getAttribute('id')
    window.location.href=`receitas/${recipe_id}`
   

  })

}

//toggle hide/show items on recipes list
function toggleIngredients(){
  let span_show = document.querySelector(' .show1')
  let span_hide = document.querySelector(' .hide1')
      for (let item of items) {
        item = items[0]
        item.classList.toggle('active')
        span_hide.classList.toggle('toggle')
        span_show.classList.toggle('toggle')
      }
}

function togglePreparation(){
  let span_show = document.querySelector(' .show2')
  let span_hide = document.querySelector(' .hide2')
      for (let item of items) {
        item = items[1]
        item.classList.toggle('active')
        span_hide.classList.toggle('toggle')
        span_show.classList.toggle('toggle')
  
      }
}

function toggleInfo(){
  let span_show = document.querySelector(' .show3')
  let span_hide = document.querySelector(' .hide3')
      for (let item of items) {
        item = items[2]
        item.classList.toggle('active')
        span_hide.classList.toggle('toggle')
        span_show.classList.toggle('toggle')
  
      }
}
 







