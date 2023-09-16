export class imagesPreloader {
  images: HTMLImageElement[]
  preloadImagesCount: number
  imageNames: string[]
  path: string
  preloadCounter: number

  constructor(preloadImagesCount: number, imageNames: string[], path: string) {
    this.images = []
    this.preloadImagesCount = preloadImagesCount
    this.imageNames = imageNames
    this.path = path
    this.preloadCounter = 0
    this._preload()
  }

  _preload() {
    for (let i = 0; i < this.preloadImagesCount; i++) {
      const image = new Image()
      image.src = this.path + this.imageNames[i]
      this.images.push(image)
      this.preloadCounter++
    }
  }

  rotate() {
    if (this.preloadCounter < this.imageNames.length) {
      this.images[0].src = this.path + this.imageNames[this.preloadCounter]

      this.images.push(this.images[0])
      this.preloadCounter++
    }

    this.images.shift()
  }
}
