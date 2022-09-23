function results() {
    var questnumb = window.document.getElementById('quest-numb')
    var accnumb = window.document.getElementById('acc-numb')
    var res = window.document.getElementById('res')
    var n1 = Number(questnumb.value)
    var n2 = Number(accnumb.value)
    var divisao = (n2 * 100) / n1 
    res.innerHTML = `Your Porcentage is <strong>${divisao.toFixed(0)} %</strong>`

    
}