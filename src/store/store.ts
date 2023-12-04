import { IAnswer, IQuestion, IState, Screens } from "./types"
import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { createNumArray, shuffle } from "../utils/array"
import { getPercent } from "../utils/etc"
import questions from "../models/friends-quiz-data.json"
import gameSettings from "../settings.json"
import { loadBlobWithCache } from "../utils/loadBlob"

const questionIndexes = shuffle(createNumArray(questions.length))
let step = 0
const imagesPath = gameSettings.imagesPath
preloadImages()

export const state = create(
  immer<IState>(() => ({
    lives: 0,
    gains: 0,
    progress: 0,
    screen: Screens.Menu,
    isModalActive: false,
    question: getQuestion("", ""),
  }))
)

const [set, get] = [state.setState, state.getState]

function getQuestion(questionImage: string, answerImage: string): IQuestion {
  const data = questions[questionIndexes[step]]
  return {
    title: data.question,
    message: data.message,
    answerImage: answerImage,
    questionImage: questionImage,
    answers: shuffle(
      data.answers.map<IAnswer>((a, i) => ({
        title: a,
        right: i === 0,
        disabled: false,
      }))
    ),
  }
}

export function reset() {
  set((s) => {
    step = 0
    s.gains = 0
    s.progress = 0
    s.lives = 0
  })

  shuffle(questionIndexes)
}

export function setLives(lives: number | ((lives: number) => number)) {
  set((s) => {
    if (typeof lives === "number") {
      s.lives = lives
    } else {
      s.lives = lives(s.lives)
    }
  })
}

export function setScreen(screen: Screens) {
  set((s) => {
    s.screen = screen
  })
}

export function setProgress() {
  set((s) => {
    s.progress = getPercent(step, questions.length)

    const gains = Math.floor((s.progress + 1e-9) / (100 / 3))
    if (gains != s.gains) {
      s.gains = gains
    }
  })
}

export function isDefeat() {
  return get().lives < 1
}

export function isWin() {
  return get().progress >= 100
}

export async function nextStep() {
  step++
}

export async function loadQuestion() {
  const images = await Promise.all(loadImages(step))

  set((s) => {
    s.question = getQuestion(...images)
  })

  preloadImages()
}

function loadImages(step: number): [Promise<string>, Promise<string>] {
  const question = questions[questionIndexes[step]]
  return [
    loadBlobWithCache(imagesPath + question.id + ".jpg"),
    loadBlobWithCache(imagesPath + "0" + question.id + ".jpg"),
  ]
}

function preloadImages() {
  for (
    let i = 0;
    i < gameSettings.preloadImagesCount && step + i < questions.length;
    i++
  ) {
    loadImages(step + i)
  }
}

export function showModal() {
  set((s) => {
    s.isModalActive = true
  })
}

export function hideModal() {
  set((s) => {
    s.isModalActive = false
  })
}
