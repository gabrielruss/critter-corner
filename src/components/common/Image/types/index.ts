import { borderRadius } from "../../../../styles"
import { WrappableComponent } from "../../../../types"

export type ImageProps = WrappableComponent & {
  src: string
  alt: string
  height?: number
  borderRadius?: keyof typeof borderRadius
}
