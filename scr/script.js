function calcularIdade() {
    let anoNascimento = parseInt(document.getElementById("anoNascimento").value);
    let mesNascimento = parseInt(document.getElementById("mesNascimento").value);
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let mesAtual = dataAtual.getMonth() + 1; 
    let diaAtual = dataAtual.getDate();

    if (anoNascimento > anoAtual || (anoNascimento === anoAtual && mesNascimento > mesAtual)) {
        document.getElementById("resultado").innerHTML = "Data de nascimento inválida";
        return;
    }

    let idade = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < 1)) {
        idade--;
    }

    console.log(idade);
    document.getElementById("resultado").innerHTML = `Idade é: ${idade}`;
}
