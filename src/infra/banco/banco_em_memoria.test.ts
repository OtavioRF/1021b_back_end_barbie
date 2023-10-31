import {describe, expect, it, test} from 'vitest';
import BancoEmMemoria from './banco_em_memoria';

describe('BancoEmMemoria', () => {
    test('deve salvar um filme', async() => {
    const filme = {
        id:1,
        titulo:'filme 1',
        descricao:'Descrição do filme 1',
        imagem:'imagem.jpg'
    }
    const bancoEmMemoria = new BancoEmMemoria()
    await bancoEmMemoria.salvar(filme)

    expect(bancoEmMemoria.filmes).toEqual([filme])
    expect(bancoEmMemoria.filmes.length).toBe(1)

    })
    test('deve listar os filmes salvos em memória', async() => {
        const filme = {
            id:1,
            titulo:'filme 1',
            descricao:'Descrição do filme 1',
            imagem:'imagem.jpg'
        }

        const bancoEmMemoria = new BancoEmMemoria()
        //bancoEmMemoria.salvar(filme)
         bancoEmMemoria.filmes.push(filme)
        const resultado = await bancoEmMemoria.listar()
        expect(resultado).toEqual([filme])
        
    })
    test('deve buscar um filme pelo id', async () => {
        const filme = {
            id:1,
            titulo:'filme 1',
            descricao:'Descrição do filme 1',
            imagem:'imagem.jpg'
        }
        const filme2 = {
            id:2,
            titulo:'filme 1',
            descricao:'Descrição do filme 1',
            imagem:'imagem.jpg'
        }
        const bancoEmMemoria = new BancoEmMemoria()
        bancoEmMemoria.filmes.push(filme)
        bancoEmMemoria.filmes.push(filme2)

        const resultado = await bancoEmMemoria.buscarPorId(1)

        expect(resultado).toEqual(filme)
        expect(bancoEmMemoria.filmes).toHaveLength(2)
    })
})