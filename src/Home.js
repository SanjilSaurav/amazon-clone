import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='Home'>
      <div className='home_container'>
        <img 
        className='home_image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=''/>
      </div>

      <div className='home_row'>
        <Product
          title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={29.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        />
        <Product
          title = "MI Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery Charging | Input- Type C | Micro USB| Triple Output | Sandstone Black"
          price = {239.0}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/71lVwl3q-kL._AC_UL160_SR160,160_.jpg"
        />
      </div>

      <div className='home_row'>
        <Product
          id="456"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_5X466_.jpg"
        />
        <Product
          id = "457"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobileX2$.jpg"
        />
        <Product
          id = "458"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        />
        {/*product*/}
        {/*product*/}
        {/*product*/}
      </div>

      <div className='home_row'>
        <Product
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
        {/*product*/}
      </div>
    </div>
  )
}

export default Home
