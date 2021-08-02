let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

let info2 = {
    personagem: 'Tio patinhas',
    origem: 'Christmas on Bear Mountain, Dell`s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

let recorrente = "";

//   console.log("Bem vinda, " + info.personagem);
//   console.log(info);

if(info.recorrente === info2.recorrente){
    recorrente = "Ambos recorrentes";
}
console.log(info.personagem + " e " + info2.personagem + "\n" + info.origem + " e " + info2.origem + "\n" + info.nota + " e " + info2.nota + "\n" + recorrente);

