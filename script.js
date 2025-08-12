//Função que vai calcular a quantidade
function calcular() {
    let convidados = parseInt(document.getElementById('convidados').value);

    //Validador de entrada. Aceitar apenas número inteiro
    if (isNaN(convidados) || convidados <0) {
        document.getElementById('resultado').style.display = 'block';
        document.getElementById('resultado').innerHTML = "<p style='color:red;'>Digite um número válido! Sendo ele inteiro!</p>";
        return;
    }

    //Consumo médio por pessoa
    let salgadosPorPessoa = 12;
    let docesPorPessoa = 6;
    let boloPessoa   = 100; // por gramas
    let aguaPorPessoa = 200; // por ml
    let bebidaPorPessoa = 600; //por ml 


    //Calculo
    let totalSalgados = convidados * salgadosPorPessoa;
    let totalDoces = convidados * docesPorPessoa;
    let boloTotal = (convidados * boloPessoa) / 1000;
    let aguaTotal = (convidados * aguaPorPessoa) / 1000;
    let bebidasTotal = (convidados * bebidaPorPessoa) / 1000;

    document.getElementById('resultado').style.display = 'block';
    //Resultado dos valores (imprimir tela)
    document.getElementById('resultado').innerHTML = `
        <h3>Quantidade para ${convidados} pessoa:</h3>
        <ul>
            <li>Salgados: ${totalSalgados} unidades</li>
            <li>Doces: ${totalDoces} unidades</li>
            <li>Bolo: ${boloTotal.toFixed(1)} kg</li>
            <li>Água: ${aguaTotal.toFixed(1)} litros</li>
            <li>Bebidas não alcoolicas: ${bebidasTotal.toFixed(1)} litros</li>
        
        </ul>

    `;
}   

