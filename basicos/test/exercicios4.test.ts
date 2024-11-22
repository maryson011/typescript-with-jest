import { Utils } from "../src/Utils"

describe("Testes da função limitarNumeros", () => {
    const min = 0
    const max = 10

    test("Deve retornar um número se o número estiver dentro do intervalo", () => {
        const n = 5
        expect(Utils.limitarNumero(n, min, max)).toBe(5)
    })

    test("Deve retornar o valor minimo se o número estiver abaixo dele", () => {
        const n = -10
        expect(Utils.limitarNumero(n, min, max)).toBe(min)
    })

    test("Deve retornar o valor maxilo se o número for maior que ele", () => {
        const n = 990
        expect(Utils.limitarNumero(n, min, max)).toBe(max)
    })

    
})