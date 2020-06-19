// declaring attributes
const cards = document.querySelectorAll('.card');
const modalOverlay = document.querySelector('.modal-overlay')

//Event for showing modal
for (const card of cards) {
  card.addEventListener("click", () => {
    const recipe_id = card.getAttribute('id')
    const h3 = card.getElementsByTagName('h3')
    const p = card.getElementsByTagName('p')
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('img').src = `assets/images/${recipe_id}.png`;
    modalOverlay.querySelector('h3').innerHTML = `${h3[0].outerHTML}`
    modalOverlay.querySelector('p').innerHTML = `${p[0].outerHTML}`

  })

}
//Closes modal
const close = document.querySelector('.close')
  .addEventListener('click', () => {
    modalOverlay.classList.toggle('active')
  })


