import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiGithub, } from 'react-icons/fi';
import QZone from "../QZone/Qzone";
import bg from '../../../assets/bg.png'




const RightNav = () => {
    return (
        <div>
            <h4>Login with</h4>
            <Button className="mb-2" variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
            <Button variant="outline-secondary"> <FiGithub /> Login with Github</Button>
            <div>
                <h4 className="mt-5">Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebookF></FaFacebookF> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram></FaInstagram> Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="bg" />
            </div>
        </div>
    );
};

export default RightNav;