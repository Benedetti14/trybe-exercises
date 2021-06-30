let piece = "King"

let pieceLC = piece.toLowerCase();

switch(pieceLC){
  case 'pawn':
    console.log('One square straight ahead');
    break;
  case 'rook':
    console.log('In Its Line or Row');
    break;
  case 'knight':
    console.log('In a L-shape');
    break;
  case 'bishop':
    console.log('Diagonally');
    break;
  case 'queen':
    console.log('Like a Rook or a Bishop');
    break;
  case 'king':
    console.log('Its square to a neighboring square');
    break;
  default:
    console.log('Erro');
}