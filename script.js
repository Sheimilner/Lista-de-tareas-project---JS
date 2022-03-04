let input=document.querySelector(".input")
let botonAgregar=document.querySelector(".boton-agregar")
let container=document.querySelector(".container")

class Item {
    constructor(tarea) {
        this.crearDiv(tarea)
    }

    crearDiv(tarea){
        let inputItem=document.createElement("input")
        inputItem.type="text"
        inputItem.value=tarea
        inputItem.disabled = true
        inputItem.classList.add("item-input")

        let botonEditar=document.createElement("button")
        botonEditar.innerHTML="<i class='fas fa-lock'></i>"
        botonEditar.classList.add("boton-editar")

        let botonRemover=document.createElement("button")
        botonRemover.innerHTML="<i class='fas fa-trash'></i>"
        botonRemover.classList.add("boton-remover")

        let item=document.createElement("div")
        item.classList.add("item")
        item.appendChild(inputItem)
        item.appendChild(botonEditar)
        item.appendChild(botonRemover)
        container.appendChild(item)

        botonEditar.addEventListener("click", function () {
            if(inputItem.disabled===true){
                inputItem.disabled=false
                botonEditar.innerHTML="<i class='fas fa-lock-open'></i>"
            }else{
                botonEditar.innerHTML="<i class='fas fa-lock'></i>"
                inputItem.disabled=true
            }
            
        })

        botonRemover.addEventListener("click",function(){
            item.remove()
        })

        
    }
}

function chequearInput (){
    if(input.value===""){
        alert("Por favor, introduzca una nueva tarea")}
        else{
            new Item(input.value)
            input.value=""
        }
    
}

botonAgregar.addEventListener("click",function(){
    chequearInput()

})

document.body.addEventListener("keydown",function(e){
    
    if(e.key==="Enter"){
    chequearInput()}

})

