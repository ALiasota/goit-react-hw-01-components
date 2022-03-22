import {FriendListSt} from './FriendList.styled';
import { Friend } from "./Friend"
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {    
    return(
        <FriendListSt>
            {friends.map((friend) => 
                <Friend key={friend.id} friend={friend}/>
            )}
        </FriendListSt>
    )
};

FriendList.propTypes = {    
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired
      })
    ).isRequired,
  };
  
