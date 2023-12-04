import { Screens } from "./types"
import * as store from "./store"
import { sound } from "../models/media"
import { platform } from "../models/platforms"

export { state as useQuizStore } from "./store"

const lives = [3, 2, 1]

export const quizStore = {
  async onStart(difficulty: number) {
    sound.click()
    store.setLives(lives[difficulty])
    store.loadQuestion()
    store.setScreen(Screens.Game)
    sound.music?.()
  },

  onChoiceAnswer: (right: boolean) => {
    if (right) {
      sound.right()
      store.setProgress()
      store.showModal()
    } else {
      sound.wrong()
      store.setLives((l) => --l)
      if (store.isDefeat()) {
        sound.defeat()
        store.setScreen(Screens.Defeat)
      }
    }
  },

  onModalOk: () => {
    sound.click()
    store.hideModal()
    if (store.isWin()) {
      sound.win()
      store.setScreen(Screens.Win)
    } else {
      store.nextStep()
      store.loadQuestion()
    }
  },

  async onEndOk() {
    sound.click()
    store.setScreen(Screens.Menu)
    await platform.onEnd()
    console.log(store.isWin())

    store.isWin() && (await platform.onWin())
    store.reset()
  },
}
