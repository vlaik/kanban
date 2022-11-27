import avatarIcon from '../../publick/Avatar.svg'
import styled from "styled-components"

const Icon = styled.img`
width: ${props => props.width};
heigth: ${props => props.height};
`

export const Avatar = (props) => {
  return (
    <Icon {...props} src={avatarIcon}/>
  )
}
