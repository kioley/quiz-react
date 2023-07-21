import IconBar from "./IconBar"
import starImgURL from "/src/assets/gui/star.png"
import heartImgURL from "/src/assets/gui/heart.png"
import ProgressBar from "./ProgressBar"
import { useQuizStore } from "../../store"

function Hud() {
  const gainsCount = useQuizStore((s) => s.gainsCount)
  const livesCount = useQuizStore((s) => s.livesCount)
  return (
    <>
      <div className="w-full flex flex-row items-center justify-between">
        <IconBar url={starImgURL} name="gains" count={gainsCount} />
        <ProgressBar />
        <IconBar url={heartImgURL} name="lives" count={livesCount} />
      </div>
    </>
  )
}

export default Hud
