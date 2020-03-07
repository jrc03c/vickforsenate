HTMLCollection.prototype.forEach = function(fn){
  for (let i=0; i<this.length; i++) fn(this[i], this, i)
}

// style input fields (including submit buttons)
let inputs = document.getElementsByTagName("input")

inputs.forEach(function(input){
  let type = input.type

  if (type === "text" || type === "email"){
    input.classList.add("input")
  }

  else if (type === "submit"){
    input.classList.add("button")
    input.classList.add("is-info")
  }
})

// style textarea fields
let textareas = document.getElementsByTagName("textarea")

textareas.forEach(function(textarea){
  textarea.classList.add("textarea")
})

// style field labels
let labels = document.getElementsByTagName("label")

labels.forEach(function(label){
  label.classList.add("label")
})
