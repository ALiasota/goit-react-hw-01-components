import styled from 'styled-components';

export const FriendListSt = styled.ul`
    display: block;
    list-style: none;    
    width: 300px;
    margin: 30px auto 30px auto;
    padding-bottom: 0;
    padding-left: 0;
    text-align: center;
    
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-left: 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Status = styled.span`
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    border: 1px solid rgba(0, 0, 0, 0.12);
`;

export const Avatar = styled.img`
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 5px
`;

export const Name = styled.p`
    font-size: 20px;
`;