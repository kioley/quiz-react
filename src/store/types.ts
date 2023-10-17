export interface IState {
  questionIndex: number
  lives: number
  gains: number
  progress: number
}

export interface IQuestion {
  title: string
  message: string
  answers: string[]
  questionImage: string
  answerImage: string
}

export interface IView {
  screen: Screens
  isModalActive: boolean
}

export enum Screens {
  Menu,
  Quiz,
  Win,
  Defeat,
}

// export interface IAnswerModal {
//   title: string
//   message: string
//   isActive: boolean
//   // role: ModalRoles
//   image: string
// }

// export interface IEndModal {
//   title: string
//   message: string
//   isActive: boolean
// }

// export enum ModalRoles {
//   Answer,
//   Win,
//   Defeat,
// }
