import { controller, useQuizStore } from "../store"
import { Button } from "./Button"

export function AnswersSet() {
  const answers = [...useQuizStore((s) => s.question.answers)]
  answers.sort(() => Math.random() - 0.5)

  return (
    <div className="flex flex-col justify-between items-center w-full h-full">
      {answers.map((answer, i) => (
        <Button
          key={i}
          label={answer}
          onClick={() => controller.onChoiceAnswer(answer)}
        />
      ))}
    </div>
  )
}
