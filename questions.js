var questions = [
    {
	question: 'What color is a whiteboard?',
	options: ['White', 'Green', 'Blackboard'],
	answer: ['White'],
	category: ['Category 1'],
    },
    {
	question: 'Who would win in a fight, Batman or Superman?',
	options: ['Batman', 'Superman', 'The Flash'],
	answer: ['Superman'],
	category: ['Category 2'],
    },
    {
	question: 'What is "The T in a classroom?',
	options: ['Are we talking Mr. T?', 'We do not drink T in America', 'The first row and middle section of desks'],
	answer: ['he first row and middle section of desks'],
	category: ['Category 1'],
    },
    {
	question: 'How does the Hulk not rip his pants?',
	options: ['Super glue', 'Stretchy pants', 'The world may never know'],
	answer: ['The world may never know'],
	category: ['Category 2'],
    },
    {
	question: 'In a programming class ";" is a semicolon, what is it in a Greek language class?',
	options: ['A Greek question mark', 'A semicolon', 'A unknown symbol'],
	answer: ['A Greek question mark'],
	category: ['Category 1'],
    },
    {
	question: 'Is Deadpool awesome?',
	options: ['No', 'Yes', 'Fried chicken'],
	answer: ['Yes'],
	category: ['Category 2'],
    },
    {
	question: 'Math exams cause test anxiety, therefore test axiety causes?',
	options: ['Crying students', 'The world to end', 'Math tests'],
	answer: ['Crying students'],
	category: ['Category 1'],
    },
    {
	question: 'Wolverine, what country is he from?',
	options: ['USA!', 'Canada, ay', 'Down under (Australia)'],
	answer: ['Canada, ay'],
	category: ['Category 2'],
    },
    {
	question: 'What should you modify if something is not present on a webpage?',
	options: ['HTML', 'CSS', 'JavaScript'],
	answer: ['HTML'],
	category: ['Category 1'],
    },
];

var i = 0;
function next() {
	i = i+1;
	document.getElementById("option0").innerHTML = questions[i].options[0];
	document.getElementById("option1").innerHTML = questions[i].options[1];
	document.getElementById("option2").innerHTML = questions[i].options[2];
	document.getElementById("question").innerHTML = questions[i].question;
	document.getElementById("correct_or_no").innerHTML = ""
}

document.getElementById('next_button').addEventListener('click',next);

function correct_or_not0() {
	if (questions[i].answer[0] === document.getElementById("option0").innerHTML) {
		document.getElementById("correct_or_no").innerHTML = "Correct!";
	}
	else {
		document.getElementById("correct_or_no").innerHTML = "Incorrect!";
	}
}

function correct_or_not1() {
	if (questions[i].answer[0] === document.getElementById("option1").innerHTML) {
		document.getElementById("correct_or_no").innerHTML = "Correct!";
	}
	else {
		document.getElementById("correct_or_no").innerHTML = "Incorrect!";
	}
}

function correct_or_not2() {
	if (questions[i].answer[0] === document.getElementById("option2").innerHTML) {
		document.getElementById("correct_or_no").innerHTML = "Correct!";
	}
	else {
		document.getElementById("correct_or_no").innerHTML = "Incorrect!";
	}
}

document.getElementById("button0").addEventListener('click',correct_or_not0);
document.getElementById("button1").addEventListener('click',correct_or_not1);
document.getElementById("button2").addEventListener('click',correct_or_not2);


