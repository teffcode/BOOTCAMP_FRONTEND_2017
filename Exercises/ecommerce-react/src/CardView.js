import React, {Component} from "react";
import {Image, Icon, Card} from "semantic-ui-react";

class CardView extends Component{
    render(){
        const {titleCard, dateCard, description, friends} = this.props;
        return(
            <Card>
                <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
                <Card.Content>
                <Card.Header>
                    {titleCard}   
                </Card.Header>
                <Card.Meta>
                    <span className='date'>
                    {dateCard}
                    </span>
                </Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {friends} Friends
                </a>
                </Card.Content>
            </Card>
        );
    }
}

export default CardView;