"use client";
import React, { useState, useEffect } from "react";
import { Calendar1 } from "lucide-react";
import InputBoxprop from "./inputboxprop";
import { requestLeave } from "../actions/leaves/request-leave";
import { usePathname } from "next/navigation";

interface LeaveType {
  id: string;
  name: string;
  max_days_per_request: number;
}

interface LeaveBalance {
  id: string;
  user_id: string;
  leave_type_id: string;
  totalEntitlement: number;
  balance: number;
  used: number;
  pending: number;
  carried_over: number;
}

interface RequestProps {
  leave_type: LeaveType[];
  leave_balance: LeaveBalance[];
}

const Request: React.FC<RequestProps> = ({ leave_type, leave_balance }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedLeaveType, setSelectedLeaveType] = useState("");
  const [numDays, setNumDays] = useState(0);
  const [reason, setReason] = useState("");

  // Calculate leave days excluding weekends
  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (end < start) {
        setNumDays(0);
        return;
      }

      let count = 0;
      const current = new Date(start);
      while (current <= end) {
        const day = current.getDay();
        if (day !== 0 && day !== 6) count++; // Skip weekends
        current.setDate(current.getDate() + 1);
      }
      setNumDays(count > 0 ? count : 0);
    } else {
      setNumDays(0);
    }
  }, [startDate, endDate]);

  const path = usePathname();

  // Derived values
  const selectedBalance =
    leave_balance.find((lb) => lb.leave_type_id == selectedLeaveType)
      ?.balance || 0;

  const selectedLeaveTypeData = leave_type.find(
    (lt) => lt.name === selectedLeaveType
  );
  const maxDaysAllowed = selectedLeaveTypeData?.max_days_per_request || 0;

  const hasBalanceError = selectedLeaveType && numDays > selectedBalance;
  const hasMaxDaysError = selectedLeaveType && numDays > maxDaysAllowed;

  const isFormValid =
    startDate &&
    endDate &&
    selectedLeaveType &&
    numDays > 0 &&
    new Date(startDate) <= new Date(endDate) &&
    !hasBalanceError &&
    !hasMaxDaysError;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const res = await requestLeave({
      startDate,
      endDate,
      selectedLeave: selectedLeaveType,
      numDays,
      reason,
      path
    });
    console.log(res);

    // Reset form
    setStartDate("");
    setEndDate("");
    setNumDays(0);
    setSelectedLeaveType("");
    setReason("");
  };

  return (
    <div className="w-full h-full flex justify-between items-center">
      {/* Form Section */}
      <div className="w-2/3 h-auto flex justify-center items-center gap-5 flex-col p-4">
        <h2 className="text-white text-2xl font-bold">Request Form</h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* Leave Type */}
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
              {leave_type.map((lt) => {
                return (
                  <option key={lt.id} value={lt.name}>
                    {lt.name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Dates */}
          <InputBoxprop
            type="date"
            label="Start Date"
            name="startDate"
            value={startDate}
            onchangefxn={setStartDate}
            icon={Calendar1}
            min={new Date().toISOString().split("T")[0]}
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

          {/* Leave Days + Validation Errors */}
          <div>
            <div className="text-white font-semibold">
              Leave Days (Excluding Weekends): {numDays}
            </div>

            {/* Balance Error */}
            {hasBalanceError && (
              <div className="text-red-500 text-sm font-medium mt-1">
                ❌ You only have {selectedBalance} day(s) left for this leave
                type.
              </div>
            )}

            {/* Max Days Error */}
            {hasMaxDaysError && (
              <div className="text-red-500 text-sm font-medium mt-1">
                ❌ You can only request up to {maxDaysAllowed} day(s) for this
                leave type.
              </div>
            )}
          </div>

          {/* Reason */}
          <label
            className="text-white font-medium tracking-wide"
            htmlFor="reason"
          >
            Reason
          </label>
          <textarea
            name="reason"
            id="reason"
            rows={4}
            className="ring-2 bg-white/40 ring-white rounded-2xl p-5"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className={`bg-white text-red-500 font-bold py-2 px-4 rounded-xl hover:bg-gray-100 transition cursor-pointer ${
              !isFormValid ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isFormValid}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Leave Balances Section */}
      <div className="w-1/3 h-auto flex justify-center items-center flex-col bg-yellow-500 p-6 rounded-2xl shadow-lg">
        <h2 className="text-black text-2xl font-semibold mb-4">
          Leave Balances
        </h2>
        <table className="w-full table-auto text-sm bg-white rounded-xl overflow-hidden shadow-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-black font-semibold">
                Leave Type
              </th>
              <th className="px-4 py-2 text-left text-black font-semibold">
                Balance
              </th>
            </tr>
          </thead>
          <tbody>
            {leave_balance.map((LB: LeaveBalance) => {
              const typeName =
                leave_type.find((lt) => lt.id === LB.leave_type_id)?.name ||
                LB.leave_type_id;
              return (
                <tr key={LB.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-gray-800">{typeName}</td>
                  <td className="px-4 py-2 text-gray-800">{LB.balance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Request;
