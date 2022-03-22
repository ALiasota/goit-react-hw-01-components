import { Transactions } from "./TransactionHistory.styled";
import { Transaction } from "./Transaction";
import PropTypes from 'prop-types';

export const TransactionHistory = ({transactions}) => {
    
    return (
        <Transactions>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map((transaction) =>{
                    
                    return(
                    <Transaction key={transaction.id} transaction={transaction}/>
                    )}
                )}
            </tbody>
        </Transactions>
    )
}
    
TransactionHistory.propTypes = {
    
    transactions: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
      })
    ).isRequired,
  };
  