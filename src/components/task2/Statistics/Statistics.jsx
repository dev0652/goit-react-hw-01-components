import { PropTypes } from 'prop-types';
import { StatList } from '../StatList/StatList';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      title && <h2>{title}</h2>
      <StatList stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
