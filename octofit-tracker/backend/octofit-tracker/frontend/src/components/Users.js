import React, { useEffect, useState } from 'react';

const Users = () => {
  const [data, setData] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace
    ? `https://${codespace}-8000.app.github.dev/api/users/`
    : '/api/users/';

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Users API endpoint:', endpoint);
        console.log('Fetched data:', results);
      });
  }, [endpoint]);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {data.map((user, idx) => (
          <li key={idx}>{user.name} - {user.email} ({user.team})</li>
        ))}
      </ul>
    </div>
  );
};
export default Users;
