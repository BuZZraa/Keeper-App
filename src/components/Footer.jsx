import React from "react";
const Year = new Date().getFullYear();
function Footer() {
    return(
        <footer>
            <p>&copy; Copyright {Year}</p>
        </footer>
    );
}
export default Footer;