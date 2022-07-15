import React from 'react'
import User from './user'

const Users = ({ users, ...rest }) => {
  const handleDelete = (userId) => {
    console.log(userId)
    // setUsers((prevState) => prevState.filter((user) => user._id !== userId))
  }

  // const renderPhrase = (num) => {
  //   const lastOne = Number(num.toString().slice(-1))
  //   if (num > 4 && num < 15) return 'человек'
  //   if ([2, 3, 4].indexOf(lastOne) >= 0) return 'человека'
  //   if (lastOne === 1) return 'человек'
  //   return 'человек'
  // }

  const onDelete = (id) => {
    console.log('fromUsers', id)
  }

  return (
    <>
      {/* <span className={"badge bg-" + (users.length ? "primary" : "danger") + " fs-4"}>
           {users.length
            ? `${users.length} ${renderPhrase(users.length)} тусанет с тобой сегодня`
            : 'Никто с тобой не тусанет'          
          } 
        </span> */}
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User user={user} key={user._id} onDelete={onDelete} />
            ))}
          </tbody>
        </table>
      )}
    </>
  )
  //   const [users, setUsers] = useState(api.users.fetchAll())

  // const handleDelete = (userId) => {
  //   setUsers((prevState) => prevState.filter((user) => user._id !== userId))
  // }

  // const renderPhrase = (num) => {
  //   const lastOne = Number(num.toString().slice(-1))
  //   if (num > 4 && num < 15) return 'человек'
  //   if ([2, 3, 4].indexOf(lastOne) >= 0) return 'человека'
  //   if (lastOne === 1) return 'человек'
  //   return 'человек'
  // }

  // const getBadgeClasses = (color) => {
  //   return 'badge m-1 bg-' + color
  // }

  //     return (
  //       <>
  //         <span className={"badge bg-" + (users.length ? "primary" : "danger") + " fs-4"}>
  //           {users.length
  //             ? `${users.length} ${renderPhrase(users.length)} тусанет с тобой сегодня`
  //             : 'Никто с тобой не тусанет'
  //           }
  //         </span>
  //         {users.length > 0 && (
  //           <table className="table">
  //           <thead>
  //             <tr>
  //               <th scope="col">Имя</th>
  //               <th scope="col">Качества</th>
  //               <th scope="col">Профессия</th>
  //               <th scope="col">Встретился, раз</th>
  //               <th scope="col">Оценка</th>
  //               <th />
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {users.map((user) => (
  //               <tr key={user._id}>
  //                 <td>{user.name}</td>
  //                 <td>
  //                   {user.qualities.map((quality) => (
  //                     <span className={getBadgeClasses(quality.color)} key={quality._id}>
  //                       {quality.name}
  //                     </span>
  //                   ))}
  //                 </td>
  //                 <td>{user.profession.name}</td>
  //                 <td>{user.completedMeetings}</td>
  //                 <td>{user.rate} / 5</td>
  //                 <td>
  //                   <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>
  //                     Удалить
  //                   </button>
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //         )}
  //       </>
  //     )
}

export default Users
