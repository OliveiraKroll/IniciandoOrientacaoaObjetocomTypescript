import { Livro } from "./Livro";
import * as rl from "readline-sync"

const titulo = rl.question("Digite o título do livro:");
const autor = rl.question("Digite o autor do livro: ")
const ano = rl.questionInt("Digite o ano do livro: ");

const novoLivro = new Livro(titulo, autor, ano);

novoLivro.obterDetalhes();