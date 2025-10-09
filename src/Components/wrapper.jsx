import { Link } from "react-router-dom";
const Wrapper = () => {
  return (
    <div>
      <div className="sidenav-menu">
        <Link to="/" className="logo">
          <span className="logo-light">
            <span className="logo-lg">
              <img src="assets/images/logo.png" alt="logo" />
            </span>
            <span className="logo-sm">
              <img src="assets/images/logo.png" alt="small logo" />
            </span>
          </span>
          <span className="logo-dark">
            <span className="logo-lg">
              <img src="assets/images/logo.png" alt="dark logo" />
            </span>
            <span className="logo-sm">
              <img src="assets/images/logo.png" alt="small logo" />
            </span>
          </span>
        </Link>

        <button className="button-sm-hover">
          <i className="ri-circle-line align-middle" />
        </button>

        <button className="button-close-fullsidebar">
          <i className="ti ti-x align-middle" />
        </button>
        <div data-simplebar="">
          <ul className="side-nav">
            <li className="side-nav-title">Menu</li>
            <li className="side-nav-item">
              <Link to="/dashboard" className="side-nav-link">
                <span className="menu-icon">
                  <i className="ti ti-dashboard" />
                </span>
                <span className="menu-text"> Dashboard </span>
              </Link>
            </li>
            <li className="side-nav-item">
              <Link to="/chat" className="side-nav-link">
                <span className="menu-icon">
                  <i className="ti ti-message" />
                </span>
                <span className="menu-text"> Chat </span>
              </Link>
            </li>
            <li className="side-nav-item">
              <Link to="/calendar" className="side-nav-link">
                <span className="menu-icon">
                  <i className="ti ti-calendar" />
                </span>
                <span className="menu-text"> Calendar </span>
              </Link>
            </li>
            <li className="side-nav-item">
              <Link to="/email" className="side-nav-link">
                <span className="menu-icon">
                  <i className="ti ti-mailbox" />
                </span>
                <span className="menu-text"> Email </span>
              </Link>
            </li>
            <li className="side-nav-item">
              <Link to="/submitform" className="side-nav-link">
                <span className="menu-icon">
                  <i className="ti ti-list-details" />
                </span>
                <span className="menu-text">File Uploads</span>
              </Link>
            </li>
            <li className="side-nav-item">
              <Link to="/listproducts" className="side-nav-link">
                <span className="menu-icon">
                  <i className="ti ti-list-details" />
                </span>
                <span className="menu-text">List Product</span>
              </Link>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarInvoice"
                aria-expanded="true"
                aria-controls="sidebarInvoice"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-invoice" />
                </span>
                <span className="menu-text"> Invoice</span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarInvoice">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <Link to="/invoice" className="side-nav-link">
                      <span className="menu-text">Invoices</span>
                    </Link>
                  </li>
                  <li className="side-nav-item">
                    <Link to="/viewinvoice" className="side-nav-link">
                      <span className="menu-text">View Invoice</span>
                    </Link>
                  </li>
                  <li className="side-nav-item">
                    <Link to="/createinvoice" className="side-nav-link">
                      <span className="menu-text">Create Invoice</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-title mt-2">Custom</li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarPages"
                aria-expanded="false"
                aria-controls="sidebarPages"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-package" />
                </span>
                <span className="menu-text"> Pages </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarPages">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <Link to="/pagepricing" className="side-nav-link">
                      <span className="menu-text">Pricing</span>
                    </Link>
                  </li>
                  <li className="side-nav-item">
                    <Link to="/pageFAQ" className="side-nav-link">
                      <span className="menu-text">FAQ</span>
                    </Link>
                  </li>

                  <li className="side-nav-item">
                    <Link to="/pagetimeline" className="side-nav-link">
                      <span className="menu-text">Timeline</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarPagesAuth"
                aria-expanded="false"
                aria-controls="sidebarPagesAuth"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-user-shield" />
                </span>
                <span className="menu-text"> Authentication </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarPagesAuth">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <Link to="/authlogin" className="side-nav-link">
                      <span className="menu-text">Login</span>
                    </Link>
                  </li>
                  <li className="side-nav-item">
                    <Link to="/authregister" className="side-nav-link">
                      <span className="menu-text">Register</span>
                    </Link>
                  </li>
                  <li className="side-nav-item">
                    <Link to="/authlogout" className="side-nav-link">
                      <span className="menu-text">Logout</span>
                    </Link>
                  </li>
                  <li className="side-nav-item">
                    <Link to="/authrecoverpw" className="side-nav-link">
                      <span className="menu-text">Recover Password</span>
                    </Link>
                  </li>
                  <li className="side-nav-item">
                    <Link to="/authcreatepw" className="side-nav-link">
                      <span className="menu-text">Create Password</span>
                    </Link>
                  </li>
                  <li className="side-nav-item">
                    <Link to="/authlockscreen" className="side-nav-link">
                      <span className="menu-text">Lock Screen</span>
                    </Link>
                  </li>
                  <li className="side-nav-item">
                    <Link to="/authconfirmmail" className="side-nav-link">
                      <span className="menu-text">Confirm Mail</span>
                    </Link>
                  </li>
                  <li className="side-nav-item">
                    <Link to="/authloginpin" className="side-nav-link">
                      <span className="menu-text">Login with PIN</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* <li className="side-nav-title mt-2">Components</li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarBaseUI"
                aria-expanded="false"
                aria-controls="sidebarBaseUI"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-aperture" />
                </span>
                <span className="menu-text"> Base UI </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarBaseUI">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="ui-accordions.html" className="side-nav-link">
                      <span className="menu-text">Accordions</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-alerts.html" className="side-nav-link">
                      <span className="menu-text">Alerts</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-avatars.html" className="side-nav-link">
                      <span className="menu-text">Avatars</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-badges.html" className="side-nav-link">
                      <span className="menu-text">Badges</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-breadcrumb.html" className="side-nav-link">
                      <span className="menu-text">Breadcrumb</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-buttons.html" className="side-nav-link">
                      <span className="menu-text">Buttons</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-cards.html" className="side-nav-link">
                      <span className="menu-text">Cards</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-carousel.html" className="side-nav-link">
                      <span className="menu-text">Carousel</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-collapse.html" className="side-nav-link">
                      <span className="menu-text">Collapse</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-dropdowns.html" className="side-nav-link">
                      <span className="menu-text">Dropdowns</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-ratios.html" className="side-nav-link">
                      <span className="menu-text">Ratios</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-grid.html" className="side-nav-link">
                      <span className="menu-text">Grid</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-links.html" className="side-nav-link">
                      <span className="menu-text">Links</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-list-group.html" className="side-nav-link">
                      <span className="menu-text">List Group</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-modals.html" className="side-nav-link">
                      <span className="menu-text">Modals</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-notifications.html" className="side-nav-link">
                      <span className="menu-text">Notifications</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-offcanvas.html" className="side-nav-link">
                      <span className="menu-text">Offcanvas</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-placeholders.html" className="side-nav-link">
                      <span className="menu-text">Placeholders</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-pagination.html" className="side-nav-link">
                      <span className="menu-text">Pagination</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-popovers.html" className="side-nav-link">
                      <span className="menu-text">Popovers</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-progress.html" className="side-nav-link">
                      <span className="menu-text">Progress</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-scrollspy.html" className="side-nav-link">
                      <span className="menu-text">Scrollspy</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-spinners.html" className="side-nav-link">
                      <span className="menu-text">Spinners</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-tabs.html" className="side-nav-link">
                      <span className="menu-text">Tabs</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-tooltips.html" className="side-nav-link">
                      <span className="menu-text">Tooltips</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-typography.html" className="side-nav-link">
                      <span className="menu-text">Typography</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="ui-utilities.html" className="side-nav-link">
                      <span className="menu-text">Utilities</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarExtendedUI"
                aria-expanded="false"
                aria-controls="sidebarExtendedUI"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-macro" />
                </span>
                <span className="menu-text"> Extended UI </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarExtendedUI">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="extended-dragula.html" className="side-nav-link">
                      <span className="menu-text">Dragula</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="extended-sweetalerts.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Sweet Alerts</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="extended-ratings.html" className="side-nav-link">
                      <span className="menu-text">Ratings</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="extended-scrollbar.html" className="side-nav-link">
                      <span className="menu-text">Scrollbar</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarIcons"
                aria-expanded="false"
                aria-controls="sidebarIcons"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-icons" />
                </span>
                <span className="menu-text"> Icons </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarIcons">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="icons-remix.html" className="side-nav-link">
                      <span className="menu-text">Remix</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="icons-tabler.html" className="side-nav-link">
                      <span className="menu-text">Tabler</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="icons-solar.html" className="side-nav-link">
                      <span className="menu-text">Solar</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarCharts"
                aria-expanded="false"
                aria-controls="sidebarCharts"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-chart-infographic" />
                </span>
                <span className="menu-text"> Charts </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarCharts">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="charts-apex-area.html" className="side-nav-link">
                      <span className="menu-text">Area</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-bar.html" className="side-nav-link">
                      <span className="menu-text">Bar</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-bubble.html" className="side-nav-link">
                      <span className="menu-text">Bubble</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-candlestick.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Candlestick</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-column.html" className="side-nav-link">
                      <span className="menu-text">Column</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-heatmap.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Heatmap</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-line.html" className="side-nav-link">
                      <span className="menu-text">Line</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-mixed.html" className="side-nav-link">
                      <span className="menu-text">Mixed</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-timeline.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Timeline</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-boxplot.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Boxplot</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-treemap.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Treemap</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-pie.html" className="side-nav-link">
                      <span className="menu-text">Pie</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-radar.html" className="side-nav-link">
                      <span className="menu-text">Radar</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-radialbar.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">RadialBar</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-scatter.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Scatter</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-polar-area.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Polar Area</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      href="charts-apex-sparklines.html"
                      className="side-nav-link"
                    >
                      <span className="menu-text">Sparklines</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-slope.html" className="side-nav-link">
                      <span className="menu-text">Slope</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="charts-apex-funnel.html" className="side-nav-link">
                      <span className="menu-text">Funnel</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarForms"
                aria-expanded="false"
                aria-controls="sidebarForms"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-list-details" />
                </span>
                <span className="menu-text"> Forms </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarForms">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="form-elements.html" className="side-nav-link">
                      <span className="menu-text">Basic Elements</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-inputmask.html" className="side-nav-link">
                      <span className="menu-text">Inputmask</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-picker.html" className="side-nav-link">
                      <span className="menu-text">Picker</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-select.html" className="side-nav-link">
                      <span className="menu-text">Select</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-range-slider.html" className="side-nav-link">
                      <span className="menu-text">Range Slider</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-validation.html" className="side-nav-link">
                      <span className="menu-text">Validation</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-wizard.html" className="side-nav-link">
                      <span className="menu-text">Wizard</span>
                    </a>
                  </li>

                  <li className="side-nav-item">
                    <a href="form-editors.html" className="side-nav-link">
                      <span className="menu-text">Editors</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="form-layouts.html" className="side-nav-link">
                      <span className="menu-text">Layouts</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarTables"
                aria-expanded="false"
                aria-controls="sidebarTables"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-table-row" />
                </span>
                <span className="menu-text"> Tables </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarTables">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="tables-basic.html" className="side-nav-link">
                      <span className="menu-text">Basic Tables</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="tables-gridjs.html" className="side-nav-link">
                      <span className="menu-text">Gridjs Tables</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="tables-datatable.html" className="side-nav-link">
                      <span className="menu-text">Datatable Tables</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarMaps"
                aria-expanded="false"
                aria-controls="sidebarMaps"
                className="side-nav-link"
              >
                <span className="menu-icon">
                  <i className="ti ti-map-2" />
                </span>
                <span className="menu-text"> Maps </span>
                <span className="menu-arrow" />
              </a>
              <div className="collapse" id="sidebarMaps">
                <ul className="sub-menu">
                  <li className="side-nav-item">
                    <a href="maps-google.html" className="side-nav-link">
                      <span className="menu-text">Google Maps</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="maps-vector.html" className="side-nav-link">
                      <span className="menu-text">Vector Maps</span>
                    </a>
                  </li>
                  <li className="side-nav-item">
                    <a href="maps-leaflet.html" className="side-nav-link">
                      <span className="menu-text">Leaflet Maps</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li> */}
          </ul>
          <div className="clearfix" />
        </div>
      </div>
      <header className="app-topbar" id="header">
        <div className="page-container topbar-menu">
          <div className="d-flex align-items-center gap-2">
            <a href="index.html" className="logo">
              <span className="logo-light">
                <span className="logo-lg">
                  <img src="assets/images/logo.png" alt="logo" />
                </span>
                <span className="logo-sm">
                  <img src="assets/images/logo-sm.png" alt="small logo" />
                </span>
              </span>
              <span className="logo-dark">
                <span className="logo-lg">
                  <img src="assets/images/logo-dark.png" alt="dark logo" />
                </span>
                <span className="logo-sm">
                  <img src="assets/images/logo-sm.png" alt="small logo" />
                </span>
              </span>
            </a>

            <button className="sidenav-toggle-button">
              <i className="ri-menu-5-line fs-24" />
            </button>

            <button
              className="topnav-toggle-button px-2"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
            >
              <i className="ri-menu-5-line fs-24" />
            </button>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="topbar-item d-flex d-xl-none">
              <button
                className="topbar-link"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
                type="button"
              >
                <i className="ri-search-line fs-22" />
              </button>
            </div>

            <div
              className="topbar-search text-muted d-none d-xl-flex gap-2 me-2 align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
              type="button"
            >
              <i className="ri-search-line fs-18" />
              <span className="me-2">Search something..</span>
            </div>

            <div className="topbar-item">
              <div className="dropdown">
                <button
                  className="topbar-link"
                  data-bs-toggle="dropdown"
                  data-bs-offset="0,25"
                  type="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/flags/us.svg"
                    alt="user-image"
                    className="w-100 rounded"
                    height={18}
                    id="selected-language-image"
                  />
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item"
                    data-translator-lang="en"
                  >
                    <img
                      src="assets/images/flags/us.svg"
                      alt="user-image"
                      className="me-1 rounded"
                      height={18}
                      data-translator-image=""
                    />{" "}
                    <span className="align-middle">English</span>
                  </a>

                  <a
                    href="javascript:void(0);"
                    className="dropdown-item"
                    data-translator-lang="hi"
                  >
                    <img
                      src="assets/images/flags/in.svg"
                      alt="user-image"
                      className="me-1 rounded"
                      height={18}
                      data-translator-image=""
                    />{" "}
                    <span className="align-middle">Hindi</span>
                  </a>

                  <a href="javascript:void(0);" className="dropdown-item">
                    <img
                      src="assets/images/flags/de.svg"
                      alt="user-image"
                      className="me-1 rounded"
                      height={18}
                    />
                    <span className="align-middle">German</span>
                  </a>

                  <a href="javascript:void(0);" className="dropdown-item">
                    <img
                      src="assets/images/flags/it.svg"
                      alt="user-image"
                      className="me-1 rounded"
                      height={18}
                    />
                    <span className="align-middle">Italian</span>
                  </a>

                  <a href="javascript:void(0);" className="dropdown-item">
                    <img
                      src="assets/images/flags/es.svg"
                      alt="user-image"
                      className="me-1 rounded"
                      height={18}
                    />
                    <span className="align-middle">Spanish</span>
                  </a>

                  <a href="javascript:void(0);" className="dropdown-item">
                    <img
                      src="assets/images/flags/ru.svg"
                      alt="user-image"
                      className="me-1 rounded"
                      height={18}
                    />
                    <span className="align-middle">Russian</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="topbar-item">
              <div className="dropdown">
                <button
                  className="topbar-link dropdown-toggle drop-arrow-none"
                  data-bs-toggle="dropdown"
                  data-bs-offset="0,18"
                  type="button"
                  data-bs-auto-close="outside"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <i className="ri-notification-snooze-line animate-ring fs-22" />
                  <span className="noti-icon-badge" />
                </button>
                <div
                  className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg"
                  style={{ minHeight: 300 }}
                >
                  <div className="p-2 border-bottom position-relative border-dashed">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="m-0 fs-16 fw-semibold">
                          {" "}
                          Notifications
                        </h6>
                      </div>
                      <div className="col-auto">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-toggle drop-arrow-none link-dark"
                            data-bs-toggle="dropdown"
                            data-bs-offset="0,15"
                            aria-expanded="false"
                          >
                            <i className="ri-settings-2-line fs-22 align-middle" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              Mark as Read
                            </a>

                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              Delete All
                            </a>

                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              Do not Disturb
                            </a>

                            <a
                              href="javascript:void(0);"
                              className="dropdown-item"
                            >
                              Other Settings
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="position-relative rounded-0"
                    style={{ maxHeight: 300 }}
                    data-simplebar=""
                  >
                    <div
                      className="dropdown-item notification-item py-2 text-wrap active"
                      id="notification-1"
                    >
                      <span className="d-flex align-items-center">
                        <span className="me-3 position-relative flex-shrink-0">
                          <img
                            src="assets/images/users/avatar-2.jpg"
                            className="avatar-lg rounded-circle"
                            alt=""
                          />
                        </span>
                        <span className="flex-grow-1 text-muted">
                          <span className="fw-medium text-body">
                            Glady Haid
                          </span>{" "}
                          commented on{" "}
                          <span className="fw-medium text-body">
                            Arclon admin status
                          </span>
                          <br />
                          <span className="fs-12">25m ago</span>
                        </span>
                        <span className="notification-item-close">
                          <button
                            type="button"
                            className="btn btn-ghost-danger rounded-circle btn-sm btn-icon"
                            data-dismissible="#notification-1"
                          >
                            <i className="ri-close-line fs-16" />
                          </button>
                        </span>
                      </span>
                    </div>

                    <div
                      className="dropdown-item notification-item py-2 text-wrap"
                      id="notification-2"
                    >
                      <span className="d-flex align-items-center">
                        <span className="me-3 position-relative flex-shrink-0">
                          <img
                            src="assets/images/users/avatar-4.jpg"
                            className="avatar-lg rounded-circle"
                            alt=""
                          />
                        </span>
                        <span className="flex-grow-1 text-muted">
                          <span className="fw-medium text-body">
                            Tommy Berry
                          </span>{" "}
                          donated <span className="text-success">100.00</span>{" "}
                          for{" "}
                          <span className="fw-medium text-body">
                            Carbon removal program
                          </span>
                          <br />
                          <span className="fs-12">58m ago</span>
                        </span>
                        <span className="notification-item-close">
                          <button
                            type="button"
                            className="btn btn-ghost-danger rounded-circle btn-sm btn-icon"
                            data-dismissible="#notification-2"
                          >
                            <i className="ri-close-line fs-16" />
                          </button>
                        </span>
                      </span>
                    </div>

                    <div
                      className="dropdown-item notification-item py-2 text-wrap"
                      id="notification-3"
                    >
                      <span className="d-flex align-items-center">
                        <div className="avatar-lg flex-shrink-0 me-3">
                          <span className="avatar-title bg-success-subtle text-success rounded-circle fs-22">
                            <iconify-icon icon="solar:wallet-money-bold-duotone" />
                          </span>
                        </div>
                        <span className="flex-grow-1 text-muted">
                          You withdraw a{" "}
                          <span className="fw-medium text-body">500</span> by{" "}
                          <span className="fw-medium text-body">
                            New York ATM
                          </span>
                          <br />
                          <span className="fs-12">2h ago</span>
                        </span>
                        <span className="notification-item-close">
                          <button
                            type="button"
                            className="btn btn-ghost-danger rounded-circle btn-sm btn-icon"
                            data-dismissible="#notification-3"
                          >
                            <i className="ri-close-line fs-16" />
                          </button>
                        </span>
                      </span>
                    </div>

                    <div
                      className="dropdown-item notification-item py-2 text-wrap"
                      id="notification-4"
                    >
                      <span className="d-flex align-items-center">
                        <span className="me-3 position-relative flex-shrink-0">
                          <img
                            src="assets/images/users/avatar-7.jpg"
                            className="avatar-lg rounded-circle"
                            alt=""
                          />
                        </span>
                        <span className="flex-grow-1 text-muted">
                          <span className="fw-medium text-body">
                            Richard Allen
                          </span>{" "}
                          followed you in
                          <span className="fw-medium text-body">Facebook</span>
                          <br />
                          <span className="fs-12">3h ago</span>
                        </span>
                        <span className="notification-item-close">
                          <button
                            type="button"
                            className="btn btn-ghost-danger rounded-circle btn-sm btn-icon"
                            data-dismissible="#notification-4"
                          >
                            <i className="ri-close-line fs-16" />
                          </button>
                        </span>
                      </span>
                    </div>

                    <div
                      className="dropdown-item notification-item py-2 text-wrap"
                      id="notification-5"
                    >
                      <span className="d-flex align-items-center">
                        <span className="me-3 position-relative flex-shrink-0">
                          <img
                            src="assets/images/users/avatar-10.jpg"
                            className="avatar-lg rounded-circle"
                            alt=""
                          />
                        </span>
                        <span className="flex-grow-1 text-muted">
                          <span className="fw-medium text-body">
                            Victor Collier
                          </span>{" "}
                          liked you recent photo in{" "}
                          <span className="fw-medium text-body">Instagram</span>
                          <br />
                          <span className="fs-12">10h ago</span>
                        </span>
                        <span className="notification-item-close">
                          <button
                            type="button"
                            className="btn btn-ghost-danger rounded-circle btn-sm btn-icon"
                            data-dismissible="#notification-5"
                          >
                            <i className="ri-close-line fs-16" />
                          </button>
                        </span>
                      </span>
                    </div>
                  </div>
                  {/* All*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item notification-item text-center text-reset text-decoration-underline fw-bold notify-item border-top border-light py-2"
                  >
                    View All
                  </a>
                </div>
              </div>
            </div>

            <div className="topbar-item d-none d-sm-flex">
              <div className="dropdown">
                <button
                  className="topbar-link dropdown-toggle drop-arrow-none"
                  data-bs-toggle="dropdown"
                  data-bs-offset="0,18"
                  type="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <i className="ri-apps-2-add-line fs-22" />
                </button>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-lg p-0">
                  <div className="p-2">
                    <div className="row g-0">
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img
                            src="assets/images/brands/slack.svg"
                            alt="slack"
                          />
                          <span>Slack</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img
                            src="assets/images/brands/gitlab.svg"
                            alt="Github"
                          />
                          <span>Gitlab</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img
                            src="assets/images/brands/dribbble.svg"
                            alt="dribbble"
                          />
                          <span>Dribbble</span>
                        </a>
                      </div>
                    </div>
                    <div className="row g-0">
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img
                            src="assets/images/brands/bitbucket.svg"
                            alt="bitbucket"
                          />
                          <span>Bitbucket</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img
                            src="assets/images/brands/dropbox.svg"
                            alt="dropbox"
                          />
                          <span>Dropbox</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img
                            src="assets/images/brands/google-cloud.svg"
                            alt="G Suite"
                          />
                          <span>G Cloud</span>
                        </a>
                      </div>
                    </div>{" "}
                    <div className="row g-0">
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img
                            src="assets/images/brands/aws.svg"
                            alt="bitbucket"
                          />
                          <span>AWS</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img
                            src="assets/images/brands/digital-ocean.svg"
                            alt="dropbox"
                          />
                          <span>Server</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img
                            src="assets/images/brands/bootstrap.svg"
                            alt="G Suite"
                          />
                          <span>Bootstrap</span>
                        </a>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="topbar-item d-none d-sm-flex">
              <button
                className="topbar-link"
                data-bs-toggle="offcanvas"
                data-bs-target="#theme-settings-offcanvas"
                type="button"
              >
                <i className="ri-settings-4-line fs-22" />
              </button>
            </div>

            <div className="topbar-item d-none d-sm-flex">
              <button
                className="topbar-link"
                id="light-dark-mode"
                type="button"
              >
                <i className="ri-moon-line light-mode-icon fs-22" />
                <i className="ri-sun-line dark-mode-icon fs-22" />
              </button>
            </div>

            <div className="topbar-item nav-user">
              <div className="dropdown">
                <a
                  className="topbar-link dropdown-toggle drop-arrow-none px-2"
                  data-bs-toggle="dropdown"
                  data-bs-offset="0,19"
                  type="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/users/avatar-1.jpg"
                    width={32}
                    className="rounded-circle me-lg-2 d-flex"
                    alt="user-image"
                  />
                  <span className="d-lg-flex flex-column gap-1 d-none">
                    <h5 className="my-0">Tom Werner</h5>
                  </span>
                  <i className="ri-arrow-down-s-line d-none d-lg-block align-middle ms-1" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <div className="dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome !</h6>
                  </div>

                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="ri-account-circle-line me-1 fs-16 align-middle" />
                    <span className="align-middle">My Account</span>
                  </a>

                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="ri-wallet-3-line me-1 fs-16 align-middle" />
                    <span className="align-middle">
                      Wallet : <span className="fw-semibold">89.25k</span>
                    </span>
                  </a>

                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="ri-settings-2-line me-1 fs-16 align-middle" />
                    <span className="align-middle">Settings</span>
                  </a>

                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="ri-question-line me-1 fs-16 align-middle" />
                    <span className="align-middle">Support</span>
                  </a>
                  <div className="dropdown-divider" />

                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="ri-lock-line me-1 fs-16 align-middle" />
                    <span className="align-middle">Lock Screen</span>
                  </a>
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item active fw-semibold text-danger"
                  >
                    <i className="ri-logout-box-line me-1 fs-16 align-middle" />
                    <span className="align-middle">Sign Out</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        class="modal fade"
        id="searchModal"
        tabindex="-1"
        aria-labelledby="searchModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <form>
              <div
                class="px-3 py-2 d-flex flex-row align-items-center"
                id="top-search"
              >
                <i class="ri-search-line fs-22"></i>
                <input
                  type="search"
                  class="form-control bg-transparent fs-16 border-0"
                  id="search-modal-input"
                  placeholder="Search for actions, people,"
                />
                <button
                  type="submit"
                  class="btn p-0"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  [esc]
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Wrapper;
