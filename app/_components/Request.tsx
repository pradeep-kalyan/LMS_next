"use client";
import React, { useState, useEffect } from "react";
import { Calendar1 } from "lucide-react";
import InputBoxprop from "./inputboxprop";
import { requestLeave } from "../actions/leaves/request-leave";

interface LeaveType {
  id: string;
  name: string;
}

interface RequestProps {
  leave_type: LeaveType[];
}

const Request: React.FC<RequestProps> = ({ leave_type }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedLeaveType, setSelectedLeaveType] = useState("");
  const [numDays, setNumDays] = useState(0);
  const [reason, setReason] = useState("");

  // Calculate leave days excluding weekends
  // In Request component
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Validate end date is after start date
      if (end < start) {
        setNumDays(0);
        return;
      }

      let count = 0;
      const current = new Date(start);

      while (current <= end) {
        const day = current.getDay();
        if (day !== 0 && day !== 6) {
          // Skip weekends
          count++;
        }
        current.setDate(current.getDate() + 1);
      }

      setNumDays(count > 0 ? count : 0);
    } else {
      setNumDays(0);
    }
  }, [startDate, endDate]);

  const isFormValid =
    startDate &&
    endDate &&
    selectedLeaveType &&
    numDays > 0 &&
    new Date(startDate) <= new Date(endDate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      const res = await requestLeave({
        startDate,
        endDate,
        selectedLeave: selectedLeaveType,
        numDays,
        reason,
      });
      console.log(res);
      setEndDate("");
      setNumDays(0);
      setReason("");
      setSelectedLeaveType("");
      setStartDate("");
    }
  };

  return (
    <div className="w-full h-full flex justify-between items-center">
      <div className="w-2/3 h-auto  flex justify-center items-center gap-5 flex-col p-4">
        <h2 className="text-white text-2xl font-bold">Request Form</h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-white font-medium tracking-wide">
              Leave Type
            </label>
            <select
              value={selectedLeaveType}
              onChange={(e) => setSelectedLeaveType(e.target.value)}
              className="p-2 rounded-xl bg-amber-500 text-white focus:ring-2 focus:ring-white outline-none"
            >
              <option value="">Select leave type</option>
              {leave_type.map((lt) => (
                <option key={lt.id} value={lt.id}>
                  {lt.name}
                </option>
              ))}
            </select>
          </div>

          <InputBoxprop
            type="date"
            label="Start Date"
            name="startDate"
            value={startDate}
            onchangefxn={setStartDate}
            icon={Calendar1}
            min={new Date().toISOString().split("T")[0] || undefined}
          />

          <InputBoxprop
            type="date"
            label="End Date"
            name="endDate"
            value={endDate}
            onchangefxn={setEndDate}
            icon={Calendar1}
            min={startDate || undefined}
          />

          <div className="text-white font-semibold">
            Leave Days (Excluding Weekends): {numDays}
          </div>
          <label htmlFor="">Reason</label>
          <textarea
            name="reason"
            id="reason"
            rows={4}
            className="ring-2 bg-white/40 ring-white rounded-2xl p-5"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-white text-red-500 font-bold py-2 px-4 rounded-xl hover:bg-gray-100 transition cursor-pointer"
            disabled={!isFormValid}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="w-1/3 h-auto flex justify-center items-center gap-5 flex-col bg-yellow-500 p-4">
        <h2 className="text-black text-xl font-semibold">Leave Policy</h2>

      </div>
    </div>
  );
};

export default Request;
