export function addSpaceToCamelCase(str: string) {
  // if the string has a Capital letter after a lowercase letter, add a space between them
  return str.replace(/([a-z])([A-Z])/g, "$1 $2")
}
