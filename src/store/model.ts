export interface IState {
  screen: Screens
  livesCount: number
  gainsCount: number
  activeQuestionNumber: number
  questions: IQuestion[]
  modal: Modal
}

interface IQuestion {
  question: string
  message: string
  answers: string[]
  question_image: string
  answer_image: string
}

export enum Screens {
  Menu,
  Quiz,
}

interface Modal {
  active: boolean
  role: ModalRoles
  message: string
  image: string
}

export enum ModalRoles {
  Right,
  Wrong,
  Win,
  Lose,
}
