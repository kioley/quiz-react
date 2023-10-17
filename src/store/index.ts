import { Screens } from "./types"
import * as quizStore from "./quizStore"
import * as viewStore from "./viewStore"
import { sound } from "../models/media"
import { initPlatform } from "../models/platforms"

initPlatform()

export const controller = {
  onStart: async (difficulty: number) => {
    sound.click()
    quizStore.start(difficulty)
    viewStore.setScreen(Screens.Quiz)
    sound.music?.()
  },

  onChoiceAnswer: (answer: string) => {
    const right = quizStore.answer(answer)

    if (right) {
      sound.right()
      viewStore.enableModal()
    } else {
      sound.wrong()
      if (quizStore.isDefeat()) {
        sound.defeat()
        viewStore.setScreen(Screens.Defeat)
      }
    }

    return right
  },

  onModalOk: () => {
    sound.click()
    viewStore.disableModal()
    if (quizStore.isWin()) {
      sound.win()
      viewStore.setScreen(Screens.Win)
    } else {
      quizStore.nextQuestion()
    }
  },

  onEndOk: () => {
    sound.click()
    viewStore.setScreen(Screens.Menu)
    quizStore.end()
  },
}
