import FilmeRepositorioInterface from "./filme_repositorio_interface"

export default class SalvaFilme {
    private repositorio:FilmeRepositorioInterface
    constructor(repositorio:any) {
        this.repositorio = repositorio
    }
    public async execute(input:Input):Promise<Output> {
        const {id,titulo,descricao,imagem} = input
        return await this.repositorio.salvar({id,titulo,descricao,imagem})
    }
}

type Input = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}

type Output = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}
