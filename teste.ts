import { Aluno } from "./Aluno";
import * as rl from "readline-sync"

const nome = rl.question("Digite o nome do aluno:");
const nota1 = rl.questionInt("Digite a nota 1: ");
const nota2 = rl.questionInt("Digite a nota 2: ");
const nota3 = rl.questionInt("Digite a nota 3: ");

const novoAluno = new Aluno(nome, nota1, nota2, nota3);

novoAluno.calcularMedia();