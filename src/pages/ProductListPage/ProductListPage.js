import { NavLink } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actions from "../../actions/index";

const ProductListPage = (props) => {
  let products = useSelector((state) => state.products);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.actFetchProductsRequest());
  }, []);

  let showProducts = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} />;
      });
    }
    return result;
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <NavLink to={"/product/add"} className="btn btn-info mb-3">
        Thêm Sản Phẩm
      </NavLink>
      <ProductList>{showProducts(products)}</ProductList>
    </div>
  );
};

export default ProductListPage;
