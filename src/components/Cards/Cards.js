import React from 'react'
import { Container, H3, P, Button } from './styles'


export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <Container fluid>
        <div>
          <H3>TO DO List</H3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <H3 htmlFor="new-todo">
              What needs to be done?
            </H3>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <Button>
              Add #{this.state.items.length + 1}
            </Button>
          </form>
        </div>
      </Container>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}><P>{item.text}</P></li>
        ))}
      </ul>
    );
  }
}

