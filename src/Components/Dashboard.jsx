import Wrapper from "./wrapper";
const Dashboard = () => {
  return (
    <div>
      <Wrapper />
      <div className="page-content">
        <div className="page-container">
          <div className="row row-cols-xxl-4 row-cols-md-2 row-cols-1">
            <div className="col">
              <div className="card">
                <div className="d-flex card-header justify-content-between align-items-center">
                  <div>
                    <h4 className="header-title">Total Sales</h4>
                  </div>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle drop-arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill fs-18" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:void(0);" className="dropdown-item">
                        Sales Report
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        Export Report
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        Revenue Analysis
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        Action
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="d-flex align-items-center gap-2 justify-content-between">
                    <span className="badge bg-primary rounded-pill fs-13">
                      45% <i className="ti ti-trending-up" />
                    </span>
                    <div className="text-end">
                      <h3 className="fw-semibold">$7.8M</h3>
                      <p className="text-muted mb-0">Since last month</p>
                    </div>
                  </div>
                  <div className="progress progress-soft progress-sm mt-3">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "45%" }}
                      aria-valuenow={45}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="d-flex card-header justify-content-between align-items-center">
                  <div>
                    <h4 className="header-title">Total Revenue</h4>
                  </div>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle drop-arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill fs-18" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:void(0);" className="dropdown-item">
                        Sales Report
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        Export Report
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        Revenue Analysis
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        Action
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="d-flex align-items-center gap-2 justify-content-between">
                    <span className="badge bg-success rounded-pill fs-13">
                      28% <i className="ti ti-trending-up" />
                    </span>
                    <div className="text-end">
                      <h3 className="fw-semibold">$12.4M</h3>
                      <p className="text-muted mb-0">Since last month</p>
                    </div>
                  </div>
                  <div className="progress progress-soft progress-sm mt-3">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "28%" }}
                      aria-valuenow={28}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="d-flex card-header justify-content-between align-items-center">
                  <div>
                    <h4 className="header-title">New Customers</h4>
                  </div>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle drop-arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill fs-18" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:void(0);" className="dropdown-item">
                        Customer Insights
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        Export Data
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        Retention Rate
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        Action
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="d-flex align-items-center gap-2 justify-content-between">
                    <span className="badge bg-warning rounded-pill fs-13">
                      18% <i className="ti ti-trending-up" />
                    </span>
                    <div className="text-end">
                      <h3 className="fw-semibold">1.2K</h3>
                      <p className="text-muted mb-0">Since last month</p>
                    </div>
                  </div>
                  <div className="progress progress-soft progress-sm mt-3">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "18%" }}
                      aria-valuenow={18}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="d-flex card-header justify-content-between align-items-center">
                  <div>
                    <h4 className="header-title">Conversion Rate</h4>
                  </div>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle drop-arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill fs-18" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:void(0);" className="dropdown-item">
                        Performance Report
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        Export Data
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        Improve Rate
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        Action
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="d-flex align-items-center gap-2 justify-content-between">
                    <span className="badge bg-info rounded-pill fs-13">
                      3.2% <i className="ti ti-trending-down" />
                    </span>
                    <div className="text-end">
                      <h3 className="fw-semibold">7.5%</h3>
                      <p className="text-muted mb-0">Since last month</p>
                    </div>
                  </div>
                  <div className="progress progress-soft progress-sm mt-3">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "7.5%" }}
                      aria-valuenow="7.5"
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-8 col-xl-12">
              <div className="card">
                <div className="d-flex card-header justify-content-between align-items-center border-bottom border-dashed">
                  <h4 className="header-title">Total Revenue</h4>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle drop-arrow-none card-drop"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="ri-more-2-fill fs-18" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:void(0);" className="dropdown-item">
                        Sales Report
                      </a>

                      <a href="javascript:void(0);" className="dropdown-item">
                        Export Report
                      </a>

                      <a href="javascript:void(0);" className="dropdown-item">
                        Profit
                      </a>

                      <a href="javascript:void(0);" className="dropdown-item">
                        Action
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0 pt-1">
                  <div dir="ltr" className="px-2">
                    <div
                      id="revenue-chart"
                      className="apex-charts"
                      data-colors="#1478f0,#f83f32,#30cf46"
                    >
                      <div
                        id="line-column-mixed"
                        class="apex-charts"
                        data-colors="#5b69bc,#30cf46"
                      ></div>
                    </div>
                  </div>
                  <div className="border-top border-dashed mt-2">
                    <div className="row text-center align-items-center g-0">
                      <div className="col-md-4 col-12">
                        <p className="text-muted mb-0">Payments</p>
                        <img
                          src="assets/images/cards/american-express.svg"
                          alt="user-card"
                          height={36}
                        />
                        <img
                          src="assets/images/cards/discover-card.svg"
                          alt="user-card"
                          height={36}
                        />
                        <img
                          src="assets/images/cards/mastercard.svg"
                          alt="user-card"
                          height={36}
                        />
                      </div>
                      <div className="col-md-4 col-6 border-start border-end border-dashed">
                        <p className="text-muted mt-3 mb-1">Expenses</p>
                        <h4 className="mb-3">
                          <span className="ri-arrow-left-up-box-line text-danger me-1" />
                          <span>$15.07k</span>
                        </h4>
                      </div>
                      <div className="col-md-4 col">
                        <p className="text-muted mt-3 mb-1">Revenue</p>
                        <h4 className="mb-3">
                          <span className="ri-arrow-left-down-box-line text-success me-1" />
                          <span>$45.5k</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-xl-6">
              <div className="card">
                <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-2 border-bottom border-dashed">
                  <h4 className="header-title">Orders Statistics</h4>
                  <div className="d-flex gap-2 justify-content-end text-end">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-light"
                    >
                      Refresh <i className="ri-refresh-line ms-1" />
                    </a>
                  </div>
                </div>
                <div className="card-body pt-2">
                  <div dir="ltr">
                    <div
                      id="data-visits-chart"
                      className="apex-charts"
                      data-colors="#1478f0,#faae37,#30cf46,#4bbee1"
                    />
                    <div className="row mt-3">
                      <div className="col">
                        <div className="d-flex justify-content-between align-items-center p-1">
                          <div>
                            <i className="ri-circle-fill fs-12 align-middle me-1 text-primary" />
                            <span className="align-middle fw-semibold">
                              Direct
                            </span>
                          </div>
                          <span className="fw-semibold text-muted float-end">
                            <i className="ri-arrow-down-s-fill text-danger" />{" "}
                            965
                          </span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center p-1">
                          <div>
                            <i className="ri-circle-fill fs-12 text-secondary align-middle me-1" />
                            <span className="align-middle fw-semibold">
                              Social
                            </span>
                          </div>
                          <span className="fw-semibold text-muted float-end">
                            <i className="ri-arrow-up-s-fill text-success" /> 75
                          </span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex justify-content-between align-items-center p-1">
                          <div>
                            <i className="ri-circle-fill fs-12 text-success align-middle me-1" />
                            <span className="align-middle fw-semibold">
                              Marketing
                            </span>
                          </div>
                          <span className="fw-semibold text-muted float-end">
                            <i className="ri-arrow-up-s-fill text-success" />{" "}
                            102
                          </span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center p-1">
                          <div>
                            <i className="ri-circle-fill fs-12 text-info align-middle me-1" />
                            <span className="align-middle fw-semibold">
                              Affiliates
                            </span>
                          </div>
                          <span className="fw-semibold text-muted float-end">
                            <i className="ri-arrow-down-s-fill text-danger" />{" "}
                            96
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-cols-xxl-5 row-cols-md-2 row-cols-1">
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center gap-2">
                  <img
                    src="assets/images/users/avatar-7.jpg"
                    alt="team-member-image"
                    className="me-1 avatar-xl img-thumbnail rounded-circle"
                  />
                  <div>
                    <h5>John Smith</h5>
                    <p className="text-muted">Project Manager</p>
                    <p className="m-0 fs-14">
                      80+ Feedbacks
                      <a href="#!" className="link-reset fw-medium">
                        <i className="ti ti-arrow-right" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center gap-2">
                  <img
                    src="assets/images/users/avatar-4.jpg"
                    alt="team-member-image"
                    className="me-1 avatar-xl img-thumbnail rounded-circle"
                  />
                  <div>
                    <h5>Jane Doe</h5>
                    <p className="text-muted">UI/UX Designer</p>
                    <p className="m-0 fs-14">
                      90+ Feedbacks
                      <a href="#!" className="link-reset fw-medium">
                        <i className="ti ti-arrow-right" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center gap-2">
                  <img
                    src="assets/images/users/avatar-5.jpg"
                    alt="team-member-image"
                    className="me-1 avatar-xl img-thumbnail rounded-circle"
                  />
                  <div>
                    <h5>Emily Brown</h5>
                    <p className="text-muted">Software Engineer</p>
                    <p className="m-0 fs-14">
                      100+ Feedbacks
                      <a href="#!" className="link-reset fw-medium">
                        <i className="ti ti-arrow-right" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center gap-2">
                  <img
                    src="assets/images/users/avatar-6.jpg"
                    alt="team-member-image"
                    className="me-1 avatar-xl img-thumbnail rounded-circle"
                  />
                  <div>
                    <h5>Mark Wilson</h5>
                    <p className="text-muted">Marketing Specialist</p>
                    <p className="m-0 fs-14">
                      70+ Feedbacks
                      <a href="#!" className="link-reset fw-medium">
                        <i className="ti ti-arrow-right" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body d-flex align-items-center gap-2">
                  <img
                    src="assets/images/users/avatar-3.jpg"
                    alt="team-member-image"
                    className="me-1 avatar-xl img-thumbnail rounded-circle"
                  />
                  <div>
                    <h5>Sara Johnson</h5>
                    <p className="text-muted">Data Analyst</p>
                    <p className="m-0 fs-14">
                      50+ Feedbacks
                      <a href="#!" className="link-reset fw-medium">
                        <i className="ti ti-arrow-right" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-6">
              <div className="card">
                <div className="d-flex card-header justify-content-between align-items-center">
                  <h4 className="header-title">Brands Listing</h4>
                  <a
                    href="javascript:void(0);"
                    className="btn btn-sm btn-primary"
                  >
                    Add Brand <i className="ti ti-plus ms-1" />
                  </a>
                </div>
                <div className="card-body p-0">
                  <div className="bg-light bg-opacity-50 py-1 text-center">
                    <p className="m-0">
                      <b>75</b> Active brands out of
                      <span className="fw-medium">120</span>
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-custom table-centered table-sm table-nowrap table-hover mb-0">
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar-md flex-shrink-0 me-2">
                                <span className="avatar-title bg-primary-subtle rounded-circle">
                                  <img
                                    src="assets/images/products/logo/logo-1.svg"
                                    alt=""
                                    height={22}
                                  />
                                </span>
                              </div>
                              <div>
                                <span className="text-muted fs-12">
                                  Electronics
                                </span>
                                <br />
                                <h5 className="fs-14 mt-1">
                                  TechNova - Germany
                                </h5>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-muted fs-12">
                              Established
                            </span>
                            <h5 className="fs-14 mt-1 fw-normal">Since 2015</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Stores</span>{" "}
                            <br />
                            <h5 className="fs-14 mt-1 fw-normal">1,200</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Products</span>
                            <h5 className="fs-14 mt-1 fw-normal">15,320</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Status</span>
                            <h5 className="fs-14 mt-1 fw-normal">
                              <i className="ti ti-circle-filled fs-12 text-success" />
                              Active
                            </h5>
                          </td>
                          <td style={{ width: 30 }}>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Refresh Report
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Export Report
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar-md flex-shrink-0 me-2">
                                <span className="avatar-title bg-info-subtle rounded-circle">
                                  <img
                                    src="assets/images/products/logo/logo-2.svg"
                                    alt=""
                                    height={22}
                                  />
                                </span>
                              </div>
                              <div>
                                <span className="text-muted fs-12">
                                  Home Decor
                                </span>
                                <br />
                                <h5 className="fs-14 mt-1">DecoLux - France</h5>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-muted fs-12">
                              Established
                            </span>
                            <h5 className="fs-14 mt-1 fw-normal">Since 2000</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Stores</span>{" "}
                            <br />
                            <h5 className="fs-14 mt-1 fw-normal">450</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Products</span>
                            <h5 className="fs-14 mt-1 fw-normal">6,800</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Status</span>
                            <h5 className="fs-14 mt-1 fw-normal">
                              <i className="ti ti-circle-filled fs-12 text-warning" />
                              Pending
                            </h5>
                          </td>
                          <td style={{ width: 30 }}>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Refresh Report
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Export Report
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar-md flex-shrink-0 me-2">
                                <span className="avatar-title bg-primary-subtle rounded-circle">
                                  <img
                                    src="assets/images/products/logo/logo-3.svg"
                                    alt=""
                                    height={22}
                                  />
                                </span>
                              </div>
                              <div>
                                <span className="text-muted fs-12">
                                  Technology
                                </span>
                                <br />
                                <h5 className="fs-14 mt-1">
                                  InnovTech - Japan
                                </h5>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-muted fs-12">
                              Established
                            </span>
                            <h5 className="fs-14 mt-1 fw-normal">Since 2012</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Stores</span>{" "}
                            <br />
                            <h5 className="fs-14 mt-1 fw-normal">850</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Products</span>
                            <h5 className="fs-14 mt-1 fw-normal">12,500</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Status</span>
                            <h5 className="fs-14 mt-1 fw-normal">
                              <i className="ti ti-circle-filled fs-12 text-success" />
                              Active
                            </h5>
                          </td>
                          <td style={{ width: 30 }}>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Refresh Report
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Export Report
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar-md flex-shrink-0 me-2">
                                <span className="avatar-title bg-secondary-subtle rounded-circle">
                                  <img
                                    src="assets/images/products/logo/logo-4.svg"
                                    alt=""
                                    height={22}
                                  />
                                </span>
                              </div>
                              <div>
                                <span className="text-muted fs-12">Health</span>
                                <br />
                                <h5 className="fs-14 mt-1">WellCare - UK</h5>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-muted fs-12">
                              Established
                            </span>
                            <h5 className="fs-14 mt-1 fw-normal">Since 2008</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Stores</span>{" "}
                            <br />
                            <h5 className="fs-14 mt-1 fw-normal">300</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Products</span>
                            <h5 className="fs-14 mt-1 fw-normal">4,200</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Status</span>
                            <h5 className="fs-14 mt-1 fw-normal">
                              <i className="ti ti-circle-filled fs-12 text-success" />
                              Active
                            </h5>
                          </td>
                          <td style={{ width: 30 }}>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Refresh Report
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Export Report
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="avatar-md flex-shrink-0 me-2">
                                <span className="avatar-title bg-danger-subtle rounded-circle">
                                  <img
                                    src="assets/images/products/logo/logo-5.svg"
                                    alt=""
                                    height={22}
                                  />
                                </span>
                              </div>
                              <div>
                                <span className="text-muted fs-12">
                                  Automotive
                                </span>
                                <br />
                                <h5 className="fs-14 mt-1">AutoDrive - USA</h5>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="text-muted fs-12">
                              Established
                            </span>
                            <h5 className="fs-14 mt-1 fw-normal">Since 1999</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Stores</span>{" "}
                            <br />
                            <h5 className="fs-14 mt-1 fw-normal">600</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Products</span>
                            <h5 className="fs-14 mt-1 fw-normal">8,900</h5>
                          </td>
                          <td>
                            <span className="text-muted fs-12">Status</span>
                            <h5 className="fs-14 mt-1 fw-normal">
                              <i className="ti ti-circle-filled fs-12 text-danger" />
                              Inactive
                            </h5>
                          </td>
                          <td style={{ width: 30 }}>
                            <div className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle text-muted drop-arrow-none card-drop p-0"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-end">
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Refresh Report
                                </a>
                                <a
                                  href="javascript:void(0);"
                                  className="dropdown-item"
                                >
                                  Export Report
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="align-items-center justify-content-between row text-center text-sm-start">
                    <div className="col-sm">
                      <div className="text-muted">
                        Showing <span className="fw-semibold">5</span> of
                        <span className="fw-semibold">20</span> Results
                      </div>
                    </div>
                    <div className="col-sm-auto mt-3 mt-sm-0">
                      <ul className="pagination pagination-boxed pagination-sm mb-0 justify-content-center">
                        <li className="page-item disabled">
                          <a href="#" className="page-link">
                            <i className="ti ti-chevron-left" />
                          </a>
                        </li>
                        <li className="page-item active">
                          <a href="#" className="page-link">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            <i className="ti ti-chevron-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-6">
              <div className="card card-h-100">
                <div className="card-header d-flex flex-wrap align-items-center gap-2 border-bottom border-dashed">
                  <h4 className="header-title me-auto">Top Selling Products</h4>
                  <div className="d-flex gap-2 justify-content-end text-end">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-light"
                    >
                      Import <i className="ti ti-download ms-1" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-primary"
                    >
                      Export <i className="ti ti-file-export ms-1" />
                    </a>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-custom align-middle table-nowrap table-hover mb-0">
                      <tbody>
                        <tr>
                          <td style={{ width: 85 }}>
                            <div className="avatar-lg border rounded">
                              <img
                                src="assets/images/products/p-1.png"
                                alt="Product-10"
                                className="img-fluid rounded-2"
                              />
                            </div>
                          </td>
                          <td className="ps-0">
                            <h5 className="fs-14 my-1">
                              <a href="#!" className="link-reset">
                                Modern Desk Lamp
                              </a>
                            </h5>
                            <span className="text-muted fs-12">
                              15 April 2024
                            </span>
                          </td>
                          <td>
                            <h5 className="fs-14 my-1">$45.99</h5>
                            <span className="text-muted fs-12">Price</span>
                          </td>
                          <td>
                            <h5 className="fs-14 my-1">120</h5>
                            <span className="text-muted fs-12">Quantity</span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center justify-content-end">
                              <div className="me-2">
                                <h5 className="fs-14 my-1">$5,518.80</h5>
                                <span className="text-muted fs-12">Amount</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: 85 }}>
                            <div className="avatar-lg border rounded">
                              <img
                                src="assets/images/products/p-2.png"
                                alt="Product-11"
                                className="img-fluid rounded-2"
                              />
                            </div>
                          </td>
                          <td className="ps-0">
                            <h5 className="fs-14 my-1">
                              <a href="#!" className="link-reset">
                                Vintage Wooden Chair
                              </a>
                            </h5>
                            <span className="text-muted fs-12">
                              10 April 2024
                            </span>
                          </td>
                          <td>
                            <h5 className="fs-14 my-1">$99.00</h5>
                            <span className="text-muted fs-12">Price</span>
                          </td>
                          <td>
                            <h5 className="fs-14 my-1">80</h5>
                            <span className="text-muted fs-12">Quantity</span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center justify-content-end">
                              <div className="me-2">
                                <h5 className="fs-14 my-1">$7,920.00</h5>
                                <span className="text-muted fs-12">Amount</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: 85 }}>
                            <div className="avatar-lg border rounded">
                              <img
                                src="assets/images/products/p-3.png"
                                alt="Product-12"
                                className="img-fluid rounded-2"
                              />
                            </div>
                          </td>
                          <td className="ps-0">
                            <h5 className="fs-14 my-1">
                              <a href="#!" className="link-reset">
                                Wireless Keyboard
                              </a>
                            </h5>
                            <span className="text-muted fs-12">
                              05 April 2024
                            </span>
                          </td>
                          <td>
                            <h5 className="fs-14 my-1">$29.99</h5>
                            <span className="text-muted fs-12">Price</span>
                          </td>
                          <td>
                            <h5 className="fs-14 my-1">150</h5>
                            <span className="text-muted fs-12">Quantity</span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center justify-content-end">
                              <div className="me-2">
                                <h5 className="fs-14 my-1">$4,498.50</h5>
                                <span className="text-muted fs-12">Amount</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: 85 }}>
                            <div className="avatar-lg border rounded">
                              <img
                                src="assets/images/products/p-4.png"
                                alt="Product-13"
                                className="img-fluid rounded-2"
                              />
                            </div>
                          </td>
                          <td className="ps-0">
                            <h5 className="fs-14 my-1">
                              <a href="#!" className="link-reset">
                                Bluetooth Speaker
                              </a>
                            </h5>
                            <span className="text-muted fs-12">
                              02 April 2024
                            </span>
                          </td>
                          <td>
                            <h5 className="fs-14 my-1">$65.00</h5>
                            <span className="text-muted fs-12">Price</span>
                          </td>
                          <td>
                            <h5 className="fs-14 my-1">90</h5>
                            <span className="text-muted fs-12">Quantity</span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center justify-content-end">
                              <div className="me-2">
                                <h5 className="fs-14 my-1">$5,850.00</h5>
                                <span className="text-muted fs-12">Amount</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ width: 85 }}>
                            <div className="avatar-lg border rounded">
                              <img
                                src="assets/images/products/p-5.png"
                                alt="Product-14"
                                className="img-fluid rounded-2"
                              />
                            </div>
                          </td>
                          <td className="ps-0">
                            <h5 className="fs-14 my-1">
                              <a href="#!" className="link-reset">
                                Classic Table Lamp
                              </a>
                            </h5>
                            <span className="text-muted fs-12">
                              29 March 2024
                            </span>
                          </td>
                          <td>
                            <h5 className="fs-14 my-1">$42.50</h5>
                            <span className="text-muted fs-12">Price</span>
                          </td>
                          <td>
                            <h5 className="fs-14 my-1">110</h5>
                            <span className="text-muted fs-12">Quantity</span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center justify-content-end">
                              <div className="me-2">
                                <h5 className="fs-14 my-1">$4,675.00</h5>
                                <span className="text-muted fs-12">Amount</span>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="align-items-center justify-content-between row text-center text-sm-start">
                    <div className="col-sm">
                      <div className="text-muted">
                        Showing <span className="fw-semibold">5</span> of
                        <span className="fw-semibold">10</span> Results
                      </div>
                    </div>
                    <div className="col-sm-auto mt-3 mt-sm-0">
                      <ul className="pagination pagination-boxed pagination-sm mb-0 justify-content-center">
                        <li className="page-item disabled">
                          <a href="#" className="page-link">
                            <i className="ti ti-chevron-left" />
                          </a>
                        </li>
                        <li className="page-item active">
                          <a href="#" className="page-link">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a href="#" className="page-link">
                            <i className="ti ti-chevron-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="page-container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start">
                © Arclon - By
                <span className="fw-bold text-decoration-underline text-uppercase text-reset fs-12">
                  Coderthemes
                </span>
              </div>
              <div className="col-md-6">
                <div className="text-md-end footer-links d-none d-md-block">
                  <a href="javascript: void(0);">About</a>
                  <a href="javascript: void(0);">Support</a>
                  <a href="javascript: void(0);">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="theme-settings-offcanvas"
      >
        <div className="d-flex align-items-center gap-2 px-3 py-3 offcanvas-header border-bottom border-dashed">
          <h5 className="flex-grow-1 fs-16 fw-bold mb-0">Theme Settings</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body p-0 h-100" data-simplebar="">
          <div className="p-3 border-bottom border-dashed">
            <h5 className="mb-3 fs-13 text-uppercase fw-bold">Color Scheme</h5>
            <div className="row">
              <div className="col-4">
                <div className="form-check card-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-bs-theme"
                    id="layout-color-light"
                    defaultValue="light"
                  />
                  <label
                    className="form-check-label p-3 w-100 d-flex justify-content-center align-items-center"
                    htmlFor="layout-color-light"
                  >
                    <iconify-icon
                      icon="solar:sun-bold-duotone"
                      className="fs-32 text-muted"
                    />
                  </label>
                </div>
                <h5 className="fs-14 text-center text-muted mt-2">Light</h5>
              </div>
              <div className="col-4">
                <div className="form-check card-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-bs-theme"
                    id="layout-color-dark"
                    defaultValue="dark"
                  />
                  <label
                    className="form-check-label p-3 w-100 d-flex justify-content-center align-items-center"
                    htmlFor="layout-color-dark"
                  >
                    <iconify-icon
                      icon="solar:cloud-sun-2-bold-duotone"
                      className="fs-32 text-muted"
                    />
                  </label>
                </div>
                <h5 className="fs-14 text-center text-muted mt-2">Dark</h5>
              </div>
            </div>
          </div>
          <div className="p-3 border-bottom border-dashed sidebarMode">
            <h5 className="mb-3 fs-13 text-uppercase fw-bold">Layout Mode</h5>
            <div className="row">
              <div className="col-4">
                <div className="form-check card-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-layout-mode"
                    id="layout-mode-fluid"
                    defaultValue="fluid"
                  />
                  <label
                    className="form-check-label p-0 avatar-xl w-100"
                    htmlFor="layout-mode-fluid"
                  >
                    <div>
                      <span className="d-flex h-100">
                        <span className="flex-shrink-0">
                          <span className="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                            <span className="d-block p-1 bg-dark-subtle rounded mb-1" />
                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                          </span>
                        </span>
                        <span className="flex-grow-1">
                          <span className="d-flex h-100 flex-column rounded-2">
                            <span className="bg-light d-block p-1" />
                          </span>
                        </span>
                      </span>
                    </div>
                    <div>
                      <span className="d-flex h-100 flex-column">
                        <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                          <span className="d-block p-1 bg-dark-subtle rounded me-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                        </span>
                        <span className="bg-light d-block p-1" />
                      </span>
                    </div>
                  </label>
                </div>
                <h5 className="fs-14 text-center text-muted mt-2">Fluid</h5>
              </div>
              <div className="col-4">
                <div className="form-check sidebar-setting card-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-layout-mode"
                    id="data-layout-detached"
                    defaultValue="detached"
                  />
                  <label
                    className="form-check-label p-0 avatar-xl w-100"
                    htmlFor="data-layout-detached"
                  >
                    <span className="d-flex h-100 flex-column">
                      <span className="bg-light d-flex p-1 align-items-center border-bottom ">
                        <span className="d-block p-1 bg-dark-subtle rounded me-1" />
                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto" />
                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                        <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1" />
                      </span>
                      <span className="d-flex h-100 p-1 px-2">
                        <span className="flex-shrink-0">
                          <span className="bg-light d-flex h-100 flex-column p-1 px-2">
                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                            <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100" />
                          </span>
                        </span>
                      </span>
                      <span className="bg-light d-block p-1 mt-auto px-2" />
                    </span>
                  </label>
                </div>
                <h5 className="fs-14 text-center text-muted mt-2">Detached</h5>
              </div>
            </div>
          </div>
          <div className="p-3 border-bottom border-dashed">
            <h5 className="mb-3 fs-16 fw-bold">Menu Color</h5>
            <div className="row">
              <div className="col-3">
                <div className="form-check sidebar-setting card-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-menu-color"
                    id="sidenav-color-light"
                    defaultValue="light"
                  />
                  <label
                    className="form-check-label p-0 avatar-lg w-100 bg-light"
                    htmlFor="sidenav-color-light"
                  >
                    <span className="d-flex align-items-center justify-content-center h-100">
                      <span className="p-2 d-inline-flex shadow rounded-circle bg-white" />
                    </span>
                  </label>
                </div>
                <h5 className="fs-14 text-center text-muted mt-2">Light</h5>
              </div>
              <div className="col-3">
                <div className="form-check sidebar-setting card-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-menu-color"
                    id="sidenav-color-dark"
                    defaultValue="dark"
                  />
                  <label
                    className="form-check-label p-0 avatar-lg w-100 bg-light"
                    htmlFor="sidenav-color-dark"
                  >
                    <span className="d-flex align-items-center justify-content-center h-100">
                      <span
                        className="p-2 d-inline-flex shadow rounded-circle"
                        style={{ backgroundColor: "#000000" }}
                      />
                    </span>
                  </label>
                </div>
                <h5 className="fs-14 text-center text-muted mt-2">Dark</h5>
              </div>
            </div>
          </div>
          <div className="p-3 .border-bottom .border-dashed sidebarMode">
            <h5 className="mb-3 fs-13 text-uppercase fw-bold">Sidebar Size</h5>
            <div className="row">
              <div className="col-4">
                <div className="form-check sidebar-setting card-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-sidenav-size"
                    id="sidenav-size-default"
                    defaultValue="default"
                  />
                  <label
                    className="form-check-label p-0 avatar-xl w-100"
                    htmlFor="sidenav-size-default"
                  >
                    <span className="d-flex h-100">
                      <span className="flex-shrink-0">
                        <span className="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                          <span className="d-block p-1 bg-dark-subtle rounded mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                        </span>
                      </span>
                      <span className="flex-grow-1">
                        <span className="d-flex h-100 flex-column">
                          <span className="bg-light d-block p-1" />
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                <h5 className="fs-14 text-center text-muted mt-2">Default</h5>
              </div>
              <div className="col-4">
                <div className="form-check sidebar-setting card-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-sidenav-size"
                    id="sidenav-size-compact"
                    defaultValue="compact"
                  />
                  <label
                    className="form-check-label p-0 avatar-xl w-100"
                    htmlFor="sidenav-size-compact"
                  >
                    <span className="d-flex h-100">
                      <span className="flex-shrink-0">
                        <span className="bg-light d-flex h-100 border-end  flex-column p-1">
                          <span className="d-block p-1 bg-dark-subtle rounded mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                        </span>
                      </span>
                      <span className="flex-grow-1">
                        <span className="d-flex h-100 flex-column">
                          <span className="bg-light d-block p-1" />
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                <h5 className="fs-14 text-center text-muted mt-2">Compact</h5>
              </div>
              <div className="col-4">
                <div className="form-check sidebar-setting card-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-sidenav-size"
                    id="sidenav-size-small"
                    defaultValue="condensed"
                  />
                  <label
                    className="form-check-label p-0 avatar-xl w-100"
                    htmlFor="sidenav-size-small"
                  >
                    <span className="d-flex h-100">
                      <span className="flex-shrink-0">
                        <span
                          className="bg-light d-flex h-100 border-end flex-column"
                          style={{ padding: 2 }}
                        >
                          <span className="d-block p-1 bg-dark-subtle rounded mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                        </span>
                      </span>
                      <span className="flex-grow-1">
                        <span className="d-flex h-100 flex-column">
                          <span className="bg-light d-block p-1" />
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                <h5 className="fs-14 text-center text-muted mt-2">Condensed</h5>
              </div>
              <div className="col-4">
                <div className="form-check sidebar-setting card-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-sidenav-size"
                    id="sidenav-size-small-hover"
                    defaultValue="sm-hover"
                  />
                  <label
                    className="form-check-label p-0 avatar-xl w-100"
                    htmlFor="sidenav-size-small-hover"
                  >
                    <span className="d-flex h-100">
                      <span className="flex-shrink-0">
                        <span
                          className="bg-light d-flex h-100 border-end flex-column"
                          style={{ padding: 2 }}
                        >
                          <span className="d-block p-1 bg-dark-subtle rounded mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                          <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1" />
                        </span>
                      </span>
                      <span className="flex-grow-1">
                        <span className="d-flex h-100 flex-column">
                          <span className="bg-light d-block p-1" />
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                <h5 className="fs-14 text-center text-muted mt-2">
                  Hover View
                </h5>
              </div>
              <div className="col-4">
                <div className="form-check sidebar-setting card-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-sidenav-size"
                    id="sidenav-size-full"
                    defaultValue="full"
                  />
                  <label
                    className="form-check-label p-0 avatar-xl w-100"
                    htmlFor="sidenav-size-full"
                  >
                    <span className="d-flex h-100">
                      <span className="flex-shrink-0">
                        <span className="d-flex h-100 flex-column">
                          <span className="d-block p-1 bg-dark-subtle mb-1" />
                        </span>
                      </span>
                      <span className="flex-grow-1">
                        <span className="d-flex h-100 flex-column">
                          <span className="bg-light d-block p-1" />
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                <h5 className="fs-14 text-center text-muted mt-2">
                  Full Layout
                </h5>
              </div>
              <div className="col-4">
                <div className="form-check sidebar-setting card-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="data-sidenav-size"
                    id="sidenav-size-fullscreen"
                    defaultValue="fullscreen"
                  />
                  <label
                    className="form-check-label p-0 avatar-xl w-100"
                    htmlFor="sidenav-size-fullscreen"
                  >
                    <span className="d-flex h-100">
                      <span className="flex-grow-1">
                        <span className="d-flex h-100 flex-column">
                          <span className="bg-light d-block p-1" />
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                <h5 className="fs-14 text-center text-muted mt-2">Hidden</h5>
              </div>
            </div>
          </div>
          <div className="p-3 border-bottom border-dashed d-none">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fs-16 mb-0">Container Width</h5>
              <div className="btn-group radio" role="group">
                <input
                  type="radio"
                  className="btn-check"
                  name="data-container-position"
                  id="container-width-fixed"
                  defaultValue="fixed"
                />
                <label
                  className="btn btn-sm btn-soft-primary w-sm"
                  htmlFor="container-width-fixed"
                >
                  Full
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="data-container-position"
                  id="container-width-scrollable"
                  defaultValue="scrollable"
                />
                <label
                  className="btn btn-sm btn-soft-primary w-sm ms-0"
                  htmlFor="container-width-scrollable"
                >
                  Boxed
                </label>
              </div>
            </div>
          </div>
          <div className="p-3 border-bottom border-dashed d-none">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="fs-16 mb-0">Layout Position</h5>
              <div className="btn-group radio" role="group">
                <input
                  type="radio"
                  className="btn-check"
                  name="data-layout-position"
                  id="layout-position-fixed"
                  defaultValue="fixed"
                />
                <label
                  className="btn btn-sm btn-soft-primary w-sm"
                  htmlFor="layout-position-fixed"
                >
                  Fixed
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="data-layout-position"
                  id="layout-position-scrollable"
                  defaultValue="scrollable"
                />
                <label
                  className="btn btn-sm btn-soft-primary w-sm ms-0"
                  htmlFor="layout-position-scrollable"
                >
                  Scrollable
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2 px-3 py-2 offcanvas-header border-top border-dashed">
          <button
            type="button"
            className="btn w-50 btn-soft-danger"
            id="reset-layout"
          >
            Reset
          </button>
          <a
            href="https://1.envato.market/coderthemes"
            target="_blank"
            className="btn w-50 btn-soft-info"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
