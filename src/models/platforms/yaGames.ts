import { IPlatform } from "./types"
import { IYsdk } from "./yaGamesTypes"

let ysdk: IYsdk
// let player: IPlayer
// let mode: string

export const yaGames: IPlatform = {
  init: async () => {
    ysdk = await window.YaGames.init()

    ysdk.features.LoadingAPI?.ready()

    console.log("READY")

    // player = await ysdk.getPlayer({ scopes: false })

    // mode = player.getMode()

    return yaGames
  },

  onEnd() {
    console.log("END")
    return new Promise((resolve) => {
      ysdk.adv.showFullscreenAdv({
        callbacks: {
          onClose() {
            resolve()
          },
          onError() {
            resolve()
          },
          onOffline() {
            resolve()
          },
        },
      })
    })
  },

  async onWin() {
    const { value, reason } = await ysdk.feedback.canReview()

    if (value) {
      const { feedbackSent } = await ysdk.feedback.requestReview()
      console.log(feedbackSent)
    } else {
      console.log(reason)
    }
  },
  // setGains: async (data: number): Promise<boolean> => {
  //   if (mode != "light") {
  //     const res = await player.setStats({
  //       gains: data,
  //     })
  //     return res
  //   }
  //   return false
  // },

  // getGains: function (setter: (gains: number) => void): void {
  //   if (mode != "light") {
  //     player.getStats().then((s) => setter(s.gains))
  //   }
  // },
}
