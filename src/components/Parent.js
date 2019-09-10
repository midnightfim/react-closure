import React from 'react';
import '../App.css';
import ClosureCounter from './ClosureCounter';
import Proto from './Proto';

class Parent extends React.Component {

  // будем сохранять данные из дочерних компонентов в state родителя
  state = {
    data: 'НАЧАЛЬНОЕ СОСТОЯНИЕ...'
  }

  // функция, которая будет получать данные
  updateState = (who) => {
    this.setState({
      data: `Данные обновлены из: ${who}`
    })
  }

  render() {
    return (
      <div style={{margin: "100px"}}>
        РОДИТЕЛЬ: {this.state.data}
        <Child update={this.updateState}/>
        {/* передаем в дочерний компонент функцию, которая будет получать данные */}
        <ClosureCounter />
      </div>
    )
  }
}

class Child extends React.Component {

  // предпологаемые "данные"
  message = "ДОЧЬ";

  render() {
    return (
      <div>
        Дочерний компонент: 
        {/* при вызове this.props.update(this.message) данные придут в родительский state */}
        <button onClick={() => this.props.update(this.message)}>
          CLICK
        </button>
        {/* передаем в дочерний компонент функцию, которая будет получать данные */}
        <GrandChild update={this.props.update}/>
      </div>
    );
  }
}


class GrandChild extends React.Component {

  // предпологаемые "данные"
  message = "ВНУК";

  render() {
    return (
      <div>
        Дочерний компонент дочернего компонента: 
        {/* при вызове this.props.update(this.message) данные придут в родительский state */}
        <button onClick={() => this.props.update(this.message)}>
           CLICK
        </button>
      </div>
    );
  }
}


export default Parent;
