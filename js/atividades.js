document.querySelector(".exerc1").onclick = function(){
    
    /*Elaborar um sistema que leia dois números e mostre sua soma, subtração, divisão e multiplicação*/
    
    let n1 = parseFloat(prompt("1° número: "));
    let n2 = parseFloat(prompt("2° número: "));
    
    let soma = n1 + n2;
    let sub = n1 - n2;
    let div = n1/n2;
    let mult = n1 * n2;
    
    alert(n1+" + "+n2+" = "+soma
         +"\n"+n1+" - "+n2+" = "+sub
         +"\n"+n1+" / "+n2+" = "+div
         +"\n"+n1+" * "+n2+" = "+mult);
};

document.querySelector(".exerc2").onclick = function(){
    
    /*Elaborar um sistema que receba 3 (três) notas, calcule e mostre a média aritmética entre elas*/
    
    let n1 = parseFloat(prompt("Nota 1:"));
    let n2 = parseFloat(prompt("Nota 2:"));
    let n3 = parseFloat(prompt("Nota 3:"));
    
    let media = (n1 + n2 + n3)/3;
    media = media.toFixed(2);
    alert("Média Aritmética: "+media);
};

document.querySelector(".exerc3").onclick = function(){
    
    /*Elaborar um sistema que receba o nome e o salário de um funcionário, calcule e mostre o nome do funcionário e seu novo salário, sabendo-se que este sofreu um aumento de 15%.*/
    
    let nome = prompt("Nome: ");
    let sal = parseFloat(prompt("Salário: "));
    
    sal = sal + (sal*0.15);
    
    alert("Nome: "+nome
         +"\nNovo Salário: R$"+sal.toFixed(2));
};

document.querySelector(".exerc4").onclick = function(){
   
    /*Elaborar um sistema que receba o salário-base de um funcionário, calcule e mostre o salário a receber, sabendo que esse funcionário tem uma gratificação de 5% sobre o salário-base e paga imposto de 7% sobre o salário-base.*/
    
    let salBase = parseFloat(prompt("Salário Base: "));
    let salReceber = 0.00;
    
    salReceber = salBase + (salBase * 0.05);
    salReceber = salReceber - (salReceber * 0.07);
    
    alert("Salário a receber: R$"+salReceber.toFixed(2));
};

document.querySelector(".exerc5").onclick = function(){
    
    /*Elaborar um sistema que receba 2 números e mostre o maior*/
    
    let n1 = parseFloat(prompt("Número 1:"));
    let n2 = parseFloat(prompt("Número 2:"));
    
    if(n1 > n2){
        alert("Maior: "+n1.toFixed(2));
    }
    else if(n2 > n1){
        alert("Maior: "+n2.toFixed(2)); 
    }
    else{
        alert("Números iguais!");
    }
};

document.querySelector(".exerc6").onclick = function(){
    
    /*Elaborar um sistema que peça ao usuário a quantia em dinheiro que tem sobrando e sugira, caso ele tenha 10 ou mais reais, que vá ao cinema, e se não tiver, fique em casa vendo TV*/
    
    let qtdSobra = parseFloat(prompt("Quantidade Sobrando: "));
    
    if(qtdSobra >= 10.00){
        alert("Vá ao cinema!");
    }
    else{
        alert("Fique em casa");
    }
};

document.querySelector(".exerc7").onclick = function(){
    
    /*Uma empresa decide dar um aumento de 30% aos funcionários com salários inferiores a R$ 600,00. Faça um sistema que receba o salário do funcionário e mostre o valor do salário reajustado ou uma mensagem, caso o funcionário não tenha direito ao aumento.*/
    
    let sal = parseFloat(prompt("Salário: "));
    
    if(sal < 600.00){
        sal = sal + (sal * 0.30);
        alert("Novo salário: R$"+sal.toFixed(2));
    }
    else{
        alert("Você não tem direito a aumento!");
    }
};

document.querySelector(".exerc8").onclick = function(){
    
    /*Faça um sistema que verifique a validade de uma senha fornecida pelo funcionário. A senha é 4531. O algoritmo deve mostrar uma mensagem de permissão de acesso ou não*/
    
    let senha = prompt("Senha: ");
    
    if(senha === "4531"){
        alert("Bem-vindo!");
    }
    else{
        alert("ERRO! Senha incorreta");
    }
};

document.querySelector(".exerc9").onclick = function(){
    
    /*Escreva um sistema que receba um número e mostre a sua metade somente quando ela for maior que cinquenta*/
    
    let num = parseFloat(prompt("Número: "));
    
    if(num > 50.00){
        let result = num / 2;
        alert("Metade: "+result.toFixed(2));
    }
    else{
        alert("O número não é maior que 50!");
    }
};

document.querySelector(".exerc10").onclick = function(){
    
    /*Faça um programa que receba 3 números e mostre em ordem crescente*/
    
    let num = [0, 0, 0];
    
    for(i = 0; i < num.length; i++){
        num[i] = parseFloat(prompt("Número "+(i+1)));
    }
    
    let aux = 0;
    for(i = 0; i < num.length; i++){
        for(x = i+1; x <= num.length; x++){
            if(num[i] > num[x]){
                aux = num[x];
                num[x] = num[i];
                num[i] = aux;
            }
        }
    }
    let resp = "";
    for(i = 0; i < num.length; i++){
        resp = resp+" "+num[i]+" ";
    }
    alert("Ordem: "+resp);
};

document.querySelector(".exerc11").onclick = function(){
    
    /*Um determinado clube de futebol pretende classificar seus atletas em categorias e para isto ele contratou um programador para criar um programa que executasse esta tarefa. Para isso o clube criou uma tabela que continha a faixa etária do atleta e sua categoria. A tabela está demonstrada abaixo:
        IDADE CATEGORIA
        •	De 05 a 10 Infantil
        •	De 11 a 15 Juvenil
        •	De 16 a 20 Junior
        •	De 21 a 25 Profissional
        Construa um programa que solicite o nome e a idade do atleta e imprima a sua categoria*/
    
    let nome = prompt("Nome: ");
    let idade = parseInt(prompt("Idade: "));
    
    if(idade >= 5 && idade <= 10){
        alert("Infantil");
    }
    else if(idade >= 11 && idade <= 15){
        alert("Juvenil");
    }
    else if(idade >= 16 && idade <= 20){
        alert("Júnior");    
    }
    else if(idade >= 21 && idade <= 25){
        alert("Profissional");    
    }
    else{
        alert("Sem categoria"); 
    }
};

document.querySelector(".exerc12").onclick = function(){
    
    /*Elaborar um sistema que receba o valor do salário de uma pessoa e o valor de um financiamento pretendido. Caso o financiamento seja menor ou igual a 5 vezes o salário da pessoa, o sistema deverá escrever "Financiamento Concedido"; senão, ele deverá escrever "Financiamento Negado". Independente de conceder ou não o financiamento, o sistema escreverá depois a frase "Obrigado por nos consultar"*/
    
    let sal = parseFloat(prompt("Salário: "));
    let fin = parseFloat(prompt("Financiamento: "));
    
    if(fin <= (5*sal)){
        alert("Financiamento Concedido!");
    }
    else{
        alert("Financiamento Negado!");
    }
    alert("Obrigado por nos consultar.");
    
};

document.querySelector(".exerc13").onclick = function(){
    /*Fazer um sistema que escreva o conceito de um aluno, dada a sua nota. Supor notas inteiras somente. O critério para conceitos é o seguinte:*/
    
    let nota = parseInt(prompt("Nota: "));
    
    if(nota < 3){
        alert("Conceito E");
    }
    else if(nota >= 3 && nota <= 5){
        alert("Conceito D");
    }
    else if(nota >= 6 && nota <= 7){
        alert("Conceito C");
    }
    else if(nota >= 8 && nota <= 9){
        alert("Conceito B");
    }
    else{
        alert("Conceito A");
    }
};

document.querySelector(".exerc14").onclick = function(){
    /*Soma um número que o usuário digitar até o valor digitado ser igual a “0”.*/
    let num = 0.0;
    let resp = 0.0;
    do{
        num = parseFloat(prompt("Número: "));
        
        resp = num + resp;
        console.log(resp);
    }while(num != 0);
}

document.querySelector(".exerc15").onclick = function(){
    /*Fazer um sistema para contar os números ímpares no intervalo [0, 250] inclusive.*/
    let qtd = 0;
    let num =  0;
    do{
        if((num % 2) !== 0){
            console.log(num);
            qtd++;
        }
        num++;
    }while(num != 250);
    
    console.log("Quantidade: "+qtd);
}


document.querySelector(".exerc16").onclick = function(){
    /*Fazer um sistema para somar os números pares existentes entre um número inicial no intervalo [0, 100] (definido pelo usuário) e um número final no intervalo [300, 400] (Definido pelo usuário)*/
    
    let num1 = 0; 
    let num2 = 0;
    let soma = 0;
    do{
        num1 = parseInt(prompt("1° número (0 a 100): "));
        num2 = parseInt(prompt("2° número (300 a 400): "));
    }while(!(num1 >= 0 && num1 <= 100) || !(num2 >= 300 && num2 <= 400));
    
    do{
        
        if(num1 % 2 == 0){
            soma = soma + num1;
        }
        if(num2 % 2 == 0){
            soma = soma + num2;
        }
        num1++;
        num2--;
        
        if(num1 > num2){
            console.log("ERRO!");
            num1 = num2;
        }
        
    }while(num1 != num2);
    
    console.log("1° número: "+num1);
    console.log("2° número: "+num2);
    console.log("Soma: "+soma);
}


document.querySelector(".exerc17").onclick = function(){
    /*A concessionária de veículos CARANGO VELHO está vendendo os seus veículos com desconto. Faça um sistema que calcule e exiba o valor do desconto e o valor a ser pago pelo cliente. O desconto deverá ser calculado de acordo com o ano do veículo. Até 2000 - 12% e acima de 2000 - 7%. O sistema deverá perguntar se deseja continuar calculando desconto. Apresente as seguintes opções ao usuário: (S) Sim - (N) Não. Ao final, informar o total de carros com ano até 2000 e total geral que o sistema verificou.*/
    
    let opc = "";
    let desc = 0.0;
    while(opc !== "n"){

        let ano = parseInt(prompt("Ano: "));
        let preco = parseFloat(prompt("Preço: "));
        
        console.log("Ano: "+ano);
        console.log("Preço: R$ "+preco.toFixed(2    ));
        
        if(ano <= 2000){
            desc = (0.12) * preco;
            preco = preco - desc;
        }
        else{
            desc = (0.07) * preco;
            preco = preco - desc;
        }
        
        console.log("Desconto: R$ "+desc.toFixed(2));
        console.log("Novo preço: R$ "+preco.toFixed(2));
        
        opc = prompt("Deseja continuar calculando?"
                    +"\n(S) Sim"
                    +"\n(N) Não");
        opc = opc.toLowerCase();
    }
}


document.querySelector(".exerc18").onclick = function(){
    /*Escrever um algoritmo que leia os dados de N pessoas (nome, sexo, idade e saúde) e informe se está apta ou não para cumprir o serviço militar obrigatório. Informe os totais.*/
    
    let aux = 0;
    while(aux == 0){
        let nome = prompt("Nome: ");
        let sexo = prompt("Sexo (m ou f): ");
        let idade = parseInt(prompt("Idade: "));
        let saude = prompt("Saúde: ");
        
        if(idade >= 18 && saude.toLowerCase() == "ok" && sexo.toLowerCase() == "m"){
            alert("Nome: "+nome+
                "\nSexo: "+sexo+
                "\nIdade: "+idade+
                "\nSaúde: "+saude+
                "\nResultado: Apto ao serviço Militar!");
        }
        
        else{
            alert("Nome: "+nome+
                "\nSexo: "+sexo+
                "\nIdade: "+idade+
                "\nSaúde: "+saude+
                "\nResultado: Inapto(a) ao serviço Militar!");
        }
        
        let resp = prompt("Deseja sair?"
                         +"\nN - não"
                         +"\nS - sim");
        
        if(resp.toLowerCase() == "s"){
            aux = 1;
        }
    }
    
    
}


document.querySelector(".exerc19").onclick = function(){
    /*Sistema que lê um número “N” e escreve todos os números de 1 a N.*/
    
    let num = parseInt(prompt("Número: "));
    let resp = "";
    
    for(let i = 1; i <= num; i++){
        resp = resp+" "+i+" ";
    }
    alert(resp);
    
}


document.querySelector(".exerc20").onclick = function(){
    /*Escreva um algoritmo que coloque os números de 1 a 100 na tela na ordem inversa (começando em 100 e terminando em 1).*/
    
    let resp = "";
    for(let i = 100; i > 0; i--){
        resp = resp+" "+i+" ";
    }
    alert(resp);
}


document.querySelector(".exerc21").onclick = function(){
    /*Faça um algoritmo para listar todos os múltiplos positivos do número 7 menores ou iguais a 100.*/
    
    let resp = "";
    
    for(let i = 0; i <= 100; i++){
        if(i % 7 == 0){
            resp = resp+" "+i+" ";
        }
    }
    alert(resp);
    
}


document.querySelector(".exerc22").onclick = function(){
    /*Sistema que lê 10 números e ao final informar quantos números estão no intervalo entre 10 e 150.*/
    let num = 0.0;
    let qtd = 0;
    
    for(let i = 0; i < 10; i++){
        num = parseFloat(prompt("Digite o "+(i+1)+"° número: "));
        if(num >= 10 && num <= 150){
            qtd++;
        }
    }
    
    alert("Quantidade: "+qtd);
}


document.querySelector(".exerc23").onclick = function(){
    /*Faça um sistema que receba a idade de 5 pessoas e mostre uma mensagem informando "maior de idade" e "menor de idade" para cada pessoa. Considere a idade a partir de 18 anos como maior de idade.*/
    
    let idade = 0;
    for(let i = 0; i < 5; i++){
        idade = parseInt(prompt("Idade: "));
        
        if(idade >= 18){
            alert("Maior de Idade");
        }
        else{
            alert("Menor de Idade");
        }
    }
    
}


document.querySelector(".exerc24").onclick = function(){
    /*Crie um programa que leia o nome do aluno, duas notas, calcule e armazene a média. Cadastre vários 6 alunos. Por fim, exiba tudo na tela.*/
    let resp ="";
    for(let i = 0; i < 6; i++){

        let nome = new Array(); 
        for(let x = 0; x < 4; x++){
            
            switch(x){
                case 0:
                    nome[x] = prompt("Nome: ");
                    resp = resp+"Nome: "+nome[x]+"\n";
                    break;
                case 1:
                    nome[x] = parseFloat(prompt("N1: "));
                    resp = resp+"N1: "+nome[x]+"\n";
                    break;
                case 2:
                    nome[x] =             parseFloat(prompt("N2: "));
                    resp = resp+"N2: "+nome[x]+"\n";
                    break;
                case 3:
                    nome[x] = parseFloat(((nome[x-1]) + (nome[x-2]))/2);
                    resp = resp+"Média: "+nome[x].toFixed(2)+"\n"
                    +"-------------------------------"
                    +"\n";
                    break;
            }
        }
    }
    console.log(resp);
    
}


document.querySelector(".exerc25").onclick = function(){
    /*Digite 10 valores em um array e preencha um segundo array com os números na ordem inversa da digitação. Obs: Não digite o segundo vetor!*/
    
    let num = new Array();
    let num1 = new Array();
    
    let entrada = "";
    let saida = "";
    
    for(let i = 0; i < 10; i++){
        num[i] = parseInt(prompt((i+1)+"° número: "));
        entrada = entrada+"["+num[i]+"] ";
    }
    
    for(let i = 0; i < num.length; i++){
        num1[i] = num[(num.length-1)-i];
        saida = saida+"["+num1[i]+"] ";
    }
    
    alert("Entrada: "+entrada+
         "\nSaída: "+saida);
}


document.querySelector(".exerc26").onclick = function(){
    /*Um prédio de 10 apartamentos, que possui um apartamento por andar, deseja registrar a quantidade de moradores de cada andar. Crie um programa para cadastrar esses moradores e que permita a consulta a qualquer andar informado pelo usuário.*/
    
    let resp = 0;
    let andares = new Map();
    while(resp != 9){
        let nome = "";
        resp = parseInt(prompt("1. Cadastrar"
                                 +"\n2. Mostrar"
                                 +"\n9. Sair"));
        
        switch(resp){
            case 1:
                let aux = 0;
                
                while(aux != 1){
                    let andar = prompt("Andar: ");
                    nome= nome+" "+prompt("Nome: ");
                    andares.set(andar, nome);
                    
                    
                    aux = parseInt(prompt("Sair?"
                                    +"\n1. sim"
                                    +"\n2. não"));  
                }
                
                break;
            case 2:
                let andar = prompt("Qual andar: ");
                if(andares.get(andar) != null){
                    console.log(andar+"° :"+andares.get(andar));
                    let total = (andares.get(andar)).split(" ");
                    console.log("Total: "+(total.length-1));
                }
                else{
                    console.log("Andar vazio!");
                }
                break;
            case 9:
                break;
            default:
                alert("Opção Inválida!");
                break;
        }
            
    }
}


document.querySelector(".exerc27").onclick = function(){
    /*Crie um vetor de 10 posições. Preencha o vetor com valores inteiros. Percorra o vetor e diga se o valor de cada posição é par ou ímpar.*/
    
    let vetor = new Array(10);
    
    for(let i = 0; i < vetor.length; i++){
        vetor[i] = parseInt(prompt((i+1)+"° valor: "));
    }
    let x = 0;
    for(let i in vetor){
        if(i % 2 == 0){
            console.log("["+x+"] = "+i+" -> par");
        }
        else{
            console.log("["+x+"] = "+i+" -> ímpar");
        }
        x++;
    }
    
}




