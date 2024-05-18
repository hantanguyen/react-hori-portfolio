import { CONTACT } from "../constants";
import {motion} from "framer-motion";

const ContactMe = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <h2 className="my-10 text-center text-4xl">contact me</h2> 
            <div className="text-center tracking-tighter">
                <p href="#">{CONTACT.email} </p>
            </div>
        </div>
    )
}; 

export default ContactMe;