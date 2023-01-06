import React, { Component } from 'react'
import './index.scss'

export default class LinkSection extends Component {
  render() {
    return (
      <div className='link-section'>
        <h2>QUICK LINKS</h2>
        <div>
            <p>Gift Card</p>
            <p>Lookbook 2021</p>
            <p>Privacy Policy</p>
            <p>Shipping & Refund</p>    
        </div>
      </div>
    )
  }
}
