import { NavLink } from "react-router-dom";
import * as actions from "../../actions/index";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  let onDelete = (id) => {
    if (window.confirm("Delete the item?")) {
      dispatch(actions.actDeleteProductRequest(id));
    }
  };

  let { product, index } = props;
  let statusName = product.status ? "Còn Hàng" : "Hết Hàng";
  let statusClass = product.status ? "warning" : "secondary";

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <span class={`badge badge-${statusClass}`}>{statusName}</span>
      </td>
      <td>
        <NavLink
          to={`/product/${product.id}/edit`}
          type="button"
          class="btn btn-success mr-1"
        >
          Sửa
        </NavLink>
        <button
          type="button"
          class="btn btn-danger ml-1"
          onClick={() => {
            onDelete(product.id);
          }}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
