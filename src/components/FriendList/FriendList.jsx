import React from 'react';
import PropTypes from 'prop-types';
// import {FriendListUl, ItemLi, StatusSpan, AvatarImg,FriendName } from './FriendList/FriendList.styled'
import { FriendListUl, ItemLi, StatusSpan, AvatarImg, FriendName} from './FriendList.styled';

function FriendList({friends}) {

  return (
    <FriendListUl>
       {friends.map(item => (
      <ItemLi   key={item.id}   >
        <StatusSpan isOnline={item.isOnline}>{item.isOnline ? 'Online' : 'Offline'}</StatusSpan>
        <AvatarImg src={item.avatar} alt={item.name} width="48" />
        <FriendName>{item.name}</FriendName>
      </ItemLi>
       ))}
    </FriendListUl>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
