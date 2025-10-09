import Wrapper from "./wrapper"
import Offcanvas from "./offcanvas";
const ViewInvoice = () => {
    return (<div >
        <Wrapper />
      <div className="page-content">
  <div className="page-container">
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            {/* Invoice Logo*/}
            <div className="d-flex align-items-start justify-content-between mb-4">
              <div>
                <a
                  href="index.html"
                  className="auth-brand d-flex justify-content-center mb-2"
                >
                  <img
                    src="assets/images/logo-dark.png"
                    alt="dark logo"
                    height={26}
                    className="logo-dark"
                  />
                  <img
                    src="assets/images/logo.png"
                    alt="logo light"
                    height={26}
                    className="logo-light"
                  />
                </a>
              </div>
              <div className="text-end">
                <span className="badge bg-success-subtle text-success px-1 fs-12 mb-3">
                  Paid
                </span>
                <h3 className="m-0 fw-bolder fs-20">Invoice: #INV7896</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="mb-4">
                  <h5 className="fw-bold pb-1 mb-2 fs-14"> Invoice From : </h5>
                  <h6 className="fs-14 mb-2">Chris Keller</h6>
                  <h6 className="fs-14 text-muted mb-2 lh-base">
                    1055 Station Street Fremont,
                    <br /> CA - 94539
                  </h6>
                  <h6 className="fs-14 text-muted mb-0">Phone: 510-875-0005</h6>
                </div>
                <div>
                  <h5 className="fw-bold fs-14"> Invoice Date : </h5>
                  <h6 className="fs-14 text-muted">12 Apr 2024</h6>
                </div>
              </div>
              <div className="col-4">
                <div className="mb-4">
                  <h5 className="fw-bold pb-1 mb-2 fs-14"> Bill To : </h5>
                  <h6 className="fs-14 mb-2">Lucian Obrien</h6>
                  <h6 className="fs-14 text-muted mb-2 lh-base">
                    1147 Rohan Drive Suite,
                    <br />
                    Burlington, VT / 82021
                  </h6>
                  <h6 className="fs-14 text-muted mb-0">Phone: 904-966-2836</h6>
                </div>
                <div>
                  <h5 className="fw-bold fs-14"> Due Date : </h5>
                  <h6 className="fs-14 text-muted">28 Apr 2024</h6>
                </div>
              </div>
              <div className="col-4 text-end">
                <img
                  src="assets/images/png/qr-code.png"
                  alt="qr-code-image"
                  height={100}
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="table-responsive">
              <table className="table text-center table-nowrap align-middle mb-0">
                <thead>
                  <tr className="bg-light bg-opacity-50">
                    <th className="border-0" scope="col" style={{ width: 50 }}>
                      #
                    </th>
                    <th className="text-start border-0" scope="col">
                      Product Details
                    </th>
                    <th className="border-0" scope="col">
                      Quantity
                    </th>
                    <th className="border-0" scope="col">
                      Unit price
                    </th>
                    <th className="text-end border-0" scope="col">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody id="products-list">
                  <tr>
                    <th scope="row">01</th>
                    <td className="text-start">
                      <div className="d-flex align-items-center gap-2">
                        <iconify-icon icon="logos:react" className="fs-22" />
                        <div>
                          <span className="fw-medium">React Development</span>
                          <p className="text-muted mb-0">
                            (Advance payment for 25 hours)
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>25</td>
                    <td>$40.00</td>
                    <td className="text-end">$1000.00</td>
                  </tr>
                  <tr>
                    <th scope="row">02</th>
                    <td className="text-start">
                      <div className="d-flex align-items-center gap-2">
                        <iconify-icon
                          icon="logos:openai-icon"
                          className="fs-22"
                        />
                        <div>
                          <span className="fw-medium">OpenAI Support</span>
                          <p className="text-muted mb-0">
                            (Small help for bug fixes)
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>01</td>
                    <td>$200.00</td>
                    <td className="text-end">$200.00</td>
                  </tr>
                  <tr>
                    <th scope="row">03</th>
                    <td className="text-start">
                      <div className="d-flex align-items-center gap-2">
                        <iconify-icon
                          icon="logos:apple-app-store"
                          className="fs-22"
                        />
                        <div>
                          <span className="fw-medium">
                            Custom App Development - iOS
                          </span>
                          <p className="text-muted mb-0">(Phase 1 payment)</p>
                        </div>
                      </div>
                    </td>
                    <td>01</td>
                    <td>$1200.00</td>
                    <td className="text-end">$1200.00</td>
                  </tr>
                  <tr>
                    <th scope="row">04</th>
                    <td className="text-start">
                      <div className="d-flex align-items-center gap-2">
                        <iconify-icon
                          icon="logos:digital-ocean-icon"
                          className="fs-22"
                        />
                        <div>
                          <span className="fw-medium">
                            Digital Ocean Server Setup
                          </span>
                          <p className="text-muted mb-0">(Fix amount)</p>
                        </div>
                      </div>
                    </td>
                    <td>01</td>
                    <td>$199.00</td>
                    <td className="text-end">$199.00</td>
                  </tr>
                </tbody>
              </table>
              {/*end table*/}
            </div>
            <div>
              <table
                className="table table-nowrap align-middle mb-0 ms-auto"
                style={{ width: 335 }}
              >
                <tbody>
                  <tr>
                    <td className="fw-medium">Subtotal</td>
                    <td className="text-end">$2,599.00</td>
                  </tr>
                  <tr>
                    <td className="fw-medium">
                      Shipping <small className="text-muted">(Free)</small>
                    </td>
                    <td className="text-end">-</td>
                  </tr>
                  <tr>
                    <td className="fw-medium">
                      Discount <small className="text-muted">(10%)</small>
                    </td>
                    <td className="text-end">-$259.90</td>
                  </tr>
                  <tr>
                    <td className="fw-medium">
                      Tax <small className="text-muted">(5%)</small>
                    </td>
                    <td className="text-end">$116.95</td>
                  </tr>
                  <tr className="border-top border-top-dashed fs-16">
                    <td className="fw-bold">Total Amount</td>
                    <td className="fw-bold text-end">$2456.05</td>
                  </tr>
                </tbody>
              </table>
              {/*end table*/}
            </div>
          </div>
          <div className="card-body">
            <div className="bg-body p-2 rounded-2 mt-4">
              <p className="mb-0">
                <span className="fs-12 fw-bold text-uppercase">Note : </span>
                Payment for all accounts is due within 7 days from the date of
                invoice receipt. Payments can be made via cheque, credit card,
                or direct online payment. Failure to settle the account within 7
                days will result in the agreed quoted fee, as noted above, being
                charged against the credit details provided as confirmation of
                the work undertaken.
              </p>
            </div>
            <div className="mt-4">
              <p className="mb-2 pb-2">
                <b>Congratulations on your recent purchase!</b> It has been our
                pleasure to serve you, and we hope we see you again soon.
              </p>
              <div className="d-inline-block">
                <img
                  src="assets/images/png/signature.png"
                  alt="signature"
                  height={32}
                />
                <h5 className="mb-0 mt-2">Authorized Sign</h5>
              </div>
            </div>
          </div>{" "}
          {/* end card-body*/}
        </div>
        <div className="d-print-none mb-5">
          <div className="d-flex justify-content-center gap-2">
            <a href="javascript:window.print()" className="btn btn-primary">
              <i className="ti ti-printer me-1" /> Print
            </a>
            <a href="javascript: void(0);" className="btn btn-secondary">
              <i className="ti ti-send me-1" />
              Send
            </a>
            <a href="javascript: void(0);" className="btn btn-info">
              <i className="ti ti-download me-1" />
              Download
            </a>
          </div>
        </div>
        {/* end buttons */}
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
export default ViewInvoice;