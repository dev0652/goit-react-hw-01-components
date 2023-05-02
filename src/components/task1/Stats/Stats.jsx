import { PropTypes } from 'prop-types';
import {
  ProfileStats,
  ProfileStatsItem,
  Label,
  Quantity,
} from './Stats.styled';

export const Stats = ({ stats }) => {
  const entries = Object.entries(stats);
  let counter = 0;

  return (
    <ProfileStats>
      {entries.map(entry => (
        <ProfileStatsItem key={(counter += 1)}>
          <Label>{entry[0]}</Label>
          <Quantity>
            {new Intl.NumberFormat('en-US', {
              maximumSignificantDigits: 3,
            }).format(entry[1])}
          </Quantity>
        </ProfileStatsItem>
      ))}
    </ProfileStats>
  );
};

Stats.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number),
};
