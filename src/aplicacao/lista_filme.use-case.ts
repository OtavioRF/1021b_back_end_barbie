import FilmeRepositorioInterface from "./filme_repositorio_interface"
export default class ListaFilme{
    constructor(readonly filmeRepositorio:FilmeRepositorioInterface){}
    public async executar(){
        return this.filmeRepositorio.listar()
    }
}

type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}