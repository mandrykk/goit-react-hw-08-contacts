import * as contactAPI from './phonebook-api';
import { createAsyncThunk, createAction } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
  
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (payload, { rejectWithValue }) => {
      try {
        const contacts = await contactAPI.addContact(payload);
        return contacts;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
);
    
export const deleteContact = createAsyncThunk(
      'contacts/deleteContact',
      async (contactId, { rejectWithValue }) => {
        try {
          await contactAPI.deleteContact(contactId);
          return contactId;
        } catch (error) {
          return rejectWithValue(error);
        }
      }
);
      
export const changeFilter = createAction('contacts/changeFilter');