let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
  };

  let infoNew = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  };

console.log(`${info.personagem} e ${infoNew.personagem}`);
console.log(`${info.origem} e ${infoNew.origem}`);
console.log(`${info.nota} e ${infoNew.nota}`);

if (info.recorrente === "Sim" && infoNew.recorrente === "Sim") {
    console.log(`Ambos recorrentes`);
}
else {
    console.log(`${info.personagem}, personagem recorrente: ${info.recorrente}. E ${infoNew.personagem}, personagem recorrente: ${infoNew.recorrente}`)
}