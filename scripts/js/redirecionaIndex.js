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

servicos.addEventListener('click', () => {
    location.assign('./html/servicos.html')
})

contatos.addEventListener('click', () => {
    location.assign('./html/contatos.html')
})

login.addEventListener('click', () => {
    location.assign('./html/login.html')
})

cadastro.addEventListener('click', () => {
    location.assign('./html/cadastro.html')
})

saibaMais[0].addEventListener('click', () => {
    location.assign('./html/servicos.html')
})
saibaMais[1].addEventListener('click', () => {
    location.assign('./html/servicos.html')
})
saibaMais[2].addEventListener('click', () => {
    location.assign('./html/servicos.html')
})
saibaMais[3].addEventListener('click', () => {
    location.assign('./html/servicos.html')
})

