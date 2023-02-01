import React, { useEffect, useState } from 'react'
import Details from './components/Details'
import Pagination from './components/Pagination'
import "./App.css"


const App = () => {
  const [users, setUsers] = useState([]);
  const [currentPage,setCurrentPage] =  useState(1);
  const [usersPerPage] = useState(2);

  useEffect(() => {
    fetchData();
    

  }, [])

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      })

  }
  console.log(users);

const indexOfLastUser = currentPage * usersPerPage ;
const indexOfFirstUser = indexOfLastUser - usersPerPage ;
const currentUsers = users.slice(indexOfFirstUser,indexOfLastUser);



const paginate = pageNumber => setCurrentPage(pageNumber);





  return (
    <>
      <h1>Details </h1>
      <div>    
        {
          currentUsers.map((user) => (
            <Details 
             id={user.id}
             key={user.id} 
             name={user.name} 
             email={user.email} 
             address={user.address.city}
             address1={user.address.street}
             phone={user.phone}
             zipcode={user.address.zipcode} 
             username={user.username}
             website={user.website} 
             company={user.company.name}
             description={user.company.catchPhrase}/>
          ))
        }
      </div>
      <Pagination  totalUsers={users.length} 
                usersPerPage={usersPerPage} 
                paginate={paginate} 
                currentPage={currentPage} 
    />
    </>
  )
}

export default App