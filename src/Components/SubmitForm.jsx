import Wrapper from "./wrapper";
import Offcanvas from "./offcanvas";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const SubmitForm = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({
    Name: "",
    Version: "",
    Brand: "",
    Color: "",
    Catalogue: "",
    Price: "",
    Size: "",
    Gender: "",
    Quantity: "",
    Image: "",
    Type: "",
  });
  useEffect(() => {
    if (id) {
      axios
        .get(`https://684e8519f0c9c9848d285a09.mockapi.io/Shoe/${id}`)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducts((product) => ({ ...product, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !products.Name ||
      !products.Version ||
      !products.Brand ||
      !products.Color ||
      !products.Catalogue ||
      !products.Price ||
      !products.Size ||
      !products.Gender ||
      !products.Type ||
      !products.Quantity
    ) {
      alert("Hãy điền đủ các thông tin sản phẩm!");
      return;
    }
    const [a, seta] = useState("");
    try {
      if (id) {
        axios
          .put(
            `https://684e8519f0c9c9848d285a09.mockapi.io/Shoe/${id}`,
            products
          )
          .then(() => alert("Câp nhật sản phẩm thành công!"))
          .catch(() => alert("Cập nhật sản phẩm không thành công!"));
      } else {
        await axios.post(
          "https://684e8519f0c9c9848d285a09.mockapi.io/Shoe",
          products
        );
        alert("Thêm sản phẩm thành công!");
      }

      setProducts({
        Name: "",
        Version: "",
        Brand: "",
        Color: "",
        Catalogue: "",
        Price: "",
        Size: "",
        Gender: "",
        ID: "",
        Quantity: "",
        Image: "",
      });
    } catch (error) {
      alert(
        id ? "Cập nhật sản phẩm không thành công" : "Lỗi khi thêm sản phẩm"
      );
    }
  };
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://684e8519f0c9c9848d285a09.mockapi.io/CATALOGUE")
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }, []);
  //b1: tạo useState để thay đổi trạng thái của sản phẩm, từ đối tượng rỗng => setProduct
  //b2: tạo hàm để thu dữ liệu, dùng onChange để thu thập dữ liệu từ các ô input, set giá trị vào các biến qua e.target
  //b3: gán các giá trị từ biến vào name:value trong product thông qua setProduct từ useState
  //b4: dùng thư viện axios để gửi yêu cầu post lên API
  //b5: clear form sau khi đã up thành công, để chuẩn bị cho lần up tiếp theo
  //Lưu ý: đặt onSubmit trên form, hàm này sẽ tương tác trực tiếp đến nút trong form (nếu nút không ghi thuộc tính hoặc có type='submit'), chỉ đặt hàm này trong 1 form duy nhất

  return (
    <div>
      <Wrapper />
      <div className="page-content  ">
        <div className="page-container">
          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-4 ">
                <div class="card">
                  <div class="card-header border-bottom border-dashed d-flex align-items-center">
                    <h4 class="header-title">Tải lên hình ảnh</h4>
                  </div>
                  <div class="card-body">
                    <div
                      action="/"
                      method="post"
                      class="dropzone"
                      id="myAwesomeDropzone"
                      data-plugin="dropzone"
                      data-previews-container="#file-previews"
                      data-upload-preview-template="#uploadPreviewTemplate"
                    >
                      <div class="fallback">
                        <input
                          name="Image"
                          onChange={handleChange}
                          type="file"
                          multiple
                        />
                      </div>

                      <div class="dz-message needsclick">
                        <i class="ti ti-cloud-upload h1 text-muted"></i>
                        <h4>Thả tập tin vào đây hoặc nhấp để tải lên.</h4>
                        <span class="text-muted fs-13"></span>
                      </div>
                    </div>

                    <div
                      class="dropzone-previews mt-3"
                      id="file-previews"
                    ></div>
                  </div>
                </div>
                <div class="d-none" id="uploadPreviewTemplate">
                  <div class="card mt-1 mb-0 shadow-none border">
                    <div class="p-2">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <img
                            data-dz-thumbnail
                            src="#"
                            class="avatar-sm rounded bg-light"
                            alt=""
                          />
                        </div>
                        <div class="col ps-0">
                          <a
                            href="javascript:void(0);"
                            class="text-muted fw-medium"
                            data-dz-name
                          ></a>
                          <p class="mb-0" data-dz-size></p>
                        </div>
                        <div class="col-auto">
                          <a
                            href=""
                            class="btn btn-link btn-lg text-muted"
                            data-dz-remove
                          >
                            <i class="ti ti-x"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 card ">
                <div className="row ">
                  <div className="card-header border-bottom border-dashed d-flex align-items-center">
                    <h4 className="header-title px-2">Thông tin sản phẩm</h4>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="card-body">
                      <div className="needs-validation" noValidate="">
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustom03"
                          >
                            Tên sản phẩm
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom03"
                            placeholder="Adidas"
                            name="Name"
                            value={id ? products.Name : ""}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Please provide a valid city.
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustom02"
                          >
                            Version
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom02"
                            placeholder="ASDJAI8834"
                            required=""
                            name="Version"
                            value={id ? products.Version : ""}
                            onChange={handleChange}
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustomUsername"
                          >
                            Thương hiệu
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              id="validationCustomUsername"
                              aria-describedby="inputGroupPrepend"
                              required=""
                              placeholder="Adidas"
                              name="Brand"
                              value={id ? products.Brand : ""}
                              onChange={handleChange}
                            />
                            <div className="invalid-feedback">
                              Please choose a username.
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustom03"
                          >
                            Màu sắc
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustom03"
                            required=""
                            placeholder="Red,Black,..."
                            name="Color"
                            value={id ? products.Color : ""}
                            onChange={handleChange}
                          />
                          <div className="invalid-feedback">
                            Please provide a valid city.
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="example-select" class="form-label">
                            Catalogue
                          </label>
                          <select
                            class="form-select"
                            id="example-select"
                            name="Catalogue"
                            value={id ? products.Catalogue : ""}
                            onChange={handleChange}
                          >
                            {category.map((cata) => (
                              <option style={{ color: "black" }}>
                                {cata.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card-body">
                      <div className="needs-validation" noValidate="">
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustom01"
                          >
                            Giá
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="$9000"
                            required=""
                            name="Price"
                            value={id ? products.Price : ""}
                            onChange={handleChange}
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustom02"
                          >
                            Size
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="validationCustom02"
                            placeholder="35,36,37,..."
                            required=""
                            name="Size"
                            value={id ? products.Size : ""}
                            onChange={handleChange}
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustomUsername"
                          >
                            Giới tính
                          </label>
                          <div className="input-group">
                            <input
                              class="form-select"
                              id="example-select"
                              name="Gender"
                              value={id ? products.Gender : ""}
                              onChange={handleChange}
                            >
                              {/* <option>Nam</option>
                              <option>Nữ</option>
                              <option>Unisex</option> */}
                            </input>
                            <div className="invalid-feedback">
                              Please choose a username.
                            </div>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustom01"
                          >
                            Type
                          </label>
                          <input
                            type="string"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="1,2,3,4,..."
                            required=""
                            name="Type"
                            value={id ? products.Type : ""}
                            onChange={handleChange}
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </div>
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="validationCustom01"
                          >
                            Số lượng
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="1000"
                            required=""
                            name="Quantity"
                            value={id ? products.Quantity : ""}
                            onChange={handleChange}
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body ">
                  <button className="btn btn-primary col-lg-12" type="submit">
                    Submit form
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Offcanvas />
    </div>
  );
};
export default SubmitForm;
