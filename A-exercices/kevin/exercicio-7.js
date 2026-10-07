const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 6 },
    { nome: "Carla", nota: 10 }
];

alunos.forEach(function(aluno) {
    console.log(aluno.nome + ": " + aluno.nota);
});

let soma = 0;

alunos.forEach(function(aluno) {
    soma = soma + aluno.nota;
});

let media = soma / alunos.length;

console.log("Média da turma: " + media);

let carla = alunos.find(function(aluno) {
    return aluno.nome == "Carla";
});

console.log("Nota da Carla: " + carla.nota);
