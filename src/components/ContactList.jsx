import { useSelector } from "react-redux";

import Contact from "../components/Contact";


const ContactList = () => {
    const filteredContacts = useSelector(filteredContacts);

    return (
        <ul>
            {filteredContacts.map((contact) => (
                <Contact key={contact.id} {...contact} />
            ))}
        </ul>
    );
};

export default ContactList;