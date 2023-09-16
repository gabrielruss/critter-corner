const fonts = {
  default: "-apple-system, Roboto, sans-serif, serif",
  heading: "Gloria Hallelujah, cursive",
}

export enum RemSizes {
  /**
   * 4px
   */
  xsmall = "0.25rem",
  /**
   * 8px
   */
  small = "0.5rem",
  /**
   * 12px
   */
  medium = "0.75rem",
  /**
   * 16px
   */
  large = "1rem",
  /**
   * 24px
   */
  xlarge = "1.5rem",
  /**
   * 32px
   */
  xxlarge = "2rem",
  /**
   * 48px
   */
  xxxlarge = "3rem",
  /**
   * 64px
   */
  huge = "4rem",
}

const colors = {
  white: "#fafafa",
  black: "#2d2d2d",
  teal: "#17B890",
  flamingo: "#fb9f89",
  blue: "#145C9E",
}

const borderRadius = {
  small: RemSizes.small,
  medium: RemSizes.medium,
  large: RemSizes.large,
}

export { colors, fonts, borderRadius }
