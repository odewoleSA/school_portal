import React from 'react'

function AboutCard(props) {
  return (
    <>
        <li style={{marginRight: '2px'}}>
            <img src={props.img_name} className={props.img_class} />
            <figcaption>{props.figtext}</figcaption>
        </li>
    </>
  )
}

export default AboutCard;
