import Link from "next/link";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,BarChart, Bar,  PieChart, Pie, Sector, Cell,
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];
const datas = [
  {
    name: 'Jan', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Feb', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Mar', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Apr', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Mai', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'June', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Jul', uv: 3490, pv: 4300, amt: 2100,
  },
];

const data2 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default function Home() {
  return (
    <div>
      {/* <!DOCTYPE html> */}

      <body>
        <div class="app">
          <div class="layout">
            {/* <!-- Page Container START --> */}
            <div class="page-container">
              {/* <!-- Content Wrapper START --> */}
              <div class="main-content">
                <div class="row">
                  <div class="col-md-6 col-lg-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <div>
                            <p class="m-b-0">Net Revenue</p>
                            <h2 class="m-b-0">
                              <span>Fcfa 14,966</span>
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
                            <p class="m-b-0">Net commition</p>
                            <h2 class="m-b-0">
                            <span>26.80%</span>
                            </h2>
                          </div>
                          <div class="avatar avatar-icon avatar-lg avatar-cyan">
                            <i class="anticon anticon-bar-chart"></i>
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
                            <p class="m-b-0">Orders</p>
                            <h2 class="m-b-0">
                              <span>3000</span>
                            </h2>
                          </div>
                          <div class="avatar avatar-icon avatar-lg avatar-red">
                            <i class="anticon anticon-profile"></i>
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
                            <p class="m-b-0">Total Expense</p>
                            <h2 class="m-b-0">
                              <span>Fcfa 6,138</span>
                            </h2>
                          </div>
                          <div class="avatar avatar-icon avatar-lg avatar-gold">
                            <i class="anticon anticon-bar-chart"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <h5>Overall Rating</h5>
                        </div>
                        <div class="d-flex align-items-center m-t-20">
                          <h1 class="m-b-0 m-r-10 font-weight-normal">4.5</h1>
                          <div class="star-rating m-t-15">
                            <input
                              type="radio"
                              id="star1-5"
                              name="rating-1"
                              value="5"
                              checked
                              disabled
                            />
                            <label for="star1-5" title="5 star"></label>
                            <input
                              type="radio"
                              id="star1-4"
                              name="rating-1"
                              value="4"
                              disabled
                            />
                            <label for="star1-4" title="4 star"></label>
                            <input
                              type="radio"
                              id="star1-3"
                              name="rating-1"
                              value="3"
                              disabled
                            />
                            <label for="star1-3" title="3 star"></label>
                            <input
                              type="radio"
                              id="star1-2"
                              name="rating-1"
                              value="2"
                              disabled
                            />
                            <label for="star1-2" title="2 star"></label>
                            <input
                              type="radio"
                              id="star1-1"
                              name="rating-1"
                              value="1"
                              disabled
                            />
                            <label for="star1-1" title="1 star"></label>
                          </div>
                        </div>
                        <p>
                          <span class="text-success font-weight-bold">
                            +1.5
                          </span>{" "}
                          point from last month
                        </p>
                        <div class="m-t-30" style={{ height: 150 + "px" }}>
                        <LineChart width={200} height={100} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-md-flex justify-content-between align-items-center">
                          <h5>Total Sales</h5>
                          <div class="d-flex">
                            <div class="m-r-10">
                              <span class="badge badge-secondary badge-dot m-r-10"></span>
                              <span class="text-gray font-weight-semibold font-size-13">
                                Revenue
                              </span>
                            </div>
                            <div class="m-r-10">
                              <span class="badge badge-purple badge-dot m-r-10"></span>
                              <span class="text-gray font-weight-semibold font-size-13">
                                Margin
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="m-t-50" style={{ height: 225 + "px" }}>
                        <BarChart
                            width={400}
                            height={255}
                            data={datas}
                            margin={{
                              bottom: 20,
                            }}
                            barSize={20}
                          >
                            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                            <YAxis /> 
                            <Tooltip />
                            <Legend />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                          </BarChart>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <h5>Monthly Target</h5>
                        </div>
                        <div
                          class="d-flex align-items-center position-relative m-v-30"
                          style={{ height: 150 + "px" }}
                        >
                          <div class="w-100 position-absolute d-flex justify-content-center ">
                          <PieChart width={800} height={400} >
                          <Pie
                            data={data2}
                            cx={420}
                            cy={200}
                            startAngle={180}
                            endAngle={0}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {
                              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                            }
                          </Pie>
                        </PieChart><br/>
                                            </div>
                                            <br/>
                          <h2 class="w-100 text-center text-large m-b-0 text-success font-weight-normal">
                          <br/>
                            Fcfa 3,531
                          </h2>
                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                          <span class="badge badge-success badge-dot m-r-10"></span>
                          <span>
                            <span class="font-weight-semibold">70%</span> of
                            Your Goal
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                          <h5>Latest Transactions</h5>
                          <div>
                            <Link  href="/transactions">
                            <a
                             
                              class="btn btn-sm btn-default"
                            >
                              View All
                            </a>
                            </Link>
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
                                        <div
                                          class="avatar avatar-image"
                                          style={{
                                            height: 30 + "px",
                                            minWidth: 30 + "px",
                                            maxWidth: 30 + "px",
                                          }}
                                        >
                                          <img
                                            src="/images/avatars/thumb-1.jpg"
                                            alt=""
                                          />
                                        </div>
                                        <h6 class="m-l-10 m-b-0">
                                          Erin Gonzales
                                        </h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>8 May 2019</td>
                                  <td>Fcfa 137.00</td>
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
                                        <div
                                          class="avatar avatar-image"
                                          style={{
                                            height: 30 + "px",
                                            minWidth: 30 + "px",
                                            maxWidth: 30 + "px",
                                          }}
                                        >
                                          <img
                                            src="/images/avatars/thumb-2.jpg"
                                            alt=""
                                          />
                                        </div>
                                        <h6 class="m-l-10 m-b-0">Darryl Day</h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>6 May 2019</td>
                                  <td>Fcfa 322.00</td>
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
                                        <div
                                          class="avatar avatar-image"
                                          style={{
                                            height: 30 + "px",
                                            minWidth: 30 + "px",
                                            maxWidth: 30 + "px",
                                          }}
                                        >
                                          <img
                                            src="/images/avatars/thumb-3.jpg"
                                            alt=""
                                          />
                                        </div>
                                        <h6 class="m-l-10 m-b-0">
                                          Marshall Nichols
                                        </h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>1 May 2019</td>
                                  <td>Fcfa 543.00</td>
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
                                        <div
                                          class="avatar avatar-image"
                                          style={{
                                            height: 30 + "px",
                                            minWidth: 30 + "px",
                                            maxWidth: 30 + "px",
                                          }}
                                        >
                                          <img
                                            src="/images/avatars/thumb-4.jpg"
                                            alt=""
                                          />
                                        </div>
                                        <h6 class="m-l-10 m-b-0">
                                          Virgil Gonzales
                                        </h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>28 April 2019</td>
                                  <td>Fcfa 876.00</td>
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
                                        <div
                                          class="avatar avatar-image"
                                          style={{
                                            height: 30 + "px",
                                            minWidth: 30 + "px",
                                            maxWidth: 30 + "px",
                                          }}
                                        >
                                          <img
                                            src="/images/avatars/thumb-5.jpg"
                                            alt=""
                                          />
                                        </div>
                                        <h6 class="m-l-10 m-b-0">
                                          Nicole Wyne
                                        </h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>28 April 2019</td>
                                  <td>Fcfa 241.00</td>
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
              {/* <!-- Content Wrapper END --> */}
              {/* <!-- Footer START --> */}
              <footer class="footer">
                <div class="footer-content">
                  <p class="m-b-0">
                    Copyright © 2020 Klyna. All rights reserved.
                  </p>
                  <span>
                    <a href="#" class="text-gray m-r-15">
                      Term &amp; Conditions
                    </a>
                    <a href="#" class="text-gray">
                      Privacy &amp; Policy
                    </a>
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
