import Wrapper from "./wrapper"
import Offcanvas from "./offcanvas";
const Invoice = () => {
    return (<div >
        <Wrapper />
        <div className="page-content">
        <div className="page-container">
            <div className="row">
            <div className="col-12">
                <div className="card">
                <div className="card-header border-bottom justify-content-between d-flex flex-wrap align-items-center gap-2">
                    <div className="flex-shrink-0 d-flex align-items-center gap-2">
                    <div className="position-relative">
                        <input
                        type="text"
                        className="form-control ps-4"
                        placeholder="Search Here..."
                        />
                        <i className="ti ti-search position-absolute top-50 translate-middle-y start-0 ms-2" />
                    </div>
                    </div>
                    <a href="apps-invoice-create.html" className="btn btn-primary">
                    <i className="ti ti-plus me-1" />
                    Add Invoice
                    </a>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover text-nowrap mb-0">
                    <thead className="bg-light-subtle">
                        <tr>
                        <th className="ps-3 py-1" style={{ width: 50 }}>
                            <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck1"
                            />
                        </th>
                        <th className="fs-12 text-uppercase text-muted py-1">
                            Invoice ID
                        </th>
                        <th className="fs-12 text-uppercase text-muted py-1">
                            Category{" "}
                        </th>
                        <th className="fs-12 text-uppercase text-muted py-1">
                            Created On
                        </th>
                        <th className="fs-12 text-uppercase text-muted py-1">
                            Invoice To
                        </th>
                        <th className="fs-12 text-uppercase text-muted py-1">
                            Amount
                        </th>
                        <th className="fs-12 text-uppercase text-muted py-1">
                            Due Date
                        </th>
                        <th className="fs-12 text-uppercase text-muted py-1">
                            Status
                        </th>
                        <th
                            className="text-center  py-1 fs-12 text-uppercase text-muted"
                            style={{ width: 120 }}
                        >
                            Action
                        </th>
                        </tr>
                    </thead>
                    {/* end table-head */}
                    <tbody>
                        <tr>
                        <td className="ps-3">
                            <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck2"
                            />
                        </td>
                        <td>
                            <span className="fw-semibold">
                            <a
                                href="apps-invoice-details.html"
                                className="text-reset"
                            >
                                #WA-2026
                            </a>
                            </span>
                        </td>
                        <td>Fashion</td>
                        <td>
                            <span className="text-muted">12 Apr 2024</span>
                        </td>
                        <td>
                            <div className="d-flex align-items-center gap-2">
                            <div className="avatar-sm">
                                <img
                                src="assets/images/users/avatar-2.jpg"
                                alt=""
                                className="img-fluid rounded-circle"
                                />
                            </div>
                            <h6 className="fs-14 mb-0">Raul Villa</h6>
                            </div>
                        </td>
                        <td>$42,430</td>
                        <td>
                            <span className="text-muted">12 Apr 2024</span>
                        </td>
                        <td>
                            <span className="badge bg-success-subtle text-success fs-12 p-1">
                            Paid
                            </span>
                        </td>
                        <td className="pe-3">
                            <div className="hstack gap-1 justify-content-end">
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-primary btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-eye" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-success btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-edit fs-16" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-danger btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-trash" />
                            </a>
                            </div>
                        </td>
                        </tr>
                        {/* end table-row */}
                        <tr>
                        <td className="ps-3">
                            <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck3"
                            />
                        </td>
                        <td>
                            <span className="fw-semibold">
                            <a
                                href="apps-invoice-details.html"
                                className="text-reset"
                            >
                                #WA-2025
                            </a>
                            </span>
                        </td>
                        <td>Electronics</td>
                        <td>
                            <span className="text-muted">14 Apr 2024</span>
                        </td>
                        <td>
                            <div className="d-flex align-items-center gap-2">
                            <div className="avatar-sm">
                                <img
                                src="assets/images/users/avatar-3.jpg"
                                alt=""
                                className="img-fluid rounded-circle"
                                />
                            </div>
                            <h6 className="fs-14 mb-0">Fae Sims</h6>
                            </div>
                        </td>
                        <td>$416</td>
                        <td>
                            <span className="text-muted">24 Apr 2024</span>
                        </td>
                        <td>
                            <span className="badge bg-warning-subtle text-warning fs-12 p-1">
                            Overdue
                            </span>
                        </td>
                        <td className="pe-3">
                            <div className="hstack gap-1 justify-content-end">
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-primary btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-eye" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-success btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-edit fs-16" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-danger btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-trash" />
                            </a>
                            </div>
                        </td>
                        </tr>
                        {/* end table-row */}
                        <tr>
                        <td className="ps-3">
                            <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck4"
                            />
                        </td>
                        <td>
                            <span className="fw-semibold">
                            <a
                                href="apps-invoice-details.html"
                                className="text-reset"
                            >
                                #WA-2024
                            </a>
                            </span>
                        </td>
                        <td>Mobile Accessories</td>
                        <td>
                            <span className="text-muted">15 Apr 2024</span>
                        </td>
                        <td>
                            <div className="d-flex align-items-center gap-2">
                            <div className="avatar-sm">
                                <img
                                src="assets/images/users/avatar-4.jpg"
                                alt=""
                                className="img-fluid rounded-circle"
                                />
                            </div>
                            <h6 className="fs-14 mb-0">David Roderick</h6>
                            </div>
                        </td>
                        <td>$187</td>
                        <td>
                            <span className="text-muted">25 Apr 2024</span>
                        </td>
                        <td>
                            <span className="badge bg-success-subtle text-success fs-12 p-1">
                            Paid
                            </span>
                        </td>
                        <td className="pe-3">
                            <div className="hstack gap-1 justify-content-end">
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-primary btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-eye" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-success btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-edit fs-16" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-danger btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-trash" />
                            </a>
                            </div>
                        </td>
                        </tr>
                        {/* end table-row */}
                        <tr>
                        <td className="ps-3">
                            <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck5"
                            />
                        </td>
                        <td>
                            <span className="fw-semibold">
                            <a
                                href="apps-invoice-details.html"
                                className="text-reset"
                            >
                                #WA-2023
                            </a>
                            </span>
                        </td>
                        <td>Electronics</td>
                        <td>
                            <span className="text-muted">6 Dec 2024</span>
                        </td>
                        <td>
                            <div className="d-flex align-items-center gap-2">
                            <div className="avatar-sm">
                                <img
                                src="assets/images/users/avatar-5.jpg"
                                alt=""
                                className="img-fluid rounded-circle"
                                />
                            </div>
                            <h6 className="fs-14 mb-0">James Zavel</h6>
                            </div>
                        </td>
                        <td>$165</td>
                        <td>
                            <span className="text-muted">14 Dec 2024</span>
                        </td>
                        <td>
                            <span className="badge bg-success-subtle text-success fs-12 p-1">
                            Paid
                            </span>
                        </td>
                        <td className="pe-3">
                            <div className="hstack gap-1 justify-content-end">
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-primary btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-eye" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-success btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-edit fs-16" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-danger btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-trash" />
                            </a>
                            </div>
                        </td>
                        </tr>
                        {/* end table-row */}
                        <tr>
                        <td className="ps-3">
                            <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck6"
                            />
                        </td>
                        <td>
                            <span className="fw-semibold">
                            <a
                                href="apps-invoice-details.html"
                                className="text-reset"
                            >
                                #WA-2022
                            </a>
                            </span>
                        </td>
                        <td>Electronics</td>
                        <td>
                            <span className="text-muted">1 Jan 2024</span>
                        </td>
                        <td>
                            <div className="d-flex align-items-center gap-2">
                            <div className="avatar-sm">
                                <img
                                src="assets/images/users/avatar-6.jpg"
                                alt=""
                                className="img-fluid rounded-circle"
                                />
                            </div>
                            <h6 className="fs-14 mb-0">Denese Martin</h6>
                            </div>
                        </td>
                        <td>$165</td>
                        <td>
                            <span className="text-muted">14 Jan 2024</span>
                        </td>
                        <td>
                            <span className="badge bg-danger-subtle text-danger fs-12 p-1">
                            Cancelled
                            </span>
                        </td>
                        <td className="pe-3">
                            <div className="hstack gap-1 justify-content-end">
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-primary btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-eye" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-success btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-edit fs-16" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-danger btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-trash" />
                            </a>
                            </div>
                        </td>
                        </tr>
                        {/* end table-row */}
                        <tr>
                        <td className="ps-3">
                            <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck7"
                            />
                        </td>
                        <td>
                            <span className="fw-semibold">
                            <a
                                href="apps-invoice-details.html"
                                className="text-reset"
                            >
                                #WA-2021
                            </a>
                            </span>
                        </td>
                        <td>Watches</td>
                        <td>
                            <span className="text-muted">2 Dec 2024</span>
                        </td>
                        <td>
                            <div className="d-flex align-items-center gap-2">
                            <div className="avatar-sm">
                                <img
                                src="assets/images/users/avatar-7.jpg"
                                alt=""
                                className="img-fluid rounded-circle"
                                />
                            </div>
                            <h6 className="fs-14 mb-0">Jack Nunnally</h6>
                            </div>
                        </td>
                        <td>$192</td>
                        <td>
                            <span className="text-muted">2 Dec 2024</span>
                        </td>
                        <td>
                            <span className="badge bg-warning-subtle text-warning fs-12 p-1">
                            Overdue
                            </span>
                        </td>
                        <td className="pe-3">
                            <div className="hstack gap-1 justify-content-end">
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-primary btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-eye" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-success btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-edit fs-16" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-danger btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-trash" />
                            </a>
                            </div>
                        </td>
                        </tr>
                        {/* end table-row */}
                        <tr>
                        <td className="ps-3">
                            <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck8"
                            />
                        </td>
                        <td>
                            <span className="fw-semibold">
                            <a
                                href="apps-invoice-details.html"
                                className="text-reset"
                            >
                                #WA-2020
                            </a>
                            </span>
                        </td>
                        <td>Bags</td>
                        <td>
                            <span className="text-muted">12 May 2024</span>
                        </td>
                        <td>
                            <div className="d-flex align-items-center gap-2">
                            <div className="avatar-sm">
                                <img
                                src="assets/images/users/avatar-8.jpg"
                                alt=""
                                className="img-fluid rounded-circle"
                                />
                            </div>
                            <h6 className="fs-14 mb-0">Margaret Shaw</h6>
                            </div>
                        </td>
                        <td>$159</td>
                        <td>
                            <span className="text-muted">24 May 2024</span>
                        </td>
                        <td>
                            <span className="badge bg-success-subtle text-success fs-12 p-1">
                            Paid
                            </span>
                        </td>
                        <td className="pe-3">
                            <div className="hstack gap-1 justify-content-end">
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-primary btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-eye" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-success btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-edit fs-16" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-danger btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-trash" />
                            </a>
                            </div>
                        </td>
                        </tr>
                        {/* end table-row */}
                        <tr>
                        <td className="ps-3">
                            <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck9"
                            />
                        </td>
                        <td>
                            <span className="fw-semibold">
                            <a
                                href="apps-invoice-details.html"
                                className="text-reset"
                            >
                                #WA-2019
                            </a>
                            </span>
                        </td>
                        <td>Cloth's</td>
                        <td>
                            <span className="text-muted">21 Jun 2024</span>
                        </td>
                        <td>
                            <div className="d-flex align-items-center gap-2">
                            <div className="avatar-sm">
                                <img
                                src="assets/images/users/avatar-9.jpg"
                                alt=""
                                className="img-fluid rounded-circle"
                                />
                            </div>
                            <h6 className="fs-14 mb-0">Anthony Williams</h6>
                            </div>
                        </td>
                        <td>$259</td>
                        <td>
                            <span className="text-muted">1 July 2024</span>
                        </td>
                        <td>
                            <span className="badge bg-danger-subtle text-danger fs-12 p-1">
                            Cancelled
                            </span>
                        </td>
                        <td className="pe-3">
                            <div className="hstack gap-1 justify-content-end">
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-primary btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-eye" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-success btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-edit fs-16" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-danger btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-trash" />
                            </a>
                            </div>
                        </td>
                        </tr>
                        {/* end table-row */}
                        <tr>
                        <td className="ps-3">
                            <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck10"
                            />
                        </td>
                        <td>
                            <span className="fw-semibold">
                            <a
                                href="apps-invoice-details.html"
                                className="text-reset"
                            >
                                #WA-2018
                            </a>
                            </span>
                        </td>
                        <td>Sofa</td>
                        <td>
                            <span className="text-muted">12 Aug 2024</span>
                        </td>
                        <td>
                            <div className="d-flex align-items-center gap-2">
                            <div className="avatar-sm">
                                <img
                                src="assets/images/users/avatar-10.jpg"
                                alt=""
                                className="img-fluid rounded-circle"
                                />
                            </div>
                            <h6 className="fs-14 mb-0">Axie Barnes</h6>
                            </div>
                        </td>
                        <td>$259</td>
                        <td>
                            <span className="text-muted">28 Aug 2024</span>
                        </td>
                        <td>
                            <span className="badge bg-success-subtle text-success fs-12 p-1">
                            Paid
                            </span>
                        </td>
                        <td className="pe-3">
                            <div className="hstack gap-1 justify-content-end">
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-primary btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-eye" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-success btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-edit fs-16" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-danger btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-trash" />
                            </a>
                            </div>
                        </td>
                        </tr>
                        {/* end table-row */}
                        <tr>
                        <td className="ps-3">
                            <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck11"
                            />
                        </td>
                        <td>
                            <span className="fw-semibold">
                            <a
                                href="apps-invoice-details.html"
                                className="text-reset"
                            >
                                #WA-2017
                            </a>
                            </span>
                        </td>
                        <td>Shoes</td>
                        <td>
                            <span className="text-muted">8 Aug 2024</span>
                        </td>
                        <td>
                            <div className="d-flex align-items-center gap-2">
                            <div className="avatar-sm">
                                <img
                                src="assets/images/users/avatar-1.jpg"
                                alt=""
                                className="img-fluid rounded-circle"
                                />
                            </div>
                            <h6 className="fs-14 mb-0">Glen Morning</h6>
                            </div>
                        </td>
                        <td>$256</td>
                        <td>
                            <span className="text-muted">30 Aug 2024</span>
                        </td>
                        <td>
                            <span className="badge bg-warning-subtle text-warning fs-12 p-1">
                            Pending
                            </span>
                        </td>
                        <td className="pe-3">
                            <div className="hstack gap-1 justify-content-end">
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-primary btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-eye" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-success btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-edit fs-16" />
                            </a>
                            <a
                                href="javascript:void(0);"
                                className="btn btn-soft-danger btn-icon btn-sm rounded-circle"
                            >
                                {" "}
                                <i className="ti ti-trash" />
                            </a>
                            </div>
                        </td>
                        </tr>
                        {/* end table-row */}
                    </tbody>
                    {/* end table-body */}
                    </table>
                    {/* end table */}
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-end">
                    <ul className="pagination mb-0 justify-content-center">
                        <li className="page-item disabled">
                        <a href="#" className="page-link">
                            <i className="ti ti-chevrons-left" />
                        </a>
                        </li>
                        <li className="page-item">
                        <a href="#" className="page-link">
                            1
                        </a>
                        </li>
                        <li className="page-item active">
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
                            <i className="ti ti-chevrons-right" />
                        </a>
                        </li>
                    </ul>
                    {/* end pagination */}
                    </div>
                    {/* end flex */}
                </div>
                </div>{" "}
                {/* end card*/}
            </div>{" "}
            {/* end col */}
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
export default Invoice;