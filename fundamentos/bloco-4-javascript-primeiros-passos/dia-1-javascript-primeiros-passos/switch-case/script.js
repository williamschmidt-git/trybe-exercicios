let estaAprovada = 'aprovada';

switch (estaAprovada) {
    case "aprovada":
        console.log("Aprovada!");
        break;

    case "reprovada":
        console.log("Reprovada!");
        break;

    case "lista":
        console.log("Lista de espera.");
        break;
        
    default:
        console.log("não se aplica");
        break;
}