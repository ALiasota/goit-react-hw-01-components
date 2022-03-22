import {
    Item,
    Status,
    Avatar,
    Name
} from './FriendList.styled';


export const Friend = ({friend: {avatar, name, isOnline = false}}) => {
    return (
        <Item>
            <Status style={{background:isOnline ? 'green' : 'red'}}></Status>
            <Avatar src={avatar} alt="User avatar"></Avatar>
            <Name>{name}</Name>
        </Item>
    )
};
