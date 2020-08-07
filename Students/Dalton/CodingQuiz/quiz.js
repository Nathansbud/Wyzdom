
const startButton = document.getElementById('start-button')
const submitButton = document.querySelector('input[type="submit"]')
const restartButton = document.getElementById('restart')
const clearButton = document.getElementById('clear')

const countTexts = document.getElementsByClassName('num-questions')
const scoreText = document.getElementsByClassName('score')

const timeTexts = document.getElementsByClassName('time')
const timerTexts = document.getElementsByClassName('timer')


const startDiv = document.getElementById('start')
const quizDiv = document.getElementById('quiz')
const endDiv = document.getElementById('end')

const highScores = document.getElementById('high-scores')

const initialField = document.querySelector('input[type="text"]')
let hasAdded = false

const maxTime = 100
const penalty = 10
let currentTime = maxTime
let timer = null

let currentIndex = 0

let score = 0

class Question {
    constructor(question, answers, correctIndex) {
        this.question = question
        this.answers = answers
        this.correctIndex = correctIndex
    }
}

const questions = [
    new Question("Hi", ["hey", "howdy", "sup", "hello"], 1),
    new Question("Sup", ["nm hbu", "nada", "nothin", "idk"])
]


const timeString = (s) => {
    const minutes = Math.floor(s/60)
    let seconds = (s/60 - Math.floor(s/60))*60
    return `${minutes}:${(seconds < 10)?("0"):("")}${Math.round(seconds)}`
}

window.onload = function() {
    updateTimeText()
    Array.from(countTexts).forEach(t => t.textContent = questions.length)
    makeQuiz()
}

function countdown() {
    currentTime -= 1
    Array.from(timerTexts).forEach(tt => tt.textContent = timeString(currentTime))
    if(currentTime <= 0) { 
        clearInterval(timer)
    }
}

function populateScores() {
    while(highScores.lastChild) highScores.removeChild(highScores.lastChild)
    let scores = JSON.parse(localStorage.getItem('scores'))
    if(scores) {
        scores.sort((a, b) => b.score - a.score)
        for(let hs of scores) {
            const scoreEntry = document.createElement('li')
            scoreEntry.textContent = `${hs.name}: ${hs.score}`
            highScores.appendChild(scoreEntry)
        }
    }
}

function makeQuiz() {
    for(let [i, q] of Object.entries(questions)) {
        const questionDiv = document.createElement('div')
        
        questionDiv.setAttribute("class", "question-div")
        questionDiv.setAttribute("data-index", i)

        const question = document.createElement("h2")
        question.textContent = q.question

        questionDiv.appendChild(question)
        
        q.answers.forEach((ans, idx) => {
            let answer = document.createElement('button')
            answer.textContent = `${idx + 1}: ${ans}`
            if(idx === q.correctIndex) answer.setAttribute('data-correct', true) 
            answer.addEventListener('click', () => {
                if(answer.getAttribute('data-correct')) score += 1
                else { 
                    currentTime -= penalty 
                    Array.from(timeTexts).forEach(t => t.textContent = timeString(currentTime))
                }
                
                document.querySelector(`.question-div[data-index="${currentIndex++}"]`).style.display = 'none'
                const nextQ = document.querySelector(`.question-div[data-index="${currentIndex}"]`)
                
                if(nextQ) nextQ.style.display = 'block'
                else {
                    Array.from(scoreText).forEach(st => st.textContent = score)
                    clearInterval(timer)
                    quizDiv.style.display = 'none'
                    endDiv.style.display = 'block'
                }
            })

            questionDiv.appendChild(answer)
            questionDiv.appendChild(document.createElement('br'))
        })

        quizDiv.appendChild(questionDiv)
    }
}

function updateTimeText() {
    Array.from(timeTexts).forEach(t => t.textContent = timeString(currentTime))
}

function restart() {
    score = 0
    currentTime = maxTime
    currentIndex = 0

    hasAdded = false
    timer = null
    updateTimeText()

    startDiv.style.display = 'block' 
    quizDiv.style.display = 'none'
    endDiv.style.display = 'none'
    
    document.querySelector(`.question-div[data-index="${currentIndex}"`).style.display = 'block'
}

startButton.addEventListener('click', () => {
    startDiv.style.display = 'none'
    quizDiv.style.display = 'block'
    
    populateScores()
    
    if(timer) clearInterval(timer)
    else timer = setInterval(countdown, 1000)
})

submitButton.addEventListener('click', () => {
    if(!hasAdded) {
        const initials = (initialField.value) ? (initialField.value.trim().toUpperCase()) : ("ANON")
        let scores = JSON.parse(localStorage.getItem("scores")) ?? []
        scores.push({name: initials, score: score})
        localStorage.setItem("scores", JSON.stringify(scores))
        hasAdded = true
        populateScores()
    }
})

clearButton.addEventListener('click', () => {
    localStorage.removeItem('scores')
    hasAdded = false
    populateScores()
})

restartButton.addEventListener('click', restart)

