import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './App.css';
import CardView from './CardView.js';

class App extends Component {

  render() {
    const cards = [
      {
        title: "Guillo",
        date: "February"
      },
      { title: "Tefa"

      },
    ]

    return ( // TODO SE DEVUELVE EN UN NODO
      <div>
        <Button animated='vertical'>
          <Button.Content hidden>Shop</Button.Content>
          <Button.Content visible>
            <Icon name='shop' />
          </Button.Content>
        </Button>

        {cards.map(item => (
          <CardView
            titleCard={item.title}
            dateCard={item.date}
          />
        ))}

      </div>
    );
  }
}

export default App;
