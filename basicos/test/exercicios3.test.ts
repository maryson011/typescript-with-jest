import { Utils } from "../src/Utils"

describe("Teste da funão somaArray", () => {
    test("Deve retornar 0 se o array for vazio", () => {
        expect(Utils.somaArray([])).toBe(0)
    })

    test("Deve somar números positivos, negativos e com ponto flutuante", () => {
        const arr = [1,2,3, 5.25,1.30,-10,-5.55]
        expect(Utils.somaArray(arr)).toBeCloseTo(-3,2)
    })
})