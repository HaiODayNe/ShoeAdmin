import Wrapper from "./wrapper"
import Offcanvas from "./offcanvas";
const Calendar = () => {
    return (<div >
        <Wrapper />
<div className="page-content">
  <div className="page-container">
    <div className="row">
      <div className="col-xl-3">
        <div className="card">
          <div className="card-body">
            <button className="btn btn-primary w-100" id="btn-new-event">
              <i className="ti ti-plus me-2 align-middle" /> Create New Event
            </button>
            <div id="external-events" className="mt-2">
              <p className="text-muted">
                Drag and drop your event or click in the calendar
              </p>
              <div
                className="external-event fc-event bg-success-subtle text-success"
                data-class="bg-success-subtle"
              >
                <i className="ti ti-circle-filled me-2" />
                New Event Planning
              </div>
              <div
                className="external-event fc-event bg-info-subtle text-info"
                data-class="bg-info-subtle"
              >
                <i className="ti ti-circle-filled me-2" />
                Meeting
              </div>
              <div
                className="external-event fc-event bg-warning-subtle text-warning"
                data-class="bg-warning-subtle"
              >
                <i className="ti ti-circle-filled me-2" />
                Generating Reports
              </div>
              <div
                className="external-event fc-event bg-danger-subtle text-danger"
                data-class="bg-danger-subtle"
              >
                <i className="ti ti-circle-filled me-2" />
                Create New theme
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end col*/}
      <div className="col-xl-9">
        <div className="card">
          <div className="card-body">
            <div id="calendar" />
          </div>
        </div>
      </div>
      {/* end col */}
    </div>
    {/*end row*/}
    {/* Add New Event MODAL */}
    <div className="modal fade" id="event-modal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form
            className="needs-validation"
            name="event-form"
            id="forms-event"
            noValidate=""
          >
            <div className="modal-header">
              <h4 className="modal-title" id="modal-title">
                Create Event
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12">
                  <div className="mb-2">
                    <label
                      className="control-label form-label"
                      htmlFor="event-title"
                    >
                      Event Name
                    </label>
                    <input
                      className="form-control"
                      placeholder="Insert Event Name"
                      type="text"
                      name="title"
                      id="event-title"
                      required=""
                    />
                    <div className="invalid-feedback">
                      Please provide a valid event name
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-2">
                    <label
                      className="control-label form-label"
                      htmlFor="event-category"
                    >
                      Category
                    </label>
                    <select
                      className="form-select"
                      name="category"
                      id="event-category"
                      required=""
                    >
                      <option value="bg-primary">Blue</option>
                      <option value="bg-secondary">Gray Dark</option>
                      <option value="bg-success">Green</option>
                      <option value="bg-info">Cyan</option>
                      <option value="bg-warning">Yellow</option>
                      <option value="bg-danger">Red</option>
                      <option value="bg-dark">Dark</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid event category
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-2">
                <button
                  type="button"
                  className="btn btn-danger"
                  id="btn-delete-event"
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-light ms-auto"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="btn-save-event"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* end modal-content*/}
      </div>
      {/* end modal dialog*/}
    </div>
    {/* end modal*/}
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
export default Calendar;