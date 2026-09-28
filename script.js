const navbar = document.querySelector(".navbar");
const trigger = document.querySelector(".nav-trigger");
const mainContent = document.querySelector(".main-content");
const footer = document.querySelector("#footer");

trigger.addEventListener("mouseenter", function () {
    navbar.classList.add("open");
    mainContent.classList.add("sidebar-open");
    footer.classList.add("sidebar-open");
});

navbar.addEventListener("mouseleave", function () {
    navbar.classList.remove("open");
    mainContent.classList.remove("sidebar-open");
    footer.classList.remove("sidebar-open");
});

const jokes = [
    {
        question: "Why don't skeletons fight each other?",
        answer: "Because they don't have the guts!"
    },
    {
        question: "What do you call fake spaghetti?",
        answer: "An impasta!"
    },
    {
        question: "Why did the bicycle fall over?",
        answer: "Because it was two-tired!"
    },
    {
        question: "What do you call cheese that isn't yours?",
        answer: "Nacho cheese!"
    },
    {
        question: "Why can't your nose be 12 inches long?",
        answer: "Because then it would be a foot!"
    },
    {
        question: "What do you call a fish wearing a bowtie?",
        answer: "Sofishticated!"
    },
    {
        question: "Why did the math book look sad?",
        answer: "Because it had too many problems!"
    }
];

let currentJoke;

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);

    currentJoke = jokes[randomIndex];

    document.getElementById("riddle-question").textContent =
        currentJoke.question;

    document.getElementById("riddle-answer").textContent = "";

    document.getElementById("answer-button").style.display =
        "inline-block";
}

function showAnswer() {
    document.getElementById("riddle-answer").textContent =
        currentJoke.answer;

    document.getElementById("answer-button").style.display =
        "none";
}

document.getElementById("answer-button").addEventListener(
    "click",
    showAnswer
);

getRandomJoke();

setInterval(getRandomJoke, 30000);