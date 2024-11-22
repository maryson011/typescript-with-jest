test("Deve verificar se dois arrays são iguais", () => {
    const array1 = [1,2,3]
    const array2 = [1,2,3]
    expect(array1).toEqual(array2)
})

test("Deve verificar se dois arrays são iguais de forma estrita", () => {
    const array1 = [1,2,3]
    const array2 = [1,2,3]
    expect(array1).toStrictEqual(array2)
})

test("Deve verificar se um array tem um valor especifico", () => {
    const arr = ['banana', 'laranja', 'maçã']
    expect(arr).toContain("banana")
})

test("Deve verificar o comprimento do array", () => {
    const arr = [1,2,4]
    expect(arr.length).toBe(3)
    expect(arr).toHaveLength(3)
})

test("Deve verificar se um objeto esta presente em um array", () => {
    const obj = {nome: 'Aline', idade: 30}
    const arr = [obj]
    expect(arr).toContainEqual(obj)
})