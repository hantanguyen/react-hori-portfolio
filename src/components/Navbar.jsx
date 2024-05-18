import logo from "../assets/hori-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => { 
    return (
    <nav className="mb-20 flex items-center justify-between py-6"> 
        <div className="flex flex-shrink-0 items-center"> 
            <img className="w-80" src={ logo } alt="Hori Nguyen Logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl"> 
            <FaLinkedin style={{ color: '#4169E1' }} />
            <FaGithub style={{ color: '#4169E1' }} />
        </div>
    </nav> 
    )
};
export default Navbar;