
import { useState, useEffect } from 'react';


function Dashboard() {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (user) {
      setUserInfo(user);
    }
  }, []);

  const Logout = () => {
    localStorage.removeItem('userInfo');
    window.location.href = '/';
  };

  return (
    <div>
      {userInfo ? (
        <>
          <h2>Welcome {userInfo.name}</h2>
          <h3>Email: {userInfo.email}</h3>
          <img src={userInfo.picture} alt="profile" />
          <button onClick={Logout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;