import { IPlayer } from "./types"

let ysdk
let player: IPlayer
let mode: string

export const yaGames = {
  initGame: async () => {
    ysdk = await window.YaGames.init()

    ysdk.features.LoadingAPI?.ready()

    player = await ysdk.getPlayer({ scopes: false })

    mode = player.getMode()

    return yaGames
  },

  setGains: async (data: number): Promise<boolean> => {
    if (mode != "light") {
      const res = await player.setStats({
        gains: data,
      })
      return res
    }
    return false
  },

  getGains: function (setter: (gains: number) => void): void {
    if (mode != "light") {
      player.getStats().then((s) => setter(s.gains))
    }
  },
}
