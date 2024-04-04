import React from 'react'
import './collection.css'

const index = ({label,imgLink,index}) => {
  return (
    <div style={{marginBottom:'70px'}}>
      <div className='outerCollDiv' style={{flexDirection:index%2 != 0?'row-reverse':'row'}}>
        <div className='leftCollPortion'>
          <p className='collHeading'>{label}</p>
          <button className='collBtn'>view the look</button>
        </div>
        <div className='rightCollPortion'>
          <img src={imgLink} alt={''} className='collimg'/>
        </div>
      </div>
    </div>
  )
}

export default index