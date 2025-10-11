import Wrapper from "./wrapper";
import Offcanvas from "./offcanvas";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ListProducts = () => {
  //call api
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://684e8519f0c9c9848d285a09.mockapi.io/Shoe")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [products]);
  const deleteProduct = async (id) => {
    try {
      await axios.delete(
        `https://684e8519f0c9c9848d285a09.mockapi.io/Shoe/${id}`
      );
      setProducts((prev) => prev.filter((products) => products.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  //phân trang
  const [pages, setPages] = useState(0);
  var ItemPerPage = 6; //số item/page
  var totalPage = Math.ceil(products.length / ItemPerPage); //tổng số page
  var itemIndex = pages * ItemPerPage; //vị trí cắt
  var RenderProducts = products.slice(itemIndex, itemIndex + ItemPerPage); //mảng mới
  var button = [];
  for (let i = 0; i < ItemPerPage; i++) {
    button.push(
      <li className="page-item">
        <button className="page-link" onClick={() => setPages(i + 1)}>
          {i + 1}
        </button>
      </li>
    );
  }
  const navigate = useNavigate();
  const editProduct = (id) => {
    navigate(`/submitform/${id}`);
  };
  //thông báo xóa sản phẩm
  const popupAlertMessage = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState("");
  const [toastMessage, setToastMessage] = useState(false);
  const handleShowDeleteToastMessage = () => {
    setToastMessage(true);
    setTimeout(() => {
      setToastMessage(false);
    }, 2000);
  };
  const alertMessage = (
    <div style={popupAlertMessage}>
      <div
        className="toast show mb-4 d-flex justify-content-center "
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-body px-3">
          Bạn có muốn xóa sản phẩm này không?
          <div className="row justify-content-between mt-2 pt-2 border-top ">
            <button
              type="button"
              className="col-5 btn btn-primary btn-sm px-2 "
              onClick={() => {
                deleteProduct(deleteProductId);
                setDeleteConfirm(false);
                handleShowDeleteToastMessage();
              }}
            >
              Xác nhận xóa
            </button>
            <button
              type="button"
              className="col-5 btn btn-secondary btn-sm px-2"
              data-bs-dismiss="toast"
              onClick={() => setDeleteConfirm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  //thông báo xóa thành công
  const deleteSuccessMessage = (
    <div
      className="alert alert-success alert-dismissible d-flex align-items-center border-2 border border-success"
      role="alert"
    >
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      />
      <iconify-icon
        icon="solar:check-read-line-duotone"
        className="fs-20 me-1"
      />
      <div className="lh-1">
        <strong>Xóa thành công - </strong> Sản phẩm đã được xóa bỏ
      </div>
    </div>
  );

  return (
    <>
      {deleteConfirm && alertMessage}
      <div>
        <Wrapper />
        <div className="page-content">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header border-bottom border-dashed d-flex align-items-center">
                  <h4 className="header-title">List Products</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive-sm">
                    <table className="table table-striped mb-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Version</th>
                          <th>Brand</th>
                          <th>Color</th>
                          <th>Catalogue</th>
                          <th>Size</th>
                          <th>Version</th>
                          <th>Gender</th>
                          <th>Quantity</th>
                          <th>Image</th>
                          <th>id</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {RenderProducts.map((product) => (
                          <tr>
                            <td>
                              <div>{product.Name}</div>
                            </td>
                            <td>
                              <div>{product.Version}</div>
                            </td>
                            <td>
                              <div>{product.Brand}</div>
                            </td>
                            <td>
                              <div>{product.Color}</div>
                            </td>
                            <td>
                              <div>{product.Catalogue}</div>
                            </td>
                            <td>
                              <div>{product.Price}</div>
                            </td>
                            <td>
                              <div>{product.Size}</div>
                            </td>
                            <td>
                              <div>{product.Gender}</div>
                            </td>
                            <td>
                              <div>{product.Quantity}</div>
                            </td>
                            <td>
                              <div>{product.Image}</div>
                            </td>
                            <td>
                              <div>{product.id}</div>
                            </td>
                            <td className="text-muted">
                              <button
                                style={{ border: "none", background: "none" }}
                                href="javascript: void(0);"
                                className="link-reset fs-20 p-1"
                                onClick={() => editProduct(product.id)}
                              >
                                <i className="ti ti-pencil" />
                              </button>
                              <button
                                style={{ border: "none", background: "none" }}
                                href="javascript: void(0);"
                                className="link-reset fs-20 p-1"
                                onClick={() => {
                                  setDeleteConfirm(true);
                                  setDeleteProductId(product.id);
                                }}
                              >
                                <i className="ti ti-trash" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body mx-auto">
            <nav>
              <ul className="pagination pagination-rounded pagination-boxed mb-0">
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => {
                      if (pages > 0) {
                        setPages(pages - 1);
                      }
                    }}
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">«</span>
                  </button>
                </li>
                {button}
                <li className="page-item">
                  <button
                    className="page-link"
                    aria-label="Next"
                    onClick={() => {
                      if (pages < totalPage) {
                        setPages(pages + 1);
                      }
                    }}
                  >
                    <span aria-hidden="true">»</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          {toastMessage && deleteSuccessMessage}
        </div>

        <Offcanvas />
      </div>
    </>
  );
};
export default ListProducts;
