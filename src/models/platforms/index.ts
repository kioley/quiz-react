import { yaGames } from "./yaGames"
// import * as store from "./store"
import { Platforms, gameSettings } from "../../gameSettings"
import { IPlatform } from "./types"

export function initPlatform() {
  let platform: IPlatform | undefined
  const platformName = gameSettings.platform
  if (platformName === Platforms.YaGames) {
    platform = yaGames
    // } else {
    //   platform = undefined
  }

  if (!platform) return

  platform.initGame()
  // .then((api) => api.getGains(store.setGains))
  return platform
}
