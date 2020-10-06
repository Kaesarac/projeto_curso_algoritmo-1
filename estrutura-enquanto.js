function acaoBotao(){
    var nome, idade, limite, contador

limite = prompt("Digite a quantidade de vezes que vai verificar a idade")
contador = 0
while(contador < limite){
    nome = prompt("Digite o nome da pessoa")
    idade = prompt("Digite a idade")
    if (idade > 18) 
        document.getElementById("paragrafo").innerText = nome + " é maior de idade!"
     else 
        document.getElementById("paragrafo").innerText = nome + " é menor de idade!"
    
    contador++
}
}