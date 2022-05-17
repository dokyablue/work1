import React, { Component } from 'react';
import './app.css';
import { render } from '@testing-library/react';
import NavBar from './components/navBar';
import Habits from './components/habits';


class App extends Component{
  state={
      habits : [
          {id:1,name:'Reading',count:0}
          ,{id:2,name:'Writing',count:0}
          ,{id:3,name:'Coding',count:0}

      ]
  };
  handleIncrement = (habit) => {
      console.log(`handleIncrement ${habit.name}`);
      const habits = this.state.habits.map(item=>{
        if(item.id === habit.id){
          return {...habit , count : habit.count+1};
        }
        return item;
      })
      //const habits = [...this.state.habits];
      //const index = habits.indexOf(habit);
      //habits[index].count++;
      this.setState({habits});
    };
    handleDecrement = (habit) => {
      console.log(`handleDecrement ${habit.name}`);
      const habits = this.state.habits.map(item=>{
        if(item.id === habit.id){
          const count = habit.count-1;
          return {...habit , count : count < 0 ?  0 : count };
        }
        return item;
      })
      this.setState({habits});
  };
  handleDelete = (habit) => {
      console.log(`handleDelete ${habit.name}`);
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits});
    };
    handleAdd = (name) => {
      console.log(`handleAdd`);
      const habits = [...this.state.habits , {id : Date.now() , name , count : 0}];
      this.setState({habits});
    };
    handleReset = () =>{
      console.log(`handleReset`); 
      const habits = this.state.habits.map(habit => {
        if ( habit.count !== 0){
            return {...habit , count : 0 };
        }
        return habit;
      });
      this.setState({habits});
  }
  render(){
    return (
      <>
        <NavBar totalCount={this.state.habits.filter( item => item.count > 0 ).length} />
        <Habits habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    )
  }
}

export default App;
