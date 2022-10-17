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

    // Parte do Prato //

    let childrenpratos = classepratos.children
    let nomeprato = childrenpratos[1].textContent
    nomeprato = nomeprato.trim()
    let preco1 = Number(parseFloat(childrenpratos[3].querySelector("span.price").textContent).toFixed(2))
    


    // Parte da Bebiba //

    let childrenbebidas = classebebidas.children
    let nomebebida = childrenbebidas[1].textContent
    nomebebida = nomebebida.trim()
    let preco2 = Number(parseFloat(childrenbebidas[3].querySelector("span.price").textContent).toFixed(2))
    

    // Parte da Sobremesa //

    let childrensobremesas = classesobremesas.children
    let nomesobremesa = childrensobremesas[1].textContent
    nomesobremesa = nomesobremesa.trim()
    let preco3 = Number(parseFloat(childrensobremesas[3].querySelector("span.price").textContent).toFixed(2))
    
    // Preco final da compra //
    let precofinal = parseFloat(preco1 + preco2 + preco3).toFixed(2)
    

    // Parte do link pra mensagem //
    let celular = "5524988437290";

    let texto = `Olá, gostaria de fazer o pedido: \n- Prato:${nomeprato}\n- Bebida:${nomebebida} \n- Sobremesa:${nomesobremesa} \nTotal: R$${precofinal}`

    texto = window.encodeURIComponent(texto)

    window.open(" https://wa.me/" + celular + "?text=" + texto);
}