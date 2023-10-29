import { quizStore, useQuizStore } from "../store"
import { Button } from "./Button"

export function AnswersSet() {
  const answers = useQuizStore((s) => s.question.answers)

  return (
    <div className="flex flex-col justify-between items-center w-full h-full">
      {answers.map((answer, i) => (
        <Button
          key={i}
          label={answer.title + (answer.right ? "!!!!!!!" : "")}
          onClick={() => quizStore.onChoiceAnswer(answer.right)}
          disabled={answer.disabled}
        />
      ))}
    </div>
  )
}
