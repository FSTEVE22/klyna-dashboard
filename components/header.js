import React, { Component } from "react";
import Head from "next/head";
import Link from "next/link";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Klyna | west african cleaning company</title>

          {/* <!-- Favicon --> */}
          <link rel="shortcut icon" href="/images/logo/favicon.png" />

          {/* <!-- Core css --> */}
          <link href="/css/app.min.css" rel="stylesheet" />

          {/* <!-- Core css --> */}
          <link
            rel="stylesheet"
            href="/css/form-elements/bootstrap-datepicker3.css"
          />
          <link
            rel="stylesheet"
            href="/css/form-elements/daterangepicker.css"
          />
          <link
            rel="stylesheet"
            href="/css/form-elements/selectize.default.css"
          />
          <link rel="stylesheet" href="/css/form-elements/summernote.css" />
          <link href="/vendors/select2/select2.css" rel="stylesheet" />

          {/* <!-- Core css --> */}
          <link
            href="/vendors/datatables/dataTables.bootstrap.min.css"
            rel="stylesheet"
          />
          <link href="/css/app.min.css" rel="stylesheet"></link>
        </Head>
          <div class="app">
            <div class="layout">
              {/* <!-- Header START --> */}
              <div class="header">
                <div class="logo border-bottom logo-dark">
                  <Link href="/">
                  <a >
                    <img src="/images/logo/logo.png" alt="Logo" />
                    <img
                      class="logo-fold"
                      src="/images/logo/logo-fold.png"
                      alt="Logo"
                    />
                  </a></Link>
                </div>
                <div class="logo logo-white">
                  <Link href="/">
                  <a >
                    <img src="/images/logo/logo-white.png" alt="Logo" />
                    <img
                      class="logo-fold"
                      src="/images/logo/logo-fold-white.png"
                      alt="Logo"
                    />
                  </a></Link>
                </div>
                <div class="nav-wrap">
                  <ul class="nav-left">
                    <li class="desktop-toggle">
                      <a href="javascript:void(0);">
                        <i class="anticon anticon-appstore"></i>
                      </a>
                    </li>
                    <li class="mobile-toggle">
                      <a href="javascript:void(0);">
                        <i class="anticon anticon-double-right"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        data-toggle="modal"
                        data-target="#search-drawer"
                      >
                        <i class="anticon anticon-search"></i>
                      </a>
                    </li>
                  </ul>
                  <ul class="nav-right">
                    <li class="dropdown dropdown-animated scale-left">
                      <a href="javascript:void(0);" data-toggle="dropdown">
                        <i class="anticon anticon-bell notification-badge"></i>
                      </a>
                      <div class="dropdown-menu pop-notification">
                        <div class="p-v-15 p-h-25 border-bottom d-flex justify-content-between align-items-center">
                          <p class="text-dark font-weight-semibold m-b-0">
                            <i class="anticon anticon-bell"></i>
                            <span class="m-l-10">Notification</span>
                          </p>
                          <a
                            class="btn-sm btn-default btn"
                            href="javascript:void(0);"
                          >
                            <small>View All</small>
                          </a>
                        </div>
                        <div class="relative">
                          <div
                            class="overflow-y-auto relative scrollable"
                            style={{ maxHeight: 300 + "px" }}
                          >
                            <a
                              href="javascript:void(0);"
                              class="dropdown-item d-block p-15 border-bottom"
                            >
                              <div class="d-flex">
                                <div class="avatar avatar-blue avatar-icon">
                                  <i class="anticon anticon-mail"></i>
                                </div>
                                <div class="m-l-15">
                                  <p class="m-b-0 text-dark">
                                    You received a new message
                                  </p>
                                  <p class="m-b-0">
                                    <small>8 min ago</small>
                                  </p>
                                </div>
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              class="dropdown-item d-block p-15 border-bottom"
                            >
                              <div class="d-flex">
                                <div class="avatar avatar-cyan avatar-icon">
                                  <i class="anticon anticon-user-add"></i>
                                </div>
                                <a class="m-l-15">
                                  <p class="m-b-0 text-dark">
                                    New user registered
                                  </p>
                                  <p class="m-b-0">
                                    <small>7 hours ago</small>
                                  </p>
                                </a>
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              class="dropdown-item d-block p-15 border-bottom"
                            >
                              <div class="d-flex">
                                <div class="avatar avatar-red avatar-icon">
                                  <i class="anticon anticon-user-add"></i>
                                </div>
                                <div class="m-l-15">
                                  <p class="m-b-0 text-dark">System Alert</p>
                                  <p class="m-b-0">
                                    <small>8 hours ago</small>
                                  </p>
                                </div>
                              </div>
                            </a>
                            <a
                              href="javascript:void(0);"
                              class="dropdown-item d-block p-15 "
                            >
                              <div class="d-flex">
                                <div class="avatar avatar-gold avatar-icon">
                                  <i class="anticon anticon-user-add"></i>
                                </div>
                                <div class="m-l-15">
                                  <p class="m-b-0 text-dark">
                                    You have a new update
                                  </p>
                                  <p class="m-b-0">
                                    <small>2 days ago</small>
                                  </p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="dropdown dropdown-animated scale-left">
                      <div class="pointer" data-toggle="dropdown">
                        <div class="avatar avatar-image  m-h-10 m-r-15">
                          <img src="/images/avatars/thumb-3.jpg" alt="" />
                        </div>
                      </div>
                      <div class="p-b-15 p-t-20 dropdown-menu pop-profile">
                        <div class="p-h-20 p-b-15 m-b-10 border-bottom">
                          <div class="d-flex m-r-50">
                            <div class="avatar avatar-lg avatar-image">
                              <img src="/images/avatars/thumb-3.jpg" alt="" />
                            </div>
                            <div class="m-l-10">
                              <p class="m-b-0 text-dark font-weight-semibold">
                                Awemo Petroller
                              </p>
                              <p class="m-b-0 opacity-07">Customer 8552</p>
                            </div>
                          </div>
                        </div>
                        <Link href="/settings">
                        <a
                          
                          class="dropdown-item d-block p-h-15 p-v-10"
                        >
                          <div class="d-flex align-items-center justify-content-between">
                            <div>
                              <i class="anticon opacity-04 font-size-16 anticon-lock"></i>
                              <span class="m-l-10">Account Setting</span>
                            </div>
                            <i class="anticon font-size-10 anticon-right"></i>
                          </div>
                        </a>
                        </Link>
                        <a
                          href="javascript:void(0);"
                          class="dropdown-item d-block p-h-15 p-v-10"
                        >
                          <div class="d-flex align-items-center justify-content-between">
                            <div>
                              <i class="anticon opacity-04 font-size-16 anticon-logout"></i>
                              <span class="m-l-10">Logout</span>
                            </div>
                            <i class="anticon font-size-10 anticon-right"></i>
                          </div>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Header END --> */}

              {/* <!-- Side Nav START --> */}
              <div class="side-nav ">
                <div class="side-nav-inner ">
                  <ul class="side-nav-menu m-t-30 ">
                    <li class="nav-item active">
                     <Link href="/">
                     <a class="dropdown-toggle" >
                        <span class="icon-holder">
                          <i class="anticon anticon-dashboard menu-icon"></i>
                        </span>
                        <span class="title">Overview</span>
                        <span class="arrow">
                          <i class="arrow-icon"></i>
                        </span>
                      </a></Link>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="dropdown-toggle" href="javascript:void(0);">
                        <span class="icon-holder">
                          <i class="anticon anticon-profile menu-icon"></i>
                        </span>
                        <span class="title">Orders</span>
                        <span class="arrow">
                          <i class="arrow-icon"></i>
                        </span>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="">
                          <Link href="/all_orders">
                          <a >All Oders</a></Link>
                        </li>
                        <li>
                          <Link href="#">
                          <a >Pending Orders</a></Link>
                        </li>
                        <li>
                          <Link href="#"><a >Faulty Orders</a></Link>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item ">
                     <Link href="/pickup" >
                     <a class="dropdown-toggle" >
                        <span class="icon-holder">
                          <i class="anticon anticon-sync menu-icon"></i>
                        </span>
                        <span class="title">Pickup Request</span>
                        <span class="arrow">
                          <i class="arrow-icon"></i>
                        </span>
                      </a>
                     </Link>
                    </li>
                    <li class="nav-item ">
                      <Link href="/transactions">
                      <a class="dropdown-toggle" >
                        <span class="icon-holder">
                          <i class="anticon anticon-snippets menu-icon"></i>
                        </span>
                        <span class="title">Transactions</span>
                        <span class="arrow">
                          <i class="arrow-icon"></i>
                        </span>
                      </a></Link>
                    </li>
                  </ul>
                  <ul class="side-nav-menu scrollable m-t-30 m-b-70 ">
        
                    <li class="nav-item ">
                     <Link href="/pickup"> 
                     <a   class="dropdown-toggle" >
                        <span class="icon-holder">
                          <i class="anticon anticon-customer-service menu-icon"></i>
                        </span>
                        <span class="title">Contact Support</span>
                        <span class="arrow">
                          <i class="arrow-icon"></i>
                        </span>
                      </a>
                      </Link>
                    </li>
                    <li class="nav-item ">
                     <Link href="/refferal">
                     <a class="dropdown-toggle" >
                        <span class="icon-holder">
                          <i class="anticon anticon-share-alt menu-icon"></i>
                        </span>
                        <span class="title">Refer Others</span>
                        <span class="arrow">
                          <i class="arrow-icon"></i>
                        </span>
                      </a></Link>
                    </li>
                    <li class="nav-item my-3">
                      <Link href="/">
                      <a  class="dropdown-toggle" >
                        <span class="icon-holder">
                          <i class="anticon anticon-poweroff menu-icon"></i>
                        </span>
                        <span class="title">Logout</span>
                        <span class="arrow">
                          <i class="arrow-icon"></i>
                        </span>
                      </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Side Nav END --> */}
      </div>
      </div>
      </div>
    );
  }
}
