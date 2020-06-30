const fileSystem = require('fs')

const caminho = __dirname + '/arquivo.json'

// síncrono... (não recomendado para arquivos grandes pois vai ler o arquivo todo e travar o eventLoop)
const conteudo = fileSystem.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assíncrono...
fileSystem.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

// Usando require e recebendo o arquivo já convertido pra objeto
const config = require('./arquivo.json')
console.log(config.db)

// leitura de pasta 
// __dirname -> diretorio atual
fileSystem.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdos da pasta...')
    console.log(arquivos)
})