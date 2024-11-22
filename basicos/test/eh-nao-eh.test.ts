test("Deve verificar se um valor é outro valor", () => {
    expect(10).toBe(10)
})

test("Deve verificar se um valor não é outro valor", () => {
    expect(10).not.toBe(5)
})

test("Deve verificar se um valor é nulo", () => {
    expect(null).toBeNull()
})

test("Deve verifaicar se um valor não é nulo", () => {
    expect('null').not.toBeNull()
})

test("Deve verificar se um valor está definido", () => {
    expect(3).toBeDefined()
    expect(3).not.toBe(undefined)
    expect(3).not.toBeUndefined()
})

test("Deve verificar se um valor está indefinido", () => {
    expect(undefined).toBe(undefined)
    expect(undefined).toBeUndefined()
})

test("Deve verificar se um valor é falsy", () => {
    // null, undefined, "", NaN, 0, -0
    expect(undefined).toBeFalsy()
    expect(null).toBeFalsy()
    expect("").toBeFalsy()
    expect(NaN).toBeFalsy()
    expect(0).toBeFalsy()
    expect(-0).toBeFalsy()
})

test("Deve verificar se um valor é trufy", () => {
    expect(4).toBeTruthy()
    expect(-13).toBeTruthy()
})