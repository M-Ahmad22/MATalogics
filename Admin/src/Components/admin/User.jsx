import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Trash2 } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL; // your backend URL

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/auth/users`);
      setUsers(res.data);
    } catch (err) {
      setError("Error fetching users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete user
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`${API_URL}/api/auth/users/${id}`);
      setUsers(users.filter((u) => u._id !== id));
    } catch (err) {
      alert("Error deleting user");
    }
  };

  return (
    <div className="h-auto w-full flex items-center justify-center p-4 mb-[120px] my-0 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl z-50"
      >
        <div className="rounded-2xl shadow-lg p-8 bg-[#f0f9ff] border border-[#bae6fd]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-[#0b4899] mb-2">
              Registered Users
            </h1>
            <p className="text-[#6b7280]">
              View or delete registered users below
            </p>
          </motion.div>

          {loading && (
            <p className="text-center text-[#6b7280]">Loading users...</p>
          )}
          {error && (
            <div className="mb-4 text-red-600 bg-red-100 border border-red-200 p-2 rounded">
              {error}
            </div>
          )}

          {!loading && users.length === 0 && (
            <p className="text-center text-[#6b7280]">No users found.</p>
          )}

          <div className="overflow-x-auto">
            <table className="min-w-full bg-[#f9fafb] border border-[#e5e7eb] rounded-lg">
              <thead className="bg-[#0045E6] text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Username</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Role</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-t border-[#e5e7eb] hover:bg-[#e0f2fe]"
                  >
                    <td className="py-3 px-4">{user.name}</td>
                    <td className="py-3 px-4">{user.username}</td>
                    <td className="py-3 px-4">{user.email}</td>
                    <td className="py-3 px-4 capitalize">{user.role}</td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <Trash2 className="w-5 h-5 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Users;
