// Crie uma classe chamada "Livro" com as propriedades título, autor e anoPublicacao. 
// Adicione um método chamado "obterDetalhes" que retorna uma string com todas as informações do livro. 
// Em seguida, crie uma instância da classe e chame o método "obterDetalhes".

export class Livro {
    titulo: String;
    autor: String;
    ano: number;

    constructor(titulo: String, autor: String, ano: number){
        this.titulo = titulo;
        this.autor = autor
        this.ano = ano;
    }
    
    obterDetalhes(): void {
        console.log("Titulo: ",this.titulo, "\nAutor: ", this.autor, "\nAno: ", this.ano)
    }

}