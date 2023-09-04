import React from 'react'

function AboutCardText(props) {

const p_style = {
    textAlign: 'justify',
    lineHeight: '0.8',
    color: 'white'
};

  return (
    <>
      <p style={p_style}>
          {props.text}
      </p>
    </>
  )
}

export default AboutCardText;
