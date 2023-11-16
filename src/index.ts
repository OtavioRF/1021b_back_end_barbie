import express from 'express'
import ListaFilme from './aplicacao/lista_filme.use-case'
import BancoMongoDB from './infra/banco/banco_mongodb'
import BancoEmMemoria from './infra/banco/banco_em_memoria'
import SalvaFilme from './aplicacao/salva_filme.use-case'
const app = express()
const bancoMongoDB = new BancoMongoDB()
app.use(express.json())
//Tenho que ter uma rota post para cadastrar um filme
type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
let filmesCadastrados:Filme[] = []
app.post('/filmes', async(req,res)=>{
    const {id, titulo, descricao, imagem} = req.body
    const filme = {
        id,
        titulo,
        descricao,
        imagem
    }
    //como salvo o filme
    const salvarFilme = new SalvaFilme(bancoMongoDB)
    const filmes = await salvarFilme.execute(filme)
    // filmesCadastrados.push(filme)
    res.status(201).send(filmes)
})
app.get('/filmes', async(req,res)=>{
    //usem o listarFilme para listar os filmes
    const listaFilme = new ListaFilme(bancoMongoDB)
    const filmes = await listaFilme.executar()
    res.send(filmes)
})

app.get('/filmes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const filmeId = filmesCadastrados.find(Filme => Filme.id == id);
    if(!filmeId) return res.status(404).send("Filme não encontrado");
    res.status(200).send(filmeId);      
});

//Tenho que iniciar o servidor na porta 3000
app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000')
})