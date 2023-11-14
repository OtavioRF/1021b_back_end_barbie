import { describe, expect, test, beforeEach } from "vitest";
import ListaFilme from "./lista_filme.use-case";
import BancoEmMemoria from "../infra/banco/banco_em_memoria";
describe("ListaFilme", () => {
    const bancoEmMemoria = new BancoEmMemoria();
    beforeEach(async () => {
        bancoEmMemoria.filmes = [
            {
                id: 1,
                titulo: "filme 1",
                descricao: "Descrição do filme 1",
                imagem: "imagem.jpg",
            },
            {
                id: 2,
                titulo: "filme 2",
                descricao: "Descrição do filme 2",
                imagem: "imagem.jpg",
            },
        ];
    })

    test("deve retornar uma lista de filmes", async () => {
        const listaFilme = new ListaFilme(bancoEmMemoria);
        const filmes = await listaFilme.executar();
        expect(filmes.length).toBe(2);
        
        expect(filmes[0].id).toBe(1);
        expect(filmes[0]).toEqual({
            id: 1,
            titulo: "filme 1",
            descricao: "Descrição do filme 1",
            imagem: "imagem.jpg",
            });
            expect(filmes[1]).toEqual({
                id: 2,
                titulo: "filme 2",
                descricao: "Descrição do filme 2",
                imagem: "imagem.jpg",
                });
        })
    });
