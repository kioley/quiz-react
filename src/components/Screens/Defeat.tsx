// import { images } from "../../models/media"
import { quizStore, useQuizStore } from "../../store"
import { Button } from "../Button"
import starImgSrc from "/src/assets/gui/star.png"

export function Defeat() {
  const gains = useQuizStore((s) => s.gains)

  return (
    <div className="fixed w-full h-full flex items-center justify-center">
      <div className="w-11/12 h-[90%] p-[10%] bg-black bg-opacity-50 backdrop-blur border rounded-2xl border-sky-500 flex flex-col justify-between">
        <p className="text-[10cqi] text-white text-center font-bold">Конец</p>
        <p className="text-[8cqi] text-white text-center">
          Ничего, получится в следующий раз!
        </p>
        <div className="flex flex-row justify-center">
          {[...Array(gains)].map((_, i) => (
            <div className="m-[3%]" key={i}>
              <img src={starImgSrc} alt="star" />
            </div>
          ))}
        </div>
        <Button label="OK" onClick={quizStore.onEndOk} />
      </div>
    </div>
  )
}
