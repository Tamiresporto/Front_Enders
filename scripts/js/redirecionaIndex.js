const home = document.querySelector('#homeI');
const servicos = document.querySelector('#servicosI');
const contatos = document.querySelector('#contatoI')
const login = document.querySelector('#loginI')
const cadastro = document.querySelector('#cadastroI')
const saibaMais= document.querySelectorAll('.botaoSaiba')
const picLogoIndex = document.querySelector('#pic-logoIndex')


home.addEventListener('click', () => {
    location.assign('./index.html')
})

picLogoIndex.addEventListener('click',()=>{
    location.assign('./index.html')
})



contatos.addEventListener('click', () => {
    location.assign('.contato.html')
})

login.addEventListener('click', () => {
    location.assign('.login.html')
})

cadastro.addEventListener('click', () => {
    location.assign('.cadastro.html')
})

saibaMais[0].addEventListener('click', () => {
    location.assign('.cadastro.html')
})
saibaMais[1].addEventListener('click', () => {
    location.assign('.cadastro.html')
})
saibaMais[2].addEventListener('click', () => {
    location.assign('.cadastro.html')
})
saibaMais[3].addEventListener('click', () => {
    location.assign('.cadastro.html')
})

