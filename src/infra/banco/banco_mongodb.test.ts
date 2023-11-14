import {describe,test, expect, beforeEach} from 'vitest'
import BancoMongoDB from './banco_mongodb'

describe('BancoMongoDB teste', () => {
    const bancoMongoDB = new BancoMongoDB()
    beforeEach(async () => {
      await bancoMongoDB.filmeModelo.deleteMany({})
    })
    test('BancoMongoDB',() => {
        expect(bancoMongoDB).toBeDefined()
    })

    test('deve salvar um filme', async () => {
        const filme = {
            id: 1,
            titulo: 'O Poderoso Chefão',
            descricao: 'Filme de máfia',
            imagem: 'fotofilme.jpg'
        }
        const result = await bancoMongoDB.salvar(filme)
        expect(result).toEqual(filme)
    })
})