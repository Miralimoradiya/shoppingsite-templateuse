import React from 'react';
import { Link } from 'react-router-dom';

const PaginationCard = ({ currentPage, totalPages, pageLinks }) => {
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  const handlePageClick = (e) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <ul className="pagination pagination-lg justify-content-end">
      {pageNumbers.map(page => (
        <li key={page} className={`page-item ${currentPage === page ? 'disabled' : ''}`}>
          <Link 
            className={`page-link rounded-0 ${currentPage === page ? 'active' : 'text-dark'} shadow-sm border-top-0 border-left-0`} 
            to={pageLinks[page - 1]} 
            tabIndex={currentPage === page ? "-1" : undefined}
            onClick={handlePageClick} 
          >
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PaginationCard;
