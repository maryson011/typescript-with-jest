import { Utils } from "../src/Utils"

describe("testes da função encontrarPorId", () => {
    const arr = [{id:1, a: 1}, {id:2, b:2}, {id: 3, c: 3}]

    test("Deve retornar o objeto com id correspondente", () => {
        expect(Utils.encontrarPorId(arr, 1)).toEqual({id:1, a: 1})
    })

    test("Deve retornar undefined se i id não existir no array", () => {
        expect(Utils.encontrarPorId(arr, 100)).toBeUndefined()
    }) 
    
    test("", () => {
        Utils.encontrarPorId("", 1)
        Utils.encontrarPorId([{a:1}], 1)
        Utils.encontrarPorId([true, true], 1)
        // (array: {id: number, key: string}[])
    })
})

describe("TEstes da função inverter objeto", () => {
    test("Deve retornar um objeto vazio se o objeto passado for um objeto vazio", () => {
        expect(Utils.inverterObjeto({})).toEqual({})
    })
    test("Deve inverter propriedades com valores primitivos", () => {
        const obj = {nome: "Ana", idade: 54, salario: 5009.65, admin: true}
        expect(Utils.inverterObjeto(obj)).toEqual({
            Ana: "nome",
            "54": "idade",
            "5009.65":"salario",
            "true":"admin"
        })
    })

    test("Deve inverter propriedades com arrays e objetos", () => {
        const obj = {array:[1,2,"a","b"], obj:{a:1}}
        expect(Utils.inverterObjeto(obj)).toEqual({
            '[1,2,"a","b"]':"array",
            '{"a":1}':"obj"
        })
    })
})

describe("TEste da função deletar propriedade", () => {
    test("deve deletar a propriedade de um objeto", () => {
        const obj = {nome: "Alice", admin: true}
        expect(Utils.deletarPropriedade(obj, "admin")).toEqual({nome:"Alice"})
    })
})