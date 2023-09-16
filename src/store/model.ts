export interface IState {
  screen: Screens
  livesCount: number
  gainsCount: number
  modal: IModal
  question: IQuestion
}

interface IQuestion {
  question: string
  message: string
  answers: string[]
  image: string
}

interface IModal {
  title: string
  message: string
  image: string
  active: boolean
  role: ModalRoles
}

export enum Screens {
  Menu,
  Quiz,
}

export enum ModalRoles {
  Answer,
  GameOver,
}
