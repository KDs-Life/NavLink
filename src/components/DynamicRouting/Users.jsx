import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Users() {
  const [User, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        setUser(response.data);
      });
  }, [userId]);

  if (!User) return <p>Wait a second ...!</p>;

  return (
    <div>
      <h2>Users</h2>
      <p>Username: {User.username}</p>
      <p>Name: {User.name}</p>
      <p>Email: {User.email}</p>
      <p>
        Adress: {User.address.city}, {User.address.street},{" "}
        {User.address.zipcode}
      </p>
    </div>
  );
}

export default Users;
