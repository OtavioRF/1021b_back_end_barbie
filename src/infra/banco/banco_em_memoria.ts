type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
export default class BancoEmMemoria{
    public filmes:Filme[] = []
    constructor(){

    }
    public salvar(filme:Filme){
        this.filmes.push(filme)
        return filme
    }
    public listar(){
        return this.filmes
    }
    public buscarPorId(id:number){
        return this.filmes.find(filme => filme.id === id)
    }
    public apagarDados(){
        this.filmes = []
    }
}