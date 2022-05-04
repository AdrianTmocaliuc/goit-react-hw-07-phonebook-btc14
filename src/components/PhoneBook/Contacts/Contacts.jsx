import { useEffect } from "react";
import PropTypes from "prop-types";
import { Item } from "components/Item/Item";
import { useSelector, useDispatch } from "react-redux";
// import { fetchContacts } from "redux/contacts/contacts-async/contactsOperation";
// import { stateContacts } from "redux/contacts/contacts-async/contactsSelector";
import {
  contactsOperations,
  contactSelectors,
} from "redux/contacts/contacts-async";

function Contacts() {
  const contacts = useSelector(contactSelectors.stateContacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  // console.log("state", state);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const filterContacts = contacts.filter((elem) => {
    return elem.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <ul>
        {!!filterContacts.length &&
          filterContacts.map((item) => {
            return <Item key={item.id} contactsList={item} />;
          })}
      </ul>
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default Contacts;
