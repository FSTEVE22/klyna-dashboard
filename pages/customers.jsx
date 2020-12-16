import Link from "next/link";
export default function Home() {
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
                                                        <input type="text" class="form-control" id="title" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="userName">FirstName:</label>
                                                        <input type="text" class="form-control" id="firstName" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="middleName">MiddleName:</label>
                                                        <input type="text" class="form-control" id="middleName" />
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="lastName">LastName:</label>
                                                        <input type="text" class="form-control" id="latsName" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row align-items-center">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="companyName">CompanyName:</label>
                                                        <input type="text" class="form-control" id="companyName" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="displayName">DisplayName:</label>
                                                        <input type="text" class="form-control" id="displayName" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>

                                            {/* second line here  */}
                                           
                                            <hr style={{height:'4px'}}/>

                                            {/* third line starts here */}
                                            <div class="card">
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
                                            {/* this id for the fouth */}
                                            <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Number</h4>
                                    </div>
                                    <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="Streer/Quater">Streer/Quater:</label>
                                                        <input type="text" class="form-control" id="Streer/Quater" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="State/Province">State/Province:</label>
                                                        <input type="text" class="form-control" id="State/Province" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* fifth one here  */}
                                            <div class="row align-items-center">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="City/Town">City/Town:</label>
                                                        <input type="text" class="form-control" id="City/Town" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="Additional Phone Contact">Additional Phone Contact:</label>
                                                        <input type="text" class="form-control" id="AdditionalPhoneContact" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                            
                                            <hr/>
                                            {/* sixth one here */}

                                            <div class="card">
                                    <div class="card-header">
                                        <h4 class="card-title">Number</h4>
                                    </div>
                                    <div class="card-body">
                                            <div class="row align-items-center">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="SecondLocation">SecondLocation:</label>
                                                        <input type="text" class="form-control" id="SecondLocation" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="State/Province">State/Province:</label>
                                                        <input type="text" class="form-control" id="AdditionalPhoneContact" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* seventh here  */}
                                            <div class="row align-items-center">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="City">City:</label>
                                                        <input type="text" class="form-control" id="City" />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="font-weight-semibold" for="file">Uploadfile:</label>
                                                        <input type="file" class="form-control" id="file" />
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                            {/* end */}
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
