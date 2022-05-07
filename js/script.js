function tabuada(){
    let numero = window.document.querySelector("input#txtnum")
    let tab = window.document.querySelector("select#seltab")

    if (numero.value.length == 0) {
        window.alert ("[ERRO] Você não pode deixar o campo de número vazio")
    } else {
        let num = Number(numero.value)
        tab.innerHTML = ''
        for (let i = 0; i <= 10; i++){
            let item = document.createElement("option")
            item.text = `${num} x ${i} = ${num*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}