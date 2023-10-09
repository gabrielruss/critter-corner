import { RemSizes, colors } from "../../../../styles"
import { WrappableComponent } from "../../../../types"

export enum TextSize {
  small = RemSizes.large,
  medium = RemSizes.xlarge,
  large = RemSizes.xxlarge,
}

export enum TextWeight {
  light = "300",
  regular = "400",
  bold = "700",
}

export type TextProps = WrappableComponent & {
  size?: keyof typeof TextSize
  weight?: keyof typeof TextWeight
  color?: keyof typeof colors
}
