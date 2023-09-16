import { choiceAnswer, useQuizStore } from "../store"
import { Button } from "./Button"

export function AnswersSet() {
  const answers = [...useQuizStore((s) => s.question.answers)]
  answers.sort(() => Math.random() - 0.5)

  return (
    <div className="w-[73%] basis-[40%] mb-2 flex flex-col justify-between items-center">
      {answers.map((answer, i) => (
        <Button key={i} label={answer} onClick={() => choiceAnswer(answer)} />
      ))}
    </div>
  )
}
