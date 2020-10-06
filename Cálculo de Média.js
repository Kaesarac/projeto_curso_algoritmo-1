var nota1, nota2, nota3, nota4;
var nome, media, situa;
print ("Para começarmos a calcular sua Média, primeiro precisamos do seu nome:");
read = nome;
print ("Certo, ", nome, ", agora precisamos de sua primeira nota:");
read = nota1;
print ("Sua segunda nota:");
read = nota2;
print ("Também precisamos de sua terceira nota:");
read = nota3;
print ("E por fim, sua quarta e última nota:");
read = nota4;
print ("Obrigado pela paciência, ", nome, ".");
media = ((nota1 + nota2 + nota3 + nota4)/4);
   if (media < 5) {
        situa = ("Reprovado")    
    } else { situa = ("Aprovado")
        
    }
alert("Sua média semestral foi de: ", media, ", e sua situação atual é: ", situa, ".");
    

    


