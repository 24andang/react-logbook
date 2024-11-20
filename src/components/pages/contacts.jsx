import Headline from "../elements/Headline";

export default function Contacts() {
    return (
        <div className="h-screen p-16 overflow-hidden relative" id="contacts">
            <div className="flex justify-end absolute bottom-0 right-0">
                <ul className="flex flex-col gap-4 my-auto">
                    <Headline>Contact Us</Headline>
                    <li className="flex gap-4 items-center grayscale hover:grayscale-0 hover:font-bold transition-all cursor-default">
                        <img src="icons/web.png" alt="insta-logo" className="h-8" />
                        <span>www.dionfarmaabadi.com</span>
                    </li>
                    <li className="flex gap-4 items-center grayscale hover:grayscale-0 hover:font-bold transition-all cursor-default">
                        <img src="icons/phone.png" alt="insta-logo" className="h-8" />
                        <span>0274-4987557</span>
                    </li>
                    <li className="flex gap-4 items-center grayscale hover:grayscale-0 hover:font-bold transition-all cursor-default">
                        <img src="icons/mail.png" alt="insta-logo" className="h-8" />
                        <span>info@dionfarmaabadi.co.id</span>
                    </li>
                    <li className="flex gap-4 items-center grayscale hover:grayscale-0 hover:font-bold transition-all cursor-default">
                        <img src="icons/insta.png" alt="insta-logo" className="h-8" />
                        <span>@dionfarmaabadi</span>
                    </li>
                </ul>
                <img src="images/cs.png" alt="cs" />
            </div>
        </div>
    );
};