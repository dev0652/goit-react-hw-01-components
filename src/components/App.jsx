import { Profile } from './task1/Profile/Profile';
import { Statistics } from './task2/Statistics/Statistics';
import user from './task1/user.json';
import stats from './task2/data.json';
import { Page } from './App.styled';

// ####################################

export const App = () => {
  return (
    <Page>
      <Profile user={user} />

      <Statistics stats={stats} title="Upload stats" />
    </Page>
  );
};
