import React, { Component } from 'react'
import './index.scss'
import topImage from '../../../../images/mars-sector-6-7d4LREDSPyQ-unsplash.png'
import GroupImage from '../../../../images/Group 467.png'
import blockImage from '../../../../images/block.png'
import andrewNeel from '../../../../images/andrew-neel-cckf4TsHAuw-unsplash.png'
import Article from '../../../../images/Article.png'
import Gropu240 from '../../../../images/Group 240.png'

import { Avatar, List } from 'antd'
import { DATA } from './constants'

export default class HomePageContent extends Component {

    getTopSection = () => {
        return (
            <div className='topsection'>
                <div className='description'>
                    <h2>Happiness Is Our Culture</h2>
                    <p>The productivity and prosperity of an organisation is the reflection of the happiness and contentment of its employees. We believe that is what builds a family and the nation too. Happy employees are not just an asset to the organisation, but the love, contentment and enthusiasm they display build the whole world.So it is our prime responsibility to give a conducive, happy work culture for our employees, a climate which gives them opportunities for self growth and skill development.</p>
                </div>
                <div>
                    <img alt="top" src={topImage}></img>
                </div>
            </div>
        )
    }

    getSatisfiedSection = () => {
        return (
            <div className='satisfiedsection'>
                <div>
                    <img alt="top" src={GroupImage}></img>
                </div>
                <div className='description'>
                    <h2>What Do We Do To Make Our Employees Stay Happy And Satisfied ?</h2>
                    <List
                        dataSource={DATA}
                        renderItem={(item) => (
                            <List.Item key={item}>
                                <List.Item.Meta
                                    avatar={<Avatar src={<svg id="Group_446" data-name="Group 446" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                        <g id="Group_330" data-name="Group 330">
                                            <circle id="Ellipse_194" data-name="Ellipse 194" cx="8.5" cy="8.5" r="8.5" fill="#29d089" />
                                            <path id="Path_410" data-name="Path 410" d="M2.917,59.072.729,56.884,0,57.613l2.917,2.917,6.251-6.251-.729-.729Z" transform="translate(3.778 -48.513)" fill="#fff" stroke="#fff" stroke-width="1" />
                                        </g>
                                    </svg>
                                    } />}
                                    description={item}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }

    getVisionSection = () => {
        return (
            <div className='visionsection'>
                <div>
                    <div>
                        <div className='imagecontent'>
                            <img src={blockImage} alt="block" />
                            <div className='textcontent'>
                                    <h2><h2>Our Vision</h2></h2>
                                    <p>Our vision is to provide prime value to customers by delivering supreme quality undergarments in the global market with the intent to touch the lives of our employees, immediate society and the world community with the understanding -‘we exist because they exist’.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='imagecontent'>
                            <img src={andrewNeel} alt="andrew" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='imagecontent'>
                        <img src={Article} alt="article" />
                        <div className='textcontent textdecoradion'>
                            <h2>Our Mission</h2>
                            <ul>
                                <li>
                                    Ensure the quality of the product excellence through monitoring at every stages of production till delivery and customer satisfaction.
                                </li>
                                <li>
                                    Ensure the quality of the product excellence through monitoring at every stages of production till delivery and customer satisfaction.
                                </li>
                                <li>
                                    Ensure the quality of the product excellence through monitoring at every stages of production till delivery and customer satisfaction.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getCorporateInfoSection = () => {

    }
    render() {
        return (
            <div className='home-content'>
                {this.getTopSection()}
                {this.getSatisfiedSection()}
                {this.getVisionSection()}
                <img className='bottomImage' src={Gropu240} alt='group240'/>
            </div>
        )
    }
}
