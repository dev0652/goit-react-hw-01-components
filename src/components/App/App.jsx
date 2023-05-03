import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import { Page } from './App.styled';

// ####################################

export const App = () => {
  const { avatar, username, tag, location, stats: profileStats } = user;

  return (
    <Page>
      {/* Task 1 */}
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={profileStats}
      />

      {/* Task 2 */}
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      {/* Task 3 */}
      <FriendList friends={friends} />

      {/* Task 4 */}
      <TransactionHistory items={transactions} />
    </Page>
  );
};
