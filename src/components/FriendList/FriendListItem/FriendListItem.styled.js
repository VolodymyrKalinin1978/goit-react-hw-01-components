import styled from '@emotion/styled';

function colored(props) {
  if (props.isOnline === true) {
    return 'green';
  }
  return 'red';
}

export const ItemLi = styled.li`
  display: flex;
  align-items: center;
  gap: 25px;
  // border: 1px solid red;
  width: 300px;
  justify-content: center;
  margin: 0 auto;
  background-color: #f4f4fd;
  margin-bottom: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;
export const StatusSpan = styled.span`
  display: flex;
  color: ${props => colored(props)};
`;
export const AvatarImg = styled.img`
  display: flex;
`;
export const FriendName = styled.p`
  display: flex;
`;
