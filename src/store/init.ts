import { yaGames } from "../models/yaGames"
// import * as store from "./store"
import { Platforms, gameSettings } from "../gameSettings"

export function init() {
  let platform
  const platformName = gameSettings.platform
  if (platformName === Platforms.YaGames) {
    platform = yaGames
  } else {
    platform = undefined
  }

  if (!platform) return

  platform.initGame()
  // .then((api) => api.getGains(store.setGains))
  return platform
}
