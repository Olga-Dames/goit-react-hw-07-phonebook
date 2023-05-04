import React from 'react';
import PropTypes from 'prop-types';
// import { RotatingLoader } from 'components/Loader/Loader';
import { Contact, ListItem, Button } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = e => {
    dispatch(deleteContact(id));
    e.target.textContent = 'Deleting...';
  };

  return (
    <ListItem>
      <Contact>
        {name}: {number}
      </Contact>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
