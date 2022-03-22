export const Transaction = ({transaction:{type, amount, currency}}) => {
    return(
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )
}
    