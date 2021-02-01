// // TODO
var Lettuce = () => (
  <li>Lettuce</li>
)

var Tomatos = () => (
  <li>Tomatos</li>
)

var groceryItems = ['Lettuce', 'Tomato', 'Salt', 'Pepper'];


var GroceryList = (props) => (
  // <h2>My Grocery List</h2>
  <ul>
    {props.items.map( item =>
      <GroceryListItem item={item}/>
    )}
  </ul>
);

var TodoList = (props) => (
  <ul>
    {props.todos.map( todo =>
      <TodoListItem todo={todo} />
    )}
  </ul>
);
/* {

  var onListItemClick = (event) => {
    console.log('I got clicked');
  }


  return (
    <ul>
    <li onClick={onListItemClick}>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
    </ul>
    );
  };*/

  var App = () => (
    <div>
    <h2>My Todo List</h2>
    {/* <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> */}
    <GroceryList items={['Lettuce', 'Tomato', 'Salt', 'Pepper']} />
  </div>
)

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    }
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    })
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    }

    return(
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.onListItemHover.bind(this)}>{this.props.item}</li>
    )
  }
}

class TodoListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    }
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));

// ReactDOM.render(<GroceryList />, document.getElementById('app'));