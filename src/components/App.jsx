import {Profile} from 'components/Profile/Profile';
import {Statistics} from 'components/Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';


export const App = () => {
  return (
    <>
      <Profile user={user}/>
      <Statistics title="Upload stats" data={data} />       
      <FriendList friends={friends} />     
    </>    
  );
};
