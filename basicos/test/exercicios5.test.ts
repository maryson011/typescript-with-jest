import { Utils } from "../src/Utils";

describe("TEstes da função diferença de arrays", () => {
    test("Deve verifiar a diferença entre arrays numéricos", () => {
        const arr1 = [1,2,3,4]
        const arr2 = [4,3,67,1]
        expect(Utils.diferencaDeArrays(arr1, arr2)).toEqual([2])
    })

    test("Deve verificar a diferenã entre arrays de string", () => {
        const arr1 = ["a", "b", "c", "d"]
        const arr2 = ["a", "b", "f"]
        expect(Utils.diferencaDeArrays(arr1, arr2)).toStrictEqual(["c", "d"])
    })

    test("Deve retornar um array vazo se o primeiro for vazio", () => {
        expect(Utils.diferencaDeArrays([], [1,2])).toEqual([])
    })

    test("Deve retornar o primeiro array se o segundo for vazio", () => {
        const arr = [1,2]
        expect(Utils.diferencaDeArrays(arr,[])).toEqual(arr)
    })

    test("Deve rretornar um array vazio se os arrays forem iguais", () => {
        const arr = [1,2,4]
        expect(Utils.diferencaDeArrays(arr, arr)).toEqual([])
    })

    //test("Deve funcinar corretamente com um array de objetos", () => {
    //    const arr1 = [{a:1}, {b:2}]
    //    const arr2 = [{a:1}]
    //    expect(Utils.diferencaDeArrays(arr1, arr2)).toEqual([{b:2}])
    //})
})

describe("TEstes da função remover diplicados", () => {
    test("Deve remover duplicados de um array número", () => {{
        const arr = [0,1,6.98,-43,0,15,6.98,-900,-43]
        expect(Utils.removerDuplicados(arr)).toEqual([0,1,6.98,-43,15,-900])
    }})

    test("Deve remover duplicados de um array string", () => {{
        const arr = ["a", "b", "a", "c", "a"]
        expect(Utils.removerDuplicados(arr)).toEqual(["a", "b", "c"])
    }})

    test("Deve remover duplicados de um array booleano", () => {{
        const arr = [true, false, true, false, false]
        expect(Utils.removerDuplicados(arr)).toEqual([true, false])
    }})

    test("Deve retornar um array vazio se receber um array vazio", () => {{
        expect(Utils.removerDuplicados([])).toEqual([])
    }})
})

describe("Testes da função capitalizar string", () => {
    test("Deve capitalizar um string em lower case", () => {
        const s = "bom dia"
        expect(Utils.capitalizarString(s)).toBe("Bom Dia")
    })
})