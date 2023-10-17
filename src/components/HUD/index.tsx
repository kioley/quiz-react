import { IconBar } from "./IconBar"
import { ProgressBar } from "./ProgressBar"
import { images } from "../../models/media"
import { useQuizStore } from "../../store/quizStore"

function Hud() {
  const gainsCount = useQuizStore((s) => s.gains)
  const livesCount = useQuizStore((s) => s.lives)
  const progress = useQuizStore((s) => s.progress)

  return (
    <>
      <div className="w-full h-full flex flex-row items-center justify-between">
        <IconBar url={images.star} name="gains" count={gainsCount} />
        <ProgressBar progress={progress} />
        <IconBar url={images.heart} name="lives" count={livesCount} />
      </div>
    </>
  )
}

export default Hud
