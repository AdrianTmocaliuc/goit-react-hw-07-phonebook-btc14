import axios from "axios";

axios.defaults.baseURL = "https://626f8cc5c508beec488536d8.mockapi.io";

export const getContacts = async () => {
  try {
    const contacts = await axios.get("/contacts");
    return contacts.data || [];
  } catch (error) {
    return console.log(error);
  }
};

export const putContact = async () => {
  try {
    const contacts = await axios.post("/contacts");
    return contacts.data;
  } catch (error) {
    return console.log(error);
  }
};

export const removeContact = async (id) => {
  try {
    const contacts = await axios.delete(`/contacts/:${id}`);
    return contacts.data;
  } catch (error) {
    return console.log(error);
  }
};
