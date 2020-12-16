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
                <div class="main-content center-content ">
                    <div class="container-fluid ">
                        <div class="row center-content  ">
                            <div class="col-md-8 ">
                                <div class="card p-15 ">
                                    <div class="card-head">
                                        <Link  href="transactions"><a><h3 class="text-green"> <small><i class="anticon anticon-arrow-left mx-2"></i> </small> Back</h3></a> </Link>
                                    </div>
                                    <div class=" d-row">
                                        <div class="table-responsive">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Property</th>
                                                        <th scope="col">Value</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Order Number</td>
                                                        <td> <Link  href="/order_details"><a> <h3 class="text-green">#235845</h3></a></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Transaction Number</td>
                                                        <td> <h3>OCt 25 2021</h3></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Transaction Amount</td>
                                                        <td> <h3>CFA 25, 0000</h3></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Payment Status</td>
                                                        <td> <h3 class="text-danger">Incomplete</h3></td>
                                                    </tr>
                                                    <tr>
                                                        <td> Customer </td>
                                                        <td><Link href="/user"> <a ><h3 class="text-green"> Abanda Kellly (#1284)</h3></a></Link> </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Agent in Charge </td>
                                                        <td><Link href="/profile"> <a > <h3 class="text-green"> Elias Mbah (#12584)</h3></a></Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td> Address</td>
                                                        <td><h3> Ron Point Diedo</h3></td>
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