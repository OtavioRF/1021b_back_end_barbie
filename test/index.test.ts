import {test,expect,describe} from 'vitest'
import axios from 'axios'
describe('Primeiro teste da aplicação',()=>{
    test('Espero que 1 seja igual a 1',()=>{
    expect(1).toBe(1)
    })
})
describe('Cadastro de filmes',()=>{
    test('Espero que o filme seja cadastrado',async ()=>{
        const filme = {
            titulo:'Vingadores',
            descricao:'Filme dos herois da marvel',
            imagem:"https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg"
        }
     
        //Passar isso para minha API
        const resposta = await axios.post('http://localhost:3000/filmes',filme)
        //Esperar que minha API tenha cadastrado o filme
        expect(resposta.status).toBe(201)
        expect(resposta.data).toEqual(filme)
    })
})

