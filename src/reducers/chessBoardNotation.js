const notationsKey = [];

let file = 'a';

for(let i = 1; i <= 8; i++){
  for(let j = 0; j < 8; j++){
    notationsKey.push(file+(i.toString()));
    file = String.fromCharCode(file.charCodeAt(0)+1);
  }
  file = 'a';
}

export default notationsKey;
