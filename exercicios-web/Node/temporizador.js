const schedule = require('node-schedule')

const temporizador1 = schedule.scheduleJob('*/5 * 16 * * 4', function () {
    console.log('Executando temporizador 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Cancelando temporizador 1')
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 16
regra.second = 30

const temporizador2 = schedule.scheduleJob(regra, function (){
    console.log('Executando temporizador 2', new Date().getSeconds())
})