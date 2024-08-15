
import React from 'react';
import './App.css';
import Header from './components/headerComponent/Header';
import Action from './components/ActionComponents/Action';
import TodoList from './components/TodoListComponent/TodoList';
import Swal from 'sweetalert2';



class App extends React.Component{
  constructor (props) {
    super(props)
    this.CustomerAdd = this.CustomerAdd.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.clearAllCustomers = this.clearAllCustomers.bind(this);
   
    
   
  
    this.state = {
      customers:[
        "Yunus Emre KOCA",
        "Yusuf Emir KOCA",
        "Erva KOCA",
      ]
    }
  
  }
  componentDidMount(){
    const json =  localStorage.getItem("customers");
    const customers = JSON.parse(json)
    if (customers){
      this.setState({
        customers:customers
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.customers.length !== this.state.customers.length) {
        const json = JSON.stringify(this.state.customers);
        localStorage.setItem("customers", json);

        // Kontrol etmek için bir flag kullanıyoruz
        const showAlert = !localStorage.getItem("alertShown");

        if (showAlert) {
            const rootElement = document.getElementById("root");
            rootElement.classList.add("hidden");

            Swal.fire({
                title: 'Başarılı!',
                text: 'Yeni bir müşteri Kaydettiniz',
                icon: 'success',
                confirmButtonText: 'Tamam',
                backdrop: true,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false
            }).then(() => {
                document.getElementById("txtdeneme").value = "";
                rootElement.classList.remove("hidden");
                rootElement.classList.add("visible");

                // Görünür sınıfını geçici olarak kaldırın
                setTimeout(() => {
                    rootElement.classList.remove("visible");
                }, 500); // 500 ms, CSS geçiş süresine uygun olarak ayarlanmıştır

                // Uyarı gösterildi işaretini localStorage'a kaydedin
                localStorage.setItem("alertShown", "true");
            });
        }
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
 
  CustomerAdd(customer) {
    if (!customer) {
      const rootElement = document.getElementById("root");
      
      rootElement.classList.add("hidden");
      
      return Swal.fire({
        title: 'Hata!',
        text: 'Lütfen geçerli bir müşteri bilgisi girin!',
        icon: 'error',
        confirmButtonText: 'Tamam',
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
      }).then(() => {
         document.getElementById("txtdeneme").value = ""
        rootElement.classList.remove("hidden");
        rootElement.classList.add("visible");

        // Görünür sınıfını geçici olarak kaldırın
        setTimeout(() => {
          rootElement.classList.remove("visible");
        }, 500); // 500 ms, CSS geçiş süresine uygun olarak ayarlanmıştır
      });
    }

    else if (this.state.customers.indexOf(customer) > -1){
      const rootElement = document.getElementById("root");
      
      rootElement.classList.add("hidden");
      
      return Swal.fire({
        title: 'Hata!',
        text: 'Daha önce bu müşteriyi girdiniz,Lütfen farklı bir müşteri giriniz!',
        icon: 'error',
        confirmButtonText: 'Tamam',
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        
      }).then(() => {
         document.getElementById("txtdeneme").value = ""
        rootElement.classList.remove("hidden");
        rootElement.classList.add("visible");

        // Görünür sınıfını geçici olarak kaldırın
        setTimeout(() => {
          rootElement.classList.remove("visible");
        }, 500); // 500 ms, CSS geçiş süresine uygun olarak ayarlanmıştır
      });
      
    }
   
    this.setState((prevState) => {
     return {customers : prevState.customers.concat(customer)} 
    })
}


  clearAllCustomers() {
    this.setState({ customers: [] });
  }


  // clearInputDelete(){
  //   const clearInput = this.customerInputRef.current.value.trim();
  //   console.log(clearInput);
  //   this.props.clearInputDelete(clearInput);
  //   this.customerInputRef.current.value = "";
  // }
  render(){
    
    const app = {
      title:"Customer Management System"
    }
    return(
      <div className='App'>
         <Header title = {app.title}/>
         <Action CustomerAdd = {this.CustomerAdd} clearAllCustomers = {this.clearAllCustomers}   clearInputDelete = {this.clearInputDelete}/>
         <TodoList deleteItem = {this.deleteItem}  customers = {this.state.customers}/>
      </div>
     
    )
  }
}

export default App;
