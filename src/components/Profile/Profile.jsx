import styles from './Profile.module.css';
import propTypes from 'prop-types';

export const Profile = ({username, tag, location, avatar, stats}) => {
  const {followers, views, likes} = stats;
  return (
    <div className={styles.Profile}>       
      <div className={styles.Description}>
        <img
          src={avatar}
          alt={username}
          className={styles.Avatar}
        />
        <p className={styles.Name}>{username}</p>
        <p className={styles.Tag}>@{tag}</p>
        <p className={styles.Location}>{location}</p>
      </div>

      <ul className={styles.Stats}>
        <li>
          <span className={styles.Label}>Followers</span>
          <span className={styles.Quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.Label}>Views</span>
          <span className={styles.Quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.Label}>Likes</span>
          <span className={styles.Quantity}>{likes}</span>
        </li>
      </ul>
    </div>    
  );  
};

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.number).isRequired
}
    