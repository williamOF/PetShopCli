const cachorros = require('./database/cachorros.json')



  function descrever (){
    

    var descreverPet = cachorros.map(function(item){
    return{
            nome: item.nome,
            castrado: item.castrado,
            dataDeNascimento : item.dataDeNascimento,
            peso : item.peso,
            sexo : item.sexo
    }
    })
    console.table(descreverPet)
  }


  descrever()

  cachorros.ma