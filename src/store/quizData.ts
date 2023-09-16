import data from "../data/friends-quiz-data.json"
import { shuffle } from "../utils/shuffle"
import { imagesPreloader } from "../utils/imagesPreloader"

const questions = shuffle(data)

let questionNumber = 0

const questionImageNames = []
const answerImageNames = []

for (const question of questions) {
  console.log(question)
  questionImageNames.push(question.question_image)
  answerImageNames.push(question.answer_image)
}

const questionPreloadedImages = new imagesPreloader(
  2,
  questionImageNames,
  "/src/assets/images/"
)
const answerPreloadedImages = new imagesPreloader(
  2,
  answerImageNames,
  "/src/assets/images/"
)

function getQuestionImage() {
  return questionPreloadedImages.images[0]
}

function getAnswerImage() {
  return answerPreloadedImages.images[0]
}

export function rotateQuestions() {
  questionPreloadedImages.rotate()
  answerPreloadedImages.rotate()
  questionNumber++
}

export function getQuestion() {
  const question = questions[questionNumber]
  return {
    question: question.question,
    message: question.message,
    answers: question.answers,
    image: getQuestionImage().src,
  }
}

export function getAnswer() {
  return {
    message: questions[questionNumber].message,
    image: getAnswerImage().src,
  }
}
