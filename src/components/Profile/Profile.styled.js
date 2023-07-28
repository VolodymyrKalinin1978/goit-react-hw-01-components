import styled from '@emotion/styled';


export  function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const ProfileDiv = styled.div`
  display: flex;
  width: 500px;

  flex-direction: column;
  // border: 1px solid red;
  align-items: center;
  // background-color: #f4f4fd;
  background-color: #f4f4fd;
  border-radius: 10px;
  overflow: hidden;

  margin: 50px auto;
  padding: 20px ;
  gap: 15px
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
  0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const Name = styled.p`
margin-bottom: 10px;
font-size: 25px;
font-weight: 700;
`
export const Tag = styled.p`
margin-bottom: 10px
`
export const Location = styled.p`

`
export const Label = styled.span`
margin-bottom: 10px;
color: blue;
`
export const Quantity = styled.span`

`

export const Description = styled.div`
display: flex;
flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

export const AvatarImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  width: 300px;
  height: 300px;
  margin-bottom: 10px;
`;

export const StatsUl = styled.ul`
  display: flex;
  gap: 84px;
  flex-direction: row;
  justify-content: space-between;;
  list-style-type: none;
  // background-color: gray;
`;
export const StatsLi = styled.li`
  display: flex;
  flex-direction: column;
`;
