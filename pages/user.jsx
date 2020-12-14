import Link from "next/link";

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
                        <h2 class="header-title">Profile</h2>
                        <div class="header-sub-title">
                            <nav class="breadcrumb breadcrumb-dash">
                                <a href="#" class="breadcrumb-item"><i class="anticon anticon-home m-r-5"></i>Home</a>
                                <span class="breadcrumb-item active">User</span>
                            </nav>
                        </div>
                    </div>
                    <div class="container">
                        <div class="card">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-md-6">
                                        <div class="d-md-flex align-items-center">
                                            <div class="text-center text-sm-left ">
                                                <div class="avatar avatar-image" style={{width: 150+'px', height:150+'px'}}>
                                                    <img src="/images/avatars/thumb-3.jpg" alt=""/>
                                                </div>
                                            </div>
                                            <div class="text-center text-sm-left m-v-15 p-l-30">
                                                <h2 class="m-b-5">Abanda Kelly</h2>
                                                <p class="text-opacity font-size-13">Customer: 25486</p>
                                                <p class="text-dark m-b-20"> <b>Role :</b> Customer</p>
                                                <hr/>
                                                <div class="d-flex justify-content-space-between">
                                                    <div class="">
                                                        <span class="badge badge-pill badge-success mx-3"> <i class="anticon anticon-check mx-2"></i> Active</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="d-md-block d-none border-left col-1"></div>
                                            <div class="col">
                                                <ul class="list-unstyled m-t-10">
                                                    <li class="row">
                                                        <p class="col-sm-4 col-4 font-weight-semibold text-dark m-b-5">
                                                            <i class="m-r-10 text-primary anticon anticon-mail"></i>
                                                            <span>Email: </span> 
                                                        </p>
                                                        <p class="col font-weight-semibold"> abandaKelly@gmail.com</p>
                                                    </li>
                                                    <li class="row">
                                                        <p class="col-sm-4 col-4 font-weight-semibold text-dark m-b-5">
                                                            <i class="m-r-10 text-primary anticon anticon-phone"></i>
                                                            <span>Phone: </span> 
                                                        </p>
                                                        <p class="col font-weight-semibold"> +237-2584-1234</p>
                                                    </li>
                                                    <li class="row">
                                                        <p class="col-sm-4 col-5 font-weight-semibold text-dark m-b-5">
                                                            <i class="m-r-10 text-primary anticon anticon-compass"></i>
                                                            <span>Location: </span> 
                                                        </p>
                                                        <p class="col font-weight-semibold">Ron Point Makepe Douala</p>
                                                    </li>
                                                </ul>
                                                <div class="d-flex font-size-22 m-t-15">
                                                    <a href="#" class="text-gray p-r-20">
                                                        <i class="anticon anticon-facebook"></i>
                                                    </a>        
                                                    <a href="#" class="text-gray p-r-20">    
                                                        <i class="anticon anticon-twitter"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h3 class="my-3">Finance Overview</h3>
                                        <div class="row">
                                            <div class="col-md-6 col-lg-3">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <p class="m-b-0">Subscriptions</p>
                                                                <h2 class="m-b-0">
                                                                    <span>2</span>
                                                                </h2>
                                                            </div>
                                                            <div class="avatar avatar-icon avatar-lg avatar-blue">
                                                                <i class="anticon anticon-dollar"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-3">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <p class="m-b-0">Pending Orders</p>
                                                                <h2 class="m-b-0">
                                                                    <span>1</span>
                                                                </h2>
                                                            </div>
                                                            <div class="avatar avatar-icon avatar-lg avatar-blue">
                                                                <i class="anticon anticon-dollar"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-3">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <p class="m-b-0">Dept</p>
                                                                <h2 class="m-b-0">
                                                                    <span>14,966 F</span>
                                                                </h2>
                                                            </div>
                                                            <div class="avatar avatar-icon avatar-lg avatar-blue">
                                                                <i class="anticon anticon-dollar"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-3">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="d-flex justify-content-between align-items-center">
                                                            <div>
                                                                <p class="m-b-0">Revenue</p>
                                                                <h2 class="m-b-0">
                                                                    <span>14,966 F</span>
                                                                </h2>
                                                            </div>
                                                            <div class="avatar avatar-icon avatar-lg avatar-blue">
                                                                <i class="anticon anticon-dollar"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h3 class="my-3">About Yourself</h3>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</p>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">

                                    <div class="d-flex justify-content-between align-items-center">
                                        <h5>Latest Transactions</h5>
                                        <div>
                                            <Link href="/transactions"><a  class="btn btn-sm btn-default">View All</a></Link>
                                        </div>
                                    </div>
                                    <div class="m-t-30">
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Customer</th>
                                                        <th>Date</th>
                                                        <th>Amount</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>#5331</td>
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
                                                        <td>8 May 2019</td>
                                                        <td>$137.00</td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <span class="badge badge-success badge-dot m-r-10"></span>
                                                                <span>Approved</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>#5375</td>
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
                                                        <td>6 May 2019</td>
                                                        <td>$322.00</td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <span class="badge badge-success badge-dot m-r-10"></span>
                                                                <span>Approved</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>#5762</td>
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
                                                        <td>1 May 2019</td>
                                                        <td>$543.00</td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <span class="badge badge-success badge-dot m-r-10"></span>
                                                                <span>Approved</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>#5865</td>
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
                                                        <td>28 April 2019</td>
                                                        <td>$876.00</td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <span class="badge badge-primary badge-dot m-r-10"></span>
                                                                <span>Pending</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>#5213</td>
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
                                                        <td>28 April 2019</td>
                                                        <td>$241.00</td>
                                                        <td>
                                                            <div class="d-flex align-items-center">
                                                                <span class="badge badge-success badge-dot m-r-10"></span>
                                                                <span>Approved</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
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
    )}
