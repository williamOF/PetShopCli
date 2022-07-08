const fs = require('fs')
const cachorros = require('./database/cachorros.json');
const path = require('path')

//console.table(cachorros)

function salvar(){

    let caminho = path.resolve(__dirname+'/./database/cachorros.json')
    let novosDados = JSON.stringify(cachorros,null,4)
    
    fs.writeFileSync(caminho,novosDados)
}

function buscar(id){

    let toFind =(proucurar)=>{
        if(proucurar.id == id){
            return true
        }else {
            return false
        }
    }
   return cachorros.find(toFind)
}

let remover = (id)=>{

	petEcontrado = buscar(id)

    for(let i in cachorros){
        if(cachorros[i].id == id){
           let novoArr =  cachorros.splice(i,i)
           console.log(novoArr)
            salvar()
        }
    }

}

remover(process.argv[2])
