import styled from '@emotion/styled';

export const TransHistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #ccc;
`;
export const TransHistoryThead = styled.thead``;
export const TransHistoryTr = styled.tr`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #f2f2f2;
`;
export const TransHistoryTh = styled.th`

  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc
  
`;
export const TransTbody = styled.tbody``;
export const TransTbodyTr = styled.tr`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
export const TransTbodyTd = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc
`;
