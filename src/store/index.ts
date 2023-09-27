// Controller
import { Screens } from "./interfaces"
import * as store from "./store"
import * as questions from "../models/questions"
import { sound } from "../models/preload"
import { endModalData } from "../models/presets"
// import * as yaGames from "../models/yaGames"

export const useQuizStore = store.state

// sound.intro.loop = true

export function onStart(difficulty: number) {
  sound.click.play()
  sound.intro.play()
  store.setScreen(Screens.Quiz)
  store.setDifficulty(difficulty)
  questions.setQuestionNumber(0)
  store.setProgress(0)
  store.setQuestion()
}

export function onChoiceAnswer(answer: string) {
  const right = store.isRightAnswer(answer)

  if (right) {
    sound.right.play()
    store.setProgress(questions.getProgress())
    store.setGains(Math.floor((questions.getProgress() + 1e-9) / (100 / 3)))
    store.setAnswerModal(questions.getAnswer())
  } else {
    sound.wrong.play()
    store.reduceLives(1)
    if (store.isDefeat()) {
      sound.defeat.play()
      store.setEndModal(endModalData.defeat)
    }
  }

  return right
}

export function onAnswerModalOk() {
  store.disableAllModals()

  if (store.isWin()) {
    sound.win.play()
    store.setEndModal(endModalData.win)
  } else {
    questions.rotateQuestions()
    store.setQuestion()
  }
}

export function onEndModalOk() {
  store.disableAllModals()
  store.setScreen(Screens.Menu)
  // sound.intro.play()
}
