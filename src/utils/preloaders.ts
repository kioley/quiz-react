export async function preloadAsURL(url: string): Promise<string> {
  const response = await fetch(url)
  const blob = await response.blob()
  return URL.createObjectURL(blob)
}

export class imagesPreloader {
  imageURLs: string[]
  preloadImagesCount: number
  imageNames: string[]
  path: string
  preloadCounter: number

  constructor(preloadImagesCount: number, imageNames: string[], path: string) {
    this.imageURLs = []
    this.preloadImagesCount = preloadImagesCount
    this.imageNames = imageNames
    this.path = path
    this.preloadCounter = 0
    this._preloadAtStart()
  }

  _preloadAtStart() {
    while (this.preloadCounter < this.preloadImagesCount) {
      const i = this.preloadCounter
      this._preloadImage(i).then((url) => (this.imageURLs[i] = url))
      this.preloadCounter++
    }
  }

  async _preloadImage(num: number) {
    const src = this.path + this.imageNames[num]
    return await preloadAsURL(src)
  }

  rotate() {
    const i = this.preloadCounter
    if (i < this.imageNames.length) {
      this._preloadImage(i).then((url) => (this.imageURLs[i] = url))
      this.preloadCounter++
    }
  }

  getImageURL(num: number): string {
    console.log(this.preloadCounter - 2)
    console.log(this.imageURLs)
    console.log(this.imageURLs[num])

    return this.imageURLs[num]
  }
}
