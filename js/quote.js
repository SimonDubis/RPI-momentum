const quotes = ["Genius is one percent inspiration and ninety-nine percent perspiration.", 
	"You can observe a lot just by watching.",
	"A house divided against itself cannot stand.",
	"Difficulties increase the nearer we get to the goal.",
	"Fate is in your hands and no one elses",
	"Be the chief but never the lord.",
	"Nothing happens unless first we dream.",
	"Well begun is half done.",
    "Life is a learning experience, only if you learn.",
    "Self-complacency is fatal to progress.",
	"Peace comes from within. Do not seek it without.",
	"What you give is what you get.",
	"We can only learn to love by loving.",
	"Life is change. Growth is optional. Choose wisely.",
	"You'll see it when you believe it.",
	"To lead people walk behind them.",
	"Having nothing, nothing can he lose.",
	"A rolling stone gathers no moss.",
	"Ideas are the beginning points of all fortunes.",
	"Everything in life is luck.",
  ]

  const authors = ["Thomas E.", "Yogi B.", "Abraham L.", "Johann W.", "Byron P.",
  	"Lao T.", "Carl S.", "Aristotle", "Yogi B.", "Margaret S.", "Buddha", "Byron P.",
  	"Iris M.", "Karen C.", "Wayne D.", "Lao T.", "William S.", "Publilius S.",
  	"Napoleon H.", "Donald Trump"]

function clicked() {
	var randomNumber = Math.floor(Math.random() * quotes.length);
	document.getElementById("bq").innerHTML = quotes[randomNumber];
	document.getElementById("fc").innerHTML = authors[randomNumber];
}

window.onload = function() {
	clicked();
}