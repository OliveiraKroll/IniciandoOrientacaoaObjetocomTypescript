"use strict";
// Crie uma classe chamada "Livro" com as propriedades título, autor e anoPublicacao. 
// Adicione um método chamado "obterDetalhes" que retorna uma string com todas as informações do livro. 
// Em seguida, crie uma instância da classe e chame o método "obterDetalhes".
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    Livro.prototype.obterDetalhes = function () {
        console.log("Titulo: ", this.titulo, "\nAutor: ", this.autor, "\nAno: ", this.ano);
    };
    return Livro;
}());
exports.Livro = Livro;
