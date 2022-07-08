const fs = require('fs')
const cachorros = require('./database/cachorros.json');
const path = require('path')
const data = new Date().toString()
//      PEGANDO A DATA E FORMATANDO ELA PARA USO 
let pegarDiaAtual = ()=>{

    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    return dataAtual = dia + '-' + mes + '-' + ano;

}
//      FUNÇÃO SALVAR ARQUIVOS MODIFICADO EM DATABASE CACHORROS.JSON
function salvar(){

    let caminho = path.resolve(__dirname+'/./database/cachorros.json')
    let novosDados = JSON.stringify(cachorros,null,4)
    
    fs.writeFileSync(caminho,novosDados)
}
//      FUNÇÃO DE BUSCAR ELEMENTOS POR ID INDICADO
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
//          FUNÇÃO LISTAR ELA IMPRIME NA TELA AS INFORMAÇOES DOS PETS CADASTRADOS
let listar = ()=>{
    let descreverPet = cachorros.map(function(item){
        return{
                nome: item.nome,
                castrado: item.castrado,
                dataDeNascimento : item.dataDeNascimento,
                peso : item.peso,
                sexo : item.sexo,
                id : item.id
        }})
        console.table(descreverPet)
}
//          FUNÇÃO QUE DESCREVE UM DETERMINADO PET PASSADO PEO ID
let descrever =(id)=>{

    const PET = buscar(id)

    if(PET != undefined){

        if(PET.sexo == 'm'){
            console.log(`Nome: ${PET.nome} (Macho)`)
        }else{
            console.log(`Nome: ${PET.nome} (Fêmea)`)
        }
      
       console.log(`Data De Nascimento: ${PET.dataDeNascimento}`)
       console.log(`Peso: ${PET.peso}`)
       console.log(`Castrado: ${PET.castrado}\n`)
       
       console.log('Vacinas')
       console.table(PET.vacinas)
       console.log('\nServços')
       console.table(PET.servicos)
    }else{
        console.log(`Não existe cachorro com o id ${id}`)
    }
}
//          FUNÇÃO PARA ADCIONAR NOVOS PETS AO ARRAY CACHORROS   

   let adicionar = (novoPet)=>{
    let idx = cachorros.length+1
    
    let vacinas = []
    let servicos = []
    let novoCodigo =  
    novoPet.id = idx
    novoPet.vacinas = vacinas
    novoPet.servicos = servicos

    cachorros.push(novoPet)
    salvar()
}
//          FUNÇÃO PARA ATRIBUIR UM SERVIÇO DE VACINAÇÃO A UM PET

let vacinar =(id,vacina)=>{

    let petEcontrado = buscar(id)
    const HOJE =  pegarDiaAtual()

    if(petEcontrado !=undefined){
        petEcontrado.vacinas.push(vacina)
        petEcontrado.vacinas.push(HOJE)
        salvar()
    }else{
        console.error('[ERRO] não existe um cachorro com este id:')
    }
}
//          FUNÇÃO PARA ATRIBUIR OUTROS DEMAIS SERVIÇOS OFERECIDOS

let atribuirServico =(id,servicos)=>{

    let petEcontrado = buscar(id) 

    if(petEcontrado !=undefined){
        const HOJE =  pegarDiaAtual()

        petEcontrado.servicos.push(servicos)
        petEcontrado.servicos.push(HOJE)

        salvar()
    }else{
        console.error('[ERRO] não existe um cachorro com este id:')
    }
}
//          FUNÇÃO PARA REMOVER UM PET PASSADO SEU ID

let remover = (id)=>{
	petEcontrado = buscar(id)
    if(petEcontrado = undefined){console.error('[ERRO] Não existe um cachorro com este id cadastrado reveja os dados e tente novamente!')}

    for(let i in cachorros){
        if(cachorros[i].id == id){
           let novoArr =  cachorros.splice(i,i)
            salvar()
        }
    }
}
//             MUDULOS A SEREM EXPORTADOS 
module.exports = {
    salvar          :   salvar,
    buscar          :   buscar,
    listar          :   listar,
    descrever       :   descrever,
    adicionar       :   adicionar,
    vacinar         :   vacinar,
    atribuirServico :   atribuirServico,
    remover : remover
}



