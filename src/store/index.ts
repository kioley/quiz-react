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
    sound.intro?.()
    store.setScreen(Screens.Quiz)
    store.setDifficulty(difficulty)
    questions.setQuestionNumber(0)
    questions.shuffleQuestions()
    store.setProgress(0)

    store.setQuestion(questions.getQuestion())
  },

  onChoiceAnswer: (answer: string) => {
    const right = store.isRightAnswer(answer)

    if (right) {
      sound.right()
      store.setProgress(questions.getProgress())
      setGains()
      store.setAnswerModal(questions.getAnswer())
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
    store.disableAllModals()

    if (store.isWin()) {
      sound.win()
      store.setEndModal(endModalData.win)
    } else {
      questions.rotateQuestions()
      store.setQuestion(questions.getQuestion())
    }
  },

  onEndModalOk: () => {
    store.disableAllModals()
    store.setScreen(Screens.Menu)
  },
}

function setGains() {
  const gains = Math.floor((questions.getProgress() + 1e-9) / (100 / 3))
  if (gains != store.getGains()) {
    store.setGains(gains)
    dataAPI?.setGains(gains)
  }
}
