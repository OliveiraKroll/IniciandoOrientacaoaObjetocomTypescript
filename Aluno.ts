// Crie uma classe chamada "Aluno" com as propriedades nome e notas (array de números). 
// Adicione um método chamado "calcularMedia" que calcula e retorna a média das notas do aluno, 
// serão no total três notas. 
// Em seguida, crie uma instância da classe, adicione as três notas e imprima a média.

export class Aluno {
    nome: String;
    nota1: number;
    nota2: number;
    nota3: number;
    media: number;

    constructor(nome: String, nota1: number, nota2: number, nota3: number){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2
        this.nota3 = nota3;
        this.media = (nota1 + nota2 + nota3) / 3

    }
    
    calcularMedia(): void {
        console.log("Nome: ",this.nome, "\nNota 1: ", this.nota1, "\nNota 2: ", this.nota2, "\nNota 3: ", this.nota3, "\nMedia: ", this.media)
    }

}