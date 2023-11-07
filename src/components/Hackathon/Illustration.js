import React from 'react';

// styling files
import './Illustration.css'

export default function Illustration () {
    return (
        <div className="screen hackathon-page-1-anim">
              <div className="title-container">
                <p className="title">index.js</p>
                <div className="buttons">
                  <div className="abutton red"></div>
                  <div className="abutton orange"></div>
                  <div className="abutton green"></div>
                </div>
              </div>
              <div className="code">
                <p className="line-1"><span className="bold">import</span> react, {'{useState, useEffect}'} <span className="bold">from</span> 'react'</p>
                <br />
                <p className="line-2">const NewComponent = (props) ={'>'} {'{'}</p>
                <p className="line-3">&nbsp;&nbsp;&nbsp;&nbsp;const [stuff, set_stuff] = useState(null);</p>
                <br/>
                <p className="line-4">&nbsp;&nbsp;&nbsp;&nbsp;useEffect(() ={'>'} {'{'}</p>
                <p className="line-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;document.title = "Example Title Here";</p>
                <p className="line-6">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</p>
                <br />
                <p className="line-7">&nbsp;&nbsp;&nbsp;&nbsp;{'return ('}</p>
                <p className="line-8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<h1>Hello World!</h1>'}</p>
                <p className="line-9">&nbsp;&nbsp;&nbsp;&nbsp;{');'}</p>
                <p className="line-10">{'};'}</p>
                <br />
                <p className="line-11">{'export default NewComponent;'}</p>
              </div>
            </div>
    )
}