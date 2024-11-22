import { soma } from "../src/soma"

test("Deve testar a função soma", () => {
    const resultado = soma(1,2)
    expect(resultado).toBe(3)
})

test("Deve fazer a soma com números positivos", () => {
    expect(soma(2,4)).toBe(6)
})

test("Deve retornar 0 para números negativos", () => {
    expect(soma(-2,-4)).toBe(0)
})

// should test the function with it
// isso normalmente é usado quando a descrição é em ingles
it("Deve testar a função soma com it", () => {
    expect(soma(1,2)).toBe(3)
})