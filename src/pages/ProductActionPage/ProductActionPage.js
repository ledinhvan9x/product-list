import NavLink from "react-router-dom/NavLink";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions/index";

const ProductActionPage = (props) => {
  let dispatch = useDispatch();

  useEffect(() => {
    let { match } = props;
    if (match) {
      let id = match.params.id;
      dispatch(actions.actGetProductRequest(id));
    }
  }, []);

  let itemEditing_store = useSelector((state) => state.itemEditing);

  useEffect(() => {
    setProduct_added({
      id: itemEditing_store.id,
      txtName: itemEditing_store.name,
      txtPrice: itemEditing_store.price,
      chkbStatus: itemEditing_store.status,
    });
  }, [itemEditing_store]);

  const [product_added, setProduct_added] = useState({
    id: "",
    txtName: "",
    txtPrice: "",
    chkbStatus: "",
  });

  let onSave = (e) => {
    e.preventDefault();
    let { history } = props;
    let { id, txtName, txtPrice, chkbStatus } = product_added;
    let product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus,
    };
    if (id) {
      dispatch(actions.actUpdateProductRequest(product));
      history.goBack();
    } else {
      dispatch(actions.actAddProductRequest(product));

      history.goBack();
    }
  };

  let onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    setProduct_added((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let { txtName, txtPrice, chkbStatus } = product_added;

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <form onSubmit={onSave}>
        <div className="form-group">
          <label htmlFor>Tên Sản Phẩm: </label>
          <input
            type="text"
            className="form-control"
            name="txtName"
            id
            aria-describedby="emailHelpId"
            placeholder
            value={txtName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor>Giá: </label>
          <input
            type="number"
            className="form-control"
            name="txtPrice"
            id
            aria-describedby="emailHelpId"
            placeholder
            value={txtPrice}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor>Trạng Thái: </label>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                name="chkbStatus"
                id
                value={chkbStatus}
                onChange={onChange}
                checked={chkbStatus}
              />
              Còn Hàng
            </label>
          </div>
        </div>
        <NavLink to={"/product-list"} className="btn btn-danger mr-1">
          Trở Lại
        </NavLink>
        <button type="submit" className="btn btn-primary ml-1">
          Lưu Lại
        </button>
      </form>
    </div>
  );
};

export default ProductActionPage;
