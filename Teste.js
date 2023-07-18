"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Livro_1 = require("./Livro");
var rl = require("readline-sync");
var titulo = rl.question("Digite o título do livro:");
var autor = rl.question("Digite o autor do livro: ");
var ano = rl.question("Digite o ano do livro: ");
var novoLivro = new Livro_1.Livro(titulo, autor, ano);
novoLivro.obterDetalhes();
