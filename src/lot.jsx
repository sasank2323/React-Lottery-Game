import { useState } from "react";
import "./lot.css"
import { genticket,sum} from "./helper";
export default function Lot()
{
    let [ticket,setTicket]=useState(genticket(3));
    let iswin = sum(ticket) === 15;
    let buy=()=>{
        setTicket(genticket(3));
    }
return (
   /* <div >
        <h1>lottery game </h1>
        <div className="ticket">
            <span>{ticket[0]}</span>

            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>    
       <button onClick={buy}>buy new ticket</button>
        <h3>{iswin && "congrates"}</h3>
    </div>*/

<div className="lottery-card">
<div className="ticket-container">
  <span>{ticket[0]}</span>
  <span>{ticket[1]}</span>
  <span>{ticket[2]}</span>
</div>
<button onClick={buy}>Buy New Ticket</button>
<h3 className="win-message">{iswin && "Congrats!"}</h3>
</div>


);
}