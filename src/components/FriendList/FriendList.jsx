import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem';


export const FriendList = ({friends}) => {
    return (<ul className={css.friendlist}> 
        {friends.map(friend => <FriendListItem key={friend.id} isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name } /> )}
         </ul> )  


}

FriendList.prototype = {
    friends:  PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
    ).isRequired
}