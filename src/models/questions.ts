import data from "../assets/data/friends-quiz-data.json"
import { shuffle } from "../utils/shuffle"
import { imagesPreloader } from "../utils/preloaders"
import { IAnswerModal, IQuestion } from "../store/types"
import { gameSettings } from "../gameSettings"

const preloadImagesCount = gameSettings.preloadQuestionImagesCount
const imagesPath = gameSettings.imagesPath

let questions = shuffle(data)
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
  // console.log(questionPreloadedImages.getImageURL())

  return {
    question: question.question,
    message: question.message,
    answers: question.answers,
    image: questionPreloadedImages.getImageURL(questionNumber),
  }
}

export function getAnswer(): IAnswerModal {
  const question = questions[questionNumber]
  return {
    isActive: true,
    title: "Правильно!",
    message: question.message,
    image: answerPreloadedImages.getImageURL(questionNumber),
  }
}

export function getProgress(): number {
  return ((questionNumber + 1) / questions.length) * 100
}

export function setQuestionNumber(number: number) {
  questionNumber = number
}

export function shuffleQuestions() {
  questions = shuffle(questions)
}
