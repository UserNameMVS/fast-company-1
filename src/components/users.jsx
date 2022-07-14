import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId))
  }

  const renderPhrase = (num) => {
    const lastOne = Number(num.toString().slice(-1))
    if (num > 4 && num < 15) return 'человек'
    if ([2, 3, 4].indexOf(lastOne) >= 0) return 'человека'
    if (lastOne === 1) return 'человек'
    return 'человек'
  }

  const getBadgeClasses = (color) => {
    return 'badge m-1 bg-' + color
  }

  if (!users.length) {
    return <span className="badge bg-danger fs-4">Никто с тобой не тусанет</span>
  } else {
    return (
      <>
        <span className="badge bg-primary fs-4">
          {users.length} {renderPhrase(users.length)} тусанет с тобой сегодня
        </span>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((quality) => (
                    <span className={getBadgeClasses(quality.color)} key={quality._id}>
                      {quality.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate} / 5</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}

export default Users
