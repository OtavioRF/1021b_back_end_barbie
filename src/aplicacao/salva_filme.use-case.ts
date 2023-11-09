import FilmeRepositorioInterface from "./filme_repositorio_interface"

export default class SalvaFilme {
    private repositorio:FilmeRepositorioInterface
    constructor(repositorio:any) {
        this.repositorio = repositorio
    }
    public async execute(input:Input):Promise<Output> {
        const {id,titulo,descricao,imagem} = input
        const result =  await this.repositorio.salvar({id,titulo,descricao,imagem})
        const filmeSalvo = {
            id:result.id,
            titulo:result.titulo,
            descricao:result.descricao,
            imagem:result.imagem
        }
        return filmeSalvo
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
