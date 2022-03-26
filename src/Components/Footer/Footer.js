import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='ques-one'>
                <h4>Question No: 1 How does React work?</h4>
                <p>Keeps a separate copy of React DOM. Whose name is Virtual DOM. Virtual DOM works faster than Real DOM. When something changes in the Real DOM, React sets the part of the change between the Real DOM to find the part of the change from its Virtual DOM instead of the Real DOM. As a result, the website loads faster.</p>
            </div>
            <div className='ques-two'>
                <h4>Question No: 2 State Vs Props? </h4>
                <p> 
                    <span>State:</span> <br />
                    1. State are mulable <br /> 
                    2. You can define states in the component itself <br />
                    3. The state is set and updated by the object
                    <br />
                    <br />
                    <span>Props:</span>  <br />  
                    1. Props are immutable <br />
                    2. You can pass properties from parent components <br />    
                    3. determine the view upon creation and then the remain static
                </p>
            </div>
        </div>
    );
};

export default Footer;