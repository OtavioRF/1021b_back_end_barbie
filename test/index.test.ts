import {test,expect,describe} from 'vitest'
// import axios from 'axios'
describe('Primeiro teste da aplicação',()=>{
    test('Espero que 1 seja igual a 1',()=>{
    expect(1).toBe(1)
    })
})
describe('Cadastro de filmes',()=>{
    test('Espero que o filme seja cadastrado',async ()=>{
        const filme = {
            id:1,
            titulo:'Vingadores',
            descricao:'Filme dos herois da marvel',
            imagem:"https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg"
        }
        //Passar isso para minha API
        const resposta = await fetch(
                    'http://localhost:3000/filmes',
                    {
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(filme)
                    }
                    )
        //Esperar que minha API tenha cadastrado o filme
        expect(resposta.status).toBe(201)
        expect(await resposta.json()).toEqual(filme)
    })
    test('Espero que cadastre um segundo filme',async ()=>{
        const filme = {
            id:2,
            titulo:'Vingadores',
            descricao:'Filme dos herois da marvel',
            imagem:"https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg"
        }
        //Passar isso para minha API
        const resposta = await fetch(
                    'http://localhost:3000/filmes',
                    {
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(filme)
                    }
                    )
        //Esperar que minha API tenha cadastrado o filme
        expect(resposta.status).toBe(201)
        expect(await resposta.json()).toEqual(filme)
    })
    test('Espero que o filme cadastrado seja listado',async ()=>{
        const filme = {
            id:2,
            titulo:'Vingadores',
            descricao:'Filme dos herois da marvel',
            imagem:"https://live.staticflickr.com/7270/6976087418_59719341f5_b.jpg"
        }
        //Passar isso para minha API
        const resposta = await fetch(
                    'http://localhost:3000/filmes',
                    {
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(filme)
                    }
        )
        //Esperar que minha API tenha cadastrado o filme
        expect(resposta.status).toBe(201)
        expect(await resposta.json()).toEqual(filme)

        //Listar os filmes cadastrados
        const respostaGet = await fetch('http://localhost:3000/filmes/2')
        expect(respostaGet.status).toBe(200)
        expect(await respostaGet.json()).toEqual(filme)
    })
})