import styles from './Statistics.module.css';
import { StatisticTitle } from './StatisticTitle';
import { StatisticItem } from './StatisticItem';
import propTypes from 'prop-types';

export const Statistics = ({title, data}) => {
    
    return(
        <section className={styles.Statistics}>
            {title &&(
                <StatisticTitle title={title} styles={styles} />
            )}
            
            <ul className={styles.StatList}>
                {data.map((item)=>   
                    <StatisticItem key={item.id} item={item} styles={styles}/>
                
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