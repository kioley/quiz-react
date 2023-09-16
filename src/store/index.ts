import { IState, Screens, ModalRoles } from "./model"
import rightSoundPath from "../assets/audio/right.mp3"
import wrongSoundPath from "../assets/audio/wrong.mp3"
import clickSoundPath from "../assets/audio/click.mp3"
import { getAnswer, getQuestion, rotateQuestions } from "./quizData"
import { zusim } from "../utils/zusim"

const rightSound = new Audio(rightSoundPath)
const wrongSound = new Audio(wrongSoundPath)
const clickSound = new Audio(clickSoundPath)

export const useQuizStore = zusim<IState>({
  screen: Screens.Menu,
  livesCount: 3,
  gainsCount: 3,
  modal: {
    title: "",
    message: "",
    image: "",
    active: false,
    role: ModalRoles.Answer,
  },
  question: {
    question: "",
    message: "",
    answers: [],
    image: "",
  },
})

const [set, get] = [useQuizStore.setState, useQuizStore.getState]

export function start(difficulty: number) {
  setDifficulty(difficulty)
  setScreen(Screens.Quiz)
  setQuestion()
  clickSound.play()
}

function setDifficulty(difficulty: number) {
  const lives = [3, 2, 1]
  set((state) => {
    state.livesCount = lives[difficulty]
  })
}

export function setScreen(screen: Screens) {
  set((state) => {
    state.screen = screen
  })
}

function setQuestion() {
  set((state) => {
    state.question = getQuestion()
  })
}

export function choiceAnswer(answer: string) {
  const right = answer === get().question.answers[0]

  if (right) {
    const answer = getAnswer()
    set((state) => {
      state.modal = {
        title: "Правильно!",
        message: answer.message,
        image: answer.image,
        active: true,
        role: ModalRoles.Answer,
      }
    })
    rightSound.play()
  } else {
    set((state) => {
      state.livesCount--
    })
    wrongSound.play()
  }

  return right
}

export function nextQuestion() {
  set((state) => {
    rotateQuestions()
    state.modal.active = false
  })
  setQuestion()
}
