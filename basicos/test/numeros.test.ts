test("Deve verificar se um número é maior que outro", () => {
    expect(10).toBeGreaterThan(5)
})

test("Deve verificar se um valor é maior ou igual a outro", () => {
    expect(10).toBeGreaterThanOrEqual(10)
    expect(10).toBeGreaterThanOrEqual(5)
})

test("Deve verificar se um valor é manor que outro", () => {
    expect(10).toBeLessThan(20)
})

test("Deve verificar se um valor pe menor ou igual a outro", () => {
    expect(10).toBeLessThanOrEqual(20)
    expect(20).toBeLessThanOrEqual(20)
})

test("Deve verificar se um valor é proximo de outro", () => {
    // 0.2222222223 dizima periodica 0.22
    expect(0.222222223).toBeCloseTo(0.22, 2)
})