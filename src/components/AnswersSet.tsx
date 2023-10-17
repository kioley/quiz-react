import { controller } from "../store"
import { useQuizStore } from "../store/quizStore"
import { Button } from "./Button"
import questions from "../models/friends-quiz-data.json"
import { useEffect, useMemo, useState } from "react"
import { shuffle } from "../utils/array"

const arr = [0, 1, 2, 3]

export function AnswersSet() {
  const questionIndex = useQuizStore((s) => s.questionIndex)
  const answers = questions[questionIndex].answers
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const answerIndexes = useMemo(() => shuffle(arr), [questionIndex])
  console.log("index:", questionIndex)

  // useEffect(() => {
  //   console.log("pre:", answerIndexes)
  //   set(shuffle(answerIndexes))
  //   console.log("post:", answerIndexes)
  // }, [questionIndex])
  // console.log("in:", answerIndexes)

  return (
    <div className="flex flex-col justify-between items-center w-full h-full">
      {answerIndexes.map((i) => (
        <Button
          key={i}
          label={answers[i] + i.toString()}
          onClick={() => controller.onChoiceAnswer(answers[i])}
        />
      ))}
    </div>
  )
}
