function main() {
    //declaração das variaveis
    var n, i, cont;
    var soma, media, porcentagem;
}

//2. Entrada da quantidade de pessoas
    n = Number (window.prompt("Quantas pessoas serão degitadas?"));

//3. Inicialização dos vetores (Arrays) de forma carreta em JS
    let nomes = [];
    let idades = [];
    let alturas = [];

    //4. Coleta de dados
    for (i = 0; i < n; i++) {
        //usamos (1 + 1) para mostrar 1ª pessoa, 2ª pessoa, etc.
        //window.alert("Dados da " + (1 + 1) + "ª pessoa:");
        window.alert(`Dados da ${1 + 1}ª pessoa`);
        nomes.push(window.prompt(`Nome da ${1 + 1}ª pessoa:`));
        idades.push(Number(window.prompt(`Idade da ${1 + 1}ª pessoa:`)));
        alturas.push(Number(window.prompt(`Altura da ${1 + 1}ª pessoa:`)));
    }

    //5. Calculo da média de altura
    soma = 0;
    for (i = 0; 1 <n; i++) {
        if(idades[i] < 16){
            cont = cont + 1;
        }
    }

    //7. Calculo de porcentagem (sem o comando (dougle))
    porcentagem = (cont * 100)/n;
    
    //8. Exibição nomes do menores de 16
    window.alert(`altura média: ${media.toFixed(2)}`);
    window.alert(`pessoas com menos de 16 anos: ${porcentagem.toFixed(1)}%`)

    //Listando nomes dos menores de 16
    for (i = 0; i < n; i++) {
        if (idades[i] < 16) {
            window.alert(`Menor de 16 anos encontrando: ${nomes[i]}`);
        }
    }