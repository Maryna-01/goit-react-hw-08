import css from './ContactsPage.module.css';

import ContactForm from '../components/ContactForm';
import SearchBox from '../components/SearchBox';
import Loader from '../components/Loader';
import ContactList from '../components/ContactList';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from '../redux/contacts/operations';
import {
    selectContacts,
    selectError,
    selectIsLoading,
} from '../redux/contacts/selectors';

function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const contacts = useSelector(selectContacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <>
            <div className={css.container}>
                <div>
                    <ContactForm />
                    <SearchBox />
                </div>
                {isLoading && !error && <Loader />}
                <div>
                    {contacts ? (
                        <ContactList contacts={contacts} />
                    ) : (
                        <b>Request in progress...</b>
                    )}
                </div>
            </div>
        </>
    );
}

export default ContactsPage;
