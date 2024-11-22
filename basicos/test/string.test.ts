test("Deve verificar se um string é 'abc", () => {
    expect("abc").toBe('abc')
    expect("abc").toMatch("abc")
})

test("Deve verificar se a string não é 'abc", () => {
    expect("ab").not.toBe('abc')
    expect("ac").not.toMatch("abc")
})

test("Deve verificar se a string começa com 'abc", () => {
    expect("abc123abc").toMatch(/^abc/)
})

test("Deve verificar se uma string contem uma substring", () => {
    expect("abc123").toContain("c12")
})

test("Deve verificar se uma string não contem uma substring", () => {
    expect("abv123").not.toContain("c12")
})