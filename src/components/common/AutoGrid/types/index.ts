import { WrappableComponent } from "../../../../types"

export type AutoGridProps = WrappableComponent & {
  minWidth?: number
  maxWidth?: number | string
  gap?: number
  justifyItems?:
    | "center"
    | "stretch"
    | "space-around"
    | "space-between"
    | "space-evenly"
}
