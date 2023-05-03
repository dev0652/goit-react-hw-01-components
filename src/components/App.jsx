import { Profile } from './task1/Profile/Profile';
import { Statistics } from './task2/Statistics/Statistics';
import { FriendList } from './task3/FriendList/FriendList';
import { TransactionHistory } from './task4/TransactionHistory/TransactionHistory';

import user from './task1/user.json';
import data from './task2/data.json';
import friends from './task3/friends.json';
import transactions from './task4/transactions.json';

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
