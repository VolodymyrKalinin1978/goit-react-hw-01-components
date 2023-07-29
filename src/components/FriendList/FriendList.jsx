import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem/FriendListItem'

import { FriendListUl} from './FriendList.styled';

function FriendList({friends}) {

  return (
    <FriendListUl>
       {friends.map(item => (
      <FriendListItem  
      key={item.id}
      isOnline={item.isOnline}
      avatar={item.avatar}
      userName={item.name} ></FriendListItem>
       ))}
    </FriendListUl>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
     
    })
  ).isRequired,
};

export default FriendList;
