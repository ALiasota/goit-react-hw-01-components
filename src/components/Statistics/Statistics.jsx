import styles from './Statistics.module.css';

import { StatisticItem } from './StatisticItem';
import propTypes from 'prop-types';

export const Statistics = ({title, data}) => {
    
    return(
        <section className={styles.Statistics}>
            {title &&(
                <h2 className={styles.Title}>{title}</h2>
            )}
            
            <ul className={styles.StatList}>
                {data.map((item)=>   
                    <StatisticItem key={item.id} item={item} />
                
                )}
            
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: propTypes.string,    
    data: propTypes.arrayOf(
        propTypes.exact({
            id: propTypes.string,
            label: propTypes.string,
            percentage: propTypes.number
        }).isRequired
    )
  }