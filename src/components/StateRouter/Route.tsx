import { ReactElement } from "react"

export interface routeProps {
  element: ReactElement
  screen: number
}

export function Route({ element }: routeProps) {
  return <>{element}</>
}
