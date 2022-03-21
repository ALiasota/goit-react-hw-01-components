
export const StatisticItem = ({item: {label, percentage}, styles:{Item, Label, Percentage}}) => {
    const bg = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    
    return(
        <li className={Item} style={{backgroundColor:bg()}}>
        <span className={Label}>{label}</span>
        <span className={Percentage}>{percentage}</span>
        </li>
    )
}
        