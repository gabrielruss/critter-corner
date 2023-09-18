import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../../../styles"

const StyledLink = styled(Link)`
  /* remove Link styles */
  text-decoration: none;
  color: inherit;
  background-color: ${colors.white};
`

export default StyledLink
