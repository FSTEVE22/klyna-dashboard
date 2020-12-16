import Head from 'next/head'
import Link from "next/link";
import React, {useState, useEffect} from 'react'
import axios from 'axios'

class Home extends React.Component {
    // State of your application

    constructor(props)
    {
        super(props);
        this.state={
            count:0,
            count1:0,
            count2:0,
            count3:0,
            man: [],
            woman:[],
            house:[],
            other:[],
            error: null,
            counting:0,
            item:[]


        }
    }
    // Fetch your posts immediately after the component is mounted
    componentDidMount = async () => {

      try {
        const response = await axios.get('json-item/men.json')
        this.setState({ man: response.data });

      } catch (error) {
        this.setState({ error });
      }
      // for women
      try {
        const response = await axios.get('json-item/women.json')
        this.setState({ woman: response.data });

      } catch (error) {
        this.setState({ error });
      }

      //for houseHold
      try {
        const response = await axios.get('json-item/houseHold.json')
        this.setState({ house: response.data });

      } catch (error) {
        this.setState({ error });
      }
       // for others 
       try {
        const response = await axios.get('json-item/others.json')
        this.setState({ other: response.data });

      } catch (error) {
        this.setState({ error });
      }
      
    };
   
    increment = (id,cost,price,point,code,itemName, e) =>
    {
        var user = JSON.stringify({ 
            id: id, 
           cost:cost,
           price:price,
           code:code,
           itemName:itemName,
           point:point
               }),
           users = localStorage.getItem('user');

       users = users ? JSON.parse(users) : [];

       users.push(user);

       localStorage.setItem("user", JSON.stringify(users));
        this.setState({counting:id});
        this.setState({count:this.state.count +1});
    }
    decrement = (id,cost, e) =>
    {
        if(this.state.count<1)
        this.setState({count:0});
        else
        this.setState({count:this.state.count -1});
    }

    increment1 = (id,cost,price,point,code,itemName, e) =>
    {

        var user = JSON.stringify({ 
            id: id, 
           cost:cost,
           price:price,
           code:code,
           itemName:itemName,
           point:point
               }),
           users = localStorage.getItem('user');

       users = users ? JSON.parse(users) : [];

       users.push(user);

       localStorage.setItem("user", JSON.stringify(users));
        this.setState({count1:this.state.count1 +1});
    }

    decrement1 = (id,cost,e) =>
    {
        

       
        if(this.state.count1<1)
        this.setState({count1:0});
        else
        this.setState({count1:this.state.count1 -1});
    }

    increment2 = (id,cost,price,point,code,itemName, e) =>
    {
        var user = JSON.stringify({ 
            id: id, 
           cost:cost,
           price:price,
           code:code,
           itemName:itemName,
           point:point
               }),
           users = localStorage.getItem('user');

       users = users ? JSON.parse(users) : [];

       users.push(user);
       localStorage.setItem("user", JSON.stringify(users));

        this.setState({count2:this.state.count2 +1});
    }

    decrement2 = (id,cost, e) =>
    {
        if(this.state.count2<1)
        this.setState({count2:0});
        else
        this.setState({count2:this.state.count2 -1});
    }

    increment3 = (id,cost,price,point,code,itemName, e) =>
    {
        var user = JSON.stringify({ 
            id: id, 
           cost:cost,
           price:price,
           code:code,
           itemName:itemName,
           point:point
               }),
           users = localStorage.getItem('user');

       users = users ? JSON.parse(users) : [];

       users.push(user);
        localStorage.setItem("user", JSON.stringify(users));
        this.setState({count3:this.state.count3 +1});
    }

    decrement3 = (id,cost,price,point,code,itemName, e) =>
    {
        var user = { 
            id: id, 
           cost:cost,
           price:price,
           code:code,
           itemName:itemName,
           point:point
               }
       
        localStorage.removeItem("user");
        if(this.state.count3<1)
        this.setState({count3:0});
        else
        this.setState({count3:this.state.count3 -1});
    }
    
  
    render() {
      var sum = this.state.count + this.state.count1 + this.state.count2 +this.state.count3 ;   


    return (
      <div>

<body>
    <div class="app">
        <div class="layout">
{/* <!-- Page Container START --> */}
            <div class="page-container">
                

                {/* <!-- Content Wrapper START --> */}
                <div class="main-content ">
                    <div class="container-fluid ">
                        <div class="row  ">
                            <div class="col-md-12 ">
                                    <div class="accordion z-100 borderless w-100" id="accordion-borderless">
                                        <div class="card w-100">
                                            <div class="card-header">
                                                <h5 class="card-title">
                                                    <a data-toggle="collapse" href="#collapseOneBorderless">
                                                        <div class="price-accordion">
                                                            <div>
                                                                <h1> Order Summary</h1>
                                                            </div>
                                                            <div class="d-row">
                                                                <h1>Items: </h1>
                                                                <h1>{sum}</h1>
                                                            </div>
                                                            <div>
                                                                <button class="btn btn-success">View Details</button>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapseOneBorderless" class="collapse " data-parent="#accordion-borderless">
                                                <div class="card-body">
                                                    <div class="row d-flex align-items-center bg-grey my-1">
                                                        <div class="col-md-4 p-15 ">
                                                            <div>
                                                            <div class="d-flex">
                                                                <div class="d-flex">
                                                                    <h4 class="m-b-0">Male Jeans</h4>
                                                                    <span class="badge badge-pill badge-success mx-2">CFA 800</span>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="col-md-4 p-15 ">
                                                            <h2 class="text-center"> 2000</h2>
                                                        </div>
                                                        <div class="col-md-4 p-15 ">
                                                            <div class="d-flex justify-content-center card-actions">
                                                                <button class="center text-center minus-button"> <h1 class="my-auto"><i class="anticon anticon-minus-circle"></i></h1></button>
                                                                <input type="text" placeholder="" class="mx-2" value="0"/>
                                                                <button class="add-button text-center"> <h1 class="my-auto"><i class="anticon anticon-plus-circle"></i> </h1></button>
                                                                <h3 class="my-auto m-l-20"><i class="anticon anticon-close"></i></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row d-flex align-items-center bg-grey my-1">
                                                        <div class="col-md-4 p-15 ">
                                                                <div class="d-flex">
                                                                    <h4 class="m-b-0">Blouse</h4>
                                                                    <span class="badge badge-pill badge-success mx-2">CFA 800</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 p-15 ">
                                                            <h2 class="text-center"> 2000</h2>
                                                        </div>
                                                        <div class="col-md-4 p-15 ">
                                                            <div class="d-flex justify-content-center card-actions">
                                                                <button class="center text-center minus-button"> <h1 class="my-auto"><i class="anticon anticon-minus-circle"></i></h1></button>
                                                                <input type="text" placeholder="" class="mx-2" value="0"/>
                                                                <button class="add-button text-center"> <h1 class="my-auto"><i class="anticon anticon-plus-circle"></i> </h1></button> 
                                                                <h3 class="my-auto m-l-20"><i class="anticon anticon-close"></i></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row d-flex align-items-center bg-grey my-1">
                                                        <div class="col-md-4 p-15 ">
                                                            <div class="d-flex">
                                                                    <h4 class="m-b-0">Menu suit</h4>
                                                                    <span class="badge badge-pill badge-success mx-2">CFA 3000</span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4 p-15 ">
                                                            <h2 class="text-center"> 2000</h2>
                                                        </div>
                                                        <div class="col-md-4 p-15 ">
                                                            <div class="d-flex justify-content-center card-actions">
                                                                <button class="center text-center minus-button"> <h1 class="my-auto"><i class="anticon anticon-minus-circle"></i></h1></button>
                                                                <input type="text" placeholder="" class="mx-2" value="0"/>
                                                                <button class="add-button text-center"> <h1 class="my-auto"><i class="anticon anticon-plus-circle"></i> </h1></button>
                                                                <h3 class="my-auto m-l-20"><i class="anticon anticon-close"></i></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row d-flex align-items-center bg-grey my-1">
                                                        <div class="col-md-4 p-15 ">
                                                            <div>
                                                                <div class="d-flex">
                                                                    <h4 class="m-b-0">Female Jackets</h4>
                                                                    <span class="badge badge-pill badge-success mx-2">CFA 2000</span>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <div class="col-md-4 p-15 ">
                                                            <h2 class="text-center"> 2000</h2>
                                                        </div>
                                                        <div class="col-md-4 p-15 ">
                                                            <div class="d-flex justify-content-center card-actions">
                                                                <button class="center text-center minus-button"> <h1 class="my-auto"><i class="anticon anticon-minus-circle"></i></h1></button>
                                                                <input type="text" placeholder="" class="mx-2" value="0"/>
                                                                <button class="add-button text-center"> <h1 class="my-auto"><i class="anticon anticon-plus-circle"></i> </h1></button>
                                                                <h3 class="my-auto m-l-20"><i class="anticon anticon-close"></i></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-footer">
                                                    <button class="btn btn-info float-left my-2"> <h4 class="text-white">Create Invoice</h4> </button>
                                                    <button class="btn btn-success float-right my-2"> <h4 class="text-white">Create Order</h4> </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div class="card p-15 ">
                                    <ul class="nav nav-tabs nav-justified p-t-15" id="myTabJustified" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="home-tab-justified" data-toggle="tab" href="#home-justified" role="tab" aria-controls="home-justified" aria-selected="true">Men</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab-justified" data-toggle="tab" href="#profile-justified" role="tab" aria-controls="profile-justified" aria-selected="false">Women</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="contact-tab-justified" data-toggle="tab" href="#contact-justified" role="tab" aria-controls="contact-justified" aria-selected="false">House Hold</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="others-tab-justified" data-toggle="tab" href="#others-justified" role="tab" aria-controls="contact-justified" aria-selected="false">Others</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content m-t-15" id="myTabContentJustified">
                                        <div class="tab-pane fade show active" id="home-justified" role="tabpanel" aria-labelledby="home-tab-justified">
                                            <div class="row b-bottom">
                                                <div class="col-md-4">
                                                    <h1 class="text-center">Item</h1>
                                                </div>
                                                <div class="col-md-4">
                                                   <h1 class="text-center">Total Cost</h1>
                                                </div>
                                                <div class="col-md-4">
                                                    <h1 class="text-center">Actions</h1>
                                                </div>
                                            </div>
                                            {this.state.man.map((men, index) => (  
                                            <div class="row b-bottom d-flex align-items-center"  key={index.id} data-id={men.id}>
                                                <div class="col-md-4 p-15 ">
                                                    <div>
                                                              
                                                    <div class="d-flex">
                                                    
                                                        <div class="fabric-img">
                                                            <img src="/images/others/product-1.jpg" class="img-fluid" alt=""/>
                                                        </div>
                                                        <div class="m-l-15">
                                                            <h4 class="m-b-0">{men.itemName}</h4>
                                                            <p class="text-muted m-b-0">Code: {men.code}</p>
                                                            <p class="text-muted m-b-0">Points: {men.point}</p>
                                                            <span class="badge badge-pill badge-success">CFA {men.price}</span>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                                </div>
                                                <div class="col-md-4 p-15 ">
                                                    <h2 class="text-center">{men.cost}</h2>
                                                </div>
                                                <div class="col-md-4 p-15 ">
                                                    <div class="d-flex justify-content-center card-actions">
                                                        <button class="center text-center minus-button" onClick={this.decrement.bind(this, men.id,men.cost)}> <h1 class="my-auto"><i class="anticon anticon-minus-circle"></i></h1></button>
                                                        <input  key={index.id} data-id={men.id} type="text" placeholder="" class="mx-2" value={this.state.count} />
                                                        <button class="add-button text-center" onClick={this.increment.bind(this, men.id,men.cost,men.price,men.itemName,men.point,men.code)}><h1 class="my-auto"><i class="anticon anticon-plus-circle"></i> </h1></button>
                                                    </div>
                                                </div>
                                            </div>
                                             ))}

                                            

                                            
                                        </div>
                                            
                                            {/* <div class="row b-bottom d-flex align-items-center">
                                                <div class="col-md-4 p-15 ">
                                                    <div>
                                                    <div class="d-flex">
                                                        <div class="fabric-img">
                                                            <img src="/images/others/product-3.jpg" class="img-fluid" alt=""/>
                                                        </div>
                                                        <div class="m-l-15">
                                                            <h4 class="m-b-0">Menu suit and Garments</h4>
                                                            <p class="text-muted m-b-0">Code: #5325</p>
                                                            <p class="text-muted m-b-0">Points:3</p>
                                                            <span class="badge badge-pill badge-success">CFA 3000</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="col-md-4 p-15 ">
                                                    <h2 class="text-center"> 2000</h2>
                                                </div>
                                                <div class="col-md-4 p-15 ">
                                                    <div class="d-flex justify-content-center card-actions">
                                                        <button class="center text-center minus-button"> <h1 class="my-auto"><i class="anticon anticon-minus-circle"></i></h1></button>
                                                        <input type="text" placeholder="" class="mx-2" value="0"/>
                                                        <button class="add-button text-center"> <h1 class="my-auto"><i class="anticon anticon-plus-circle"></i> </h1></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div class="tab-pane fade" id="profile-justified" role="tabpanel" aria-labelledby="profile-tab-justified">
                                            <div class="row b-bottom">
                                                <div class="col-md-4">
                                                    <h1 class="text-center">Item</h1>
                                                </div>
                                                <div class="col-md-4">
                                                   <h1 class="text-center">Total Cost</h1>
                                                </div>
                                                <div class="col-md-4">
                                                    <h1 class="text-center">Actions</h1>
                                                </div>
                                            </div>
                                            {this.state.woman.map((women, index) => (  
                                            <div class="row b-bottom d-flex align-items-center"  key={index.id}>
                                                <div class="col-md-4 p-15 ">
                                                    <div>
                                                              
                                                    <div class="d-flex">
                                                    
                                                        <div class="fabric-img">
                                                        <img src="/images/others/product-3.jpg" class="img-fluid" alt=""/>
                                                        </div>
                                                        <div class="m-l-15">
                                                            <h4 class="m-b-0">{women.itemName}</h4>
                                                            <p class="text-muted m-b-0">Code: {women.code}</p>
                                                            <p class="text-muted m-b-0">Points: {women.point}</p>
                                                            <span class="badge badge-pill badge-success">CFA {women.price}</span>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                                </div>
                                                <div class="col-md-4 p-15 ">
                                                    <h2 class="text-center">{women.cost}</h2>
                                                </div>
                                                <div class="col-md-4 p-15 ">
                                                    <div class="d-flex justify-content-center card-actions">
                                                        <button class="center text-center minus-button" onClick={this.decrement1}> <h1 class="my-auto"><i class="anticon anticon-minus-circle"></i></h1></button>
                                                        <input type="text" placeholder="" class="mx-2" value={this.state.count1} />
                                                        <button class="add-button text-center" onClick={this.increment1.bind(this,women.id,women.cost,women.price,women.itemName,women.point,women.code)}> <h1 class="my-auto"><i class="anticon anticon-plus-circle"></i> </h1></button>
                                                    </div>
                                                </div>
                                            </div>
                                             ))}
                                        </div>
                                        














                                        <div class="tab-pane fade" id="contact-justified" role="tabpanel" aria-labelledby="contact-tab-justified">
                                            <div class="row b-bottom">
                                                    <div class="col-md-4">
                                                        <h1 class="text-center">Item</h1>
                                                </div>
                                                <div class="col-md-4">
                                                   <h1 class="text-center">Total Cost</h1>
                                                </div>
                                                <div class="col-md-4">
                                                    <h1 class="text-center">Actions</h1>
                                                </div>
                                            </div>
                                            {this.state.house.map((houseHold, index) => (  
                                            <div class="row b-bottom d-flex align-items-center"  key={index.id}>
                                                <div class="col-md-4 p-15 ">
                                                    <div>
                                                              
                                                    <div class="d-flex">
                                                    
                                                        <div class="fabric-img">
                                                            <img src="/images/others/product-2.jpg" class="img-fluid" alt=""/>
                                                        </div>
                                                        <div class="m-l-15">
                                                            <h4 class="m-b-0">{houseHold.itemName}</h4>
                                                            <p class="text-muted m-b-0">Code: {houseHold.code}</p>
                                                            <p class="text-muted m-b-0">Points: {houseHold.point}</p>
                                                            <span class="badge badge-pill badge-success">CFA {houseHold.price}</span>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                                </div>
                                                <div class="col-md-4 p-15 ">
                                                    <h2 class="text-center">{houseHold.cost}</h2>
                                                </div>
                                                <div class="col-md-4 p-15 ">
                                                    <div class="d-flex justify-content-center card-actions">
                                                        <button class="center text-center minus-button" onClick={this.decrement2}> <h1 class="my-auto"><i class="anticon anticon-minus-circle"></i></h1></button>
                                                        <input type="text" placeholder="" class="mx-2" value={this.state.count2} />
                                                        <button class="add-button text-center" onClick={this.increment2.bind(this,houseHold.id,houseHold.cost,houseHold.price,houseHold.itemName,houseHold.point,houseHold.code)}> <h1 class="my-auto"><i class="anticon anticon-plus-circle"></i> </h1></button>
                                                    </div>
                                                </div>
                                            </div>
                                             ))}
                                        </div>


























                                        <div class="tab-pane fade" id="others-justified" role="tabpanel" aria-labelledby="others-tab-justified">
                                            <div class="row b-bottom">
                                                <div class="col-md-4">
                                                    <h1 class="text-center">Item</h1>
                                                </div>
                                                <div class="col-md-4">
                                                   <h1 class="text-center">Total Cost</h1>
                                                </div>
                                                <div class="col-md-4">
                                                    <h1 class="text-center">Actions</h1>
                                                </div>
                                            </div>
                                            {this.state.other.map((others, index) => (  
                                            <div class="row b-bottom d-flex align-items-center"  key={index.id}>
                                                <div class="col-md-4 p-15 ">
                                                    <div>
                                                              
                                                    <div class="d-flex">
                                                    
                                                        <div class="fabric-img">
                                                            <img src="/images/others/product-1.jpg" class="img-fluid" alt=""/>
                                                        </div>
                                                        <div class="m-l-15">
                                                            <h4 class="m-b-0">{others.itemName}</h4>
                                                            <p class="text-muted m-b-0">Code: {others.code}</p>
                                                            <p class="text-muted m-b-0">Points: {others.point}</p>
                                                            <span class="badge badge-pill badge-success">CFA {others.price}</span>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                                </div>
                                                <div class="col-md-4 p-15 ">
                                                    <h2 class="text-center">{others.cost}</h2>
                                                </div>
                                                <div class="col-md-4 p-15 ">
                                                    <div class="d-flex justify-content-center card-actions">
                                                        <button class="center text-center minus-button" onClick={this.decrement3}> <h1 class="my-auto"><i class="anticon anticon-minus-circle"></i></h1></button>
                                                        <input type="text" placeholder="" class="mx-2" value={this.state.count3} />
                                                        <button class="add-button text-center" onClick={this.increment3.bind(this,others.id,others.cost,others.price,others.itemName,others.point,others.code)}> <h1 class="my-auto"><i class="anticon anticon-plus-circle"></i> </h1></button>
                                                    </div>
                                                </div>
                                            </div>
                                             ))}
                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Content Wrapper END --> */}

                {/* <!-- Footer START --> */}
                <footer class="footer">
                    <div class="footer-content">
                        <p class="m-b-0">Copyright © 2020 Klyna. All rights reserved.</p>
                        <span>
                            <a href="#" class="text-gray m-r-15">Term &amp; Conditions</a>
                            <a href="#" class="text-gray">Privacy &amp; Policy</a>
                        </span>
                    </div>
                </footer>
                {/* <!-- Footer END --> */}

            </div>
            {/* <!-- Page Container END --> */}

            
        </div>
    </div>

    
   

</body>
</div>
);
    
}

}
export default Home