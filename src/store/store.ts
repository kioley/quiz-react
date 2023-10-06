import { IAnswerModal, IEndModal, IQuestion, IState, Screens } from "./types"
// import { zusim } from "../utils/zusim"
import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

export const state = create(
  immer<IState>(() => ({
    screen: Screens.Menu,
    lives: 0,
    gains: 0,
    progress: 0,
    question: {
      question: "",
      message: "",
      answers: [],
      image: "",
    },
    answerModal: {
      title: "",
      message: "",
      isActive: false,
      image: "",
    },
    endModal: {
      title: "",
      message: "",
      isActive: false,
    },
  }))
)

const [set, get] = [state.setState, state.getState]

export function setDifficulty(difficulty: number) {
  const lives = [3, 2, 1]
  set((state) => {
    state.lives = lives[difficulty]
  })
}

export function setScreen(screen: Screens) {
  set((state) => {
    state.screen = screen
  })
}

export function setQuestion(question: IQuestion) {
  set((state) => {
    state.question = question
  })
}

export function isRightAnswer(answer: string) {
  return answer === get().question.answers[0]
}

export function reduceLives(lives: number) {
  set((state) => {
    state.lives -= lives
  })
}

export function setAnswerModal(answerModaldata: IAnswerModal) {
  set((state) => {
    state.answerModal = answerModaldata
  })
}

export function setEndModal(endModalData: IEndModal) {
  set((state) => {
    state.endModal = endModalData
  })
}

export function isDefeat() {
  return get().lives < 1
}

export function isWin() {
  return get().progress >= 100
}

export function disableAllModals() {
  set((state) => {
    state.endModal.isActive = false
    state.answerModal.isActive = false
  })
}

export function setProgress(progress: number) {
  set((state) => {
    state.progress = progress
  })
}

export function setGains(gains: number) {
  set((state) => {
    state.gains = gains
  })
}

export function getGains() {
  return get().gains
}
