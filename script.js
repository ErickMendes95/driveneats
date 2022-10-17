let prato = false;
let bebida = false;
let sobremesa = false;


function greenButton() {

    let botao = document.querySelector(".button")

    let classesprato = document.querySelector(".prato")
    let classesbebida = document.querySelector(".bebida")
    let classessobremesa = document.querySelector(".sobremesa")

    // A children de cada opção //
    let childrenprato = classesprato.children;
    let childrenbebida = classesbebida.children;
    let childrensobremesa = classessobremesa.children;

    for (let i = 0; i < childrenprato.length; i++) {
        if (childrenprato[i].classList.contains("selectionFood")){
            prato = true
        }
    }

    for (let i = 0; i < childrenbebida.length; i++) {
        if (childrenbebida[i].classList.contains("selectionDrink")){
            bebida = true
        }
    }

    for (let i = 0; i < childrensobremesa.length; i++) {
        if (childrensobremesa[i].classList.contains("selectionDessert")){
            sobremesa = true
        }
    }

    if(prato && bebida && sobremesa){
        botao.classList.add("green")
        botao.innerHTML = "Fechar pedido"
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

function enviarmensagem() {

    let classepratos = document.querySelector(".selectionFood")
    let classebebidas = document.querySelector(".selectionDrink")
    let classesobremesas = document.querySelector(".selectionDessert")

    let childrenpratos = classepratos.children
    let nomeprato = childrenpratos[1].textContent
    // let precoprato = childrenpratos[3].classList("price")
    console.log(childrenpratos[3])

    let childrenbebidas = classebebidas.children
    let nomebebida = childrenbebidas[1].textContent

    let childrensobremesas = classesobremesas.children
    let nomesobremesa = childrensobremesas[1].textContent

    let precofinal


    let celular = "5524988437290";

    let texto = `Olá, gostaria de fazer o pedido: \n- Prato: ${nomeprato} \n- Bebida: ${nomebebida} \n- Sobremesa: ${nomesobremesa} \nTotal: R$ 27.70`

    texto = window.encodeURIComponent(texto)

    window.open(" https://wa.me/" + celular + "?text=" + texto);
}