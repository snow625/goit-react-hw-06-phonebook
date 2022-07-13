import { useSelector } from "react-redux";
import { useCallback } from "react";

import {
  add,
  remove,
} from "./redux/contacts/contacts-items/contacts-items-reducer-slice";
import { getContacts } from "./redux/contacts/contacts-items/contacts-items-selector";

import { change } from "./redux/contacts/contacts-filter/contacts-filter-reducer-slice";
import { getFilteredItems } from "./redux/contacts/contacts-filter/contacts-filter-selector";

import { useDispatch } from "react-redux/es/exports";

import Contacts from "./components/Contacts";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";

import "./index.css";

const App = () => {
  const contacts = useSelector(getContacts);
  const filteredItems = useSelector(getFilteredItems);

  const dispatch = useDispatch();

  const onAddPhone = useCallback(
    (obj) => {
      const isInclude = contacts.find(
        ({ name }) => name.toLowerCase() === obj.name.toLowerCase()
      );
      if (!isInclude) {
        dispatch(add(obj));
        return;
      }
      alert(`${isInclude.name} is already in contacts`);
      return;
    },
    [contacts, dispatch]
  );

  const onRemovePhone = useCallback(
    (id) => {
      dispatch(remove(id));
    },
    [dispatch]
  );

  const changeFilterState = useCallback(
    ({ target: { value } }) => {
      dispatch(change(value.trim()));
    },
    [dispatch]
  );

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={onAddPhone} />

      <h2 className="title">Contacts</h2>
      <Filter onChange={changeFilterState} />
      <Contacts items={filteredItems} onClick={onRemovePhone} />
    </div>
  );
};

export default App;
