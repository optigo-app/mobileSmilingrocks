import React from 'react'
import vogue from '../../../assets/mentions/vogue.webp'
import outlook from '../../../assets/mentions/outlook.webp'
import indiatoday from '../../../assets/mentions/india_today.webp'
import shaadisaga from '../../../assets/mentions/shaadi_saga.webp'
import yourstory from '../../../assets/mentions/your_story.webp'
import zeenews from '../../../assets/mentions/zee_news.webp'
import './mentionSection.css'

export default function MentionSection() {
  
  let dummyJson=[
    {mentionImg:vogue},
    {mentionImg:outlook},
    {mentionImg:indiatoday},
    {mentionImg:shaadisaga},
    {mentionImg:yourstory},
    {mentionImg:zeenews},
  ]

  return (
    <div className='main-connect-container'>
      <div className='mention-outer-container'>
      {dummyJson.map((data)=>(
      <div className='mention-inner-container'>
        <a>
        <img src={data.mentionImg} alt='' className='mention-images' style={{color:'gray'}} />
        </a>
      </div>
      ))}
      </div>
    </div>
  )
}
