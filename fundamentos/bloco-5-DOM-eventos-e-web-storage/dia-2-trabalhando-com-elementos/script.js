//Acesse o elemento elementoOndeVoceEsta .
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// Acesse o primeiroFilho a partir de pai .
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de pai .

// Crie um irmão para elementoOndeVoceEsta .
// Crie um filho para elementoOndeVoceEsta .
// Crie um filho para primeiroFilhoDoFilho .
// A partir desse filho criado, acesse terceiroFilho .

let filhoExercicio = document.createElement('section');
let textoFilhoExercicio = document.createTextNode('teste');

filhoExercicio.appendChild(textoFilhoExercicio);

document.getElementById('pai').appendChild(filhoExercicio);

let filhoElmnt = document.createElement('section');
let textoFilhoElmnt = document.createTextNode('alo');

filhoElmnt.appendChild(textoFilhoElmnt);
document.getElementById('elementoOndeVoceEsta').appendChild(filhoElmnt);

//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
