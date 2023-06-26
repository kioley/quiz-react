interface IState {
  questions: IQuestion[]
}

interface IQuestion {
  question: string
  message: string
  answers: string[]
  question_image: string
  answer_image: string
}
