import user from "./jsons/user.json"
import data from "./jsons/data.json"
import transactions from "./jsons/transactions.json"
import friends from "./jsons/friends.json"


import { Profile } from "components/Profile/Profile"
import { FriendList } from "components/FriendList/FriendList"
// Statistics
// Transactions


export const App = () => {
    //  console.log("Hello");
     return <div>
         <Profile username={user.username}
             tag={user.tag}
             location={user.location}
             avatar={user.avatar}
            stats={user.stats}/>
         
        {/* <Statistics /> */}
        {/* <FriendList /> */}
        {/* <TransactionHistory/> */}
    
    
    </div>
 }