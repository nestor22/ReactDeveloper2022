import { Component } from "react";
import './card-list.style.css'
import './card-container.style.css'
import Card from "./card.componet";
class CardList extends Component {
    render(){
        console.log('render card')
        const { monsters } = this.props;
        return(
            <div className="card-list"> 
               {monsters.map(monster => {
                return(
                <Card monster={monster} />

               )})}
            </div>
        )
    }
}

export default CardList;
