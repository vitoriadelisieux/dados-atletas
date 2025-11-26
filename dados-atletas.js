import { Atleta } from "./atleta.js";

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);


    console.log("Nome:", atleta.obtemNomeAtleta())
    console.log("Idade:", atleta.obtemIdadeAtleta())
    console.log("Peso:", atleta.obtemPesoAtleta())
    console.log("Altura:", atleta.altura)
    console.log("Notas:", atleta.notas)
    console.log("Ctegoria:", atleta.obtemCategoria())
    console.log("IMC:", atleta.obtemIMC())
    console.log("Média:", atleta.obtemMediaValida())
    

