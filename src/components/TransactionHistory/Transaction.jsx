import PropTypes from 'prop-types';

export const Transaction = ({transaction:{type, amount, currency}}) => {
    return(
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )
}

Transaction.propTypes = {    
  transaction: PropTypes.objectOf(PropTypes.string).isRequired,
};
    