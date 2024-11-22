function resolvida() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("Dados")
        }, 1000)
    })
}

function rejeitada() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject("Falha")
        },1000)
    })
}


describe("Deve verificar o resultado de uma promise resolvida", () => {

    test("Deve verificar o resultado de uma promise resolvida usando a sintaxe de promise", () => {
        return resolvida().then(resultado=>{
            expect(resultado).toBe("Dados")
        })
    })
    
    test("Deve verificar o resultado de uma promise resolvida usando sintaxe async/await", async () => {
        const resultado = await resolvida()
        expect(resultado).toBe("Dados")
    })
    
    test("Deve verificar o resultado de uma promise resolvida usando resolves", async () => {
        await expect(resolvida()).resolves.toBe("Dados")
    })
})

describe("Deve verificar o resultado de uma promise rejeitada", () => {

    test("usando sintaxe promise", () => {
        return rejeitada().then(resultado=>{
            console.log(resultado)
        }).catch((e) => {
            expect(e).toBe("Falha")
        })
    })
    
    test("usando sintaxe async/await", async () => {
        try{
            await rejeitada()
        } catch (e:any) {
            expect(e).toBe("Falha")
        }
    })
    
    test("usando rejects", async () => {
        await expect(rejeitada()).rejects.toBe("Falha")
    })

    test("Deve testar usando fake timers", async () => {
        jest.useFakeTimers()

        const result = resolvida() // não posso ter o await
        jest.advanceTimersByTime(1000)
        await expect(result).resolves.toBe("Dados")
    })
})