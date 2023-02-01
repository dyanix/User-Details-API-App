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
          {/* <a onClick={() => paginate(number)} href={`https://userdetailsapp.netlify.app/page/{number}`} className='page-link'>
            {number}
          </a> */}
          {/* <a onClick={() => paginate(number)} href="http://localhost:3000/!#" className='page-link'>
            {number}
          </a> */}
          <button onClick={() => paginate(number)} className='page-link'>{number}</button>
        </li>
      ))}
    </ul>
  </nav>
  )
}

export default Pagination