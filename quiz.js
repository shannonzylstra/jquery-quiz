
$(document).ready(function() {
	let quizQA = [
	{
		prompt: "Seeing is believing, but sometimes the most real things in the world are the things we can't see",
		answers: ["A Christmas Story", "Christmas with the Kranks", "The Polar Express", "White Christmas"],
		correctAnswer: 2
	},
	{
		prompt: "Every time a bell rings, an angel gets his wings",
		answers: ["It's a Wonderful Life", "Jingle All The Way", "A Christmas Story", "A Christmas Carol"],
		correctAnswer: 0
	}
]
	let q
	for (let q = 0; q < quizQA.length; q++) {
	// jQuery to make new <div><p>${prompt}</p></div>
	var newDiv = $('<div></div>').text(`<p>${quizQA[q].prompt)}</p>`)
	$('#activeQuestion').append(newDiv)
	}
});

