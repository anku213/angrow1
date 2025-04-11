"use client";

import { useEffect, useState } from "react";

type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
};

export default function TasksPage() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  };

  const toggleStatus = async (id: string, status: boolean) => {
    await fetch(`/api/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: !status }),
    });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>All Users</h1>

      <ul>
        {users.map((item) => (
          <li key={item._id}>
            <strong>{item.name}</strong> - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
