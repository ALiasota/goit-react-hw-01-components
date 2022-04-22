import PropTypes from 'prop-types';
import {
    Item,
    Status,
    Avatar,
    Name
} from './FriendList.styled';


export const FriendListItem = ({avatar, name, isOnline = false}) => {
    return (
        <Item>
            <Status style={{background:isOnline ? 'green' : 'red'}}></Status>
            <Avatar src={avatar} alt="User avatar"></Avatar>
            <Name>{name}</Name>
        </Item>
    )
};

FriendListItem.propTypes = {        
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired              
}