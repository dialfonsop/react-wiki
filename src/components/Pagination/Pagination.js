import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center my-4 gap-4"
      nextLabel="next >"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      previousLabel="< previous"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="btn btn-primary"
      previousLinkClassName="btn btn-primary"
      nextClassName="btn btn-primary"
      nextLinkClassName="btn btn-primary"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
      pageCount={info?.pages}
      onPageChange={(data)=>{
          setPageNumber(data.selected + 1);
      }}
    />
  );
};

export default Pagination;
