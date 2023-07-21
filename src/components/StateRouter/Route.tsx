import { ReactElement } from "react"

export interface routeProps {
  element: ReactElement
  screen: number
}

export function Route({ element }: routeProps) {
  // console.log("route");
  // console.log();
  return <>routeeee{element}</>
}
