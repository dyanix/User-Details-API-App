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
          <button onClick={() => paginate(number)} className='page-link'>{number}</button>
        </li>
      ))}
    </ul>
  </nav>
  )
}

export default Pagination