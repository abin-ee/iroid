import React, { Component } from 'react'
import LeftSection from './childrens/LeftSection'
import RightSection from './childrens/RightSection'
import './index.scss'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className='footer-main'>
                    <LeftSection />
                    <RightSection />
                </div>
               <div className='main-footer-bottom'> <p>© 2021 Alba. All Rights Reserved.</p></div>
            </>
        )
    }
}
