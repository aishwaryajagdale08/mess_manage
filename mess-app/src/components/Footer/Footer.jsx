/* footer.jsx */
/* import react from "react"; */

import './Footer.css'
import { IoIosMailUnread } from "react-icons/io"
import { IoIosContact } from "react-icons/io"
import { CiLocationOn } from "react-icons/ci"

const Footer=()=>{
    return <div  className="footer">
        <div className="sb_footer section_paing">
            <div className="sb_footer-links">
                <div className="sb_footer-links_div">
                    <h3>QUICK LINKS</h3>

                    <a href="/">
                        <h4>Home</h4>
                    </a>

                    <a href="/about">
                        <h4>About Us</h4>
                    </a>

                    <a href="/meal plan">
                        <h4>Meal Plan</h4>
                    </a>

                    <a href="/faq">
                        <h4>FAQ's</h4>
                    </a>

                    <a href="/contact">
                        <h4>Contact Us</h4>
                    </a>

                </div>

                <div className="sb_footer-links-div">
                <h3>CONTACT US</h3>
                    <a  href="/resources">
                    <p> <IoIosMailUnread /> jvmfycs.shrutishirke.23@gmail.com</p>
                        
                    </a>
                    
                    <a href="/resources">
                        <p><IoIosContact /> 8104959409</p>
                    </a>
                    <a href="/resources">
                        <p> <CiLocationOn /> 11/13, 1st floor, Ropa lane, 
                            Chandanwadi, Navi-Mumbai - 08.</p>
                    </a>

                </div>
                <div className="sb_footer-links-div">
                <h4>BUSINESS HOURS</h4>
                    <a href="/weeks">
                        <p>Monday:8AM-10PM</p>
                    </a>
                    <a href="/weeks">
                        <p>Tueday:8AM-10PM</p>
                    </a>
                    <a href="/weeks">
                        <p>Wednesday:8AM-10PM</p>
                    </a>
                    <a href="/weeks">
                        <p>Thursday:8AM-10PM</p>
                    </a>
                    <a href="/weeks">
                        <p>Friday:8AM-10PM</p>
                    </a>
                    <a href="/weeks">
                        <p>Saturday:8AM-10PM</p>
                    </a>
                    <a href="/weeks">
                        <p>Sunday:8AM-10PM</p>
                    </a>
                    
                    </div>
                    
                    <div className="sb_footer-links-div">
                        <h4>TIFFIN SERVICE IN NAVI-MUMBAI</h4>
                    <a href="/tiffin service">
                        <p>Tiffin Service in Airoli</p>
                    </a>
                    <a href="/tiffin service">
                        <p>Tiffin Service in Nerul</p>
                    </a>
                    <a href="/tiffin service">
                        <p>Tiffin Service in Khargar</p>
                    </a> 
                    <a href="/tiffin service">
                        <p>Tiffin Service in Panvel</p>
                    </a>
                    </div>
                    {/* <div className="sb_footer-below-links">
                        <a href="/terms"><div><p>Terms and Condtions</p></div></a>
                        <a href="/privacy"><div><p>Privacy</p></div></a>
                        <a href="/security"><div><p>Security</p></div></a>
                        

                    </div>
                    */}
            </div>
        </div>

    </div>
}
export default Footer