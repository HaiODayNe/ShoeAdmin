import Wrapper from "./wrapper"
import Offcanvas from "./offcanvas";
const Email = () => {
    return (<div >
        <Wrapper />
<div className="page-content">
  <div className="page-container">
    <div className="d-flex gap-2">
      <div className="card email-sidebar">
        <div
          className="offcanvas-xxl offcanvas-start"
          tabIndex={-1}
          id="email-sidebar"
          aria-labelledby="email-sidebarLabel"
        >
          <div className="h-100" data-simplebar="">
            <div className="card-body">
              <div className="d-flex justify-content-between gap-2 align-items-center mb-2">
                <button
                  type="button"
                  className="btn btn-danger fw-medium w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#email-compose-modal"
                >
                  Compose
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-icon btn-soft-danger ms-auto d-xl-none"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#email-sidebar"
                  aria-label="Close"
                >
                  <i className="ri-close-line" />
                </button>
              </div>
              <div className="email-menu-list d-flex flex-column">
                <a href="javascript: void(0);" className="active">
                  <iconify-icon
                    icon="solar:inbox-outline"
                    className="me-2 fs-18 text-muted"
                  />
                  <span>Inbox</span>
                  <span className="badge bg-danger-subtle fs-12 text-danger ms-auto">
                    21
                  </span>
                </a>
                <a href="javascript: void(0);">
                  <iconify-icon
                    icon="solar:map-arrow-right-outline"
                    className="me-2 fs-18 text-muted"
                  />
                  <span>Sent</span>
                </a>
                <a href="javascript: void(0);">
                  <iconify-icon
                    icon="solar:star-outline"
                    className="me-2 fs-18 text-muted"
                  />
                  <span>Starred</span>
                </a>
                <a href="javascript: void(0);">
                  <iconify-icon
                    icon="solar:clock-circle-outline"
                    className="me-2 fs-18 text-muted"
                  />
                  <span>Scheduled</span>
                </a>
                <a href="javascript: void(0);">
                  <iconify-icon
                    icon="solar:clapperboard-edit-outline"
                    className="me-2 fs-18 text-muted"
                  />
                  <span>Draft</span>
                </a>
              </div>
            </div>
            <div className="card-body border-top border-light">
              <a
                href="#"
                className="btn-link d-flex align-items-center text-muted fw-bold fs-12 text-uppercase mb-0"
                data-bs-toggle="collapse"
                data-bs-target="#other"
                aria-expanded="false"
                aria-controls="other"
              >
                Other <i className="ri-arrow-down-s-line ms-auto" />
              </a>
              <div id="other" className="collapse show">
                <div className="email-menu-list d-flex flex-column mt-2">
                  <a href="javascript: void(0);">
                    <iconify-icon
                      icon="solar:mailbox-outline"
                      className="me-2 fs-18 text-muted"
                    />
                    <span>All Mail</span>
                  </a>
                  <a href="javascript: void(0);">
                    <iconify-icon
                      icon="solar:trash-bin-trash-outline"
                      className="me-2 fs-18 text-muted"
                    />
                    <span>Trash</span>
                  </a>
                  <a href="javascript: void(0);">
                    <iconify-icon
                      icon="solar:info-square-outline"
                      className="me-2 fs-18 text-muted"
                    />
                    <span>Spam</span>
                  </a>
                  <a href="javascript: void(0);">
                    <iconify-icon
                      icon="solar:chat-round-line-outline"
                      className="me-2 fs-18 text-muted"
                    />
                    <span>Chats</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body border-top border-light">
              <a
                href="#"
                className="btn-link d-flex align-items-center text-muted fw-bold fs-12 text-uppercase mb-0"
                data-bs-toggle="collapse"
                data-bs-target="#labels"
                aria-expanded="false"
                aria-controls="labels"
              >
                Labels <i className="ri-arrow-down-s-line ms-auto" />
              </a>
              <div id="labels" className="collapse show">
                <div className="email-menu-list d-flex flex-column mt-2">
                  <a href="javascript: void(0);">
                    <iconify-icon
                      icon="solar:bolt-circle-bold-duotone"
                      className="text-success fs-16 me-2"
                    />
                    <span>Personal</span>
                  </a>
                  <a href="javascript: void(0);">
                    <iconify-icon
                      icon="solar:bolt-circle-bold-duotone"
                      className="text-danger fs-16 me-2"
                    />
                    <span>Client</span>
                  </a>
                  <a href="javascript: void(0);">
                    <iconify-icon
                      icon="solar:bolt-circle-bold-duotone"
                      className="text-info fs-16 me-2"
                    />
                    <span>Marketing</span>
                  </a>
                  <a href="javascript: void(0);">
                    <iconify-icon
                      icon="solar:bolt-circle-bold-duotone"
                      className="text-secondary fs-16 me-2"
                    />
                    <span>Office</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow-1 card">
        <div className="h-100">
          <div className="card-body py-2">
            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                className="btn btn-light d-xxl-none d-flex p-1"
                data-bs-toggle="offcanvas"
                data-bs-target="#email-sidebar"
                aria-controls="email-sidebar"
              >
                <i className="ri-menu-2-line fs-17" />
              </button>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault"
                />
              </div>
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-sm btn-icon btn-ghost-light text-body rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  data-bs-trigger="hover"
                  data-bs-placement="top"
                  data-bs-title="<span class='fs-12'>Mark as read</span>"
                >
                  <i className="ri-mail-open-line fs-18" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-icon btn-ghost-light text-body rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  data-bs-trigger="hover"
                  data-bs-placement="top"
                  data-bs-title="<span class='fs-12'>Archive</span>"
                >
                  <i className="ri-inbox-archive-line fs-18" />
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-icon btn-ghost-light text-body rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  data-bs-trigger="hover"
                  data-bs-placement="top"
                  data-bs-title="<span class='fs-12'>Delete</span>"
                >
                  <i className="ri-delete-bin-2-line fs-18" />
                </button>
                <button
                  type="button"
                  className="btn btn-icon btn-sm btn-ghost-light text-body rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  data-bs-trigger="hover"
                  data-bs-placement="top"
                  data-bs-title="<span class='fs-12'>Report spam</span>"
                >
                  <i className="ri-spam-line fs-18" />
                </button>
              </div>
              <div className="ms-auto d-xl-flex d-none">
                <div className="app-search">
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Search mail..."
                  />
                  <i className="ri-search-line fs-18 app-search-icon text-muted" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-top border-light">
            <div className="table-responsive">
              <table className="table table-hover mail-list mb-0">
                <tbody>
                  <tr className="position-relative">
                    <td className="ps-3">
                      <input
                        className="form-check-input position-relative z-2"
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                        <i className="ri-star-line" />
                      </button>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/images/users/avatar-2.jpg"
                          alt="user avatar"
                          className="avatar-xs rounded-circle"
                        />
                        <h5 className="fs-14 mb-0 fw-medium">
                          <a href="#!" className="link-reset">
                            George Thomas
                          </a>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <a
                        data-bs-toggle="offcanvas"
                        href="#email-details-modal"
                        role="button"
                        aria-controls="email-details-modal"
                        className="link-reset fs-14 fw-medium stretched-link"
                      >
                        Request For Information{" "}
                      </a>
                    </td>
                    <td>
                      <div>
                        <span className="fs-14 text-muted mb-0">
                          {" "}
                          I hope you are doing well. I have a small request. Can
                          you please...
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="#!" className="link-reset text-nowrap">
                        &nbsp;{" "}
                      </a>
                    </td>
                    <td>
                      <p className="fs-12 text-muted mb-0 text-end">
                        Jan 5, 3:45 PM
                      </p>
                    </td>
                    <td className="pe-3">
                      <iconify-icon
                        icon="solar:bolt-circle-bold-duotone"
                        className="text-danger fs-16 ms-2 align-middle"
                      />
                    </td>
                  </tr>
                  <tr className="position-relative">
                    <td className="ps-3">
                      <input
                        className="form-check-input position-relative z-2"
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                        <i className="ri-star-fill" />
                      </button>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          alt="user avatar"
                          className="avatar-xs rounded-circle"
                        />
                        <h5 className="fs-14 mb-0 fw-medium">
                          <a href="#!" className="link-reset">
                            Robert C. Lane
                          </a>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <a
                        data-bs-toggle="offcanvas"
                        href="#email-details-modal"
                        role="button"
                        aria-controls="email-details-modal"
                        className="link-reset fs-14 fw-medium stretched-link"
                      >
                        Invitation For Meeting{" "}
                      </a>
                    </td>
                    <td>
                      <div>
                        <span className="fs-14 text-muted mb-0">
                          {" "}
                          Good Morning, I hope this email finds you well. I am
                          writing to extra...
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="#!" className="link-reset text-nowrap">
                        {" "}
                        <i className="ri-attachment-2" /> 2{" "}
                      </a>
                    </td>
                    <td>
                      <p className="fs-12 text-muted mb-0 text-end">
                        Mar 23, 7:30 AM
                      </p>
                    </td>
                    <td className="pe-3">
                      <iconify-icon
                        icon="solar:bolt-circle-bold-duotone"
                        className="text-success fs-16 ms-2 align-middle"
                      />
                    </td>
                  </tr>
                  <tr className="position-relative">
                    <td className="ps-3">
                      <input
                        className="form-check-input position-relative z-2"
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                        <i className="ri-star-line" />
                      </button>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/images/brands/dribbble.svg"
                          alt="user avatar"
                          className="avatar-xs rounded-circle"
                        />
                        <h5 className="fs-14 mb-0 fw-medium">
                          <a href="#!" className="link-reset">
                            Dribbble
                          </a>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <a
                        data-bs-toggle="offcanvas"
                        href="#email-details-modal"
                        role="button"
                        aria-controls="email-details-modal"
                        className="link-reset fs-14 fw-medium stretched-link"
                      >
                        Become a successful self-taught designer{" "}
                      </a>
                    </td>
                    <td>
                      <div>
                        <span className="fs-14 text-muted mb-0">
                          {" "}
                          There's no one right way to learn design. In fa...
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="#!" className="link-reset text-nowrap">
                        &nbsp;{" "}
                      </a>
                    </td>
                    <td>
                      <p className="fs-12 text-muted mb-0 text-end">
                        Apr 10, 1:15
                      </p>
                    </td>
                    <td className="pe-3">
                      <iconify-icon
                        icon="solar:bolt-circle-bold-duotone"
                        className="text-info fs-16 ms-2 align-middle"
                      />
                    </td>
                  </tr>
                  <tr className="position-relative">
                    <td className="ps-3">
                      <input
                        className="form-check-input position-relative z-2"
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                        <i className="ri-star-fill" />
                      </button>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/images/users/avatar-5.jpg"
                          alt="user avatar"
                          className="avatar-xs rounded-circle"
                        />
                        <h5 className="fs-14 mb-0 fw-medium">
                          <a href="#!" className="link-reset">
                            Darren C. Gallimore
                          </a>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <a
                        data-bs-toggle="offcanvas"
                        href="#email-details-modal"
                        role="button"
                        aria-controls="email-details-modal"
                        className="link-reset fs-14 fw-medium stretched-link"
                      >
                        Holiday Notice
                      </a>
                    </td>
                    <td>
                      <div>
                        <span className="fs-14 text-muted mb-0">
                          {" "}
                          Good Evening, I hope you are doing well. I have a
                          small request.
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="#!" className="link-reset text-nowrap">
                        &nbsp;{" "}
                      </a>
                    </td>
                    <td>
                      <p className="fs-12 text-muted mb-0 text-end">
                        May 8, 9:45 PM
                      </p>
                    </td>
                    <td className="pe-3"></td>
                  </tr>
                  <tr className="position-relative">
                    <td className="ps-3">
                      <input
                        className="form-check-input position-relative z-2"
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                        <i className="ri-star-line" />
                      </button>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/images/users/avatar-9.jpg"
                          alt="user avatar"
                          className="avatar-xs rounded-circle"
                        />
                        <h5 className="fs-14 mb-0 fw-medium">
                          <a href="#!" className="link-reset">
                            Mike A. Bell
                          </a>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <a
                        data-bs-toggle="offcanvas"
                        href="#email-details-modal"
                        role="button"
                        aria-controls="email-details-modal"
                        className="link-reset fs-14 fw-medium stretched-link"
                      >
                        Offer Letter
                      </a>
                    </td>
                    <td>
                      <div>
                        <span className="fs-14 text-muted mb-0">
                          {" "}
                          Thank you for applying. I hope you are doing well. I
                          have a small.
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="#!" className="link-reset text-nowrap">
                        &nbsp;{" "}
                      </a>
                    </td>
                    <td>
                      <p className="fs-12 text-muted mb-0 text-end">
                        Jun 16, 6:00 AM
                      </p>
                    </td>
                    <td className="pe-3">
                      <iconify-icon
                        icon="solar:bolt-circle-bold-duotone"
                        className="text-secondary fs-16 ms-2 align-middle"
                      />
                    </td>
                  </tr>
                  <tr className="position-relative">
                    <td className="ps-3">
                      <input
                        className="form-check-input position-relative z-2"
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                        <i className="ri-star-fill" />
                      </button>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/images/users/avatar-6.jpg"
                          alt="user avatar"
                          className="avatar-xs rounded-circle"
                        />
                        <h5 className="fs-14 mb-0 fw-medium">
                          <a href="#!" className="link-reset">
                            Bennett C. Rice
                          </a>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <a
                        data-bs-toggle="offcanvas"
                        href="#email-details-modal"
                        role="button"
                        aria-controls="email-details-modal"
                        className="link-reset fs-14 fw-medium stretched-link"
                      >
                        Apology Letter
                      </a>
                    </td>
                    <td>
                      <div>
                        <span className="fs-14 text-muted mb-0">
                          {" "}
                          I hope you are doing well. I have a small request. Can
                          you please
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="#!" className="link-reset text-nowrap">
                        {" "}
                        <i className="ri-attachment-2" /> 4{" "}
                      </a>
                    </td>
                    <td>
                      <p className="fs-12 text-muted mb-0 text-end">
                        Jun 16, 6:00 AM
                      </p>
                    </td>
                    <td className="pe-3"></td>
                  </tr>
                  <tr className="position-relative">
                    <td className="ps-3">
                      <input
                        className="form-check-input position-relative z-2"
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                        <i className="ri-star-line" />
                      </button>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/images/brands/gitlab.svg"
                          alt="user avatar"
                          className="avatar-xs rounded-circle"
                        />
                        <h5 className="fs-14 mb-0 fw-medium">
                          <a href="#!" className="link-reset">
                            John J. Bowser
                          </a>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <a
                        data-bs-toggle="offcanvas"
                        href="#email-details-modal"
                        role="button"
                        aria-controls="email-details-modal"
                        className="link-reset fs-14 fw-medium stretched-link"
                      >
                        How to get started on Gitlab
                      </a>
                    </td>
                    <td>
                      <div>
                        <span className="fs-14 text-muted mb-0">
                          {" "}
                          We know setting off on a freelancing journey can feel
                          intim...
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="#!" className="link-reset text-nowrap">
                        {" "}
                        <i className="ri-attachment-2" /> 3{" "}
                      </a>
                    </td>
                    <td>
                      <p className="fs-12 text-muted mb-0 text-end">
                        Aug 22, 2:35 AM
                      </p>
                    </td>
                    <td className="pe-3"></td>
                  </tr>
                  <tr className="position-relative">
                    <td className="ps-3">
                      <input
                        className="form-check-input position-relative z-2"
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                        <i className="ri-star-line" />
                      </button>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/images/users/avatar-8.jpg"
                          alt="user avatar"
                          className="avatar-xs rounded-circle"
                        />
                        <h5 className="fs-14 mb-0 fw-medium">
                          <a href="#!" className="link-reset">
                            Jill N. Neal
                          </a>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <a
                        data-bs-toggle="offcanvas"
                        href="#email-details-modal"
                        role="button"
                        aria-controls="email-details-modal"
                        className="link-reset fs-14 fw-medium stretched-link"
                      >
                        Apply For Executive Position
                      </a>
                    </td>
                    <td>
                      <div>
                        <span className="fs-14 text-muted mb-0">
                          {" "}
                          I am writing to express my keen interest in the
                          Executive Po...
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="#!" className="link-reset text-nowrap">
                        &nbsp;{" "}
                      </a>
                    </td>
                    <td>
                      <p className="fs-12 text-muted mb-0 text-end">
                        Aug 22, 2:35 AM
                      </p>
                    </td>
                    <td className="pe-3">
                      <iconify-icon
                        icon="solar:bolt-circle-bold-duotone"
                        className="text-success fs-16 ms-2 align-middle"
                      />
                    </td>
                  </tr>
                  <tr className="position-relative">
                    <td className="ps-3">
                      <input
                        className="form-check-input position-relative z-2"
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                        <i className="ri-star-line" />
                      </button>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/images/brands/instagram.svg"
                          alt="user avatar"
                          className="avatar-xs rounded-circle"
                        />
                        <h5 className="fs-14 mb-0 fw-medium">
                          <a href="#!" className="link-reset">
                            Instagram
                          </a>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <a
                        data-bs-toggle="offcanvas"
                        href="#email-details-modal"
                        role="button"
                        aria-controls="email-details-modal"
                        className="link-reset fs-14 fw-medium stretched-link"
                      >
                        You have received 2 new followers
                      </a>
                    </td>
                    <td>
                      <div>
                        <span className="fs-14 text-muted mb-0">
                          {" "}
                          2 new followers, 1 new collected project, and more
                          at...
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="#!" className="link-reset text-nowrap">
                        &nbsp;{" "}
                      </a>
                    </td>
                    <td>
                      <p className="fs-12 text-muted mb-0 text-end">
                        Oct 31, 8:00 AM
                      </p>
                    </td>
                    <td className="pe-3">
                      <iconify-icon
                        icon="solar:bolt-circle-bold-duotone"
                        className="text-info fs-16 ms-2 align-middle"
                      />
                    </td>
                  </tr>
                  <tr className="position-relative">
                    <td className="ps-3">
                      <input
                        className="form-check-input position-relative z-2"
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                        <i className="ri-star-line" />
                      </button>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/images/brands/amazon.svg"
                          alt="user avatar"
                          className="avatar-xs rounded-circle"
                        />
                        <h5 className="fs-14 mb-0 fw-medium">
                          <a href="#!" className="link-reset">
                            Amazon
                          </a>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <a
                        data-bs-toggle="offcanvas"
                        href="#email-details-modal"
                        role="button"
                        aria-controls="email-details-modal"
                        className="link-reset fs-14 fw-medium stretched-link"
                      >
                        Your order is shipped
                      </a>
                    </td>
                    <td>
                      <div>
                        <span className="fs-14 text-muted mb-0">
                          {" "}
                          Your order is on the way with tracking...
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="#!" className="link-reset text-nowrap">
                        {" "}
                        <i className="ri-attachment-2" /> 1{" "}
                      </a>
                    </td>
                    <td>
                      <p className="fs-12 text-muted mb-0 text-end">
                        Nov 19, 10:10 PM
                      </p>
                    </td>
                    <td className="pe-3">
                      <iconify-icon
                        icon="solar:bolt-circle-bold-duotone"
                        className="text-success fs-16 ms-2 align-middle"
                      />
                    </td>
                  </tr>
                  <tr className="position-relative">
                    <td className="ps-3">
                      <input
                        className="form-check-input position-relative z-2"
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                        <i className="ri-star-fill" />
                      </button>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/images/users/avatar-7.jpg"
                          alt="user avatar"
                          className="avatar-xs rounded-circle"
                        />
                        <h5 className="fs-14 mb-0 fw-medium">
                          <a href="#!" className="link-reset">
                            Alfredo D. Rico
                          </a>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <a
                        data-bs-toggle="offcanvas"
                        href="#email-details-modal"
                        role="button"
                        aria-controls="email-details-modal"
                        className="link-reset fs-14 fw-medium stretched-link"
                      >
                        Class schedule
                      </a>
                    </td>
                    <td>
                      <div>
                        <span className="fs-14 text-muted mb-0">
                          {" "}
                          Your online class will be held on Saturday at 2:30 pm
                          Bangladesh.
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="#!" className="link-reset text-nowrap">
                        &nbsp;{" "}
                      </a>
                    </td>
                    <td>
                      <p className="fs-12 text-muted mb-0 text-end">
                        Dec 25, 12:30 PM
                      </p>
                    </td>
                    <td className="pe-3">
                      <iconify-icon
                        icon="solar:bolt-circle-bold-duotone"
                        className="text-secondary fs-16 ms-2 align-middle"
                      />
                    </td>
                  </tr>
                  <tr className="position-relative">
                    <td className="ps-3">
                      <input
                        className="form-check-input position-relative z-2"
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                        <i className="ri-star-line" />
                      </button>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/images/users/avatar-4.jpg"
                          alt="user avatar"
                          className="avatar-xs rounded-circle"
                        />
                        <h5 className="fs-14 mb-0 fw-medium">
                          <a href="#!" className="link-reset">
                            Vernon B. Rutter
                          </a>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <a
                        data-bs-toggle="offcanvas"
                        href="#email-details-modal"
                        role="button"
                        aria-controls="email-details-modal"
                        className="link-reset fs-14 fw-medium stretched-link"
                      >
                        Invitation to attend our Exclusive Webinar
                      </a>
                    </td>
                    <td>
                      <div>
                        <span className="fs-14 text-muted mb-0">
                          {" "}
                          An exclusive webinar will be held on 23 January...
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="#!" className="link-reset text-nowrap">
                        &nbsp;{" "}
                      </a>
                    </td>
                    <td>
                      <p className="fs-12 text-muted mb-0 text-end">
                        Jan 30, 4:50 AM
                      </p>
                    </td>
                    <td className="pe-3"></td>
                  </tr>
                  <tr className="position-relative">
                    <td className="ps-3">
                      <input
                        className="form-check-input position-relative z-2"
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                        <i className="ri-star-fill" />
                      </button>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/images/brands/digital-ocean.svg"
                          alt="user avatar"
                          className="avatar-xs rounded-circle"
                        />
                        <h5 className="fs-14 mb-0 fw-medium">
                          <a href="#!" className="link-reset">
                            Digital Ocean
                          </a>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <a
                        data-bs-toggle="offcanvas"
                        href="#email-details-modal"
                        role="button"
                        aria-controls="email-details-modal"
                        className="link-reset fs-14 fw-medium stretched-link"
                      >
                        Update to Discord's Policies
                      </a>
                    </td>
                    <td>
                      <div>
                        <span className="fs-14 text-muted mb-0">
                          {" "}
                          Hey! we wanted to let you know that we are updating
                          our Te...
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="#!" className="link-reset text-nowrap">
                        &nbsp;{" "}
                      </a>
                    </td>
                    <td>
                      <p className="fs-12 text-muted mb-0 text-end">
                        Feb 9, 9:05 PM
                      </p>
                    </td>
                    <td className="pe-3">
                      <iconify-icon
                        icon="solar:bolt-circle-bold-duotone"
                        className="text-danger fs-16 ms-2 align-middle"
                      />
                    </td>
                  </tr>
                  <tr className="position-relative">
                    <td className="ps-3">
                      <input
                        className="form-check-input position-relative z-2"
                        type="checkbox"
                      />
                    </td>
                    <td>
                      <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                        <i className="ri-star-fill" />
                      </button>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src="assets/images/brands/linkedin.svg"
                          alt="user avatar"
                          className="avatar-xs rounded-circle"
                        />
                        <h5 className="fs-14 mb-0 fw-medium">
                          <a href="#!" className="link-reset">
                            Linkedin
                          </a>
                        </h5>
                      </div>
                    </td>
                    <td>
                      <a
                        data-bs-toggle="offcanvas"
                        href="#email-details-modal"
                        role="button"
                        aria-controls="email-details-modal"
                        className="link-reset fs-14 fw-medium stretched-link"
                      >
                        New job similar to UI/UX
                      </a>
                    </td>
                    <td>
                      <div>
                        <span className="fs-14 text-muted mb-0">
                          {" "}
                          Jobs similar to UI/UX Designer at St Trinity Property
                          group and s...
                        </span>
                      </div>
                    </td>
                    <td>
                      <a href="#!" className="link-reset text-nowrap">
                        {" "}
                        <i className="ri-attachment-2" /> 4{" "}
                      </a>
                    </td>
                    <td>
                      <p className="fs-12 text-muted mb-0 text-end">
                        May 17, 3:45 PM
                      </p>
                    </td>
                    <td className="pe-3">
                      <iconify-icon
                        icon="solar:bolt-circle-bold-duotone"
                        className="text-success fs-16 ms-2 align-middle"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Mail Details Modal */}
    <div
      className="offcanvas offcanvas-end w-lg-50"
      tabIndex={-1}
      id="email-details-modal"
      aria-labelledby="email-details-modalLabel"
    >
      <div className="offcanvas-header d-flex flex-wrap gap-2 align-items-start">
        <img
          className="me-2 rounded-circle"
          src="assets/images/users/avatar-2.jpg"
          alt="placeholder image"
          height={40}
        />
        <div className="flex-grow-1">
          <h6 className="fs-16 mb-1">Steven Smith</h6>
          <p className="text-muted mb-0">From: jonathan@domain.com</p>
        </div>
        <div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
      </div>
      <div className="offcanvas-body">
        <h5 className="fs-18">
          Your elite author Graphic Optimization reward is ready!
        </h5>
        <hr />
        <p>Hi Coderthemes!</p>
        <p>
          Clicking ‘Order Service’ on the right-hand side of the above page will
          present you with an order page. This service has the following
          Briefing Guidelines that will need to be filled before placing your
          order:
        </p>
        <ol>
          <li>
            Your design preferences (Color, style, shapes, Fonts, others){" "}
          </li>
          <li>Tell me, why is your item different? </li>
          <li>
            Do you want to bring up a specific feature of your item? If yes,
            please tell me
          </li>
          <li>
            Do you have any preference or specific thing you would like to
            change or improve on your item page?{" "}
          </li>
          <li>
            Do you want to include your item's or your provider's logo on the
            page? if yes, please send it to me in vector format (Ai or EPS){" "}
          </li>
          <li>Please provide me with the copy or text to display</li>
        </ol>
        <p>
          Filling in this form with the above information will ensure that they
          will be able to start work quickly.
        </p>
        <p>
          You can complete your order by putting your coupon code into the
          Promotional code box and clicking ‘Apply Coupon’.
        </p>
        <p>
          <b>Best,</b> <br /> Graphic Studio
        </p>
        <hr />
        <h5 className="mb-3 fw-bold">Attachments</h5>
        <div className="row">
          <div className="col-xl-6">
            <div className="card mb-1 shadow-none border border-light">
              <div className="p-2">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <div className="avatar-lg">
                      <span className="avatar-title bg-soft-primary text-primary rounded">
                        .ZIP
                      </span>
                    </div>
                  </div>
                  <div className="col ps-0">
                    <a
                      href="javascript:void(0);"
                      className="text-muted fw-bold"
                    >
                      Arclon-admin-design.zip
                    </a>
                    <p className="mb-0">2.3 MB</p>
                  </div>
                  <div className="col-auto">
                    {/* Button */}
                    <a
                      href="javascript:void(0);"
                      className="btn btn-link btn-lg text-muted"
                    >
                      <i className="ri-download-2-line" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end col */}
          <div className="col-xl-6">
            <div className="card mb-1 shadow-none border border-light">
              <div className="p-2">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <img
                      src="assets/images/brands/amazon.svg"
                      className="avatar-lg rounded"
                      alt="file-image"
                    />
                  </div>
                  <div className="col ps-0">
                    <a
                      href="javascript:void(0);"
                      className="text-muted fw-bold"
                    >
                      Dashboard-design.jpg
                    </a>
                    <p className="mb-0">3.25 MB</p>
                  </div>
                  <div className="col-auto">
                    {/* Button */}
                    <a
                      href="javascript:void(0);"
                      className="btn btn-link btn-lg text-muted"
                    >
                      <i className="ri-download-2-line" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end col */}
        </div>
      </div>
      <div className="offcanvas-footer gap-1 p-2 d-flex justify-content-end border-top">
        <button
          className="btn btn-primary"
          data-bs-target="#email-compose-modal"
          data-bs-toggle="modal"
        >
          <i className="align-text-bottom me-1 ri-reply-line" />
          Reply
        </button>
        <button
          className="btn btn-primary"
          data-bs-target="#email-compose-modal"
          data-bs-toggle="modal"
        >
          <i className="align-text-bottom me-1 ri-share-forward-line" />
          Forward
        </button>
      </div>
    </div>
    {/* Mail Compose Modal */}
    <div
      id="email-compose-modal"
      className="modal fade"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="email-compose-modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header py-2">
            <h4 className="modal-title" id="email-compose-modalLabel">
              New Message
            </h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-2">
                <label htmlFor="msgto" className="form-label">
                  To
                </label>
                <input
                  type="text"
                  id="msgto"
                  className="form-control"
                  placeholder="Example@email.com"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="mailsubject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="mailsubject"
                  className="form-control"
                  placeholder="Your subject"
                />
              </div>
              <div>
                <label className="form-label">Message</label>
                <div id="mail-compose" style={{ height: 150 }}>
                  <p>Writing something...</p>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer py-2">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Send Message
            </button>
            <button
              type="button"
              className="btn btn-light"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
        {/* /.modal-content */}
      </div>
      {/* /.modal-dialog */}
    </div>
    {/* /.modal */}
  </div>{" "}
  {/* container */}
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
</div>

 <Offcanvas />

    </div>
    )
}
export default Email;