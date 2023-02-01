import React from 'react'

const Pagination = ({usersPerPage,totalUsers,paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers/usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
    <ul className='pagination'>
      {pageNumbers.map(number => (
        <li key={number} className='pagination-item'>
          <a onClick={() => paginate(number)} href='https://userdetailsapp.netlify.app/' className='page-link'>
            {number}
          </a>
        </li>
      ))}
    </ul>
  </nav>
  )
}

export default Pagination