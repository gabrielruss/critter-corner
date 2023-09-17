import { ContentfulImage } from "../types/contentful"

export const getContentfulImageUrl = (file: ContentfulImage): string => {
  return file.fields.file.en_US.url
}
