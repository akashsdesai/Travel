import React from 'react'
import styles from './Search.module.css'
import img1 from '../../assets/gold.png'

export default function Search() {
  const places =[
                  {value:1,place:'Grande Antigua'},
                  {value:1,place:'Grenda'},
                  {value:1,place:'Emerald Bay'},
                  {value:1,place:'Bora Bora'},
                  {value:1,place:'Key West'},
                  {value:1,place:'Maldives'},
                  {value:1,place:'Barbados'}
                ]
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <section className={styles.search} id='travel'>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>LUXURY INCLUDED VACATION FOR TWO PEOPLE</h2>
          <p className={styles.description}>Come experience the very pinnacle of luxury 
            Caribbean all-inclusive vacations for couples at 
            Sandals Resorts. Our luxury beach resorts, set along 
            the most gorgeous tropical settings and exquisite beaches 
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados 
            and Curaçao, feature unlimited gourmet dining, unique 
            bars serving premium liquors and wines, and every land 
            and water sport, including complimentary green fees at 
            our golf resorts and PADI® certified scuba diving at most 
            resorts. If you are planning a wedding, Sandals is the leader 
            in Caribbean destination weddings and honeymoon packages.
          </p>
          <div className={styles.searchCol2}>
            <div className={styles.box}>
              <div>
                <img className={styles.gold} src={img1} />
              </div>
              <div>
                <h3>WORLD'S LEADING</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.btn}>
                <h3>NO ONE INCLUDES MORE</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                <button>View Packages</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right} id='book'>
          <div className={styles.promo}>
            <h4 className={styles.save}>GET ADDITIONAL 7% OFF</h4>
            <p className={styles.timer}>12 HOURS LEFT!</p>
            <p className={styles.offer}>VIEW ALL CURRENT OFFERS</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.book}>
            <div className={styles.inputWrap}>
              <label>Destinantion</label>
              <select>
                {places.map(val=>{
                  return(
                    <option value={val.value}>{val.place}</option>
                  )
                })}
              </select>
              <div className={styles.date}>
                <div className={styles.inputWrap}>
                  <label>Check-In</label>
                  <input type='date' />
                </div>
                <div className={styles.inputWrap}>
                  <label>Check-Out</label>
                  <input type='date' />
                </div>
              </div>
              <button>Rates & Availabilities</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
