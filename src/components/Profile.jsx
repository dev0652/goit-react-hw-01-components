import { Description } from './Description';
import { Stats } from './Stats';

export const Profile = ({ user }) => (
  <>
    <Description user={user} />
    <Stats user={user.stats} />
  </>
);
