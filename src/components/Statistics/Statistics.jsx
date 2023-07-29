import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsSec,
  Title,
  StatListUl,
  ItemLi,
  LabelSpan,
  PercentageSpan,
} from './Statistics.styled';

function Statistics({ stats, title }) {
  // const {id, label, percentage} = stats
  return (
    <StatisticsSec>
      {title && <Title>{title}</Title>}

      <StatListUl>
        {stats.map(item => (
          <ItemLi key={item.id}>
            <LabelSpan>{item.label}</LabelSpan>
            <PercentageSpan>{item.percentage}%</PercentageSpan>
          </ItemLi>
        ))}
      </StatListUl>
    </StatisticsSec>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
