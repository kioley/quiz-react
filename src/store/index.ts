import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import data from "../data/friends-quiz-data.json"
import { IState, ModalRoles, Screens } from "./model"
import rightSoundPath from "../assets/sound/right.mp3"
import wrongSoundPath from "../assets/sound/wrong.mp3"
import clickSoundPath from "../assets/sound/click.mp3"

function zusim<T>(store: T) {
  return create(immer<T>(() => store))
}

export const useQuizStore = zusim<IState>({
  screen: Screens.Quiz,
  livesCount: 3,
  gainsCount: 3,
  activeQuestionNumber: 0,
  questions: data,
  modal: {
    active: false,
    role: ModalRoles.Right,
    message: "Hello Kitty!",
    image: "question.png",
  },
})

const [set, get] = [useQuizStore.setState, useQuizStore.getState]

console.log(get())

export function choiceAnswer(answer: string) {
  const state = get()
  const question = state.questions[state.activeQuestionNumber]
  const right = answer === question.answers[0]

  set((state) => {
    !right && state.livesCount--
    console.log(state.livesCount)
    if (right) {
      new Audio(rightSoundPath).play()
      state.modal = {
        active: true,
        role: ModalRoles.Right,
        message: question.message,
        image: "/images/" + question.answer_image,
      }
    } else {
      new Audio(wrongSoundPath).play()
    }
  })

  return right
}

export function setScreen(screen: Screens) {
  set((state) => {
    state.screen = screen
  })
}

export function start(complexity: number) {
  const lives = [3, 2, 1]
  set((state) => {
    state.livesCount = lives[complexity]
    state.screen = Screens.Quiz
  })
  new Audio(clickSoundPath).play()
  return false
}
