
import React from 'react';
import './App.css';
import Header from './components/headerComponent/Header';
import Action from './components/ActionComponents/Action';
import TodoList from './components/TodoListComponent/TodoList';


class App extends React.Component{
  constructor (props) {
    super(props)
    this.CustomerAdd = this.CustomerAdd.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.clearAllCustomers = this.clearAllCustomers.bind(this);
    this.clearInputDelete = this.clearInputDelete.bind(this);
    
   
  
    this.state = {
      customers:[
        "Yunus Emre KOCA",
        "Yusuf Emir KOCA",
        "Erva KOCA",
      ]
    }
  
  }
  deleteItem(customer){
    console.log(customer)
    this.setState((prevState)=>{
      const arr = prevState.customers.filter((i) =>{
        return customer != i ;
      })
      return {
        customers :arr
      }
    })

  }
 
  CustomerAdd(customer){
    console.log(customer)
    this.setState((prevState)=>{
      return {customers : prevState.customers.concat(customer)}
    })
  }
  clearAllCustomers() {
    this.setState({ customers: [] });
  }
  clearInputDelete(){
    const clearInput = this.customerInputRef.current.value.trim();
    console.log(clearInput);
    this.props.clearInputDelete(clearInput);
    this.customerInputRef.current.value = "";
  }
  render(){
    
    const app = {
      title:"Customer Management System"
    }
    return(
      <div className='App'>
         <Header title = {app.title}/>
         <Action CustomerAdd=  {this.CustomerAdd} clearAllCustomers = {this.clearAllCustomers}   clearInputDelete = {this.clearInputDelete}/>
         <TodoList deleteItem = {this.deleteItem}  customers = {this.state.customers}/>
      </div>
     
    )
  }
}

export default App;
