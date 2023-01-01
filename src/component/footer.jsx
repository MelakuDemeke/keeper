import React from "react";

var year = new Date().getFullYear();
function Footer(){
    return <footer>
        <p>opyright ⓒ {year}</p>
    </footer>
}

export default Footer;