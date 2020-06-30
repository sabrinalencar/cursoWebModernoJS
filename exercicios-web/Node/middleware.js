// middleware pattern (chain of responsability)
// (requisicao, resposta, next)

const passo0 = (ctx, next) => {
    ctx.passo0 = 'Valor 0'
    next()
}
const passo1 = (ctx, next) => {
    ctx.passo1 = 'Valor 1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.passo2 = 'Valor 2'
    next()
}

const passo3 = (ctx, next) => {
    ctx.passo3 = 'Valor 3'
    next()
}

const exec = (ctx, ...middlewares)=> {
    const execPassos = (i) => {
        middlewares && i < middlewares.length &&
        middlewares[i](ctx, () => execPassos(i + 1))
    }
    execPassos(0)
}
// middlewares[0]() = passo1()
// middlewares[1]() = passo2()
// middlewares[2]() = passo3()

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)