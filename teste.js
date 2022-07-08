
const cachorros = require('./database/cachorros.json');


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

	let novoArrayCachorros = cachorros.filter((item)=>item.id != id)
	console.table(novoArrayCachorros)

}
let pegarDiaAtual = ()=>{

    let data = new Date();

    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() +1).padStart(2, '0');
    let ano = data.getFullYear();

    return dataAtual = dia + '-' + mes + '-' + ano;


}
const HOJE =  pegarDiaAtual()
console.log(HOJE)