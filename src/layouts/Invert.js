import styled from 'styled-components'
import React from "react";
import { color } from 'styled-system'

const Image = styled.div([], color, {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',

  '& a': {
    color: 'inherit'
  }
})

Image.defaultProps = {
  color: 'background',
  bg: 'text'
}


const Box = props => <Image className="layout invert">{props.children}</Image>


export default Box
