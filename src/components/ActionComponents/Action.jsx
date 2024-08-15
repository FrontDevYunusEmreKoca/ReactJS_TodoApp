import { render } from "@testing-library/react"
import React from "react";
import "./Action.css"

class  Action extends React.Component {
    constructor(props) {
        super(props);
        this.CustomerAdd = this.CustomerAdd.bind(this)
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.clearInput = this.clearInput.bind(this)
    
      
       
       
    }
    CustomerAdd(e){
        e.preventDefault();
        const customer =  e.target.elements.TxtItem.value.trim();
        console.log(customer)
        this.props.CustomerAdd(customer);
      
        
    }
    handleDeleteAll() {
        this.props.clearAllCustomers();
      }
     
      clearInput(){
        const input =document.getElementById("txtdeneme").value;
        console.log(input, "asdsadasdasd2")
        if(input){
           return {input : ""}
        }
      }
   
   
   
   
    render() {
        return (
            <div>
                
               <form onSubmit={this.CustomerAdd}>
                    <div className="input-group my-3">
                        <input id="txtdeneme" type="text"  name="TxtItem" placeholder="Add a new Customer" className="form-control"></input>
                        <div className="btnsForm">
                        <button type="submit" className="input-group-text BtnInputAdd ms-2"><i class="fa-solid fa-plus"></i></button>
                       
                        </div>
                       
                    </div>
                </form> 
                <button     onClick={this.handleDeleteAll}  className="deletetoCustomerALL btn-success btn">Delete All Customer</button>
            </div>
        )
    }
}
export default Action;