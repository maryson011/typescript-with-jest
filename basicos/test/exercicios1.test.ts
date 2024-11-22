import { Utils } from "../src/Utils"

describe("testes da função max", () => {
    test("Deve retornar null se receber um array vazio", () => {
        expect(Utils.max([])).toBeNull()
    })
    
    test("Deve retornar o maio número do array", () => {
        expect(Utils.max([1,2,3,4,5,6])).toBe(6)
    })

    test("Deve verificar se o valor retornado não é o menor valor", () => {
        expect(Utils.max([1,2,3,4])).not.toBe(1)
    })

    test("Deve retornar o maior valor negativo do array", () => {
        expect(Utils.max([-1,-2,-3,-4,-5])).toBe(-1)
    })
})

// testes exaustivos não é prático. Você deve saber bem o que é importante testar