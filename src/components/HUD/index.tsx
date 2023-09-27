import { IconBar } from "./IconBar"
import starImgURL from "/src/assets/gui/star.png"
import heartImgURL from "/src/assets/gui/heart.png"
import { ProgressBar } from "./ProgressBar"
import { useQuizStore } from "../../store"

function Hud() {
  const gainsCount = useQuizStore((s) => s.gains)
  const livesCount = useQuizStore((s) => s.lives)
  const progress = useQuizStore((s) => s.progress)

  return (
    <>
      <div className="w-full flex flex-row items-center justify-between">
        <IconBar url={starImgURL} name="gains" count={gainsCount} />
        <ProgressBar progress={progress} />
        <IconBar url={heartImgURL} name="lives" count={livesCount} />
      </div>
    </>
  )
}

export default Hud
