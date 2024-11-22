test("Deve verrificar se dois objetos são iguais", () => {
    expect({a:1, b:2}).toEqual({a:1,b:2})
})

test("Deve verrificar se dois objetos são iguais, mesmo com propriedades indefinidas", () => {
    expect({a:1, b:undefined}).toEqual({a:1})
})

test("Deve verrificar se dois objetos são iguais de forma estrita", () => {
    expect({a:1, b:undefined}).not.toStrictEqual({a:1})
    expect({a:1, b:undefined}).toStrictEqual({a:1, b:undefined})
})

test("Deve verificar se um objeto possui uma propriedade", () => {
    const obj = {nome: 'Maria', idade: 12}
    expect(obj).toHaveProperty("nome")
    expect(obj).toHaveProperty("idade")
})

test("Deve verificar e um objeto possui um subset de campos", () => {
    const obj = {nome: "Alice", idade: 36, email: "alice@email.com"}
    expect(obj).toMatchObject({nome:"Alice",idade:36})
})

test("Deve verificar se um obj é uma instancia de uma classe", () => {
    class Pessoa{
        constructor(public nome:string, public idade:number) {}
    }
    const p = new Pessoa("Alice", 35)
    expect(p).toBeInstanceOf(Pessoa)
})