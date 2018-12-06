import React from 'react';
import {connect} from 'react-redux';
import addItem from './actions1/addItem';
import deleteItem from './actions1/deleteItem';

const Item = props => {
  return (
    <div>
      <div>Item : {props.name} | {props.price}</div>
      <button onClick = {()=>{props.onDelete(props.index)}}>delete</button>
    </div>
  );
}

class Input extends React.Component{
  constructor(props){
    super(props);
    this.state = {name:"", price:""};
  }

  handleChangeName(e){
    this.setState({name: e.target.value});
  }

  handleChangePrice(e){
    this.setState({price: e.target.value});
  }

  addItem(){
    this.props.onAdd(this.state.name, this.state.price);
    this.setState({name:"", price:""});
  }

  render(){
    return(
      <div>
        <input
          onChange={this.handleChangeName.bind(this)}
          value={this.state.name}
        />
        <input
          onChange={this.handleChangePrice.bind(this)}
          value={this.state.price}
        />
        <button onClick={() => this.addItem()}>Add</button>
      </div>
    )
  }
}

const ItemList = props => {
  return (
    <div>
      <Input onAdd={props.onAdd}/>
      {props.items.map((item, index)=>{
        return (
          <Item
            name={item.name}
            price={item.price}
            index={index}
            onDelete={props.onDelete}
          />
        )
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items:state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (name, price) => {
      dispatch(addItem(name, price));
    },
    onDelete: (index) => {
      dispatch(deleteItem(index));
    }
  }
}

const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList);

const App = () => {
  return (
    <div>
      <ItemListContainer/>
    </div>
  );
};

export default App;