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
                        <h2 class="header-title">Invoice</h2>
                        <div class="header-sub-title">
                            <nav class="breadcrumb breadcrumb-dash">
                                <a href="#" class="breadcrumb-item"><i class="anticon anticon-home m-r-5"></i>Home</a>
                                <a class="breadcrumb-item" href="#">Pages</a>
                                <span class="breadcrumb-item active">Invoice</span>
                            </nav>
                        </div>
                    </div>
                    <div class="container">
                        <div class="card">
                            <div class="card-header py-2">
                                <div class="flow-right">
                                    <div class="d-row mx2">
                                        <h2><h2><i class="anticon anticon-printer mx-2"></i></h2></h2>
                                        <p> Print</p>
                                    </div>
                                    <div class="d-row mx-2">
                                        <h2 class="text-danger"><i class="anticon anticon-file-pdf mx-2"></i></h2>
                                        <p>Export as PDF</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div id="invoice" class="p-h-30">
                                    <div class="m-t-15 lh-2">
                                        <div class="inline-block">
                                            <img class="img-fluid" src="/images/logo/logo.png" alt=""/>
                                            <address class="p-l-10">
                                                <span class="font-weight-semibold text-dark">Klyna, Inc.</span><br/>
                                                <span>kwemo centre </span><br/>
                                                <span>Quatre Etage, Bonaberi, Douala</span><br/>
                                                <abbr class="text-dark" title="Phone">Phone:</abbr>
                                                <span>(+237) 456-666-258</span>
                                            </address>
                                        </div>
                                        <div class="float-right">
                                            <h2>INVOICE</h2>
                                        </div>
                                    </div>
                                    <div class="row m-t-20 lh-2">
                                        <div class="col-sm-9">
                                            <h3 class="p-l-10 m-t-10">Invoice To:</h3>
                                            <address class="p-l-10 m-t-10">
                                                <span class="font-weight-semibold text-dark">Genting Holdings.</span><br/>
                                                <span>8626 Maiden Dr. </span><br/>
                                                <span>Niagara Falls, New York 14304</span>
                                            </address>
                                        </div>
                                        <div class="col-sm-3">
                                            <div class="m-t-80">
                                                <div class="text-dark text-uppercase d-inline-block">
                                                    <span class="font-weight-semibold text-dark">Invoice No :</span></div>
                                                <div class="float-right">#1668</div>
                                            </div>
                                            <div class="text-dark text-uppercase d-inline-block">
                                                <span class="font-weight-semibold text-dark">Date :</span>
                                            </div>
                                            <div class="float-right">25/7/2018</div>
                                        </div>
                                    </div>
                                    <div class="m-t-20">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>Items</th>
                                                        <th>Quantity(Pieces)</th>
                                                        <th>Price</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Femal Swim suit</td>
                                                        <td>2</td>
                                                        <td>$450.00</td>
                                                        <td>$900.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Men Suit</td>
                                                        <td>1</td>
                                                        <td>$550.00</td>
                                                        <td>$550.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bed Sheet And PillowCase</td>
                                                        <td>1</td>
                                                        <td>$875.00</td>
                                                        <td>$875.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="row m-t-30 lh-1-8">
                                            <div class="col-sm-12">
                                                <div class="float-right text-right">
                                                    <p>Sub - Total amount: $2,325</p>
                                                    <p>Delivery (10%) : $232 </p>
                                                    <hr/>
                                                    <h3><span class="font-weight-semibold text-dark">Total :</span> $2,557.00</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row m-t-30 lh-2">
                                            <div class="col-sm-12">
                                                <div class="border-bottom p-v-20">
                                                    <p class="text-opacity"><small>In exceptional circumstances, Financial Services can provide an urgent manually processed special cheque. Note, however, that urgent special cheques should be requested only on an emergency basis as manually produced cheques involve duplication of effort and considerable staff resources. Requests need to be supported by a letter explaining the circumstances to justify the special cheque payment.</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row m-v-20">
                                            <div class="col-sm-6">
                                                <img class="img-fluid text-opacity m-t-5" width="100" src="/images/logo/logo.png" alt=""/>
                                            </div>
                                            <div class="col-sm-6 text-right">
                                                <small><span class="font-weight-semibold text-dark">Phone:</span> (237) 699 254 258</small>
                                                <br/>
                                                <small>support@klyna.com</small>
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
                        <p class="m-b-0">Copyright © 2020 klyna. All rights reserved.</p>
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


{/* <!-- Mirrored from themenate.com/enlink-bs/dist/invoice.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 13 Nov 2019 20:49:28 GMT --> */}

</div>
)}