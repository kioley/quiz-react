import { IState } from "./types"
import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { createNumArray, shuffle } from "../utils/array"
import questions from "../models/friends-quiz-data.json"
import { getPercent } from "../utils/getPercent"

const questionIndexes = createNumArray(questions.length)
let step = 0

export const useQuizStore = create(
  immer<IState>(() => ({
    questionIndex: questionIndexes[step],
    lives: 0,
    gains: 0,
    progress: 0,
  }))
)

const [set, get] = [useQuizStore.setState, useQuizStore.getState]

export function start(difficulty: number) {
  const lives = [3, 2, 1]
  set((s) => {
    step = 0
    s.gains = 0
    s.progress = 0
    s.lives = lives[difficulty]
    s.questionIndex = questionIndexes[step]
  })
}

export function answer(answer: string) {
  const right = answer === questions[questionIndexes[step]].answers[0]

  if (right) {
    set((s) => {
      s.progress = getPercent(step, questions.length)
      const gains = Math.floor((s.progress + 1e-9) / (100 / 3))
      if (gains != s.gains) {
        s.gains = gains
      }
    })
  } else {
    set((s) => {
      s.lives--
    })
  }

  return right
}

export function nextQuestion() {
  set((s) => {
    s.questionIndex = questionIndexes[++step]
  })
}

export function end() {
  shuffle(questionIndexes)
}

export function isDefeat() {
  return get().lives < 1
}

export function isWin() {
  return get().progress >= 100
}
