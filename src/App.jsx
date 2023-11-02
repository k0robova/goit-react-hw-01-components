import { Profile } from "components/Profile/Profile"
import { Statistics } from "components/Statistics/Statistics"
import { FriendList } from "components/FriendList/FriendList"
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory"
import user from "./jsons/user.json"
import data from "./jsons/data.json"
import friends from "./jsons/friends.json"
import transactions from "./jsons/transactions.json"

export const App = () => {
 
     return (<div>
         <Profile username={user.username}
             tag={user.tag}
             location={user.location}
             avatar={user.avatar}
            stats={user.stats}/>
         <hr />
        <Statistics title="Upload stats" stats={data} />
         {/* <Statistics stats={data} /> */}
         <hr />
         <FriendList friends={friends} />
         <hr />
         <TransactionHistory items={transactions} />
         <hr />    
    </div>)
 }