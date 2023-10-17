// import data from "../data/friends-quiz-data.json"
// import { shuffle } from "../utils/getPercent"
// import { loadBlobWithCache } from "../utils/loadBlob"
// import { IAnswerModal, IQuestion } from "../store/types"
// import { gameSettings } from "../gameSettings"

// let questions = shuffle(data)
// let questionNumber = -1
// preload(questions[questionNumber + 1])

// export function increaseQuestionNumber(): void {
//   questionNumber++
// }

// export async function getQuestion(): Promise<IQuestion> {
//   const question = questions[questionNumber]
//   preload(questions[questionNumber + 1])

//   const image = await loadImageWithCache(question.questionImage)

//   return {
//     title: question.title,
//     answers: question.answers,
//     questionImage: image,
//   }
// }

// export async function getAnswer(): Promise<IAnswerModal> {
//   const question = questions[questionNumber]

//   const image = await loadImageWithCache(question.answer_image)
//   return {
//     isActive: true,
//     title: "Правильно!",
//     message: question.message,
//     image: image,
//   }
// }

// export function getProgress(): number {
//   return ((questionNumber + 1) / questions.length) * 100
// }

// export function resetNumber() {
//   questionNumber = 0
// }

// export function shuffleQuestions() {
//   questions = shuffle(questions)
// }

// export function isWin() {
//   return questionNumber + 1 >= questions.length
// }

// function preload(question: IQuestion) {
//   if (isWin()) {
//     return
//   }
//   loadImageWithCache(question.questionImage)
//   loadImageWithCache(question.answerImage)
// }

// function loadImageWithCache(name: string) {
//   // new URL(gameSettings.imagesPath + name, import.meta.url).href
//   return loadBlobWithCache(gameSettings.imagesPath + name)
// }
