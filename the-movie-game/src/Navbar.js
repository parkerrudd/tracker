import React from "react";
import './App.css'; 
import { useState } from "react";
import { FaQuestionCircle, FaCog, FaToggleOn, FaToggleOff, FaWindowClose } from 'react-icons/fa'; 
import Instructions from "./Instructions";
import Settings from "./Settings";


export default function Navbar(props) {

    const [questionMark, setQuestionMark] = useState(false)
    const [settings, setSettings] = useState(false)
    const [superToggle, setSuperToggle] = useState(false)


    return (
        <div className="navbar-container">
            <nav className="nav">
                <ul className="nav-list">
                    <li id="question-mark">
                        <a className="anchors" onClick={() => setQuestionMark(!questionMark)} href="#">
                            <FaQuestionCircle /> 
                        </a>
                    </li>
                    <li id="cog">
                        <a className="anchors" href="#" onClick={() => setSettings(!settings)}>
                            <FaCog />
                        </a>
                    </li>
                </ul>
            </nav>

        { questionMark ? <Instructions toggleQuestionMark={questionMark => setQuestionMark(questionMark)}/> : null }
    {/* settings ? <Settings toggleSettings={settings => setSettings(settings)}/> : null */}
        
           { settings ? 

                <div className="settings-container">
                    <a id="settings-exit" href="#" onClick={() => setSettings(!settings)}>
                        <FaWindowClose />
                    </a>
                    <h1>Settings</h1>
                    <div className="supers">
                        <h3>Super Hero Movies Only</h3>
                        <a id="toggle-off" className="toggle-super" href="#" onClick={() => setSuperToggle(!superToggle)}>
                            { superToggle ? <FaToggleOn /> : <FaToggleOff /> }
                        </a>
                    </div>
                </div>
            : null
           } 

        </div>
    )
}
