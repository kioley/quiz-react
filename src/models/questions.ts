import data from "../assets/data/friends-quiz-data.json"
// import imagesUrl from "src/assets/questionImages"
import { shuffle } from "../utils/shuffle"
import { loadBlobWithCache } from "../utils/loadBlob"
import { IAnswerModal, IQuestion } from "../store/types"
import { gameSettings } from "../gameSettings"

// const preloadImagesCount = gameSettings.preloadQuestionImagesCount
// const imagesPath = gameSettings.imagesPath

let questions = shuffle(data)
// const questionImageNames = []
// const answerImageNames = []
let questionNumber = -1
preload()
// next()

// for (const question of questions) {
//   questionImageNames.push(question.question_image)
//   answerImageNames.push(question.answer_image)
// }

// const questionPreloadedImages = new imagesPreloader(
//   preloadImagesCount,
//   questionImageNames,
//   imagesPath
// )
// const answerPreloadedImages = new imagesPreloader(
//   preloadImagesCount,
//   answerImageNames,
//   imagesPath
// )

export function increaseQuestionNumber(): void {
  // questionPreloadedImages.rotate()
  // answerPreloadedImages.rotate()
  questionNumber++
}

export async function getQuestion(): Promise<IQuestion> {
  const question = questions[questionNumber]
  preload()
  const image = await loadImageWithCache(question.question_image)
  // console.log(questionPreloadedImages.getImageURL())

  return {
    question: question.question,
    message: question.message,
    answers: question.answers,
    image: image,
  }
}

export async function getAnswer(): Promise<IAnswerModal> {
  const question = questions[questionNumber]
  const image = await loadImageWithCache(question.answer_image)
  return {
    isActive: true,
    title: "Правильно!",
    message: question.message,
    image: image,
  }
}

export function getProgress(): number {
  return ((questionNumber + 1) / questions.length) * 100
}

export function resetNumber() {
  questionNumber = 0
}

export function shuffleQuestions() {
  questions = shuffle(questions)
}

export function isWin() {
  console.log(questionNumber, questions.length)

  return questionNumber + 1 >= questions.length
}

function preload() {
  if (isWin()) {
    return
  }
  loadImageWithCache(questions[questionNumber + 1].question_image)
  loadImageWithCache(questions[questionNumber + 1].answer_image)
}

function loadImageWithCache(name: string) {
  return loadBlobWithCache(
    new URL(gameSettings.imagesPath + name, import.meta.url).href
  )
}
