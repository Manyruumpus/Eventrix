import React, { useState } from "react";
import "../../styles_Homepage/styles_homepage.css"
import { useNavigate } from "react-router-dom";


function Right_Logo() {
    const navigate = useNavigate();

    return (<div className="homepage_right-logo-div-0 homepage_button-0 homepage_button-1 homepage_hover-button"
        onClick={() => navigate("/login")}
    >
        Login
    </div>);
}
export default Right_Logo;