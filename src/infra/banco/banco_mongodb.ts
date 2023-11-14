import mongoose from "mongoose";
import FilmeRepositorioInterface from "../../aplicacao/filme_repositorio_interface";
require("dotenv").config();
export default class BancoMongoDB implements  FilmeRepositorioInterface {
  public filmeModelo: any;
  constructor() {
    try{
      mongoose.connect(process.env.MONGODB_URL || "")
    }catch(error){
      console.log(error)
    }
    this.filmeModelo = mongoose.model("Filme", 
        new mongoose.Schema({
            _id: Number,
            titulo: String,
            descricao: String,
            imagem: String
        })
    )
  }
  async salvar(filme: Filme): Promise<Filme> {
    const filmeDTO = {
        _id: filme.id,
        titulo: filme.titulo,
        descricao: filme.descricao,
        imagem: filme.imagem
        }
        const filmeModelo = new this.filmeModelo(filmeDTO)
        const result = await filmeModelo.save()
        const filmeSalvo = {
            id: result._id,
            titulo: result.titulo,
            descricao: result.descricao,
            imagem: result.imagem     
        }
        return filmeSalvo
    }
   
  async listar(): Promise<Filme[]> {
    const filmes = await this.filmeModelo.find({}, { _id: 1, titulo: 1, descricao: 1, imagem: 1 });
    return filmes.map((filme: any) => ({
        id: filme._id,
        titulo: filme.titulo,
        descricao: filme.descricao,
        imagem: filme.imagem,
    }));
  }

  async buscarPorId(id:number): Promise<Filme> {
    return new Promise((resolve, reject) => {
      reject(new Error("Not implemented yet"));
    })
  }
}
type Filme = {
  id: number,
  titulo: string,
  descricao: string,
  imagem: string
};