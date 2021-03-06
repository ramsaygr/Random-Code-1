//Treehouse FSJS Techdegree:project 1 - A Random Quote Generator by Glenn

//Random Quotes
const quotes =[
  {	quote:	`	"	Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.	"	`	,	
    source:	`	Patrick McKenzie	`	}	,
  {	quote:	`	"	Anger is the feeling that makes your mouth work faster than your mind.	"	`	,	
    source:	`	Evan Esar	`	}	,
  {	quote:	`	"	Ask yourself: Have you been kind today? Make kindness your daily modus operandi and change your world.	"	`	,	
    source:	`	Annie Lennox	`,
    year: 1988,
    citation: `Rolling Stone Magazine`	}	,
  {	quote:	`	"	At a dinner party one should eat wisely but not too well, and talk well but not too wisely.	"	`	,	
    source:	`	W. Somerset Maugham	`	}	,
  {	quote:	`	"	Every sweet has its sour; every evil its good.	"	`	,	
    source:	`	Ralph Waldo Emerson	`	}	,
  {	quote:	`	"	How can I believe in God when just last week I got my tongue caught in the roller of an electric typewriter?	"	`	,	
    source:	`	Woody Allen	`,
    year: 1974	}	,
  {	quote:	`	"	I am not in this world to live up to other people's expectations, nor do I feel that the world must live up to mine.	"	`	,	
    source:	`	Fritz Perls	`	}	,
  {	quote:	`	"	I don't have a photograph, but you can have my footprints. They're upstairs in my socks.	"	`	,	
    source:	`	Groucho Marx	`	}	,
  {	quote:	`	"	I have no pretensions whatever to that kind of elegance which consists in tormenting a respectable man.	"	`	,	
    source:	`	Jane Austen	`	}	,
  {	quote:	`	"	I must create a system, or be enslaved by another man's.	"	`	,	
    source:	`	William Blake	`	}	,
  {	quote:	`	"	In the fight between you and the world, back the world.	"	`	,	
    source:	`	Frank Zappa	`	}	,
  {	quote:	`	"	It's not true that life is one damn thing after another; it is one damn thing over and over.	"	`	,	
    source:	`	Edna St. Vincent Millay	`	}	,
  {	quote:	`	"	People are always blaming their circumstances for what they are. I don't believe in circumstances. The people who get on in this world are the people who get up and look for the circumstances they want, and, if they can't find them, make them.	"	`	,	source:	`	George Bernard Shaw 	`	}	,
  {	quote:	`	"	Sit down before fact as a little child, be prepared to give up every preconceived notion... or you shall learn nothing.	"	`	,	
    source:	`	Thomas H. Huxley	`	}	,
  {	quote:	`	"	Statistician: A man who believes figures don't lie, but admits that under analysis some of them won't stand up either.	"	`	,	
    source:	`	Evan Esar	`,
    year:1943,
    citation: `Esar's Comic Dictionary`	}	,
  {	quote:	`	"	The mint makes it first, it is up to you to make it last.	"	`	,	
    source:	`	Evan Esar	`,
    year: 1961,
    citation:`Humorous English`	}	,
  {	quote:	`	"	Truth sits upon the lips of dying men.	"	`	,	
    source:	`	Matthew Arnold	`	}	,
  {	quote:	`	"	Underneath this flabby exterior is an enormous lack of character.	"	`	,	
    source:	`	Oscar Levant	`	}	,
  {	quote:	`	"	Use what talents you possess: the woods would be very silent if no birds sang there except those that sang best.	"	`	,	
    source:	`	Henry Van Dyke	`	}	,
  {	quote:	`	"	We are what we pretend to be, so we must be careful what we pretend to be.	"	`	,	
    source:	`	Kurt Vonnegut	`,
    citation:`And So It Goes`	}	,
  {	quote:	`	"	When a dog runs at you, whistle for him.	"	`	,	
    source:	`	Henry David Thoreau	`	}	
];

//getRandomQuote function to choose a random quote from the above array

function getRandomQuote(arr) { 
let quoteIndex = Math.floor(Math.random() * quotes.length); 
for (var i = 0; i < quotes.length; i++) { 
  let randomQuote = arr[quoteIndex]; 
  return randomQuote;
} 

}




//printQuote function to add the Random quote to the HTML

function printQuote() {
let messageDisplayed = getRandomQuote(quotes);
let quoteDisplay = `<p class='quote'> ${messageDisplayed.quote} </p>
<p class = 'source'>${messageDisplayed.source}`;
if (messageDisplayed.citation){
  quoteDisplay+= `<span class='citation'>${messageDisplayed.citation}</span>`;
}
if (messageDisplayed.year){
  quoteDisplay+= `<span class='year'>${messageDisplayed.year}</span>`;
}
quoteDisplay += `</p>`
document.getElementById('quote-box').innerHTML = quoteDisplay;
}



//click event listener for the print quote button

document.getElementById('load-quote').addEventListener("click", printQuote, false);