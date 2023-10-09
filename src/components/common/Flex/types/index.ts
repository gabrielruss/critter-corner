import { WrappableComponent } from "../../../../types"

export type FlexProps = WrappableComponent & {
  direction?: "row" | "column"
  align?: "stretch" | "center" | "flex-start" | "flex-end"
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"

  gap?: number
}
