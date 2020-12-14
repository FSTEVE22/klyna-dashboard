export default function Home() {
    return (
      <div>

<body>
    <div class="app">
        <div class="layout">
           

            {/* <!-- Page Container START --> */}
            <div class="page-container">
                

                {/* <!-- Content Wrapper START --> */}
                <div class="main-content">
                    <div class="page-header">
                        <h2 class="header-title">Orders List</h2>
                        <div class="header-sub-title">
                            <nav class="breadcrumb breadcrumb-dash">
                                <a href="#" class="breadcrumb-item"><i class="anticon anticon-home m-r-5"></i>Home</a>
                                <a class="breadcrumb-item" href="#">Transactions</a>
                                <span class="breadcrumb-item active">Transaction List</span>
                            </nav>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="row m-b-30">
                                <div class="col-lg-8">
                                    <div class="d-md-flex">
                                        <div class="m-b-10 m-r-15">
                                            <select class="custom-select" style={{minWidth: 180+'px'}}>
                                                <option selected>Status</option>
                                                <option value="all">All</option>
                                                <option value="homeDeco">Pending</option>
                                                <option value="eletronic">Approved</option>
                                                <option value="jewellery">Canceled</option>
                                            </select>
                                        </div>
                                        <div class="m-b-10">
                                            <select class="custom-select" style={{minWidth: 180+'px'}}>
                                                <option selected>All</option>
                                                <option value="all">Today</option>
                                                <option value="inStock">This week</option>
                                                <option value="outOfStock">This Month</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 text-right">
                                    <button class="btn btn-primary">
                                        <i class="anticon anticon-plus-circle m-r-5"></i>
                                        <span>Add Product</span>
                                    </button>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-hover e-commerce-table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Customer</th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                #3134
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar avatar-image" style={{height: 30+'px', minWidth: 30+'px', maxWidth:30+'px'}}>
                                                            <img src="/images/avatars/thumb-1.jpg" alt=""/>
                                                        </div>
                                                        <h6 class="m-l-10 m-b-0">Erin Gonzales</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Home Decoration</td>
                                            <td>$912.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-success badge-dot m-r-10"></div>
                                                    <div>Pending</div>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                    <i class="anticon anticon-eye"></i>
                                                </button>
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                    <i class="anticon anticon-edit"></i>
                                                </button>
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                                    <i class="anticon anticon-delete"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                #3234
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar avatar-image" style={{height: 30+'px', minWidth: 30+'px', maxWidth:30+'px'}}>
                                                            <img src="/images/avatars/thumb-2.jpg" alt=""/>
                                                        </div>
                                                        <h6 class="m-l-10 m-b-0">Darryl Day</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Eletronic</td>
                                            <td>$137.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-success badge-dot m-r-10"></div>
                                                    <div>Approved</div>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                    <i class="anticon anticon-eye"></i>
                                                </button>
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                    <i class="anticon anticon-edit"></i>
                                                </button>
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                                    <i class="anticon anticon-delete"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                #33564
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar avatar-image" style={{height: 30+'px', minWidth: 30+'px', maxWidth:30+'px'}}>
                                                            <img src="/images/avatars/thumb-3.jpg" alt=""/>
                                                        </div>
                                                        <h6 class="m-l-10 m-b-0">Marshall Nichols</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Home Decoration</td>
                                            <td>$912.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-success badge-dot m-r-10"></div>
                                                    <div>Pending</div>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                    <i class="anticon anticon-eye"></i>
                                                </button>
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                    <i class="anticon anticon-edit"></i>
                                                </button>
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                                    <i class="anticon anticon-delete"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                #3443
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar avatar-image" style={{height: 30+'px', minWidth: 30+'px', maxWidth:30+'px'}}>
                                                            <img src="/images/avatars/thumb-4.jpg" alt=""/>
                                                        </div>
                                                        <h6 class="m-l-10 m-b-0">Virgil Gonzales</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Home Decoration</td>
                                            <td>$128.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-danger badge-dot m-r-10"></div>
                                                    <div>Processed</div>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                    <i class="anticon anticon-eye"></i>
                                                </button>
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                    <i class="anticon anticon-edit"></i>
                                                </button>
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                                    <i class="anticon anticon-delete"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                #35456
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar avatar-image" style={{height: 30+'px', minWidth: 30+'px', maxWidth:30+'px'}}>
                                                            <img src="/images/avatars/thumb-5.jpg" alt=""/>
                                                        </div>
                                                        <h6 class="m-l-10 m-b-0">Nicole Wyne</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Eletronic</td>
                                            <td>$776.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-danger badge-dot m-r-10"></div>
                                                    <div>waiting Approval</div>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                    <i class="anticon anticon-eye"></i>
                                                </button>
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                    <i class="anticon anticon-edit"></i>
                                                </button>
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                                    <i class="anticon anticon-delete"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                #3664
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar avatar-image" style={{height: 30+'px', minWidth: 30+'px', maxWidth:30+'px'}}>
                                                            <img src="/images/avatars/thumb-5.jpg" alt=""/>
                                                        </div>
                                                        <h6 class="m-l-10 m-b-0">Nicole Wyne</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Eletronic</td>
                                            <td>$119.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-success badge-dot m-r-10"></div>
                                                    <div>Pending</div>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                    <i class="anticon anticon-eye"></i>
                                                </button>
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                    <i class="anticon anticon-edit"></i>
                                                </button>
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                                    <i class="anticon anticon-delete"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                #3722
                                            </td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex align-items-center">
                                                        <div class="avatar avatar-image" style={{height: 30+'px', minWidth: 30+'px', maxWidth:30+'px'}}>
                                                            <img src="/images/avatars/thumb-4.jpg" alt=""/>
                                                        </div>
                                                        <h6 class="m-l-10 m-b-0">Virgil Gonzales</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Home Decoration</td>
                                            <td>$199.00</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="badge badge-success badge-dot m-r-10"></div>
                                                    <div>Confirmed</div>
                                                </div>
                                            </td>
                                            <td class="text-right">
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                    <i class="anticon anticon-eye"></i>
                                                </button>
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded pull-right">
                                                    <i class="anticon anticon-edit"></i>
                                                </button>
                                                <button class="btn btn-icon btn-hover btn-sm btn-rounded">
                                                    <i class="anticon anticon-delete"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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
    )}