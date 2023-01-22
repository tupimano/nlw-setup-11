const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    alert(nlwSetup.dayExists(today) ? "Esse dia já existe! 🔴" : "Adicionado com sucesso 🟢")
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem("local", JSON.stringify(nlwSetup.data))
}

nlwSetup.setData(JSON.parse(localStorage.getItem("local")) || {}) 

nlwSetup.load()