import React, { Component } from 'react'
import CompanySection from './children/CompanySection'
import LinkSection from './children/LinksSection'
import NewsLetterSection from './children/NewsLetterSection'
import './index.scss'

export default class RightSection extends Component {
    render() {
        return (
            <div className='footer-right-section'>
                <LinkSection />
                <CompanySection />
                <NewsLetterSection />
            </div>
        )
    }
}
