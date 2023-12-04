export interface IPlatform {
  init(): Promise<IPlatform>
  onEnd(): Promise<void>
  onWin(): Promise<void>
}
