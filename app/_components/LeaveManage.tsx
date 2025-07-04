"use client";

import React, { useState, useTransition } from "react";
import { updateLeaveType } from "@/app/actions/leaves/updateLeaveTypes";

const LM = ({ initialLeaves }) => {
  const [leaves, setLeaves] = useState(initialLeaves);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [isPending, startTransition] = useTransition();

  const handleEdit = (leave) => {
    setEditingId(leave.id);
    setEditData({
      name: leave.name,
      description: leave.description,
      max_days_per_request: leave.max_days_per_request,
      is_Active: leave.is_Active,
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  const handleInputChange = (field, value) => {
    setEditData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (leaveId) => {
    startTransition(async () => {
      try {
        const result = await updateLeaveType(leaveId, editData);

        if (result.success) {
          setLeaves((prev) =>
            prev.map((leave) =>
              leave.id === leaveId ? { ...leave, ...editData } : leave
            )
          );
          setEditingId(null);
          setEditData({});
        } else {
          alert(result.error || "Failed to update leave type");
        }
      } catch (error) {
        console.error("Error updating leave type:", error);
        alert("Error updating leave type");
      }
    });
  };

  return (
    <div className="flex flex-col items-start justify-around p-4">
      <h2 className="text-xl font-bold mb-4">All Leave Types</h2>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-100 text-black">
            <th className="border px-4 py-2">Leave Type</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Max Leaves per Request</th>
            <th className="border px-4 py-2">Is Active</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td className="border px-4 py-2">{leave.name}</td>
              <td className="border px-4 py-2">
                {editingId === leave.id ? (
                  <input
                    type="text"
                    value={editData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    className="w-full px-2 py-1 border border-gray-300 rounded"
                  />
                ) : (
                  leave.description
                )}
              </td>
              <td className="border px-4 py-2">
                {editingId === leave.id ? (
                  <input
                    type="number"
                    value={editData.max_days_per_request}
                    onChange={(e) =>
                      handleInputChange(
                        "max_days_per_request",
                        parseInt(e.target.value)
                      )
                    }
                    className="w-full px-2 py-1 border border-gray-300 rounded"
                    min="1"
                  />
                ) : (
                  leave.max_days_per_request
                )}
              </td>
              <td className="border px-4 py-2">
                {editingId === leave.id ? (
                  <select
                    value={editData.is_Active}
                    onChange={(e) =>
                      handleInputChange("is_Active", e.target.value === "true")
                    }
                    className="w-full px-2 py-1 border border-gray-300 rounded"
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                ) : leave.is_Active ? (
                  "Yes"
                ) : (
                  "No"
                )}
              </td>
              <td className="border px-4 py-2">
                {editingId === leave.id ? (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSubmit(leave.id)}
                      disabled={isPending}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
                    >
                      {isPending ? "Saving..." : "Save"}
                    </button>
                    <button
                      onClick={handleCancel}
                      disabled={isPending}
                      className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleEdit(leave)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LM;
