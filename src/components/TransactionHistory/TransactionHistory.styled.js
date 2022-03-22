import styled from 'styled-components';

export const Transactions = styled.table`
    // background-color: #ff33cc;
    display: block;      
    width: 600px;
    // table-layout: fixed;
    margin: 30px auto 30px auto;
    border-collapse: collapse;
    text-align: center;
    table-layout: fixed;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);

      >thead th, td {
        width: 200px;
        border: 1px solid rgba(0, 0, 0, 0.12);
      }
      
      

      >thead th, th, td {
        padding-top: 20px;
        padding-bottom: 20px;
        
      }
      >thead {
        
        background: #20B2AA;
        color: white;
        text-shadow: 1px 1px 1px black;
      }

      >tbody tr:nth-child(odd) {
        background-color: white;
      }
      
      >tbody tr:nth-child(even) {
        background-color: #FFF0F5;
      }
      
`;