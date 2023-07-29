import React from 'react';
import PropTypes from 'prop-types';

import {
  ItemLi,
  StatusSpan,
  AvatarImg,
  FriendName,
} from './FriendListItem.styled';

function FriendListItem({ isOnline, avatar, userName }) {
  return (
    <ItemLi>
      <StatusSpan isOnline={isOnline}>
        {isOnline ? 'Online' : 'Offline'}
      </StatusSpan>
      <AvatarImg src={avatar} alt={userName} width="48" />
      <FriendName>{userName}</FriendName>
    </ItemLi>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default FriendListItem;
