import { JSXElementConstructor, ReactElement } from "react"
import { routeProps } from "../../../src/components/StateRouter/Route"

export function StateRouter({
  children,
  screen,
}: {
  children: ReactElement<routeProps, JSXElementConstructor<routeProps>>[]
  screen: number
}) {
  return <>{children.filter((c) => c.props.screen === screen)}</>
}
