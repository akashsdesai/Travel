import React from 'react'
import styles from './Navbar.module.css'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCancelCircle} from 'react-icons/im'
import { useState } from 'react'
const Navbar = () => {
  const [status, checkStatus]=useState(false)
  function handleClick(){
    checkStatus(!status)
  }
  
  return (
    <section className={styles.navBar} >
      <div className={styles.logo}>
        <h2><a href='/'>BEACHES</a></h2>
      </div>
      <div className={styles.menu}>
        <div className={styles.hamburger} onClick={handleClick}>
          {status ? <ImCancelCircle/>:<GiHamburgerMenu className={styles.ham} />}
        </div>
        <div className={`${styles.menuItems} ${status && styles.openMenu}`} >
        <ul className={styles.list} onClick={()=>{
          checkStatus(!status)
        }}>
          <li ><a href='#home'>Home</a></li>
          <li ><a href='#destination'>Destination</a></li>
          <li ><a href='#travel'>Travel</a></li>
          <li ><a href='#book'>Book</a></li>
          <li ><a href='#views'>Views</a></li>
        </ul>
        <div className={styles.icons}>
            <BiSearch className={styles.icon} />
            <BsPerson className={styles.icon} />
        </div>
        <div className={styles.btn} onClick={()=>{
          checkStatus(!status)
        }}>
            <button>Serach</button>
            <button>Account</button>
        </div>

        </div>
      </div>
    </section>
  )
}

export default Navbar