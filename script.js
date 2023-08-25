let nomes = [];
let profissoes = [];
let nome = document.getElementById("nome");
let prof = document.getElementById("profissao");

function adc(){
    let pos = nomes.indexOf(nome.value.toLowerCase());
    if(pos == -1){
        nomes.push(nome.value.toLowerCase());
        profissoes.push(prof.value.toLowerCase());
        console.log(nomes, profissoes);
        alert("Registro adicionado com sucesso!")
    } else{
        console.log("O nome "+nome+" já está cadastrado!");
        alert("O nome "+nome+" já está cadastrado!");
    }
}

function rmv(){
    let pos = nomes.indexOf(nome.value.toLowerCase());
    if(pos !== -1){
        nomes.splice(pos,1);
        profissoes.splice(pos,1);
        alert("Registro removido com sucesso!")
    }else{
        console.log("O nome "+nome.value+" não foi encontrado")
        alert("O nome "+nome.value+" não foi encontrado");
    }
    console.log(nomes, profissoes);
}
