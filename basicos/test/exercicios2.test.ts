import { Utils } from "../src/Utils"

describe("testes da função min", () => {
    test("Deve retornar null se receber um array vazio", () => {
        expect(Utils.min([])).toBeNull()
    })
    
    test("Deve retornar o menor número do array", () => {
        expect(Utils.min([1,2,3,4,5,6])).toBe(1)
    })

    test("Deve verificar se o valor retornado não é o maior valor", () => {
        expect(Utils.min([1,2,3,4])).not.toBe(4)
    })

    test("Deve retornar o menor valor negativo do array", () => {
        expect(Utils.min([-1,-2,-3,-4,-5])).toBe(-5)
    })
})

// testes exaustivos não é prático. Você deve saber bem o que é importante testar