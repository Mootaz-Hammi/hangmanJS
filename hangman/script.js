
var programming = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
	"c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
	"ruby"
] // les mots aleatoire
//const correct =  document.getElementById("correct").textContent.toUpperCase; // la mot correct

//initialisation
/*let tirets=''; // nombre des tirets 
let tenta = 20; // les tentative */
let mistakes =0 ;
let loser = 6;
let guessed = [];
let theworld = null;
let lenght =0;
let text ='';
//

// mot aleatoire
function aleatoiree(){
  var i = Math.floor(Math.random() * programming.length) ; // indice de mot selectionne
   text = programming[i]; // mot selectione
   console.log(text);// juste pour tester les fonctions
   lenght = text.length; //langueur de mots
document.getElementById("taille").innerHTML= lenght; // afficher langueur
}




/*function victoire(){   
    document.getElementById("correct").textContent = text.toUpperCase();   
}*/

/*document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("resultat").textContent = points;
    if (btn.textContent=="Verif"){ // bch taaref 9adesh mn 7aref 9bal matal3eb
        var input = document.getElementById("input").value; // recuperer valeur d'input
    document.getElementById("resultat").textContent = points; // les points dans ficher html
    console.log(input);
    console.log(text);
    for (j=0;j<input.length;j++){
        if (input[j]==text[j]){

           // points [j] = text[j];
              points = points.replace(points[j], input[j]);
            //console.log(text[j]); 
           /* console.log(points[j]);
            console.log(points);
        }
    }
    
    document.getElementById("resultat").textContent = points;
    }
    btn.textContent= "Verif"; //change button name
  });*/



  function keyboard() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
      `
        <button
          class="btn btn-dark btn btn-outline-danger m-2 btn-lg"
          id='` + letter + `'
          onClick="handleGuess('` + letter + `')"
        >
          ` + letter + `
        </button>
      `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  }
 

  function world() {
    theworld = text.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join(''); //initialer des tirets   // verif si letter clicked existe ou nn 
    document.getElementById('wordhere').innerHTML = theworld;
  }

  function handleGuess(clicker) {
    guessed.indexOf(clicker) === -1 ? guessed.push(clicker) : null; //
    document.getElementById(clicker).setAttribute('disabled', true); // lettre sera desabled si elle est clickée
  
    if (text.indexOf(clicker) >= 0) {
      world();
      youWin();
    } else if (text.indexOf(clicker) === -1) {
      mistakes++;
      updateMistakes();
      youLose();
      changePicture();
    }
  }
/////////////////////////////////////
function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}
function changePicture() {
    document.getElementById('hangmanPic').src = './images/' + mistakes + '.png';
}
function youLose() {
  if (mistakes === loser) {
    document.getElementById('wordhere').innerHTML = 'The answer was: ' + text;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
  }
}
function youWin() {
  if (theworld === text) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
  }
}
  
aleatoiree();
  keyboard();
  world();

  function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = './images/0.png';
  
    aleatoiree();
    world();
    updateMistakes();
    keyboard();
  }
  