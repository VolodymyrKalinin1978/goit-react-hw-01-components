import styled from '@emotion/styled';
import { generateRandomColor } from 'components/Profile/Profile.styled';

export const StatisticsSec = styled.section`
  display: flex;
  flex-direction: column;
  width: 600px;
  //  border: 1px solid red;
  align-items: center;
  margin: 50px auto;
  background-color: #f4f4fd;
  padding-top: 50px;
  border-radius: 10px;
  overflow: hidden;
  //  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
  //   0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const Title = styled.h2`
  margin-bottom: 50px;
`;

export const StatListUl = styled.ul`
  display: flex;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;
export const ItemLi = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  flex-direction: column;
  padding: 36px;
  background-color: ${props => generateRandomColor()};
`;

export const LabelSpan = styled.span``;
export const PercentageSpan = styled.span``;
