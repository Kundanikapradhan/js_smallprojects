let container = document.querySelector('.container');
let sizeEl = document.querySelector('.size');
let size = sizeEl.value;
let color = document.querySelector('.color');
let resetBtn = document.getElementById("reset");
let draw = false;

function populate(size) {
  container.style.setProperty('--size', size)
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div')
    div.classList.add('pixel')

    div.addEventListener('mouseover', function(){
        if(!draw) return
        div.style.backgroundColor = color.value
    })
    div.addEventListener('mousedown', function(){
        div.style.backgroundColor = color.value
    })

    container.appendChild(div)
  }
}

window.addEventListener("mousedown", function(){
    draw = true
})
window.addEventListener("mouseup", function(){
    draw = false
})

function reset(){
    container.innerHTML = ''
    populate(size)
}

resetBtn.addEventListener('click', reset)

sizeEl.addEventListener('keyup', function(){
    size = sizeEl.value
    reset()
})

populate(size)