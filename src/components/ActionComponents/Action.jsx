import { render } from "@testing-library/react"
import React from "react";
import "./Action.css"

class  Action extends React.Component {
    constructor(props) {
        super(props);
        this.CustomerAdd = this.CustomerAdd.bind(this)
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.clearInput = this.clearInput.bind(this);
       
      
       
       
    }
    CustomerAdd(e){
        e.preventDefault();
        const customer =  e.target.elements.TxtItem.value.trim();
        console.log(customer)
        
    }
    handleDeleteAll() {
        this.props.clearAllCustomers();
      }
      clearInput(){
        const InputDeger = document.getElementById("txtdeneme");
        
        if(InputDeger){
            InputDeger.value = ""
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
                        <button  onClick={this.clearInput} className="input-group-text BtnInputDelete ms-2"><i class="fa-solid fa-delete-left"></i></button>
                        </div>
                       
                    </div>
                </form> 
                <button     onClick={this.handleDeleteAll}  className="deletetoCustomerALL btn-success btn">Delete All Customer</button>
            </div>
        )
    }
}
export default Action;