import express from 'express'
const app = express()
app.use(express.json())
//Tenho que ter uma rota post para cadastrar um filme
app.post('/filmes',(req,res)=>{
    const filme = {
        titulo:'Vingadores',
        descricao:'Filme dos herois da marvel',
        imagem:"https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg"
    }
    res.status(201).send(filme)
})
app.get('/filmes',(req,res)=>{
    res.send("Filmes Listados com sucesso")
})
//Tenho que iniciar o servidor na porta 3000
app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})