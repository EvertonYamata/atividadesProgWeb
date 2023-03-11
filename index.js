class Estudante{
    constructor(nome,eMail,RA,curso,disciplinas){
    this.nome = nome
    this.eMail = eMail
    this.RA = RA
    this.curso = curso
    this.disciplinas = disciplinas

    }
}


const aluno1 = new Estudante("mayara","mayara@lima.com",1234567890,"analise e desenvolvimento de sistemas",["programacao WEB","ingles III","sistemas operacionais"])
console.log(aluno1)
const aluno2 = new Estudante("everton","everton.bruno@hoyoyo.com",0987654321,"analise e desenvolvimento de sistemas",["interacao humano computador","sociedade e tecnologia","estrutura de dasos"])

console.log(aluno2)