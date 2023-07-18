"use strict";
// Crie uma classe chamada "Aluno" com as propriedades nome e notas (array de números). 
// Adicione um método chamado "calcularMedia" que calcula e retorna a média das notas do aluno, 
// serão no total três notas. 
// Em seguida, crie uma instância da classe, adicione as três notas e imprima a média.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(nome, nota1, nota2, nota3) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.media = (nota1 + nota2 + nota3) / 3;
    }
    Aluno.prototype.calcularMedia = function () {
        console.log("Nome: ", this.nome, "\nNota 1: ", this.nota1, "\nNota 2: ", this.nota2, "\nNota 3: ", this.nota3, "\nMedia: ", this.media);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
