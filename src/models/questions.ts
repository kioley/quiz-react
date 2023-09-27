import data from "../assets/data/friends-quiz-data.json"
import { shuffle } from "../utils/shuffle"
import { imagesPreloader } from "../utils/imagesPreloader"
import { IAnswerModal, IQuestion } from "../store/interfaces"

const preloadImagesCount = 2
const imagesPath = "questionImages/"
const questions = shuffle(data)
const questionImageNames = []
const answerImageNames = []
let questionNumber = 0

for (const question of questions) {
  questionImageNames.push(question.question_image)
  answerImageNames.push(question.answer_image)
}

const questionPreloadedImages = new imagesPreloader(
  preloadImagesCount,
  questionImageNames,
  imagesPath
)
const answerPreloadedImages = new imagesPreloader(
  preloadImagesCount,
  answerImageNames,
  imagesPath
)

export function rotateQuestions(): void {
  questionPreloadedImages.rotate()
  answerPreloadedImages.rotate()
  questionNumber++
}

export function getQuestion(): IQuestion {
  const question = questions[questionNumber]

  return {
    question: question.question,
    message: question.message,
    answers: question.answers,
    image: imagesPath + question.question_image,
  }
}

export function getAnswer(): IAnswerModal {
  const question = questions[questionNumber]
  return {
    isActive: true,
    title: "Правильно!",
    message: question.message,
    image: imagesPath + question.answer_image,
  }
}

export function getProgress(): number {
  return ((questionNumber + 1) / questions.length) * 100
}

export function setQuestionNumber(number: number) {
  questionNumber = number
}
