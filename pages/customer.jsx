import Link from "next/link";
import React from "react"
class Home extends React.Component {
    state = {
        firstname: "",
        showResults: false,
        lastname:"",
        middlename:"",
        companyname:"",
        companyname:"",
        title:""
      };

      handleChangetitle = e => {
        this.setState({
          title: e.target.value
        });
      };
      handleChangefname = e => {
        this.setState({
          firstname: e.target.value
        });
      };
      handleChangemname = e => {
        this.setState({
          middlename: e.target.value
        });
      };
      handleChangelname = e => {
        this.setState({
          lastname: e.target.value
        });
      };
      handleChangedname = e => {
        this.setState({
          displayname: e.target.value
        });
      };
      handleChangecname = e => {
        this.setState({
          companyname: e.target.value
        });
      };
    
      onClick = e => {
          if(this.state.firstname && this.state.companyname && this.state.displayname && this.state.lastname && this.state.companyname && this.state.title){
        this.setState({
            showResults: this.state.name === null ? false : true
          });
        }
        else{
            this.setState({
                showResults: this.state.name === null ? false : false
              });
        }

      };
    
    render(){
    return (
        <div>
            {/* <!DOCTYPE html> */}

            <body>
                <div class="app">
                    <div class="layout">
                        <div class="card">
                            <div class="page-container">
                                {/* <!-- Content Wrapper START --> */}
                                <div class="main-content">
                                    <div class="card-body">
                                        <h2 class="m-t-20">Create an Account</h2>
                                        <p class="m-b-30">Enter The credential </p>
                                        <form>
                                        <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">First Step</h4>
                                    </div>
                                    <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="title">Title:</label>
                                                        <input type="text" onChange={this.handleChangetitle}  value={this.state.title} class="form-control" id="title" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="userName">FirstName:</label>
                                                        <input type="text" onChange={this.handleChangefname}  value={this.state.firstname} class="form-control" id="firstName" />
                                                        
                                                    </div>
                                            
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="middleName">MiddleName:</label>
                                                        <input type="text" onChange={this.handleChangemname}  value={this.state.middlename}  class="form-control" id="middleName" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="lastName">LastName:</label>
                                                        <input type="text" onChange={this.handleChangelname}  value={this.state.lastname} class="form-control" id="latsName" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="companyName">CompanyName:</label>
                                                        <input onChange={this.handleChangecname}  value={this.state.companyname} type="text" class="form-control" id="companyName" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="displayName">DisplayName:</label>
                                                        <input onChange={this.handleChangedname}  value={this.state.displayname} type="text" class="form-control" id="displayName" />
                                                    </div>
                                                </div>
                                                
            
                                            </div>
                                            <div class="m-r-auto ">
                                                <button onClick={this.onClick} className="btn btn-primary" type="button">Next</button>
                                            </div>
                                            </div>
                                            </div>

                                            {/* second line here  */}
                                           
                                            <hr style={{height:'4px'}}/>

                                            {/* third line starts here */}
                                            <div class="card" style={{ display: this.state.showResults ? "block" : "none" }}>
                                    <div class="card-header">
                                        <h4 class="card-title">Number</h4>
                                    </div>
                                    <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="Phone">Phone:</label>
                                                        <input type="number" class="form-control" id="Phone" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="Mobile">Mobile:</label>
                                                        <input type="number" class="form-control" id="Mobile" />
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="Fax">Fax:</label>
                                                        <input type="number" class="form-control" id="Fax" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>

                                            <hr/>
                                            
                                            <div class="form-group">
                                                <div class="d-flex align-items-center justify-content-between p-t-15">

                                                    <button class="btn btn-block" style={{ background: "rgb(51,159,32)", color: "whitesmoke" }}>Create Account</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}
}
export default Home
