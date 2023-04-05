import React from 'react'
import POPOSSpace from './POPOSSpace'
import './POPOSList.css';
import data from './sfpopos-data.json'

function POPOSList() {

  const spaces = data.map(( { title, address, images, hours } ) => {
    return (
      <POPOSSpace
        key = {title}
        hour = {hours}
        name={title}
        address={address}
        image={images[0]}
      />
    )
  })

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}
export default POPOSList
