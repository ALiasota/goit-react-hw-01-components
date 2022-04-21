import {FriendListSt} from './FriendList.styled';
import { FriendListItem } from "./FriendListItem"
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {    
    return(
        <FriendListSt>
            {friends.map((friend) => 
                <FriendListItem 
                key= {friend.id}
                avatar = {friend.avatar}
                name = {friend.name}
                isOnline = {friend.isOnline} 
                />
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
  
