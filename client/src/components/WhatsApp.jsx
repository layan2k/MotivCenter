import React from "react";

import ReactWhatsappButton from "react-whatsapp-button";
import MotivPic from '../assets/MotivCenter_Logo.png'

const ReactApp = () => {
    return (
        <div className="App">
            <ReactWhatsappButton
                countryCode="258"
                phoneNumber="840396785"
                animated
                message="Hello There! "
            />
        </div>
    )
};

export default ReactApp;