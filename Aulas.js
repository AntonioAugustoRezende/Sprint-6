//                        SEGUNDA

//        ===> S6 - 01 -    AVANÇANDO COM FUNÇÕES E OBJETOS


function createPerson(name) {

    let person = {
        name: name || 'Person',
        age: 18,
        status: 'Spare'
    }

    return person

}
//console.log(createPerson('Joao'))



let person = {
    name: 'Person',
    age: 18,
    status: 'Spare'
}

//Como a function alterName vai acessar o obj person que está dentro 
// da function createPerson?

function alterName(newName, person) {
    person.name = newName;
}

function alterStatus(person) {
    //          If e else Ternário

    // person.status é igual a 'Busy' ? Se true, person.status = 'spare', se não person.status = 'busy'
    person.status == 'Busy' ? person.status = 'spare' : person.status = 'busy'

}

alterName('Antonio', person)
//console.log(person)

alterStatus(person)
//console.log(person)


//                      TERÇA

//         ===>  S6 - 07 - METODOS DE UM OBJETO


//   01) O que são metodos?

// São rotinas dentro de um objeto. O que essa propriedade faz? É um metodo
// O que essa propriedade do objeto tem? propriedade do objeto sem metodo

//   02) Metodos são diferentes de funções

//  03) Metodos dependem do objeto


//Exemplo

let caculador = {

    somar: function (num1, num2) {
        return num1 + num2
    },
    subtrair: function (num1, num2) {
        return num1 - num2
    },
    multioplicar: function (num1, num2) {
        return num1 * num2
    }

}
//          Sintaxe para chamar o metodos de um objeto
caculador.multioplicar(5, 8)





//        ===> S6 - 14 -    CRIANDO ELEMENTOS COM O DOM


//                  CRIANDO AS TAGS EM MEU HTML COM .createElement('tag')


let article = document.createElement('article')
let articleTitulo = document.createElement('h2')
let articleTexto = document.createElement('p')
let articleBotao = document.createElement('button')

//                 INSERINDO TEXTO EM MINHA TAG COM     elementoQueVaiReceberOTexto.innerText = 'texto'


articleTitulo.innerText = 'Como criar elementos HTML de forma dinamica, utlizando JS'

articleTexto.innerText = 'Nesse post vamos aprender como criar elementos utilizando utizando o DOM'

articleBotao.innerText = 'Acessar conteúdo'


//                  DEFINIR A HIERARQUIA DOS ELEMENTO COM elementoPai.appendChild(elementoFilho)

document.querySelector('body').appendChild(article)

article.appendChild(articleTitulo)
article.appendChild(articleTexto)
article.appendChild(articleBotao)



