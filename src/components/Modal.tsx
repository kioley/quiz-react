import { controller } from "../store"
import { useQuizStore } from "../store/quizStore"
import { Button } from "./Button"
import questions from "../models/friends-quiz-data.json"
import { useViewStore } from "../store/viewStore"
import { useMemo } from "react"

const titles = ["Верно!", "Правильно!", "Да!"]

export function Modal() {
  const questionIndex = useQuizStore((s) => s.questionIndex)
  const isModalActive = useViewStore((s) => s.isModalActive)
  const title = useMemo(
    () => titles[Math.floor(Math.random() * titles.length)],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [questionIndex]
  )

  return (
    isModalActive && (
      <div className="fixed w-full h-full flex items-center justify-center">
        <div className="w-11/12 h-[90%] p-[10%] bg-black bg-opacity-50 backdrop-blur border rounded-2xl border-sky-500 flex flex-col justify-between">
          <p className="text-[10cqi] text-white text-center font-bold">
            {title}
          </p>
          <p className="text-[5cqi] text-white text-center">
            {questions[questionIndex].message}
          </p>
          <img
            src={"questionImages/" + questions[questionIndex].answerImage}
            alt="Image"
          />
          <Button label="OK" onClick={controller.onModalOk} />
        </div>
      </div>
    )
  )
}
