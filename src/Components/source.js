// example Layout.js
import React from "react";
import styled from 'styled-components'


const Source = styled.div([],  {

  position: 'absolute',
  left: 0,
  fontSize: '10px',
  top: 'calc(100% - 3rem)',
  height: '3rem',
  width: '100%',
  overflow: 'visible',
  backgroundColor: 'black',
  color: 'gray',
  textAlign: "right",
  paddingRight: "2em",

  // width: '100vw',
  // height: '100vh',
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  // backgroundColor: 'white',
  //
  '& a': {
    color: '#1ba9d5'
  }
})

export default Source;
