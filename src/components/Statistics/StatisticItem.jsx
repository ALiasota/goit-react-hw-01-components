import styles from './Statistics.module.css';
import propTypes from 'prop-types';

const bg = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

export const StatisticItem = ({item: {label, percentage}}) => {
    
    
    return(
        <li className={styles.Item} style={{backgroundColor:bg()}}>
        <span className={styles.Label}>{label}</span>
        <span className={styles.Percentage}>{percentage}</span>
        </li>
    )
}

StatisticItem.propTypes = {
    item: propTypes.shape({
            label: propTypes.string,
            percentage: propTypes.number  
    }).isRequired
       
  }
        