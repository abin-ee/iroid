import React, { Component } from 'react'
import deliverymage from '../../../../images/fast-delivery.png'
import './index.scss'

export default class LeftSection extends Component {
    render() {
        return (
            <div className='footer-left-section'>
                <div className='__content'>
                <a href={false}>
                    <img src={deliverymage} alt="delivery" />
                </a>
                <p>Fast delivery in 3-5 Days</p>
                </div>
            </div>
        )
    }
}
