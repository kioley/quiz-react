// Controller
import { Screens } from "./types"
import * as store from "./store"
import * as questions from "../models/questions"
import { sound } from "../models/media"
import { endModalData } from "../models/data"
import { init } from "./init"

export const useQuizStore = store.state

const dataAPI = init()

export const controller = {
  onStart: (difficulty: number) => {
    sound.click()
    sound.music?.()
    store.setScreen(Screens.Quiz)
    store.setDifficulty(difficulty)
    questions.resetNumber()
    store.setProgress(0)

    questions.getQuestion().then(store.setQuestion)
  },

  onChoiceAnswer: (answer: string) => {
    const right = store.isRightAnswer(answer)

    if (right) {
      sound.right()
      store.setProgress(questions.getProgress())
      setGains()
      questions.getAnswer().then(store.setAnswerModal)
    } else {
      sound.wrong()
      store.reduceLives(1)
      if (store.isDefeat()) {
        sound.defeat()
        store.setEndModal(endModalData.defeat)
      }
    }

    return right
  },

  onAnswerModalOk: () => {
    if (store.isWin()) {
      sound.win()
      store.disableAllModals()
      store.setEndModal(endModalData.win)
    } else {
      questions.increaseQuestionNumber()
      questions
        .getQuestion()
        .then(store.setQuestion)
        .then(store.disableAllModals)
    }
  },

  onEndModalOk: () => {
    store.disableAllModals()
    store.setScreen(Screens.Menu)
    questions.shuffleQuestions()
  },
}

function setGains() {
  const gains = Math.floor((questions.getProgress() + 1e-9) / (100 / 3))
  if (gains != store.getGains()) {
    store.setGains(gains)
    dataAPI?.setGains(gains)
  }
}
