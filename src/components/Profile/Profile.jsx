import styles from './Profile.module.css';
import propTypes from 'prop-types';

export const Profile = ({user: {username, tag, location, avatar, stats}}) => {
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
          <span className={styles.Quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.Label}>Views</span>
          <span className={styles.Quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.Label}>Likes</span>
          <span className={styles.Quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>    
  );  
};

Profile.propTypes = {
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
  stats: propTypes.objectOf({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired
  })
}
    