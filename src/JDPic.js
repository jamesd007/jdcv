import React from 'react'
import './styles/JDPic.css'
import jdimg from './images/JDCVPIC3.png'

const JDPic=()=>{
    
return (
<div className='picContainer'>
    <img
        className='picImg'
        src={jdimg}
        alt="pic">
    </img>
</div>
)
}
export default JDPic;