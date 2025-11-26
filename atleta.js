export class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calcularCategoria() {

        if (this.idade >= 9 && this.idade <= 11){
            return "Infantil"
        } else if (this.idade === 12 || this.idade === 13){
            return "Juvenil"
        } else if (this.idade === 14 || this.idade === 15){
            return "Intermediário"
        } else if (this.idade >= 16 && this.idade <= 30){
            return "Adulto";
        } else {
            return "Sem categoria"
        }
    }

    calcularIMC() {

        let imc = this.peso / (this.altura * this.altura)
        return imc
    }


    calcularMediaValida(){

    const notasOrdenadas = this.notas.slice().sort(function(a,b){
        return a - b
    });

    const notasValidas = notasOrdenadas.slice(1, -1) 
    
    let soma = notasValidas.reduce((total, nota) => total + nota , 0);

    let media = soma / notasValidas.length;
    return media;
    
    }


    obtemNomeAtleta(){
        return this.nome
    } 


    obtemIdadeAtleta(){
        return this.idade

    }
    

    obtemPesoAtleta(){
        return this.peso

    }

    obtemNotasAtleta(){
        return this.notas

    }

    obtemCategoria(){
        return this.calcularCategoria()

    }

    obtemIMC(){
        return this.calcularIMC()

    }

    obtemMediaValida(){
        return this.calcularMediaValida()

    }

}