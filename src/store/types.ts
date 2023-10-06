export interface IState {
  screen: Screens
  lives: number
  gains: number
  answerModal: IAnswerModal
  endModal: IEndModal
  question: IQuestion
  progress: number
}

export interface IQuestion {
  question: string
  message: string
  answers: string[]
  image: string
}

export interface IAnswerModal {
  title: string
  message: string
  isActive: boolean
  // role: ModalRoles
  image: string
}

export interface IEndModal {
  title: string
  message: string
  isActive: boolean
}

export enum Screens {
  Menu,
  Quiz,
}

export enum ModalRoles {
  Answer,
  Win,
  Defeat,
}
