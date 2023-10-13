import data from "../assets/data/friends-quiz-data.json"
import { shuffle } from "../utils/shuffle"
import { loadBlobWithCache } from "../utils/loadBlob"
import { IAnswerModal, IQuestion } from "../store/types"
import { gameSettings } from "../gameSettings"

let questions = shuffle(data)
let questionNumber = -1
preload()

export function increaseQuestionNumber(): void {
  questionNumber++
}

export async function getQuestion(): Promise<IQuestion> {
  const question = questions[questionNumber]
  preload()

  const image = await loadImageWithCache(question.question_image)

  return {
    title: question.question,
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
