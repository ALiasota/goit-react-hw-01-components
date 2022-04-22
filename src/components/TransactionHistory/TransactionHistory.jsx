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
                {transactions.map(({id, type, amount, currency}) =>{                    
                    return(
                    <Transaction key={id} 
                                 type={type}
                                 amount={amount}
                                 currency={currency}   
                    />
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
  