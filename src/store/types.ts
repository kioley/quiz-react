export interface IState {
  screen: Screens
  lives: number
  gains: number
  progress: number
  isModalActive: boolean
  question: IQuestion
}

export interface IQuestion {
  title: string
  message: string
  answers: IAnswer[]
  questionImage: string
  answerImage: string
}

export interface IAnswer {
  title: string
  right: boolean
  disabled: boolean
}

export enum Screens {
  Menu,
  Game,
  Win,
  Defeat,
}
