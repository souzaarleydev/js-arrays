const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
        const indice = lista[0].indexOf(aluno);
        const mediaDoAluno = lista[1][indice];
        console.log(`${aluno} tem a média ${mediaDoAluno}`);
    } else {    
        console.log('Aluno não encontrado');
    }
}

exibeNomeENota('João')
exibeNomeENota('Carlos')