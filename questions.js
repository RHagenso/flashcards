var questions = [
    {
	question: 'Is this going to be enough to create a webpage when I commit?',
	options: ['This choice', 'This other choice', 'This yet another choice'],
	answer: ['This choice'],
	category: ['Category 1'],
    },
    {
	question: 'What is the answer to this second question?',
	options: ['This choice', 'This other choice', 'This yet another choice'],
	answer: ['This choice'],
	category: ['Category 2'],
    },
    {
	question: 'What is the answer to this third question?',
	options: ['This choice', 'This other choice', 'This yet another choice'],
	answer: ['This choice'],
	category: ['Category 1'],
    },
    {
	question: 'What is the answer to this fourth question?',
	options: ['This choice', 'This other choice', 'This yet another choice'],
	answer: ['This choice'],
	category: ['Category 2'],
    },
    {
	question: 'What is the answer to this fifth question?',
	options: ['This choice', 'This other choice', 'This yet another choice'],
	answer: ['This choice'],
	category: ['Category 1'],
    },
    {
	question: 'What is the answer to this sixth question?',
	options: ['This choice', 'This other choice', 'This yet another choice'],
	answer: ['This choice'],
	category: ['Category 2'],
    },
    {
	question: 'What is the answer to this seventh question?',
	options: ['This choice', 'This other choice', 'This yet another choice'],
	answer: ['This choice'],
	category: ['Category 1'],
    },
    {
	question: 'What is the answer to this eighth question?',
	options: ['This choice', 'This other choice', 'This yet another choice'],
	answer: ['This choice'],
	category: ['Category 1'],
    },
    {
	question: 'What is the answer to this ninth question?',
	options: ['This choice', 'This other choice', 'This yet another choice'],
	answer: ['This choice'],
	category: ['Category 2'],
    },
];

var i = 0;
while (i < questions.length) {
	document.getElementById("option0").innerHTML = questions[i].options[0];
	document.getElementById("option1").innerHTML = questions[i].options[1];
	document.getElementById("option2").innerHTML = questions[i].options[2];
	document.getElementById("question").innerHTML = questions[i].question;
}
