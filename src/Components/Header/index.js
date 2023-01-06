import React, { Component } from 'react'
import LeftSection from './children/LeftSection'
import MenuSection from './children/MenuSection'
import RightSection from './children/RightSection'
import './index.scss'

export default class Header extends Component {
    render() {
        return (
            <>
                <div className='header'>
                    <LeftSection />
                    <RightSection />
                </div>
                <MenuSection />
            </>
        )
    }
}
