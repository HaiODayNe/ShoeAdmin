import Wrapper from "./wrapper"
import Offcanvas from "./offcanvas";
const Chat = () => {
    return (<div >
        <Wrapper />
   <div className="page-content">
  <div className="page-container">
    <div className="chat d-flex gap-2">
      <div
        className="offcanvas-xxl offcanvas-start"
        tabIndex={-1}
        id="chatUserList"
        aria-labelledby="chatUserListLabel"
      >
        <div
          id="chat-user-list"
          className="card collapse collapse-horizontal show"
        >
          <div className="chat-user-list">
            <div className="card-body py-2 px-3 border-bottom">
              <div className="d-flex align-items-center gap-2 py-1">
                <div className="chat-users">
                  <div className="avatar-lg chat-avatar-online">
                    <img
                      src="assets/images/users/avatar-1.jpg"
                      className="img-fluid rounded-circle"
                      alt="Chris Keller"
                    />
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-0">
                    <a href="#!" className="text-reset lh-base">
                      Tom Werner (You)
                    </a>
                  </h5>
                  <p className="mb-0 fs-13 text-muted">Admin</p>
                </div>
                <div className="dropdown lh-1">
                  <a
                    href="#"
                    className="dropdown-toggle drop-arrow-none card-drop"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <iconify-icon
                      icon="solar:settings-outline"
                      className="align-middle"
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="ti ti-user-plus me-1 fs-17 align-middle" />
                      <span className="align-middle">New Contact</span>
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="ti ti-users-plus me-1 fs-17 align-middle" />
                      <span className="align-middle">New Group</span>
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="ti ti-star me-1 fs-17 align-middle" />
                      <span className="align-middle">Favorites</span>
                    </a>
                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="ti ti-archive me-1 fs-17 align-middle" />
                      <span className="align-middle">Archive Contacts</span>
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  className="flex-grow-0 btn btn-sm btn-icon btn-soft-danger d-xl-none"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#chatUserList"
                  aria-label="Close"
                >
                  <i className="ti ti-x fs-20" />
                </button>
              </div>
            </div>
            {/* Contact list */}
            <div className="d-flex flex-column">
              <div className="px-3 py-2">
                <div className="app-search py-1">
                  <input
                    type="text"
                    className="form-control border-light bg-light bg-opacity-50 rounded-2"
                    placeholder="Search something here..."
                  />
                  <i className="app-search-icon ti ti-search text-muted fs-16" />
                </div>
              </div>
              <div
                className="users-list position-relative list-scroll"
                data-simplebar=""
              >
                <div className="d-flex align-items-center px-3 py-2">
                  <iconify-icon
                    icon="solar:pin-bold-duotone"
                    className="fs-18 text-muted"
                  />
                  <h5 className="mb-0 ms-1 fw-semibold fs-14">Pinned</h5>
                </div>
                {/* end chat-title */}
                <a href="javascript:void(0);" className="text-body d-block">
                  <div className="chat-users">
                    <div className="avatar-md chat-avatar-offline">
                      <img
                        src="assets/images/users/avatar-2.jpg"
                        className="img-fluid rounded-circle"
                        alt="Brandon Smith"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="m-0">
                        <span className="float-end text-muted fs-12">
                          5:45am
                        </span>
                        Brandon Smith
                      </h5>
                      <p className="mt-1 mb-0 text-muted lh-1">
                        <span className="w-25 float-end text-end">
                          <span className="badge bg-danger-subtle text-danger">
                            3
                          </span>
                        </span>
                        <span className="w-75 d-inline-block text-truncate overflow-hidden fs-13">
                          How are you today?
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                {/* end chat-user */}
                <a href="javascript:void(0);" className="text-body d-block">
                  <div className="chat-users active">
                    <div className="avatar-md chat-avatar-online">
                      <img
                        src="assets/images/users/avatar-5.jpg"
                        className="img-fluid rounded-circle"
                        alt="James Zavel"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="m-0">
                        <span className="float-end text-muted fs-12">
                          4:30am
                        </span>
                        James Zavel
                      </h5>
                      <p className="mt-1 mb-0 text-muted lh-1">
                        <span className="w-25 text-end float-end text-success">
                          <i className="ti ti-checks" />
                        </span>
                        <span className="w-75 d-inline-block text-primary fw-semibold fs-13">
                          typing...
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                {/* end chat-user */}
                <a href="javascript:void(0);" className="text-body d-block">
                  <div className="chat-users">
                    <div className="avatar-md chat-avatar-online">
                      <img
                        src="assets/images/users/avatar-8.jpg"
                        className="img-fluid rounded-circle"
                        alt="Maria Lopez"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="m-0">
                        <span className="float-end text-muted fs-12">
                          6:12pm
                        </span>
                        Maria Lopez
                      </h5>
                      <p className="mt-1 mb-0 text-muted lh-1">
                        <span className="w-25 float-end text-end">
                          <span className="badge bg-danger-subtle text-danger">
                            1
                          </span>
                        </span>
                        <span className="w-75 d-inline-block text-truncate overflow-hidden fs-13">
                          How are you today?
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                {/* end chat-user */}
                <a href="javascript:void(0);" className="text-body d-block">
                  <div className="chat-users">
                    <div className="avatar-md chat-avatar-offline">
                      <div className="h-100 w-100 rounded-circle bg-info text-white d-flex align-items-center justify-content-center">
                        <span className="fw-semibold">OD</span>
                      </div>
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="m-0">
                        <span className="float-end text-muted fs-12">
                          6:12pm
                        </span>
                        Osen Discussion
                      </h5>
                      <p className="mt-1 mb-0 text-muted lh-1">
                        <span className="w-75 d-inline-block text-truncate overflow-hidden fs-13">
                          JS Developer's Come in office?
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                {/* end chat-user */}
                <div className="d-flex align-items-center px-3 py-2">
                  <iconify-icon
                    icon="solar:chat-line-bold-duotone"
                    className="fs-18 text-muted"
                  />
                  <h5 className="mb-0 ms-1 fw-semibold fs-14">All Messages</h5>
                </div>
                {/* end chat-title */}
                <a href="javascript:void(0);" className="text-body d-block">
                  <div className="chat-users">
                    <div className="avatar-md chat-avatar-online">
                      <img
                        src="assets/images/users/avatar-3.jpg"
                        className="img-fluid rounded-circle"
                        alt="Brandon Smith"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="m-0">
                        <span className="float-end text-muted fs-12">
                          3:40am
                        </span>
                        Eunice Bennett
                      </h5>
                      <p className="mt-1 mb-0 text-muted lh-1">
                        <span className="w-75 d-inline-block text-truncate overflow-hidden fs-13">
                          Please check these design assets
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                {/* end chat-user */}
                <a href="javascript:void(0);" className="text-body d-block">
                  <div className="chat-users">
                    <div className="avatar-md chat-avatar-offline">
                      <div className="h-100 w-100 rounded-circle bg-warning text-white d-flex align-items-center justify-content-center">
                        <i className="ti ti-brand-javascript fs-20" />
                      </div>
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="m-0">
                        <span className="float-end text-muted fs-12">
                          3:30am
                        </span>
                        Javascript Team
                      </h5>
                      <p className="mt-1 mb-0 text-muted lh-1">
                        <span className="w-25 text-end float-end text-muted">
                          <i className="ti ti-check" />
                        </span>
                        <span className="w-75 d-inline-block text-truncate overflow-hidden fs-13">
                          New Project?
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                {/* end chat-user */}
                <a href="javascript:void(0);" className="text-body d-block">
                  <div className="chat-users">
                    <div className="avatar-md chat-avatar-offline">
                      <div className="h-100 w-100 rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center">
                        <i className="ti ti-brand-figma fs-20" />
                      </div>
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="m-0">
                        <span className="float-end text-muted fs-12">
                          3:30am
                        </span>
                        UI Team
                      </h5>
                      <p className="mt-1 mb-0 text-muted lh-1">
                        <span className="w-25 text-end float-end text-muted">
                          <i className="ti ti-checks" />
                        </span>
                        <span className="w-75 d-inline-block text-truncate overflow-hidden fs-13">
                          Project Completed
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                {/* end chat-user */}
                <a href="javascript:void(0);" className="text-body d-block">
                  <div className="chat-users">
                    <div className="avatar-md chat-avatar-offline">
                      <img
                        src="assets/images/users/avatar-4.jpg"
                        className="img-fluid rounded-circle"
                        alt="Brandon Smith"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="m-0">
                        <span className="float-end text-muted fs-12">
                          2:33am
                        </span>
                        Hoyt Bahe
                      </h5>
                      <p className="mt-1 mb-0 text-muted lh-1">
                        <span className="w-25 text-end float-end text-success">
                          <i className="ti ti-checks" />
                        </span>
                        <span className="w-75 d-inline-block text-primary fs-12 fw-semibold">
                          <i className="ti ti-microphone" /> Voice Message
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                {/* end chat-user */}
                <a href="javascript:void(0);" className="text-body d-block">
                  <div className="chat-users">
                    <div className="avatar-md chat-avatar-online">
                      <img
                        src="assets/images/users/avatar-9.jpg"
                        className="img-fluid rounded-circle"
                        alt="James Zavel"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="m-0">
                        <span className="float-end text-muted fs-12">
                          4:35am
                        </span>
                        John Otta
                      </h5>
                      <p className="mt-1 mb-0 text-muted lh-1">
                        <span className="w-25 text-end float-end text-success">
                          <i className="ti ti-checks" />
                        </span>
                        <span className="w-75 d-inline-block fs-13">
                          What next plan ?
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                {/* end chat-user */}
                <a href="javascript:void(0);" className="text-body d-block">
                  <div className="chat-users">
                    <div className="avatar-md chat-avatar-online">
                      <img
                        src="assets/images/users/avatar-6.jpg"
                        className="img-fluid rounded-circle"
                        alt="Brandon Smith"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="m-0">
                        <span className="float-end text-muted fs-12">Tue</span>
                        Louis Moller
                      </h5>
                      <p className="mt-1 mb-0 text-muted lh-1">
                        <span className="w-25 float-end text-end">
                          <span className="badge bg-danger-subtle text-danger">
                            1
                          </span>
                        </span>
                        <span className="w-75 d-inline-block text-truncate overflow-hidden fs-13">
                          Are you free for 15 min?
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                {/* end chat-user */}
                <a href="javascript:void(0);" className="text-body d-block">
                  <div className="chat-users">
                    <div className="avatar-md chat-avatar-offline">
                      <img
                        src="assets/images/users/avatar-7.jpg"
                        className="img-fluid rounded-circle"
                        alt="Brandon Smith"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="m-0">
                        <span className="float-end text-muted fs-12">Tue</span>
                        David Callan
                      </h5>
                      <p className="mt-1 mb-0 text-muted lh-1">
                        <span className="w-25 float-end text-end">
                          <span className="badge bg-danger-subtle text-danger">
                            3
                          </span>
                        </span>
                        <span className="w-75 d-inline-block text-truncate overflow-hidden fs-13">
                          Are you interested in learning?
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                {/* end chat-user */}
                <a href="javascript:void(0);" className="text-body d-block">
                  <div className="chat-users">
                    <div className="avatar-md chat-avatar-online">
                      <img
                        src="assets/images/users/avatar-9.jpg"
                        className="img-fluid rounded-circle"
                        alt="Brandon Smith"
                      />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="m-0">
                        <span className="float-end text-muted fs-12">Fri</span>
                        Sean Lee
                      </h5>
                      <p className="mt-1 mb-0 text-muted lh-1">
                        <span className="w-25 text-end float-end text-muted">
                          <i className="ti ti-checks" />
                        </span>
                        <span className="w-75 d-inline-block text-truncate overflow-hidden fs-13">
                          Howdy?
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                {/* end chat-user */}
                <a href="javascript:void(0);" className="text-body d-block">
                  <div className="chat-users">
                    <div className="avatar-md chat-avatar-offline">
                      <div className="h-100 w-100 rounded-circle bg-primary text-white d-flex align-items-center justify-content-center">
                        <i className="ti ti-brand-react fs-20" />
                      </div>
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="m-0">
                        <span className="float-end text-muted fs-12">Sat</span>
                        React Team
                      </h5>
                      <p className="mt-1 mb-0 text-muted lh-1">
                        <span className="w-25 text-end float-end text-success">
                          <i className="ti ti-checks" />
                        </span>
                        <span className="w-75 d-inline-block text-truncate overflow-hidden fs-13">
                          @jamesZavel Is new React employee
                        </span>
                      </p>
                    </div>
                  </div>
                </a>
                {/* end chat-user */}
              </div>
            </div>
            {/* End Contact list */}
          </div>
        </div>
      </div>
      <div className="card chat-content">
        <div className="card-header py-2 px-3 border-bottom">
          <div className="d-flex align-items-center justify-content-between py-1">
            <div className="d-flex align-items-center gap-2">
              <a
                href="#"
                className="btn btn-sm btn-icon btn-soft-primary d-none d-xl-flex me-2"
                data-bs-toggle="collapse"
                data-bs-target="#chat-user-list"
                aria-expanded="true"
              >
                <i className="ti ti-chevrons-left fs-20" />
              </a>
              <button
                className="btn btn-sm btn-icon btn-ghost-light text-dark d-xl-none d-flex"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#chatUserList"
                aria-controls="chatUserList"
              >
                <i className="ti ti-menu-2 fs-20" />
              </button>
              <img
                src="assets/images/users/avatar-5.jpg"
                className="avatar-lg rounded-circle"
                alt=""
              />
              <div>
                <h5 className="my-0 lh-base">
                  <a href="#" className="text-reset">
                    James Zavel
                  </a>
                </h5>
                <p className="mb-0 text-muted">
                  <small className="ti ti-circle-filled text-success" /> Active
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <a
                href="javascript: void(0);"
                className="btn btn-sm btn-icon btn-ghost-primary d-none d-xl-flex"
                data-bs-toggle="modal"
                data-bs-target="#userCall"
                data-bs-placement="top"
                title="Voice Call"
              >
                <i className="ti ti-phone-call fs-20" />
              </a>
              <a
                href="javascript: void(0);"
                className="btn btn-sm btn-icon btn-ghost-primary d-none d-xl-flex"
                data-bs-toggle="modal"
                data-bs-target="#userVideoCall"
                data-bs-placement="top"
                title="Video Call"
              >
                <i className="ti ti-video fs-20" />
              </a>
              <a
                href="javascript: void(0);"
                className="btn btn-sm btn-icon btn-ghost-primary d-xl-flex"
              >
                <i className="ti ti-info-circle fs-20" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div
            className="chat-scroll p-3"
            data-simplebar=""
            data-apps-chat="messages-scroll-wrapper"
          >
            <ul className="chat-list" data-apps-chat="messages-list">
              <li className="chat-group" id="even-1">
                <img
                  src="assets/images/users/avatar-5.jpg"
                  className="avatar-sm rounded-circle"
                  alt="avatar-5"
                />
                <div className="chat-body">
                  <div>
                    <h6 className="d-inline-flex">James.</h6>
                    <h6 className="d-inline-flex text-muted">10:04pm</h6>
                  </div>
                  <div className="chat-message">
                    <p>Hello! 👋</p>
                    <div className="chat-actions dropdown">
                      <button
                        className="btn btn-sm btn-link link-reset"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-copy fs-14 align-text-top me-1" />
                          Copy Message
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-edit-circle fs-14 align-text-top me-1" />
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-dismissible="#even-1"
                        >
                          <i className="ti ti-trash fs-14 align-text-top me-1" />
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="chat-group odd" id="odd-1">
                <img
                  src="assets/images/users/avatar-1.jpg"
                  className="avatar-sm rounded-circle"
                  alt="avatar-1"
                />
                <div className="chat-body">
                  <div>
                    <h6 className="d-inline-flex">You.</h6>
                    <h6 className="d-inline-flex text-muted">10:05pm</h6>
                  </div>
                  <div className="chat-message">
                    <p>
                      Hey there, how are you doing? Any plans for our upcoming
                      meeting?
                    </p>
                    <div className="chat-actions dropdown">
                      <button
                        className="btn btn-sm btn-link"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-copy fs-14 align-text-top me-1" />
                          Copy Message
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-edit-circle fs-14 align-text-top me-1" />
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-dismissible="#odd-1"
                        >
                          <i className="ti ti-trash fs-14 align-text-top me-1" />
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="chat-group" id="even-2">
                <img
                  src="assets/images/users/avatar-5.jpg"
                  className="avatar-sm rounded-circle"
                  alt="avatar-5"
                />
                <div className="chat-body">
                  <div>
                    <h6 className="d-inline-flex">James.</h6>
                    <h6 className="d-inline-flex text-muted">10:08pm</h6>
                  </div>
                  <div className="chat-message">
                    <p>Sure, everything's good.</p>
                    <div className="chat-actions dropdown">
                      <button
                        className="btn btn-sm btn-link link-reset"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-copy fs-14 align-text-top me-1" />
                          Copy Message
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-edit-circle fs-14 align-text-top me-1" />
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-dismissible="#even-2"
                        >
                          <i className="ti ti-trash fs-14 align-text-top me-1" />
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="chat-group odd" id="odd-2">
                <img
                  src="assets/images/users/avatar-1.jpg"
                  className="avatar-sm rounded-circle"
                  alt="avatar-1"
                />
                <div className="chat-body">
                  <div>
                    <h6 className="d-inline-flex">You.</h6>
                    <h6 className="d-inline-flex text-muted">10:10pm</h6>
                  </div>
                  <div className="chat-message">
                    <p>Fantastic! 👍</p>
                    <div className="chat-actions dropdown">
                      <button
                        className="btn btn-sm btn-link"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-copy fs-14 align-text-top me-1" />
                          Copy Message
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-edit-circle fs-14 align-text-top me-1" />
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-dismissible="#odd-2"
                        >
                          <i className="ti ti-trash fs-14 align-text-top me-1" />
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="chat-group" id="even-3">
                <img
                  src="assets/images/users/avatar-5.jpg"
                  className="avatar-sm rounded-circle"
                  alt="avatar-5"
                />
                <div className="chat-body">
                  <div>
                    <h6 className="d-inline-flex">James.</h6>
                    <h6 className="d-inline-flex text-muted">10:15pm</h6>
                  </div>
                  <div className="chat-message">
                    <p>If you're available, let's schedule it for today.</p>
                    <div className="chat-actions dropdown">
                      <button
                        className="btn btn-sm btn-link link-reset"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-copy fs-14 align-text-top me-1" />
                          Copy Message
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-edit-circle fs-14 align-text-top me-1" />
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-dismissible="#even-3"
                        >
                          <i className="ti ti-trash fs-14 align-text-top me-1" />
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="chat-group odd" id="odd-3">
                <img
                  src="assets/images/users/avatar-1.jpg"
                  className="avatar-sm rounded-circle"
                  alt="avatar-1"
                />
                <div className="chat-body">
                  <div>
                    <h6 className="d-inline-flex">You.</h6>
                    <h6 className="d-inline-flex text-muted">10:16pm</h6>
                  </div>
                  <div className="chat-message">
                    <p>Absolutely! Just give me a heads up if 2pm suits you.</p>
                    <div className="chat-actions dropdown">
                      <button
                        className="btn btn-sm btn-link"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-copy fs-14 align-text-top me-1" />
                          Copy Message
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-edit-circle fs-14 align-text-top me-1" />
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-dismissible="#odd-3"
                        >
                          <i className="ti ti-trash fs-14 align-text-top me-1" />
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="chat-group" id="even-4">
                <img
                  src="assets/images/users/avatar-5.jpg"
                  className="avatar-sm rounded-circle"
                  alt="avatar-5"
                />
                <div className="chat-body">
                  <div>
                    <h6 className="d-inline-flex">James.</h6>
                    <h6 className="d-inline-flex text-muted">10:18pm</h6>
                  </div>
                  <div className="chat-message">
                    <p>
                      Apologies 😔, I've got another meeting at 2pm. Could we
                      possibly shift it to 3pm?
                    </p>
                    <div className="chat-actions dropdown">
                      <button
                        className="btn btn-sm btn-link link-reset"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-copy fs-14 align-text-top me-1" />
                          Copy Message
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-edit-circle fs-14 align-text-top me-1" />
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-dismissible="#even-4"
                        >
                          <i className="ti ti-trash fs-14 align-text-top me-1" />
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="chat-message" id="even-4-1">
                    <p>
                      If you have a few extra minutes, we could also go over the
                      presentation talk format.
                    </p>
                    <div className="chat-actions dropdown">
                      <button
                        className="btn btn-sm btn-link link-reset"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-copy fs-14 align-text-top me-1" />
                          Copy Message
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-edit-circle fs-14 align-text-top me-1" />
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-dismissible="#even-4-1"
                        >
                          <i className="ti ti-trash fs-14 align-text-top me-1" />
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="chat-group odd" id="odd-4">
                <img
                  src="assets/images/users/avatar-1.jpg"
                  className="avatar-sm rounded-circle"
                  alt="avatar-1"
                />
                <div className="chat-body">
                  <div>
                    <h6 className="d-inline-flex">You.</h6>
                    <h6 className="d-inline-flex text-muted">10:19pm</h6>
                  </div>
                  <div className="chat-message">
                    <p>
                      3pm works for me 👍. Absolutely, let's dive into the
                      presentation format. It'd be fantastic to wrap that up
                      today. I'm attaching last year's format and assets here
                      for reference.
                    </p>
                    <div className="chat-actions dropdown">
                      <button
                        className="btn btn-sm btn-link"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="ti ti-dots-vertical" />
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-copy fs-14 align-text-top me-1" />
                          Copy Message
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="ti ti-edit-circle fs-14 align-text-top me-1" />
                          Edit
                        </a>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-dismissible="#odd-4"
                        >
                          <i className="ti ti-trash fs-14 align-text-top me-1" />
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="p-3 border-top position-sticky bottom-0 w-100 mb-0">
            <form
              className="d-flex align-items-center gap-1"
              name="chat-form"
              id="chat-form"
            >
              <div>
                <button type="button" className="btn btn-icon btn-soft-warning">
                  <iconify-icon
                    icon="solar:smile-circle-outline"
                    className="fs-20"
                  />
                </button>
              </div>
              <input
                type="text"
                name="message"
                id="chat-form"
                className="form-control"
                placeholder="Type Message..."
                required=""
              />
              <div className="d-flex align-items-center gap-1">
                <button
                  type="submit"
                  className="btn btn-icon btn-success chat-send"
                >
                  <i className="ti ti-send" />
                </button>
                <a
                  href="#"
                  className="btn btn-icon btn-soft-primary d-none d-md-inline-flex"
                >
                  <i className="ti ti-microphone" />{" "}
                </a>
                <a
                  href="#"
                  className="btn btn-icon btn-soft-primary d-none d-md-inline-flex"
                >
                  <i className="ti ti-paperclip" />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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
export default Chat;