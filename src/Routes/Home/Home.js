import React, { Component } from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HomePageContent from './children/Contents'
import './index.scss'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <HomePageContent />
        </div>
        <Footer />
      </div>
    )
  }
}
