const button = document.querySelector('button')
const table = document.querySelector('table')
const valmis = document.querySelector('p')
var summa = 0

const lisaaRivi = () => {
    var row = table.insertRow()
    for (var i = 0; i < 7; i++) {
        const ranNum = Math.floor(Math.random()*9)
        var cell = row.insertCell()
        cell.innerHTML = ranNum
        
    }
    summa ++
    valmis.innerHTML ='Valmiita rivejä ' + summa
}
button.addEventListener('click', lisaaRivi)