const notationsKey = [];

let ranks = 'a';

for(let i = 1; i <= 8; i++){
  for(let j = 0; j < 8; j++){
    notationsKey.push(ranks+(i.toString()));
    ranks = String.fromCharCode(ranks.charCodeAt(0)+1);
  }
  ranks = 'a';
}

export default notationsKey;
