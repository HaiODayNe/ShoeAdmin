import Wrapper from "./wrapper"
import Offcanvas from "./offcanvas";
const CreateInvoice = () => {
    return (<div >
        <Wrapper />
   <div className="page-content">
  <div className="page-container">
    <div className="row">
      <div className="col-12">
        <div className="card position-relative">
          <form>
            <div className="card-body">
              {/* Invoice Logo*/}
              <div className="d-flex align-items-start justify-content-between mb-4">
                <div
                  className="overflow-hidden position-relative border rounded d-flex align-items-center justify-content-start px-2"
                  style={{ height: 60, width: 260 }}
                >
                  <label
                    htmlFor="imageInput"
                    className="position-absolute top-0 start-0 end-0 bottom-0"
                  />
                  <input className="d-none" type="file" id="imageInput" />
                  <span className="auth-brand d-flex justify-content-center">
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
                  </span>
                </div>
                <div className="text-end">
                  <div className="row g-1 align-items-center">
                    <div className="col-auto">
                      <label
                        htmlFor="invoiceNo"
                        className="col-form-label fs-16 fw-bold"
                      >
                        #INV
                      </label>
                    </div>
                    <div className="col-auto">
                      <input
                        type="number"
                        id="invoiceNo"
                        className="form-control"
                        placeholder={'00001234'}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-sm-0 mt-3">
                  <div className="mb-2">
                    <label className="form-label">Invoice Date :</label>
                    <input
                      type="text"
                      data-provider="flatpickr"
                      data-date-format="d M, Y"
                      data-deafult-date="today"
                      className="form-control"
                      placeholder="Select Date"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="form-label">Due Date :</label>
                    <input
                      type="text"
                      data-provider="flatpickr"
                      data-altformat="F j, Y"
                      className="form-control"
                      placeholder="Select Date"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="InvoicePaymentStatus"
                      className="form-label"
                    >
                      Payment Status
                    </label>
                    <select className="form-select" id="InvoicePaymentStatus">
                      <option value="">Select Status</option>
                      <option value="Choice 1">Paid</option>
                      <option value="Choice 2">Unpaid</option>
                      <option value="Choice 3">Cancelled</option>
                      <option value="Choice 4">Refunded</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="InvoicePaymentMethod"
                      className="form-label"
                    >
                      Payment Method
                    </label>
                    <select className="form-select" id="InvoicePaymentMethod">
                      <option value="">Select Method</option>
                      <option value="Choice 1">Credit / Debit Card</option>
                      <option value="Choice 2">Bank Transfer</option>
                      <option value="Choice 3">PayPal</option>
                      <option value="Choice 4">Payoneer</option>
                      <option value="Choice 5">Cash On Delivery</option>
                      <option value="Choice 6">Wallet</option>
                      <option value="Choice 7">UPI (Gpay)</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="mb-4">
                    <label className="form-label">Billing Address :</label>
                    <div className="mb-2 pb-1">
                      <input
                        type="text"
                        id="BName"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="mb-2 pb-1">
                      <textarea
                        type="text"
                        id="BAddress"
                        rows={3}
                        className="form-control"
                        placeholder="Address"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="BNumber"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-sm-0 mt-3">
                  <div className="mb-4">
                    <label className="form-label">Shipping Address :</label>
                    <div className="mb-2 pb-1">
                      <input
                        type="text"
                        id="SName"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="mb-2 pb-1">
                      <textarea
                        type="text"
                        id="SAddress"
                        rows={3}
                        className="form-control"
                        placeholder="Address"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        id="SNumber"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="table-responsive">
                  <table className="table text-center table-nowrap align-middle mb-0">
                    <thead>
                      <tr className="bg-light bg-opacity-50">
                        <th
                          scope="col"
                          className="border-0"
                          style={{ width: 70 }}
                        >
                          #
                        </th>
                        <th scope="col" className="border-0 text-start">
                          Product Details
                        </th>
                        <th
                          scope="col"
                          className="border-0"
                          style={{ width: 140 }}
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="border-0"
                          style={{ width: 140 }}
                        >
                          Unit price
                        </th>
                        <th
                          scope="col"
                          className="border-0"
                          style={{ width: 240 }}
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="border-0"
                          style={{ width: 50 }}
                        >
                          •••
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">01</th>
                        <td className="text-start">
                          <input
                            type="text"
                            id="product-detail-one"
                            className="form-control mb-1"
                            placeholder="Product One"
                          />
                          <input
                            type="text"
                            id="product-desc-one"
                            className="form-control"
                            placeholder="Item description"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            id="product-category-one"
                            className="form-control"
                            placeholder="Quantity"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Price"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control  w-auto"
                            placeholder="$0.00"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn flex-shrink-0 rounded-circle btn-icon btn-ghost-danger"
                          >
                            <iconify-icon
                              icon="solar:trash-bin-trash-bold-duotone"
                              className="fs-20"
                            />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">02</th>
                        <td className="text-start">
                          <input
                            type="text"
                            id="product-detail-two"
                            className="form-control mb-1"
                            placeholder="Product Two"
                          />
                          <input
                            type="text"
                            id="product-desc-two"
                            className="form-control"
                            placeholder="Item description"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            id="product-category-two"
                            className="form-control"
                            placeholder="Quantity"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Price"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control  w-auto"
                            placeholder="$0.00"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn flex-shrink-0 rounded-circle btn-icon btn-ghost-danger"
                          >
                            <iconify-icon
                              icon="solar:trash-bin-trash-bold-duotone"
                              className="fs-20"
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/*end table*/}
                  <div className="p-2">
                    <button type="button" className="btn btn-primary">
                      <i className="ti ti-circle-plus me-1" /> Add Products
                    </button>
                  </div>
                </div>
                <div>
                  <table
                    className="table table-sm table-borderless table-nowrap align-middle mb-0 ms-auto"
                    style={{ width: 300 }}
                  >
                    <tbody>
                      <tr>
                        <td className="fw-medium">Subtotal</td>
                        <td className="text-end">
                          <div className="ms-auto" style={{ width: 160 }}>
                            <input
                              type="number"
                              id="productSubtotal"
                              className="form-control"
                              placeholder="$0.00"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-medium">Shipping</td>
                        <td className="text-end">
                          <div className="ms-auto" style={{ width: 160 }}>
                            <input
                              type="number"
                              id="productShipping"
                              className="form-control"
                              placeholder="$0.00"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-medium">
                          Discount <small className="text-muted">(10%)</small>
                        </td>
                        <td className="text-end">
                          <div className="ms-auto" style={{ width: 160 }}>
                            <input
                              type="number"
                              id="productDiscount"
                              className="form-control"
                              placeholder="$0.00"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-medium">
                          Tax <small className="text-muted">(18%)</small>
                        </td>
                        <td className="text-end">
                          <div className="ms-auto" style={{ width: 160 }}>
                            <input
                              type="number"
                              id="productTaxes"
                              className="form-control"
                              placeholder="$0.00"
                            />
                          </div>
                        </td>
                      </tr>
                      <tr className="fs-15">
                        <th scope="row" className="fw-bold">
                          Total Amount
                        </th>
                        <th className="text-end">
                          <div className="ms-auto" style={{ width: 160 }}>
                            <input
                              type="number"
                              id="productTotalAmount"
                              disabled=""
                              className="form-control"
                              placeholder="$0.00"
                            />
                          </div>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                  {/*end table*/}
                </div>
              </div>
              <div>
                <label className="form-label" htmlFor="InvoiceNote">
                  {" "}
                  Note :{" "}
                </label>
                <textarea
                  className="form-control"
                  id="InvoiceNote"
                  placeholder="Thanks for your business "
                  rows={3}
                  defaultValue={""}
                />
              </div>
            </div>{" "}
            {/* end card-body*/}
          </form>
        </div>
        {/* end card */}
        <div className="mb-5">
          <div className="d-flex justify-content-center gap-2">
            <a
              href="javascript:window.print()"
              className="btn btn-primary gap-1"
            >
              <i className="ti ti-eye fs-16" /> Preview
            </a>
            <a href="javascript: void(0);" className="btn btn-success gap-1">
              <i className="ti ti-device-floppy fs-16" /> Save
            </a>
            <a href="javascript: void(0);" className="btn btn-info gap-1">
              <i className="ti ti-send fs-16" /> Send Invoice
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
export default CreateInvoice;