import React from 'react'
import './styles/JDPic.css'
import jdimg from './images/JDCVPIC3.png'
import jdimg2 from './images/JDpic.png'

const JDPic=()=>{
    
return (
<div className='picContainer'>
    <img
        className='picImg'
        src={jdimg2}
        alt="pic">
    </img>
</div>
)
}
export default JDPic;