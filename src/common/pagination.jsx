import React from "react";
import _ from "lodash";
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, activePage } = props;

  const pagesCount = Math.ceil( itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const page = _.range(1, pagesCount + 1);
  

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {page.map((page) => (
          <li key = {page} className={page === activePage ? 'page-item active' : 'page-item'}>
            {/* eslint-disable-next-line */}
            <a className="page-link" onClick={() => onPageChange(page)}>
            {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>  
  );
};

Pagination.propTypes = {
  itemsCount : PropTypes.number.isRequired, 
  pageSize: PropTypes.number.isRequired, 
  onPageChange : PropTypes.func, 
  activePage : PropTypes.number.isRequired
}

export default Pagination;
