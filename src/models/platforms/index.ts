import { yaGames } from "./yaGames"
import { IPlatform } from "./types"

const p = initPlatform()

export const platform = {
  async onEnd() {
    await p?.onEnd()
  },
  async onWin() {
    await p?.onWin()
  },
}

function initPlatform() {
  let platform: IPlatform | undefined
  const platformScript: HTMLScriptElement | null =
    document.querySelector("#platform")
  if (platformScript?.src === "https://yandex.ru/games/sdk/v2") {
    platform = yaGames
  }

  if (!platform) return

  platform.init()
  return platform
}
