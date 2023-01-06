import React, { Component } from 'react'
import './index.scss'
export default class CompanySection extends Component {
  render() {
    return (
        <div className='company-section'>
        <h2>COMPANY</h2>
        <div>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Pricing Plan</p>
            <p>Knowledge Base</p>    
        </div>
      </div>
    )
  }
}
