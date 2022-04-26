const ProductList = (props) => {
  return (
    <div className="table-panel">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 className="h3-bgc mb-3">Danh Sách Sản Phẩm</h3>
        </div>
        <div class="panel-body">
          {/* table */}
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Mã</th>
                <th scope="col">Tên</th>
                <th scope="col">Giá</th>
                <th scope="col">Trạng Thái</th>
                <th scope="col">Hành Động</th>
              </tr>
            </thead>
            <tbody>{props.children}</tbody>
          </table>
          {/* table */}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
