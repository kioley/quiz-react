import { Button } from "./Button"
import { useMemo } from "react"
import { quizStore, useQuizStore } from "../store"
import { randomize } from "../utils/etc"

const titles = ["Верно!", "Правильно!", "Да!"]

export function Modal() {
  const question = useQuizStore((s) => s.question)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const title = useMemo(() => titles[randomize(titles.length)], [question])

  return (
    <div className="fixed w-full h-full flex items-center justify-center">
      <div className="w-11/12 h-[90%] p-[10%] bg-black bg-opacity-50 backdrop-blur border rounded-2xl border-sky-500 flex flex-col justify-between">
        <p className="text-[10cqi] text-white text-center font-bold">{title}</p>
        <p className="text-[5cqi] text-white text-center">{question.message}</p>
        <img src={question.answerImage} alt="Image" />
        <Button label="OK" onClick={quizStore.onModalOk} />
      </div>
    </div>
  )
}
