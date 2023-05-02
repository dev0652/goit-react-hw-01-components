import { PropTypes } from 'prop-types';
import {
  ProfileStats,
  ProfileStatsItem,
  Label,
  Quantity,
} from './Stats.styled';

export const Stats = ({ stats }) => {
  const entries = Object.entries(stats);

  return (
    <ProfileStats>
      {entries.map(entry => {
        let counter = 0;

        return (
          <ProfileStatsItem key={(counter += 1)}>
            <Label>{entry[0]}</Label>
            <Quantity>{entry[1]}</Quantity>
          </ProfileStatsItem>
        );
      })}
    </ProfileStats>
  );
};

Stats.propTypes = {
  stats: PropTypes.objectOf(PropTypes.string),
};
