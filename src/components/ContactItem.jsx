import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";


const ContactItem = ({ contact }) => {
    const dispatch = useDispatch();


    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid #ccc",
            }}
        >

            <div>
                <p style={{ margin: "0" }}>{contact.name}</p>
                <p style={{ margin: "0", color: "gray" }}>{contact.phone}</p>
            </div>

            <button
                onClick={handleDelete}
                style={{
                    backgroundColor: "#ff4d4d",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                }}
            >
                Delete
            </button>
        </div>
    );
};

export default ContactItem;
