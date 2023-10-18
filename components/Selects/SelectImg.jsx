import React from 'react'
/* import styles from './SelectsImg.module.css' */
export default function SelectImg(props) {
  return (
    <div className={props.styles.selectImg}>
      <img src={props.pic} alt='/'/>
      <div className={props.styles.overlay}>
        <p>{props.name}</p>
      </div>
    </div>
  )
}
