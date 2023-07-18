import { Aluno } from "./alunoArray";
import * as rl from "readline-sync"

const nome = rl.question("Digite o nome do aluno:");
const novoAluno = new Aluno(nome);


const n1 = rl.questionInt("Digite a nota 1: ");
const n2 = rl.questionInt("Digite a nota 2: ");
const n3 = rl.questionInt("Digite a nota 3: ");


novoAluno.adicionarNota(n1);
novoAluno.adicionarNota(n2);
novoAluno.adicionarNota(n3);


console.log("A média do aluno é: ", novoAluno.calcularMedia());

