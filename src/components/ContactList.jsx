import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../redux/auth/slice";
import Contact from "../components/Contact";


const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);

    return (
        <ul>
            {filteredContacts.map((contact) => (
                <Contact key={contact.id} {...contact} />
            ))}
        </ul>
    );
};

export default ContactList;