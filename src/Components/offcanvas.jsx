
const Offcanvas = () => {
    return (
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
            <h5 className="fs-14 text-center text-muted mt-2">Hover View</h5>
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
            <h5 className="fs-14 text-center text-muted mt-2">Full Layout</h5>
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
    )
}
export default Offcanvas;