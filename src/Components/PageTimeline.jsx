import Wrapper from "./wrapper"
import Offcanvas from "./offcanvas";
const PageTimeline = () => {
    return (<div >
        <Wrapper />
   <div className="page-content">
  <div className="page-container">
    <div className="row justify-content-center">
      <div className="col-xxl-10">
        <div className="timeline" dir="ltr">
          <div className="timeline-show mb-3 text-center">
            <h5 className="m-0 time-show-name">Today</h5>
          </div>
          <div className="timeline-lg-item timeline-item-left">
            <div className="timeline-desk">
              <div className="timeline-box">
                <span className="arrow-alt shadow-none" />
                <span className="timeline-icon avatar-sm">
                  <span className="avatar-title bg-light rounded-circle">
                    <iconify-icon
                      icon="solar:sticker-smile-circle-2-bold-duotone"
                      className="text-success fs-28"
                    />
                  </span>
                </span>
                <div>
                  <div className="d-flex justify-content-between">
                    <h4 className="mb-2 fw-semibold fs-16">
                      Completed UX design project for our client
                    </h4>
                    <p className="mb-0 text-muted">1 hr ago</p>
                  </div>
                  <p className="mb-1">
                    <i className="ti ti-checks text-success me-1 fs-16" />
                    Successfully met all project goals and objectives within the
                    stipulated timeline.
                  </p>
                  <p className="mb-3">
                    <i className="ti ti-checks text-success me-1 fs-16" />
                    Delivered high-quality outputs that meet or exceed the
                    expectations of stakeholders.
                  </p>
                  <a
                    href="javascript: void(0);"
                    className="btn btn-sm btn-light"
                  >
                    👍 89
                  </a>
                  <a
                    href="javascript: void(0);"
                    className="btn btn-sm btn-light"
                  >
                    ❤️ 102
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-lg-item timeline-item-right">
            <div className="timeline-desk">
              <div className="timeline-box">
                <span className="arrow shadow-none" />
                <span className="timeline-icon avatar-sm">
                  <span className="avatar-title bg-light rounded-circle">
                    <iconify-icon
                      icon="solar:sticker-smile-circle-2-bold-duotone"
                      className="text-success fs-28"
                    />
                  </span>
                </span>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="assets/images/users/avatar-10.jpg"
                    alt=""
                    className="avatar-lg rounded-circle border border-light border-2"
                  />
                  <div>
                    <p className="fw-medium fs-15 mb-0">Sara Johnson</p>
                    <p className="mb-0 text-muted">srajhnson@yeti.com</p>
                  </div>
                  <div className="ms-auto">
                    <p className="mb-0 text-muted">2hr Ago</p>
                  </div>
                </div>
                <h4 className="my-3 fw-semibold fs-16">
                  Join as a full stack developer
                </h4>
                <div className="mb-2">
                  <span className="badge text-bg-light fw-medium px-2 py-1 fs-12">
                    html
                  </span>
                  <span className="badge text-bg-light fw-medium px-2 py-1 fs-12">
                    CSS
                  </span>
                  <span className="badge text-bg-light fw-medium px-2 py-1 fs-12">
                    JavaScript
                  </span>
                  <span className="badge text-bg-light fw-medium px-2 py-1 fs-12">
                    NodeJS
                  </span>
                  <span className="badge text-bg-light fw-medium px-2 py-1 fs-12">
                    ExpressJS
                  </span>
                  <span className="badge text-bg-light fw-medium px-2 py-1 fs-12">
                    ExpressJS
                  </span>
                  <span className="badge text-bg-light fw-medium px-2 py-1 fs-12">
                    Django
                  </span>
                  <span className="badge text-bg-light fw-medium px-2 py-1 fs-12">
                    MySQL
                  </span>
                  <span className="badge text-bg-light fw-medium px-2 py-1 fs-12 my-1">
                    PostgreSQL
                  </span>
                </div>
                <a href="javascript: void(0);" className="btn btn-sm btn-light">
                  🎉 19
                </a>
                <a href="javascript: void(0);" className="btn btn-sm btn-light">
                  🎆 8
                </a>
              </div>
            </div>
          </div>
          <div className="timeline-lg-item timeline-item-left">
            <div className="timeline-desk">
              <div className="timeline-box">
                <span className="arrow-alt shadow-none" />
                <span className="timeline-icon avatar-sm">
                  <span className="avatar-title bg-light rounded-circle">
                    <iconify-icon
                      icon="solar:sticker-smile-circle-2-bold-duotone"
                      className="text-success fs-28"
                    />
                  </span>
                </span>
                <div>
                  <div className="d-flex justify-content-between">
                    <h4 className="mb-2 fw-semibold fs-16">
                      Started Standing Meeting in Morning!
                    </h4>
                    <p className="mb-0 text-muted">29 Jan, 2025</p>
                  </div>
                  <div className="d-flex flex-wrap align-items-center my-1 gap-1">
                    <div className="avatar-group">
                      <div className="avatar">
                        <img
                          src="assets/images/users/avatar-4.jpg"
                          alt=""
                          className="rounded-circle avatar-sm"
                        />
                      </div>
                      <div className="avatar">
                        <img
                          src="assets/images/users/avatar-5.jpg"
                          alt=""
                          className="rounded-circle avatar-sm"
                        />
                      </div>
                      <div className="avatar">
                        <img
                          src="assets/images/users/avatar-6.jpg"
                          alt=""
                          className="rounded-circle avatar-sm"
                        />
                      </div>
                      <div className="avatar">
                        <img
                          src="assets/images/users/avatar-7.jpg"
                          alt=""
                          className="rounded-circle avatar-sm"
                        />
                      </div>
                      <div className="avatar">
                        <div className="avatar-sm">
                          <span className="avatar-title text-bg-dark fs-18 rounded-circle">
                            <i className="ti ti-plus" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mb-0 ms-1 fs-14">
                      +23 Employee Join Meeting{" "}
                    </p>
                  </div>
                  <p className="mb-0 mt-3 fw-semibold">
                    Topic :{" "}
                    <span className="text-muted fw-medium">
                      New project and admin dashboard
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-lg-item timeline-item-right">
            <div className="timeline-desk">
              <div className="timeline-box">
                <span className="arrow shadow-none" />
                <span className="timeline-icon avatar-sm">
                  <span className="avatar-title bg-light rounded-circle">
                    <iconify-icon
                      icon="solar:sticker-smile-circle-2-bold-duotone"
                      className="text-success fs-28"
                    />
                  </span>
                </span>
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4 className="mb-0 fw-semibold fs-16">
                      {" "}
                      New Admin Release in Bootstrap
                      <span className="badge bg-success-subtle text-success px-2 py-1 fs-11 ms-1">
                        New Release
                      </span>
                    </h4>
                    <p className="mb-0 text-muted">3hr Ago</p>
                  </div>
                  <p>
                    Get started with our company of web components and
                    interactive elements built on top of Bootstrap.
                  </p>
                  <div className="timeline-album mb-3">
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/small/small-7.jpg"
                        alt=""
                        className="rounded-3"
                      />
                    </a>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/small/small-4.jpg"
                        alt=""
                        className="rounded-3"
                      />
                    </a>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/small/small-1.jpg"
                        alt=""
                        className="rounded-3"
                      />
                    </a>
                    <a href="javascript: void(0);">
                      <img
                        src="assets/images/small/small-2.jpg"
                        alt=""
                        className="rounded-3"
                      />
                    </a>
                  </div>
                  <a href="#!" className="btn btn-primary btn-sm">
                    Show More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-lg-item timeline-item-left">
            <div className="timeline-desk">
              <div className="timeline-box">
                <span className="arrow-alt shadow-none" />
                <span className="timeline-icon avatar-sm">
                  <span className="avatar-title bg-light rounded-circle">
                    <iconify-icon
                      icon="solar:sticker-smile-circle-2-bold-duotone"
                      className="text-success fs-28"
                    />
                  </span>
                </span>
                <div>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <img
                      src="assets/images/users/avatar-5.jpg"
                      alt=""
                      className="avatar-lg rounded-circle border border-light border-2"
                    />
                    <div>
                      <h4 className="fw-semibold fs-16 mb-1">
                        {" "}
                        Assigned to serve as the project's director
                      </h4>
                      <span className="text-muted">
                        <small>
                          by{" "}
                          <a
                            href="#!"
                            className="link-dark text-decoration-underline"
                          >
                            John N. Ward.
                          </a>
                        </small>
                      </span>
                    </div>
                    <div className="ms-auto">
                      <p className="mb-0 text-muted">3hr Ago</p>
                    </div>
                  </div>
                  <p className="mb-0">
                    I've come across your posts and found some favorable deals
                    on your page. I've added a load of products to the cart and
                    I don't know the payment options you avail. Also, can you
                    enlighten me about any discount
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-show my-3 text-center">
            <h5 className="m-0 time-show-name">Yesterday</h5>
          </div>
          <div className="timeline-lg-item timeline-item-right">
            <div className="timeline-desk">
              <div className="timeline-box">
                <span className="arrow shadow-none" />
                <span className="timeline-icon avatar-sm">
                  <span className="avatar-title bg-light rounded-circle">
                    <iconify-icon
                      icon="solar:sticker-smile-circle-2-bold-duotone"
                      className="text-success fs-28"
                    />
                  </span>
                </span>
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4 className="mb-0 fs-16 fw-semibold">
                      {" "}
                      We have achieved 5.6k sales in our themes.
                    </h4>
                    <p className="mb-0 text-muted">1day Ago</p>
                  </div>
                  <p className="mb-3">
                    As we celebrate this achievement, we remain focused on our
                    mission to deliver top-notch themes that meet the evolving
                    needs of our users. We are excited about the future and are
                    dedicated to reaching new heights, expanding our offerings,
                    and maintaining the high standards that have earned us this
                    success
                  </p>
                  <a
                    href="javascript: void(0);"
                    className="btn btn-sm btn-light"
                  >
                    👍 1.4k
                  </a>
                  <a
                    href="javascript: void(0);"
                    className="btn btn-sm btn-light"
                  >
                    🎉 2k
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-lg-item timeline-item-left">
            <div className="timeline-desk">
              <div className="timeline-box">
                <span className="arrow-alt shadow-none" />
                <span className="timeline-icon avatar-sm">
                  <span className="avatar-title bg-light rounded-circle">
                    <iconify-icon
                      icon="solar:sticker-smile-circle-2-bold-duotone"
                      className="text-success fs-28"
                    />
                  </span>
                </span>
                <div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="avatar-lg">
                      <span className="avatar-title bg-light rounded-circle">
                        <iconify-icon
                          icon="solar:monitor-bold"
                          className="text-primary fs-28"
                        />
                      </span>
                    </div>
                    <div>
                      <h4 className="mb-0 fs-16 fw-semibold">
                        {" "}
                        Website Launched
                      </h4>
                      <p className="text-muted fw-medium fs-14 mt-1 mb-0">
                        {" "}
                        Name : Admin Template
                      </p>
                    </div>
                  </div>
                  <p className="mb-0 mt-2">
                    Creating a simple Bootstrap website involves using the
                    Bootstrap framework to style and layout your HTML content.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end timeline */}
        </div>{" "}
        {/* end col */}
      </div>
      {/* end row */}
    </div>{" "}
    {/* container */}
  </div>
  {/* Footer Start */}
  <footer className="footer">
    <div className="page-container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start">
          © Arclon - By{" "}
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
  {/* end Footer */}
  {/* ============================================================== */}
  {/* End Page content */}
  {/* ============================================================== */}
</div>
        <Offcanvas />
    </div>
    )
}
export default PageTimeline;