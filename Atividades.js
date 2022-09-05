/* //   ATIVIDADE S6 - 02


//const listDepartment = [
{
    departamentName: 'Financial',
        employees:
    [
        {
            name: 'Rose',
            age: 26,
            responsibility: 'Financial director',
            salary: 5600
        },
        {
            name: 'Stevem',
            age: 32,
            responsibility: 'Financial manager',
            salary: 4200
        },
        {
            name: 'Beca',
            age: 26,
            responsibility: 'Financial analyst',
            salary: 2800
        }
    ],
        working: true
},
{
    departamentName: 'expedition',
        employees:
    [
        {
            name: 'Rooper',
            age: 35,
            responsibility: 'Expedition director',
            salary: 5600
        },
        {
            name: 'Maggie',
            age: 22,
            responsibility: 'Expedition manager',
            salary: 4200
        },
        {
            name: 'Thompson',
            age: 41,
            responsibility: 'Expedition analyst',
            salary: 2800
        }
    ],
        working: true
},
{
    departamentName: 'capitation',
        employees:
    [
        {
            name: 'Saory',
            age: 35,
            responsibility: 'Capitation director',
            salary: 5600
        },
        {
            name: 'Silvia',
            age: 22,
            responsibility: 'Capitation manager',
            salary: 4200
        },
        {
            name: 'Sonem',
            age: 41,
            responsibility: 'Capitation analyst',
            salary: 2800
        },
        {
            name: 'Havi',
            age: 41,
            responsibility: 'Trainee Capitation manager',
            salary: 1500
        },
        {
            name: 'Margie',
            age: 25,
            responsibility: 'Capitation analyst',
            salary: 2800
        },
        {
            name: 'Victoria',
            age: 18,
            responsibility: 'Trainee Capitation analyst',
            salary: 1500
        }
    ],
        working: true
},
] */



function howManyDepartments(list) {
    let quantidadeDeDepartamentos = 0

    for (let i = 0; i < list.length; i++) {
        let elementoAtual = list[i];
        console.log(elementoAtual)
        quantidadeDeDepartamentos += i
    }

    return `A quantidade de departamentos da empresa ${quantidadeDeDepartamentos}.`
}
//console.log(howManyDepartments(listDepartment))


function changeDepartamentName(list, antigoDepartamento) {

    for (let i = 0; i < list.length; i++) {
        let elemento = list[i];
        //console.log(elemento)

        if (elemento.departamentName == antigoDepartamento) {
            elemento.departamentName = 'Financeiro'
            return elemento
        } else {
            return "Departament not found"
        }
    }
}

//console.log(changeDepartamentName(listDepartment, 'Financial'))

function giveTheDepartamentABreak(list) {
    let resultado = []
    for (let i = 0; i < list.length; i++) {
        let element = list[i];
        //console.log(element)
        resultado.push(element)
        if (element.working == true) {

            element.working = false



        } else {
            element.working = true

        }

    }
    return resultado



}
//console.log(giveTheDepartamentABreak(listDepartment))

function insertNewDepartament(obj) {
    listDepartment.push(obj)
    return listDepartment
}
//console.log(insertNewDepartament({ departamentName: 'Marketing', employees: [], working: true }))


const listDepartment = [
    {
        departamentName: 'Financial',
        employees:
            [
                {
                    name: 'Rose',
                    age: 26,
                    responsibility: 'Financial director',
                    salary: 5600
                },
                {
                    name: 'Stevem',
                    age: 32,
                    responsibility: 'Financial manager',
                    salary: 4200
                },
                {
                    name: 'Beca',
                    age: 26,
                    responsibility: 'Financial analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departamentName: 'expedition',
        employees:
            [
                {
                    name: 'Rooper',
                    age: 35,
                    responsibility: 'Expedition director',
                    salary: 5600
                },
                {
                    name: 'Maggie',
                    age: 22,
                    responsibility: 'Expedition manager',
                    salary: 4200
                },
                {
                    name: 'Thompson',
                    age: 41,
                    responsibility: 'Expedition analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departamentName: 'capitation',
        employees:
            [
                {
                    name: 'Saory',
                    age: 35,
                    responsibility: 'Capitation director',
                    salary: 5600
                },
                {
                    name: 'Silvia',
                    age: 22,
                    responsibility: 'Capitation manager',
                    salary: 4200
                },
                {
                    name: 'Sonem',
                    age: 41,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Havi',
                    age: 41,
                    responsibility: 'Trainee Capitation manager',
                    salary: 1500
                },
                {
                    name: 'Margie',
                    age: 25,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Victoria',
                    age: 18,
                    responsibility: 'Trainee Capitation analyst',
                    salary: 1500
                }
            ],
        working: true
    },
]


function inserNewEmployeeInDepartament(nomeDoDepartamento, novoFuncionario) {
    for (let i = 0; i < listDepartment.length; i++) {
        let element = listDepartment[i];
        //console.log(element.departamentName)
        //Como acessar o uma propriedade de um Obj tendo como referencial outra propriedade?
        if (element.departamentName == nomeDoDepartamento) {
            element.employees.push(novoFuncionario)
            return listDepartment
        }
    }
    return 'Departament not found'
}
//inserNewEmployeeInDepartament('capitation', { name: 'Rosemary', age: 44, responsibility: 'Financial expedition director', salary: 15600 })


function howManyEmployeesInDepartament(departament) {

    let resultado = 0
    for (let i = 0; i < listDepartment.length; i++) {
        let element = listDepartment[i];
        //console.log(element)
        if (element.departamentName == departament) {
            for (let i = 0; i < element.employees.length; i++) {
                const elementoDoObj = i + 1;
                //console.log(elementoDoObj)
                resultado = elementoDoObj

            }
            return resultado
        }
    }
    return 'Departament not found'
}
//console.log(howManyEmployeesInDepartament('expedition'))

function departamentPayrollCalculation(nameDepartament) {
    let somaSalario = 0

    for (let i = 0; i < listDepartment.length; i++) {
        let element = listDepartment[i];
        //console.log(element)

        if (element.departamentName == nameDepartament) {
            let departamentos = element.employees

            //console.log(departamentos)

            for (let j = 0; j < departamentos.length; j++) {
                let cadaDepartamento = departamentos[j];
                //console.log(cadaDepartamento)
                let salarios = cadaDepartamento.salary

                //console.log(salarios)

                somaSalario += salarios

            }
            return somaSalario

        }
    }
    return 'Departament not found'

}
departamentPayrollCalculation('capitation')


function isTheDepartamentYoungOrOld(parametro) {
    let soma = 0
    let divisor = 0

    for (let i = 0; i < listDepartment.length; i++) {
        let elemento = listDepartment[i];



        if (elemento.departamentName == parametro) {

            let employess = elemento.employees

            for (let j = 0; j < employess.length; j++) {
                let cadaEmployess = employess[j];

                let idades = cadaEmployess.age
                soma += idades
                divisor += j






            }
            let mediaFinal = (soma / divisor).toFixed(2)

            return `A media das idades do departamento ${parametro} é de ${mediaFinal} anos`

        }

    }
    return 'Departament not found'

}
isTheDepartamentYoungOrOld('expedition')


function departamentAverageSalary(departamento) {
    let soma = 0
    let divisor = 0
    for (let i = 0; i < listDepartment.length; i++) {
        let elemento = listDepartment[i];
        if (elemento.departamentName == departamento) {
            let departamentos = elemento.employees
            //console.log(departamentos)
            for (let j = 0; j < departamentos.length; j++) {
                let cadaDepartamento = departamentos[j];
                let salarios = cadaDepartamento.salary
                //console.log(salarios)
                soma += salarios
                divisor = j + 1
            }
            let media = (soma / divisor).toFixed(2)
            return `A media salarial do departamento ${departamento} é de R$ ${media}`
        }
    }
    return `Departament not found`
}
departamentAverageSalary('capitation')

function departamentSituation(departamentNome, maximumPayrollAmount, MaximumAmountOfEmployees) {

    /* let somaSalarios = departamentPayrollCalculation(departamentNome)
    let somaFuncionarios = howManyEmployeesInDepartament(departamentNome)

    departamentPayrollCalculation(departamentNome)
    howManyEmployeesInDepartament(departamentNome)
   
    if (maximumPayrollAmount < somaSalarios && MaximumAmountOfEmployees < somaFuncionarios) {
        return 'The department is healthy'
    } else {
        return 'The department needs attention'
    } */

    let somaSalarios = 0
    let somaFuncionarios = 0
    for (let i = 0; i < listDepartment.length; i++) {
        let element = listDepartment[i];
        //console.log(element)
        if (element.departamentName == departamentNome) {
            let cadaDepartamento = element.employees
            //console.log(cadaDepartamento)

            for (let j = 0; j < cadaDepartamento.length; j++) {
                let elementoDoArrayEmployess = cadaDepartamento[j];
                let salariosDepartamento = elementoDoArrayEmployess.salary

                somaSalarios += salariosDepartamento

                somaFuncionarios = j + 1

            }

            if (maximumPayrollAmount < somaSalarios && MaximumAmountOfEmployees < somaFuncionarios) {
                return 'The department is healthy'
            } else {
                return 'The department needs attention'
            }

        }
    }

    return 'Departament not found'

}


(departamentSituation('Financial', 200, 2))


//                  ATIVIDADE S6 - 03

/* let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
} */


//    -----> Exercicio 01

function qualIdade(params) {

    let anoDeNascimento = params.anoNascimento
    let idade = 2022 - anoDeNascimento
    return idade

}
//qualIdade(pessoa)

//    -----> Exercicio 02

function normalizaDado(obj) {
    let nome = obj.nome
    let nomeAtual = nome[0].toUpperCase() + nome.substring(1)
    return nomeAtual
}
//normalizaDado(pessoa)

//    -----> Exercicio 03

function criandoListaDeUsuarios(obj) {

    let usuario = obj.nomeDeUsuario
    let minuscula = usuario.toLowerCase()

    obj.nomeDeUsuario = minuscula

    let listaDeUsuarios = []

    listaDeUsuarios.push(obj)
    return listaDeUsuarios

}
//(criandoListaDeUsuarios(pessoa))

//    -----> Exercicio 04

function vale(obj) {
    let valorDoLitro = 6.99
    let novoValeCombustivel = 0
    if (obj.temCarro == true) {
        let distTRabalho = obj.distanciaDoTrabalho
        let novaDistancia = distTRabalho.replace('km', '')

        novoValeCombustivel = (novaDistancia * valorDoLitro) * 0.7
        let novoValeCombustivelStr = novoValeCombustivel.toString()

        obj.valeCombustivel = novoValeCombustivelStr

        return `R$ ${novoValeCombustivelStr}`

    } else {
        return `Voce nao tem vale desconto`
    }
}
//vale(pessoa)

let endereco = {
    cidade: 'Curitiba',
    logradouro: 'Rua Dali',
    numero: 10,
    tipo: []
}


//    -----> Exercicio 05


function adicionarTipo(obj) {
    obj.tipo.push('Casa')
    return obj
}
adicionarTipo(endereco)

//    -----> Exercicio 06

function adicionarEnderecoEmPessoa(obj1, obj2) {
    obj1.endereco.push(obj2)
    return obj1
}
//adicionarEnderecoEmPessoa(pessoa, endereco)


//                  ATIVIDADE S6 - 04

const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 'R$ 6.799,33'
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 'R$ 12.199,13'
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 'R$ 11.099,11'
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 'R$ 14.578,25'
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 'R$ 28.399,13'
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 'R$ 14.350,45'
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 'R$ 22.109,21'
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 'R$ 15.999,13'
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 'R$ 17.251,36'
    }
]


//    -----> Exercicio 01

function contaCarro(obj) {
    let resultado = 0
    for (let i = 0; i <= obj.length; i++) {
        let elemento = i;

        resultado = elemento

    }
    return `Tem ${resultado} carros`

}
contaCarro(carros)

//    -----> Exercicio 02

function precoTotal(obj) {
    let soma = 0

    for (let i = 0; i < obj.length; i++) {
        let elemento = obj[i];
        let precoCarro = (elemento.preco).replace('R$', '')
        let novoPrecoCarro = precoCarro.replace(/\,/g, '')
        //Pq está dando Nan se já converti em number?
        let precoCarroNumber = parseFloat(novoPrecoCarro)


        soma += precoCarroNumber
    }

    let novaSoma = soma.toString()
    return novaSoma
}
precoTotal(carros)


//    -----> Exercicio 03

function filtraPorMarca(obj, marca) {
    let veiculos = ''

    for (let key in obj) {

        let elementoCarro = obj[key];
        //console.log(elementoCarro)

        if (elementoCarro.marca == marca) {
            let modelosElemento = elementoCarro.modelo
            veiculos += `${modelosElemento}, `
        }
    }


    return veiculos

}
filtraPorMarca(carros, 'Chevrolet')



//                  ATIVIDADE S6 - 08
let novoContato = {
    nome: 'Stephanie',
    anoDeNascimento: 2000,
    cidade: 'Atibaia'
}

let pessoa = {

    novaPessoa: {},

    criarPessoa: function (nome, anoDeNascimento, cidade) {
        //let novaPessoa = []

        let pessoaObj = {
            nome,
            anoDeNascimento,
            cidade
        }

        this.novaPessoa = pessoaObj

        return this.novaPessoa
    },

    apresentar: function (nome, anoDeNascimento, cidade) {

        return `${nome} possui ${2022 - anoDeNascimento} anos de idade e atualmente mora em ${cidade}`

    }


}
/* console.log(pessoa.criarPessoa('Stephanie', 2000, 'Atibaia'))
console.log(pessoa.apresentar('Stephanie', 2000, 'Atibaia')) */


let elevador = {
    andarAtual: 5,
    totalDeAndares: 5,
    capacidadeDoElevador: 5,
    ocuopacaoAtual: parseInt(10),

}


/* function entrarElevador(obj) {

    obj.ocuopacaoAtual = 

    if (obj.ocuopacaoAtual > obj.capacidadeDoElevador) {
        return "Elevador lotado"
    } else {
        return `Ocupação atual em: ${obj.ocuopacaoAtual}`

    }

}
entrarElevador(elevador) */


let modoElevador = {

    entrar: function (obj) {

        ocupacaoAtual = obj.ocuopacaoAtual

        if (obj.ocuopacaoAtual > obj.capacidadeDoElevador) {
            return "Elevador lotado"
        } else {
            return `Ocupação atual em: ${obj.ocuopacaoAtual}`

        }
    },


    sair: function (obj) {
        let decremento = obj.ocuopacaoAtual - 1

        return `Ocupação atual em: ${decremento}`

    },

    subir: function (obj) {
        let incremento = obj.andarAtual + 1

        if (incremento > obj.totalDeAndares) {
            return 'Erro'

        } else {
            return `Estamos no andar: ${incremento}`
        }

        //incremento > obj.capacidadeDoElevador ? 'Erro' : `Estamos no andar: ${obj.andarAtual}
    },

    descer: function (obj) {
        let andar = obj.andarAtual - 5
        if (andar == 0) {
            return `Estamos no terreo`

        } else {
            return `Estamos no andar ${andar}`
        }

    },
}
//console.log(modoElevador.descer(elevador))

let slenzie = {
    novoFormulario: {},

    createEvent: function (obj, nameEvent) {
        obj.nameEvent = nameEvent
        let nomeDoEvento = obj.nameEvent
        if (nomeDoEvento == typeof (String)) {
        } else if (nomeDoEvento.length > 5) {
            return obj
        } else {
            return "The input value is invalid"
        }
    },
    addQuestion: function (obj, questao) {
        obj.questions.push(questao)
        let novaQuestao = obj.questions
        console.log(novaQuestao)
        if (questao.user == "") {
            return "The user can't be empty"
        } else if (questao.userQuestion == "") {
            return "The question can't be null"
        } else {
            return questao
        }
    },
    addVoteToQuestion: function (valor, obj) {

        obj.question.vote = valor
        let novoValor = obj.question.vote

        if (novoValor < 0 || novoValor !== parseInt(novoValor)) {
            return "The value is not allowed"

        } else {
            return "Vote registered successfully"
        }
    }

}


let slenzie1 = {
    nameEvent: '',
    questions: [],
    question: {
        user: '',
        userQuestion: '',
        vote: 0
    }
}

/* let question = {
    user: 'Antonio',
    userQuestion: 'dfasd',
    vote: parseInt(98839.343)
} */
//console.log(slenzie.addVoteToQuestion(5, slenzie1))



//                  ATIVIDADE S6 - 10

let agenda = {
    nome: '',
    contato: [],
    adicionar: function (obj) {


        /*  if (agenda.contato.includes(obj.Telefone)) {
 
             return "Numero de telefone já existente na lista"
 
         } */
        // agenda.contato.push(obj)
        let existe = false
        agenda.contato.forEach(element => {

            if (element.Telefone == obj.Telefone) {
                existe = true


            }



        });
        if (existe) {

            return "Numero de telefone já existente na lista"

        } else {
            agenda.contato.push(obj)
        }


        /* for (let i = 0; i < this.contato.length; i++) {
            let elemento = this.contato[i];
            //console.log(elemento)

            let telefoneDoObjAgenda = elemento.Telefone //Isolei o telefone do contato

            console.log(telefoneDoObjAgenda)

            //      obj.Telefone --- Isolei o telefone do parametro

            if (obj.Telefone == telefoneDoObjAgenda) {

                return "Numero de telefone já existente na lista"

            } else {

            }
 */

    }



    ,
    listarContatos: function (obj) {
        for (let i = 0; i < this.contato.length; i++) {
            let elemento = this.contato[i];
            let nameContato = (elemento.nome)
            let telContato = (elemento.Telefone)
            console.log(`Nome: ${nameContato}, Telefone:${telContato}`)
        }



    },
    pesquisarContato: function (nome) {

        for (let i = 0; i < this.contato.length; i++) {
            let elemento = this.contato[i];
            let nomeObj = elemento.nome
            if (nomeObj == nome) {

                return this.contato
            } else {
                return 'Contato nao encontrado'
            }
        }
    },

    editarContato: function (posicao, nome, telefone) {

        this.contato[posicao] = { nome, telefone }

        return this.contato
    }

}

agenda.adicionar({ nome: 'Antonio', Telefone: 434545 })
console.log(agenda.adicionar({ nome: 'jose', Telefone: 434545 }))

//console.log(agenda.contato)

//agenda.listarContatos()

//agenda.pesquisarContato('Anton')

//agenda.editarContato(3, 'Garbim', 90909)


function arr(par) {

    let resultado = []

    for (let i = 0; i < par; i++) {
        let elemento = i
        console.log(elemento)
        resultado.push(elemento)

    }
    return resultado

}

function sum(numbers) {
    let soma = 0

    for (let i = 0; i < numbers.length; i++) {
        let elemento = numbers[i];
        soma += elemento

    }
    return soma


};
(sum([]))

function getCount(str) {

    soma = ''

    for (let i = 0; i < str.length; i++) {
        let elemento = str[i];
        if (elemento == 'a' || elemento == 'e' || elemento == 'i' || elemento == 'o' || elemento == 'u') {
            soma += elemento
        }


    }

    return soma.length

}
getCount('abracadabra')

function fixTheMeerkat(arr) {
    //your code here 
}

function squareOrSquareRoot(array) {
    let resultado = []
    for (let i = 0; i < array.length; i++) {
        let elemento = array[i];
        //console.log(elemento)
        let raiz = Math.sqrt(elemento)
        //console.log(raiz)
        if (raiz % 1 == 0) {
            resultado.push(raiz)

            //console.log(raiz)
        } else {
            let potencia = elemento * elemento

            resultado.push(potencia)
        }

    }
    return resultado

}

//console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))








//                  ATIVIDADE S6 - 13

/*

let titulo = document.querySelector('h1')

//console.log(titulo)


let titleId = document.getElementById('title')
//console.log(titleId)

let primeiroElementClass = document.querySelector('.titleOne') */



//                  ATIVIDADE S6 - 15

//          Criando a tag

/* let p = document.createElement('p')

//          Colocando valores na tag

p.innerText = 'Qualquer texto para teste'
console.log(p)

//          Atribuindo ao pai o filho

document.querySelector('body').appendChild(p)

//    Criando uma tag input

let input = document.createElement('input')

//      Colocando um placeholder no input

input.placeholder = 'Escreva aqui'


//      Criando um form no html para depois colocar o input

let form = document.createElement('form')

form.appendChild(input) */

//console.log(form)


//          PRIMEIRO PASSO = CRIAR ELEMENTOS

/* let article = document.createElement('article')
let articleH1 = document.createElement('h1')
let articleP = document.createElement('p')
let articleA = document.createElement('a')

//          SEGUNDO PASSO = ATRIBUINDO VALORES

articleH1.innerText = 'Titulo do post'
articleP.innerText = 'Descrição do post'
articleA.innerText = 'Ver post completo'


//          TERCEIRO PASSO = ATRIBUINDO AO PAI OS FILHOS

document.querySelector('body').appendChild(article)
article.appendChild(articleH1)
article.appendChild(articleP)
article.appendChild(articleA)

console.log(article) */


//                  ATIVIDADE S6 - 16


// 1 PASSO :  CRIAR LI 

// 2 PASSO : ATRIBUIR TEXTO A LI

// 3 PASSO :  ATRIBUIR AO PAI OS FILHOS

// **** DEVE USAR FUNÇÕES

let listaDeFrutas = ['banana', 'caqui', 'maca', 'jamelao', 'abobora']


//PEGAR ESSE ARRAY EM COLOCAR NO HTML



// FUNCAO PARA CRIAR A LI (1 PASSO) E 2 PASSO
function criarLi(fruta) {

    let li = document.createElement('li')
    //O que vai estar escrito nessa LI?
    li.innerText = fruta

    return li

}

// FUNCAO PARA CHAMAR UL, FAZER TEMPLATE E ATRIBUI AO PAI O FILHO

function listarFruta() {
    let ul = document.querySelector('ul')

    for (let i = 0; i < listaDeFrutas.length; i++) {
        let frutaAtual = listaDeFrutas[i];
        //Fazer o template
        let template = criarLi(frutaAtual)

        ul.appendChild(template)

    }

}

listarFruta()







