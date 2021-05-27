var words = ["avengers", "titanic", "transformers", "inception", "avatar", "taken"];
var m;
var guessed = [];
var clue;
var clue1;
var loss = 0;
var win = 0;
window.onload = setup;
function setup()
{
	var button1 = document.getElementById("gs");
	button1.onclick = Guess;
	var button2 = document.getElementById("new");
	button2.onclick = newGame;
}
function Guess()
{
	var g = document.getElementById("guess").value;
	guessed.push(g);
	var c = 0;
	for(var i=0;i<m.length;i++)
	{
		if(g == m.charAt(i))
		{
			clue[i] = g;
			c = 1;
			win = win + 1;
		}
	}
	if(c == 0)
	{
		loss = loss + 1;
	}
	document.getElementById("img").src="hangman"+loss+".png";
	clue1 = clue.join(" ");
	var guessed1=guessed.join("");
	document.getElementById("clue").innerHTML = clue1;
	document.getElementById("guessed").innerHTML ="Guesses: " + guessed1;
	if(loss == 7)
	{
		document.getElementById("guessed").innerHTML ="You Lost";
	}
	if(win == m.length)
	{
		document.getElementById("guessed").innerHTML ="You Won";
	}
}
function newGame()
{
	loss = 0;
	win = 0;
	clue = [];
	clue = ["_"];
	guessed = [];
	document.getElementById("guessed").innerHTML ="Guesses: ";
	m = words[Math.floor(Math.random()*words.length)];
	for(var i =0;i<m.length-1;i++)
	{
		clue.push("_");
	}
	clue1 = clue.join(" ");
	document.getElementById("clue").innerHTML = clue1;
}
