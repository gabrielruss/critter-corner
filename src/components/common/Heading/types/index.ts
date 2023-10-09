import { colors, fonts } from "../../../../styles"
import { WrappableComponent } from "../../../../types"

export enum HeadingSizes {
  small = "1.5rem",
  default = "2rem",
  medium = "2.5rem",
  large = "3.5rem",
  xlarge = "4.5rem",
}

export type HeadingProps = WrappableComponent & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  size?: keyof typeof HeadingSizes
  color?: keyof typeof colors
  font?: keyof typeof fonts
  margin?: number | "revert"
}
