import React from 'react';
import PropTypes from 'prop-types';
import {
  TransHistoryTable,
  TransHistoryThead,
  TransHistoryTr,
  TransHistoryTh,
  TransTbody,
  TransTbodyTr,
  TransTbodyTd,
} from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <TransHistoryTable>
      <TransHistoryThead>
        <TransHistoryTr>
          <TransHistoryTh>Type</TransHistoryTh>
          <TransHistoryTh>Amount</TransHistoryTh>
          <TransHistoryTh>Currency</TransHistoryTh>
        </TransHistoryTr>
      </TransHistoryThead>

      <TransTbody>
        {items.map(el => (
          <TransTbodyTr key={el.id}>
            <TransTbodyTd>{el.type}</TransTbodyTd>
            <TransTbodyTd>{el.amount}</TransTbodyTd>
            <TransTbodyTd>{el.currency}</TransTbodyTd>
          </TransTbodyTr>
        ))}
      </TransTbody>
    </TransHistoryTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
