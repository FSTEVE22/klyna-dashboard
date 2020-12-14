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
                <div class="page-header no-gutters">
                  <div class="row align-items-md-center">
                    <div class="col-md-6">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="input-affix m-v-10">
                            <i class="prefix-icon anticon anticon-search opacity-04"></i>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search Orders"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="text-md-right m-v-10">
                        <div class="btn-group m-r-10">
                          <button
                            id="list-view-btn"
                            type="button"
                            class="btn btn-default btn-icon"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="List View"
                          >
                            <i class="anticon anticon-ordered-list"></i>
                          </button>
                          <button
                            id="card-view-btn"
                            type="button"
                            class="btn btn-default btn-icon active"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="Card View"
                          >
                            <i class="anticon anticon-appstore"></i>
                          </button>
                        </div>
                        <Link href="/add_order">
                        <a
                          
                          class="btn btn-primary order-button"
                        >
                          <i class="anticon anticon-plus"></i>
                          <span class="m-l-5">New Order</span>
                        </a></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div id="card-view">
                    <div class="row">
                      <div class="col-md-3">
                        <div class="card">
                          <div class="card-body">
                            <div class="d-flex justify-content-between">
                              <div class="media">
                                <div class="avatar avatar-image rounded">
                                  <img
                                    src="/images/others/thumb-1.jpg"
                                    alt=""
                                  />
                                </div>
                                <div class="m-l-10">
                                  <Link href="/user">
                                  <a >
                                    <h5 class="m-b-0">
                                      Metropolitan Restaurant
                                    </h5>
                                  </a></Link>
                                  <span class="text-muted font-size-13">
                                    336854
                                  </span>
                                </div>
                              </div>
                              <div class="dropdown dropdown-animated scale-left">
                                <a
                                  class="text-gray font-size-18"
                                  href="javascript:void(0);"
                                  data-toggle="dropdown"
                                >
                                  <i class="anticon anticon-ellipsis"></i>
                                </a>
                                <div class="dropdown-menu">
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-eye"></i>
                                    <span class="m-l-10">View</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-edit"></i>
                                    <span class="m-l-10">Edit</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-delete"></i>
                                    <span class="m-l-10">Delete</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="m-t-25">
                              <div class="">
                                <h3>Address: </h3>
                                <p class="">
                                  {" "}
                                  Rond Point Diedo ancient troiseme
                                </p>
                              </div>
                            </div>
                            <div class="m-t-30">
                              <div class="d-flex justify-content-between">
                                <span class="font-weight-semibold">
                                  Progress
                                </span>
                                <span class="font-weight-semibold">100%</span>
                              </div>
                              <div class="progress progress-sm m-t-10">
                                <div
                                  class="progress-bar bg-success"
                                  role="progressbar"
                                  style={{width: 100+'%'}}
                                ></div>
                              </div>
                            </div>
                            <div class="m-t-20">
                              <div class="d-flex justify-content-between align-items-center">
                                <div>
                                  <span class="badge badge-pill badge-cyan">
                                    Delivered
                                  </span>
                                </div>
                                <div>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Pamela Wanda"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-7.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Darryl Day"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <hr />
                            <div
                              class="accordion borderless w-100"
                              id="accordion-borderless"
                            >
                              <div class=" w-100">
                                <h5 class="">
                                  <a
                                    data-toggle="collapse"
                                    href="#collapseOneBorderless"
                                  >
                                    <div class="price-accordion">
                                      <div class="d-row">
                                        <h3 class="text-grey">Items: </h3>
                                        <h3 class="mx-2">18</h3>
                                      </div>
                                      <p>
                                        Details{" "}
                                        <i class="anticon anticon-down mx-2"></i>
                                      </p>
                                    </div>
                                  </a>
                                </h5>
                                <div
                                  id="collapseOneBorderless"
                                  class="collapse "
                                  data-parent="#accordion-borderless"
                                >
                                  <div class="row d-flex align-items-center bg-grey my-1">
                                    <div class="col-md-6 p-15 ">
                                      <div class="d-flex">
                                        <p class="m-b-0">Male Jeans</p>
                                      </div>
                                    </div>
                                    <div class="col-md-6 p-15 ">
                                      <h3> 3 Pieces</h3>
                                    </div>
                                  </div>
                                  <div class="row d-flex align-items-center bg-grey my-1">
                                    <div class="col-md-6 p-15 ">
                                      <div class="d-flex">
                                        <p class="m-b-0">Blouse</p>
                                      </div>
                                    </div>
                                    <div class="col-md-6 p-15 ">
                                      <h3> 3 Pieces</h3>
                                    </div>
                                  </div>
                                  <div class="row d-flex align-items-center bg-grey my-1">
                                    <div class="col-md-6 p-15 ">
                                      <div class="d-flex">
                                        <p class="m-b-0">Skirts</p>
                                      </div>
                                    </div>
                                    <div class="col-md-6 p-15 ">
                                      <h3> 7 Pieces</h3>
                                    </div>
                                  </div>
                                  <div class="row d-flex align-items-center bg-grey my-1">
                                    <div class="col-md-6 p-15 ">
                                      <div class="d-flex">
                                        <p class="m-b-0">Male Jeans</p>
                                      </div>
                                    </div>
                                    <div class="col-md-6 p-15 ">
                                      <h3> 4 Pieces</h3>
                                    </div>
                                  </div>
                                  <div class="card-footer">
                                    <button class=" btn-success btn-block">
                                      {" "}
                                      <p class="text-white">
                                        Confirm Order
                                      </p>{" "}
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="card">
                          <div class="card-body">
                            <div class="d-flex justify-content-between">
                              <div class="media">
                                <div class="avatar avatar-image rounded">
                                  <img
                                    src="/images/others/thumb-2.jpg"
                                    alt=""
                                  />
                                </div>
                                <div class="m-l-10">
                                  <a href="/user">
                                    <h5 class="m-b-0">Mill Real Estate</h5>
                                  </a>
                                  <span class="text-muted font-size-13">
                                    225845
                                  </span>
                                </div>
                              </div>
                              <div class="dropdown dropdown-animated scale-left">
                                <a
                                  class="text-gray font-size-18"
                                  href="javascript:void(0);"
                                  data-toggle="dropdown"
                                >
                                  <i class="anticon anticon-ellipsis"></i>
                                </a>
                                <div class="dropdown-menu">
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-eye"></i>
                                    <span class="m-l-10">View</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-edit"></i>
                                    <span class="m-l-10">Edit</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-delete"></i>
                                    <span class="m-l-10">Delete</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="m-t-25">
                              <div class="">
                                <h3>Municipality: </h3>
                                <p class=""> Douala 5</p>
                              </div>
                              <div class="">
                                <h3>Address: </h3>
                                <p class=""> Rond Point Ancient Sonel</p>
                              </div>
                            </div>
                            <hr />
                            <div class="m-t-30">
                              <div class="d-flex justify-content-between">
                                <span class="font-weight-semibold">
                                  Progress
                                </span>
                                <span class="font-weight-semibold">100%</span>
                              </div>
                              <div class="progress progress-sm m-t-10">
                                <div
                                  class="progress-bar bg-success"
                                  role="progressbar"
                                  style={{width: 100+'%'}}
                                ></div>
                              </div>
                            </div>
                            <div class="m-t-20">
                              <div class="d-flex justify-content-between align-items-center">
                                <div>
                                  <span class="badge badge-pill badge-cyan">
                                    Ready
                                  </span>
                                </div>
                                <div>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Virgil Gonzales"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-4.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Erin Gonzales"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-1.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="2 More"
                                  >
                                    <div class="avatar avatar-text avatar-sm">
                                      <span class="text-dark">+2</span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="card">
                          <div class="card-body">
                            <div class="d-flex justify-content-between">
                              <div class="media">
                                <div class="avatar avatar-image rounded">
                                  <img
                                    src="/images/others/thumb-3.jpg"
                                    alt=""
                                  />
                                </div>
                                <div class="m-l-10">
                                 <Link  href="/user">
                                 <a>
                                    <h5 class="m-b-0">Eastern Sack</h5>
                                  </a></Link>
                                  <span class="text-muted font-size-13">
                                    333 Tasks
                                  </span>
                                </div>
                              </div>
                              <div class="dropdown dropdown-animated scale-left">
                                <a
                                  class="text-gray font-size-18"
                                  href="javascript:void(0);"
                                  data-toggle="dropdown"
                                >
                                  <i class="anticon anticon-ellipsis"></i>
                                </a>
                                <div class="dropdown-menu">
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-eye"></i>
                                    <span class="m-l-10">View</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-edit"></i>
                                    <span class="m-l-10">Edit</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-delete"></i>
                                    <span class="m-l-10">Delete</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="m-t-25">
                              <div class="">
                                <h3>Municipality: </h3>
                                <p class=""> Douala 6</p>
                              </div>
                              <div class="">
                                <h3>Address: </h3>
                                <p class=""> Pk 258 Yassa</p>
                              </div>
                            </div>
                            <hr />
                            <div class="m-t-30">
                              <div class="d-flex justify-content-between">
                                <span class="font-weight-semibold">
                                  Progress
                                </span>
                                <span class="font-weight-semibold">87%</span>
                              </div>
                              <div class="progress progress-sm m-t-10">
                                <div
                                  class="progress-bar"
                                  role="progressbar"
                                  style={{width: 87+'%'}}
                                ></div>
                              </div>
                            </div>
                            <div class="m-t-20">
                              <div class="d-flex justify-content-between align-items-center">
                                <div>
                                  <span class="badge badge-pill badge-blue">
                                    In Progress
                                  </span>
                                </div>
                                <div>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Lilian Stone"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-10.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Victor Terry"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-11.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="3 More"
                                  >
                                    <div class="avatar avatar-text avatar-sm">
                                      <span class="text-dark">+3</span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="card">
                          <div class="card-body">
                            <div class="d-flex justify-content-between">
                              <div class="media">
                                <div class="avatar avatar-image rounded">
                                  <img
                                    src="/images/others/thumb-4.jpg"
                                    alt=""
                                  />
                                </div>
                                <div class="m-l-10">
                                  <Link href="/user">
                                  <a >
                                    <h5 class="m-b-0">Good Beat</h5>
                                  </a>
                                  </Link>
                                  <span class="text-muted font-size-13">
                                    33695
                                  </span>
                                </div>
                              </div>
                              <div class="dropdown dropdown-animated scale-left">
                                <a
                                  class="text-gray font-size-18"
                                  href="javascript:void(0);"
                                  data-toggle="dropdown"
                                >
                                  <i class="anticon anticon-ellipsis"></i>
                                </a>
                                <div class="dropdown-menu">
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-eye"></i>
                                    <span class="m-l-10">View</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-edit"></i>
                                    <span class="m-l-10">Edit</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-delete"></i>
                                    <span class="m-l-10">Delete</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="m-t-25">
                              <div class="">
                                <h3>Municipality: </h3>
                                <p class=""> Douala 8</p>
                              </div>
                              <div class="">
                                <h3>Address: </h3>
                                <p class=""> Pk 258 Yassa</p>
                              </div>
                            </div>
                            <hr />
                            <div class="m-t-30">
                              <div class="d-flex justify-content-between">
                                <span class="font-weight-semibold">
                                  Progress
                                </span>
                                <span class="font-weight-semibold">73%</span>
                              </div>
                              <div class="progress progress-sm m-t-10">
                                <div
                                  class="progress-bar"
                                  role="progressbar"
                                  style={{width: 73+'%'}}
                                ></div>
                              </div>
                            </div>
                            <div class="m-t-20">
                              <div class="d-flex justify-content-between align-items-center">
                                <div>
                                  <span class="badge badge-pill badge-blue">
                                    In Progress
                                  </span>
                                </div>
                                <div>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Marshall Nichols"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Pamela Wanda"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-7.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="card">
                          <div class="card-body">
                            <div class="d-flex justify-content-between">
                              <div class="media">
                                <div class="avatar avatar-image rounded">
                                  <img
                                    src="/images/others/thumb-5.jpg"
                                    alt=""
                                  />
                                </div>
                                <div class="m-l-10">
                                  <Link href="/user">
                                  <a >
                                    <h5 class="m-b-0">Fortier Studio</h5>
                                  </a></Link>
                                  <span class="text-muted font-size-13">
                                    68 Tasks
                                  </span>
                                </div>
                              </div>
                              <div class="dropdown dropdown-animated scale-left">
                                <a
                                  class="text-gray font-size-18"
                                  href="javascript:void(0);"
                                  data-toggle="dropdown"
                                >
                                  <i class="anticon anticon-ellipsis"></i>
                                </a>
                                <div class="dropdown-menu">
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-eye"></i>
                                    <span class="m-l-10">View</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-edit"></i>
                                    <span class="m-l-10">Edit</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-delete"></i>
                                    <span class="m-l-10">Delete</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <p class="m-t-25">
                              Let us wax poetic about the beauty of the
                              cheeseburger.
                            </p>
                            <div class="m-t-30">
                              <div class="d-flex justify-content-between">
                                <span class="font-weight-semibold">
                                  Progress
                                </span>
                                <span class="font-weight-semibold">73%</span>
                              </div>
                              <div class="progress progress-sm m-t-10">
                                <div
                                  class="progress-bar"
                                  role="progressbar"
                                  style={{width: 73+'%'}}
                                ></div>
                              </div>
                            </div>
                            <div class="m-t-20">
                              <div class="d-flex justify-content-between align-items-center">
                                <div>
                                  <span class="badge badge-pill badge-blue">
                                    In Progress
                                  </span>
                                </div>
                                <div>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Erin Gonzales"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-1.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Lilian Stone"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-10.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="card">
                          <div class="card-body">
                            <div class="d-flex justify-content-between">
                              <div class="media">
                                <div class="avatar avatar-image rounded">
                                  <img
                                    src="/images/others/thumb-6.jpg"
                                    alt=""
                                  />
                                </div>
                                <div class="m-l-10">
                                  <h5 class="m-b-0">Indi Wheel Web</h5>
                                  <span class="text-muted font-size-13">
                                    68 Tasks
                                  </span>
                                </div>
                              </div>
                              <div class="dropdown dropdown-animated scale-left">
                                <a
                                  class="text-gray font-size-18"
                                  href="javascript:void(0);"
                                  data-toggle="dropdown"
                                >
                                  <i class="anticon anticon-ellipsis"></i>
                                </a>
                                <div class="dropdown-menu">
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-eye"></i>
                                    <span class="m-l-10">View</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-edit"></i>
                                    <span class="m-l-10">Edit</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-delete"></i>
                                    <span class="m-l-10">Delete</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <p class="m-t-25">
                              Here's the story of a man named Brady who was busy
                              with three boys
                            </p>
                            <div class="m-t-30">
                              <div class="d-flex justify-content-between">
                                <span class="font-weight-semibold">
                                  Progress
                                </span>
                                <span class="font-weight-semibold">62%</span>
                              </div>
                              <div class="progress progress-sm m-t-10">
                                <div
                                  class="progress-bar"
                                  role="progressbar"
                                  style={{width: 62+'%'}}
                                ></div>
                              </div>
                            </div>
                            <div class="m-t-20">
                              <div class="d-flex justify-content-between align-items-center">
                                <div>
                                  <span class="badge badge-pill badge-blue">
                                    In Progress
                                  </span>
                                </div>
                                <div>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Virgil Gonzales"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-4.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Darryl Day"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="2 More"
                                  >
                                    <div class="avatar avatar-text avatar-sm">
                                      <span class="text-dark">+2</span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="card">
                          <div class="card-body">
                            <div class="d-flex justify-content-between">
                              <div class="media">
                                <div class="avatar avatar-image rounded">
                                  <img
                                    src="/images/others/thumb-7.jpg"
                                    alt=""
                                  />
                                </div>
                                <div class="m-l-10">
                                  <h5 class="m-b-0">Austin Lab</h5>
                                  <span class="text-muted font-size-13">
                                    90 Tasks
                                  </span>
                                </div>
                              </div>
                              <div class="dropdown dropdown-animated scale-left">
                                <a
                                  class="text-gray font-size-18"
                                  href="javascript:void(0);"
                                  data-toggle="dropdown"
                                >
                                  <i class="anticon anticon-ellipsis"></i>
                                </a>
                                <div class="dropdown-menu">
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-eye"></i>
                                    <span class="m-l-10">View</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-edit"></i>
                                    <span class="m-l-10">Edit</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-delete"></i>
                                    <span class="m-l-10">Delete</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <p class="m-t-25">
                              Caerphilly swiss fromage frais. Brie cheese and
                              wine fromage.
                            </p>
                            <div class="m-t-30">
                              <div class="d-flex justify-content-between">
                                <span class="font-weight-semibold">
                                  Progress
                                </span>
                                <span class="font-weight-semibold">62%</span>
                              </div>
                              <div class="progress progress-sm m-t-10">
                                <div
                                  class="progress-bar"
                                  role="progressbar"
                                  style={{width: 62+'%'}}
                                ></div>
                              </div>
                            </div>
                            <div class="m-t-20">
                              <div class="d-flex justify-content-between align-items-center">
                                <div>
                                  <span class="badge badge-pill badge-blue">
                                    In Progress
                                  </span>
                                </div>
                                <div>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Lilian Stone"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-8.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Victor Terry"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-9.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="card">
                          <div class="card-body">
                            <div class="d-flex justify-content-between">
                              <div class="media">
                                <div class="avatar avatar-image rounded">
                                  <img
                                    src="/images/others/thumb-8.jpg"
                                    alt=""
                                  />
                                </div>
                                <div class="m-l-10">
                                  <h5 class="m-b-0">Moody Agency</h5>
                                  <span class="text-muted font-size-13">
                                    165 Tasks
                                  </span>
                                </div>
                              </div>
                              <div class="dropdown dropdown-animated scale-left">
                                <a
                                  class="text-gray font-size-18"
                                  href="javascript:void(0);"
                                  data-toggle="dropdown"
                                >
                                  <i class="anticon anticon-ellipsis"></i>
                                </a>
                                <div class="dropdown-menu">
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-eye"></i>
                                    <span class="m-l-10">View</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-edit"></i>
                                    <span class="m-l-10">Edit</span>
                                  </a>
                                  <a href="#" class="dropdown-item">
                                    <i class="anticon anticon-delete"></i>
                                    <span class="m-l-10">Delete</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <p class="m-t-25">
                              Do you see any Teletubbies in here? The path of
                              the righteous.
                            </p>
                            <div class="m-t-30">
                              <div class="d-flex justify-content-between">
                                <span class="font-weight-semibold">Behind</span>
                                <span class="font-weight-semibold">28%</span>
                              </div>
                              <div class="progress progress-sm m-t-10">
                                <div
                                  class="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{width: 28+'%'}}
                                ></div>
                              </div>
                            </div>
                            <div class="m-t-20">
                              <div class="d-flex justify-content-between align-items-center">
                                <div>
                                  <span class="badge badge-pill badge-red">
                                    In Progress
                                  </span>
                                </div>
                                <div>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Lilian Stone"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-8.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="Darryl Day"
                                  >
                                    <div class="avatar avatar-image avatar-sm">
                                      <img
                                        src="/images/avatars/thumb-2.jpg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <a
                                    class="m-r-5"
                                    href="javascript:void(0);"
                                    data-toggle="tooltip"
                                    title="3 More"
                                  >
                                    <div class="avatar avatar-text avatar-sm">
                                      <span class="text-dark">+3</span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card d-none" id="list-view">
                    <div class="card-body">
                      <div class="row m-b-30">
                        <div class="col-lg-8">
                          <div class="d-md-flex">
                            <div class="m-b-10 m-r-15">
                              <select
                                class="custom-select"
                                style={{minWidth: 180+'px'}}
                              >
                                <option selected>Catergory</option>
                                <option value="all">All</option>
                                <option value="homeDeco">
                                  Home Decoration
                                </option>
                                <option value="eletronic">Eletronic</option>
                                <option value="jewellery">Jewellery</option>
                              </select>
                            </div>
                            <div class="m-b-10">
                              <select
                                class="custom-select"
                                style={{minWidth: 180+'px'}}
                              >
                                <option selected>Status</option>
                                <option value="all">All</option>
                                <option value="inStock">In Stock </option>
                                <option value="outOfStock">Out of Stock</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4 text-right">
                          <button class="btn btn-primary">
                            <i class="anticon anticon-plus-circle m-r-5"></i>
                            <span>New Order</span>
                          </button>
                        </div>
                      </div>
                      <div class="table-responsive">
                        <table class="table table-hover e-commerce-table">
                          <thead>
                            <tr>
                              <th>Project</th>
                              <th>Tasks</th>
                              <th>Members</th>
                              <th>Progress</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="media align-items-center">
                                  <div class="avatar avatar-image rounded">
                                    <img
                                      src="/images/others/thumb-1.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="m-l-10">
                                    <h5 class="m-b-0">Mind Cog App</h5>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span>31 Tasks</span>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Pamela Wanda"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-7.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Darryl Day"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-2.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="progress progress-sm w-100 m-b-0">
                                    <div
                                      class="progress-bar bg-success"
                                      role="progressbar"
                                      style={{width: 100+'%'}}
                                    ></div>
                                  </div>
                                  <div class="m-l-10">
                                    <i class="anticon anticon-check-o text-success"></i>
                                  </div>
                                </div>
                              </td>
                              <td class="text-right">
                                <div class="dropdown dropdown-animated scale-left">
                                  <a
                                    class="text-gray font-size-18"
                                    href="javascript:void(0);"
                                    data-toggle="dropdown"
                                  >
                                    <i class="anticon anticon-ellipsis"></i>
                                  </a>
                                  <div class="dropdown-menu">
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-eye"></i>
                                      <span class="m-l-10">View</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-edit"></i>
                                      <span class="m-l-10">Edit</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-delete"></i>
                                      <span class="m-l-10">Delete</span>
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="media align-items-center">
                                  <div class="avatar avatar-image rounded">
                                    <img
                                      src="/images/others/thumb-2.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="m-l-10">
                                    <h5 class="m-b-0">Mill Real Estate</h5>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span>56 Tasks</span>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Virgil Gonzales"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-4.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Erin Gonzales"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-1.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="2 More"
                                    >
                                      <div class="avatar avatar-text avatar-sm">
                                        <span class="text-dark">+2</span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="progress progress-sm w-100 m-b-0">
                                    <div
                                      class="progress-bar bg-success"
                                      role="progressbar"
                                      style={{width: 100+'%'}}
                                    ></div>
                                  </div>
                                  <div class="m-l-10">
                                    <i class="anticon anticon-check-o text-success"></i>
                                  </div>
                                </div>
                              </td>
                              <td class="text-right">
                                <div class="dropdown dropdown-animated scale-left">
                                  <a
                                    class="text-gray font-size-18"
                                    href="javascript:void(0);"
                                    data-toggle="dropdown"
                                  >
                                    <i class="anticon anticon-ellipsis"></i>
                                  </a>
                                  <div class="dropdown-menu">
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-eye"></i>
                                      <span class="m-l-10">View</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-edit"></i>
                                      <span class="m-l-10">Edit</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-delete"></i>
                                      <span class="m-l-10">Delete</span>
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="media align-items-center">
                                  <div class="avatar avatar-image rounded">
                                    <img
                                      src="/images/others/thumb-3.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="m-l-10">
                                    <h5 class="m-b-0">Eastern Sack</h5>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span>21 Tasks</span>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Lilian Stone"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-10.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Victor Terry"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-11.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="3 More"
                                    >
                                      <div class="avatar avatar-text avatar-sm">
                                        <span class="text-dark">+3</span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="progress progress-sm w-100 m-b-0">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      style={{width: 87+'%'}}
                                    ></div>
                                  </div>
                                  <div class="m-l-10">87%</div>
                                </div>
                              </td>
                              <td class="text-right">
                                <div class="dropdown dropdown-animated scale-left">
                                  <a
                                    class="text-gray font-size-18"
                                    href="javascript:void(0);"
                                    data-toggle="dropdown"
                                  >
                                    <i class="anticon anticon-ellipsis"></i>
                                  </a>
                                  <div class="dropdown-menu">
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-eye"></i>
                                      <span class="m-l-10">View</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-edit"></i>
                                      <span class="m-l-10">Edit</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-delete"></i>
                                      <span class="m-l-10">Delete</span>
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="media align-items-center">
                                  <div class="avatar avatar-image rounded">
                                    <img
                                      src="/images/others/thumb-4.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="m-l-10">
                                    <h5 class="m-b-0">Good Beat</h5>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span>38 Tasks</span>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Marshall Nichols"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-3.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Pamela Wanda"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-7.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="progress progress-sm w-100 m-b-0">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      style={{width: 73+'%'}}
                                    ></div>
                                  </div>
                                  <div class="m-l-10">73%</div>
                                </div>
                              </td>
                              <td class="text-right">
                                <div class="dropdown dropdown-animated scale-left">
                                  <a
                                    class="text-gray font-size-18"
                                    href="javascript:void(0);"
                                    data-toggle="dropdown"
                                  >
                                    <i class="anticon anticon-ellipsis"></i>
                                  </a>
                                  <div class="dropdown-menu">
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-eye"></i>
                                      <span class="m-l-10">View</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-edit"></i>
                                      <span class="m-l-10">Edit</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-delete"></i>
                                      <span class="m-l-10">Delete</span>
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="media align-items-center">
                                  <div class="avatar avatar-image rounded">
                                    <img
                                      src="/images/others/thumb-5.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="m-l-10">
                                    <h5 class="m-b-0">Fortier Studio</h5>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span>68 Tasks</span>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Erin Gonzales"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-1.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Lilian Stone"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-10.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="progress progress-sm w-100 m-b-0">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      style={{width: 73+'%'}}
                                    ></div>
                                  </div>
                                  <div class="m-l-10">73%</div>
                                </div>
                              </td>
                              <td class="text-right">
                                <div class="dropdown dropdown-animated scale-left">
                                  <a
                                    class="text-gray font-size-18"
                                    href="javascript:void(0);"
                                    data-toggle="dropdown"
                                  >
                                    <i class="anticon anticon-ellipsis"></i>
                                  </a>
                                  <div class="dropdown-menu">
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-eye"></i>
                                      <span class="m-l-10">View</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-edit"></i>
                                      <span class="m-l-10">Edit</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-delete"></i>
                                      <span class="m-l-10">Delete</span>
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="media align-items-center">
                                  <div class="avatar avatar-image rounded">
                                    <img
                                      src="/images/others/thumb-6.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="m-l-10">
                                    <h5 class="m-b-0">Indi Wheel Web</h5>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span>68 Tasks</span>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Virgil Gonzales"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-4.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Darryl Day"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-2.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="2 More"
                                    >
                                      <div class="avatar avatar-text avatar-sm">
                                        <span class="text-dark">+2</span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="progress progress-sm w-100 m-b-0">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      style={{width: 62+'%'}}
                                    ></div>
                                  </div>
                                  <div class="m-l-10">62%</div>
                                </div>
                              </td>
                              <td class="text-right">
                                <div class="dropdown dropdown-animated scale-left">
                                  <a
                                    class="text-gray font-size-18"
                                    href="javascript:void(0);"
                                    data-toggle="dropdown"
                                  >
                                    <i class="anticon anticon-ellipsis"></i>
                                  </a>
                                  <div class="dropdown-menu">
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-eye"></i>
                                      <span class="m-l-10">View</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-edit"></i>
                                      <span class="m-l-10">Edit</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-delete"></i>
                                      <span class="m-l-10">Delete</span>
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="media align-items-center">
                                  <div class="avatar avatar-image rounded">
                                    <img
                                      src="/images/others/thumb-7.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="m-l-10">
                                    <h5 class="m-b-0">Austin Lab</h5>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span>90 Tasks</span>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Lilian Stone"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-8.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Victor Terry"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-9.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="progress progress-sm w-100 m-b-0">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      style={{width: 62+'%'}}
                                    ></div>
                                  </div>
                                  <div class="m-l-10">62%</div>
                                </div>
                              </td>
                              <td class="text-right">
                                <div class="dropdown dropdown-animated scale-left">
                                  <a
                                    class="text-gray font-size-18"
                                    href="javascript:void(0);"
                                    data-toggle="dropdown"
                                  >
                                    <i class="anticon anticon-ellipsis"></i>
                                  </a>
                                  <div class="dropdown-menu">
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-eye"></i>
                                      <span class="m-l-10">View</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-edit"></i>
                                      <span class="m-l-10">Edit</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-delete"></i>
                                      <span class="m-l-10">Delete</span>
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div class="media align-items-center">
                                  <div class="avatar avatar-image rounded">
                                    <img
                                      src="/images/others/thumb-8.jpg"
                                      alt=""
                                    />
                                  </div>
                                  <div class="m-l-10">
                                    <h5 class="m-b-0">Moody Agency</h5>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span>165 Tasks</span>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Lilian Stone"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-8.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="Darryl Day"
                                    >
                                      <div class="avatar avatar-image avatar-sm">
                                        <img
                                          src="/images/avatars/thumb-2.jpg"
                                          alt=""
                                        />
                                      </div>
                                    </a>
                                    <a
                                      class="m-r-5"
                                      href="javascript:void(0);"
                                      data-toggle="tooltip"
                                      title="3 More"
                                    >
                                      <div class="avatar avatar-text avatar-sm">
                                        <span class="text-dark">+3</span>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div class="d-flex align-items-center">
                                  <div class="progress progress-sm w-100 m-b-0">
                                    <div
                                      class="progress-bar bg-danger"
                                      role="progressbar"
                                      style={{width: 28+'%'}}
                                    ></div>
                                  </div>
                                  <div class="m-l-10">
                                    <i class="anticon anticon-close-o text-danger"></i>
                                  </div>
                                </div>
                              </td>
                              <td class="text-right">
                                <div class="dropdown dropdown-animated scale-left">
                                  <a
                                    class="text-gray font-size-18"
                                    href="javascript:void(0);"
                                    data-toggle="dropdown"
                                  >
                                    <i class="anticon anticon-ellipsis"></i>
                                  </a>
                                  <div class="dropdown-menu">
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-eye"></i>
                                      <span class="m-l-10">View</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-edit"></i>
                                      <span class="m-l-10">Edit</span>
                                    </a>
                                    <a href="#" class="dropdown-item">
                                      <i class="anticon anticon-delete"></i>
                                      <span class="m-l-10">Delete</span>
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal fade" id="create-new-project">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Add New Order</h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                        >
                          <i class="anticon anticon-close"></i>
                        </button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="form-group">
                            <label for="new-project-name">Project</label>
                            <input
                              type="text"
                              class="form-control"
                              id="new-project-name"
                              placeholder="Please input project name"
                            />
                          </div>
                          <div class="form-group">
                            <label for="new-project-desc">Description</label>
                            <textarea
                              id="new-project-desc"
                              class="form-control"
                              placeholder=""
                            ></textarea>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary">
                          Create Project
                        </button>
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
