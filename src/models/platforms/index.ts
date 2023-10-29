import { yaGames } from "./yaGames"
import { gameSettings } from "../../settings"
import { IPlatform } from "./types"

export function initPlatform() {
  let platform: IPlatform | undefined
  const platformName = gameSettings.platform
  if (platformName === "YaGames") {
    platform = yaGames
  }

  if (!platform) return

  platform.initGame()
  return platform
}
