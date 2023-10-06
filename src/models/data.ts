import { IEndModal } from "../store/types"

export const endModalData: { win: IEndModal; defeat: IEndModal } = {
  defeat: {
    title: "Конец",
    message: "Ничего, получится в следующий раз!",
    isActive: true,
  },
  win: {
    title: "Победа!",
    message: "Ура, у тебя получилось!",
    isActive: true,
  },
}
