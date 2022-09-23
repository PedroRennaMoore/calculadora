function results() {
    var questnumb = window.document.getElementById('quest-numb')
    var accnumb = window.document.getElementById('acc-numb')
    var res = window.document.getElementById('res')
    var res2 = window.document.getElementById('res2')
    var n1 = Number(questnumb.value)
    var n2 = Number(accnumb.value)
    var divisao = (n2 * 100) / n1 
    res.innerHTML = `Your Porcentage is <strong>${divisao.toFixed(0)} %</strong>`

    if (divisao >= 0 && divisao <= 30) {
        document.body.style.background = '#FF662A'
        document.getElementById('calc').style.background = '#FF662A'
        res2.innerHTML = `:(`
        
    } else if (divisao >= 31 && divisao <= 50) {
        document.body.style.background = '#FFE428'
        document.getElementById('calc').style.background = '#FFE428'
        res2.innerHTML = `it's okay, maybe next time...`

    } else if (divisao >= 51 && divisao <= 80) {
        document.body.style.background = '#93E060'
        document.getElementById('calc').style.background = '#93E060'
        res2.innerHTML = `Well done ;)`

    } else if (divisao >= 81 && divisao <= 100) {
        document.body.style.background = '#44FF51'
        document.getElementById('calc').style.background = '#44FF51'
        res2.innerHTML = `O...M...G, You're so smart!`

    }
    
}