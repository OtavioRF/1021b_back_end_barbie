import {test, expect, describe} from 'vitest';
import SalvaFilme from './salva_filme.use-case';
import BancoEmMemoria from '../infra/banco/banco_em_memoria';

describe("Testando salva filme use case", () => {
    test("Deve salvar um filme", () => {
            const bancoEmMemoria = new BancoEmMemoria()
            const salvaFilme = new SalvaFilme(bancoEmMemoria)
            const input = {
                id:1,
                titulo:"test",
                descricao:"test",
                imagem:"test"
            }
            const resultado = salvaFilme.execute(input)
            expect(resultado).toEqual(input)
    })
})


