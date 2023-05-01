import { Description } from './Description';
import { Stats } from './Stats';
import user from '../user.json';


export const Profile = () => (
  <>
    <Description userInfo={user} />
    <Stats userStats={user.stats} />
  </>
);
