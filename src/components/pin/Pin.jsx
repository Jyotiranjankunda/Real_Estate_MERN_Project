import React from 'react'
import { Marker, Popup } from 'react-leaflet'

const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin