
function greenButton() {
    
    const main = document.querySelector(".foodContainer")
    const contador = 0;

if(main.classList("selectionFood") !==null && main.classList.contains("selectionDrink") !==null && main.classList.contains("selectionDessert") !==null ){
    contador = 3;
}
    const botao = document.querySelector(".button")
            if(contador == 3){    
                botao.classList.add("green")
                botao.innerHTML = "Fechar Pedido"
            }
}

function addClassSelectionFood(element) {
    const selected = document.querySelector(".selectionFood")
    if( selected !== null) {
        selected.classList.remove("selectionFood")
    }
    element.classList.toggle("selectionFood")

    greenButton();
    
}

function addClassSelectionDrink(element) {
    const selected = document.querySelector(".selectionDrink")
    if( selected !== null) {
        selected.classList.remove("selectionDrink")

    }

    element.classList.toggle("selectionDrink")

    greenButton();
}

function addClassSelectionDessert(element) {
    const selected = document.querySelector(".selectionDessert")
    if( selected !== null) {
        selected.classList.remove("selectionDessert")

    }

    element.classList.toggle("selectionDessert")

    greenButton();
}