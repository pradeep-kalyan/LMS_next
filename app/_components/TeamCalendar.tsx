"use client";
import React, { useState } from "react";
import {
  Calendar,
  Users,
  Clock,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface TeamCalendarProps {
  teamData: {
    currentUser: any;
    teamMembers: any[];
    subordinates: any[];
    upcomingLeaves: any[];
    todayDate: Date;
  };
}

const TeamCalendar: React.FC<TeamCalendarProps> = ({ teamData }) => {
  const { currentUser, teamMembers, subordinates, upcomingLeaves, todayDate } =
    teamData;
  const [viewMode, setViewMode] = useState<"day" | "week" | "month">("day");
  const [currentDate, setCurrentDate] = useState(new Date(todayDate));

  const onLeaveToday = teamMembers.filter(
    (member) => member.leave_requests && member.leave_requests.length > 0
  );

  const availableToday = teamMembers.filter(
    (member) => !member.leave_requests || member.leave_requests.length === 0
  );

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getLeaveTypeColor = (leaveType: string) => {
    const colors = {
      SICK: "bg-red-100 text-red-800",
      CASUAL: "bg-blue-100 text-blue-800",
      PAID: "bg-green-100 text-green-800",
      ANNUAL: "bg-purple-100 text-purple-800",
      PERSONAL: "bg-yellow-100 text-yellow-800",
      MATERNITY: "bg-pink-100 text-pink-800",
      PATERNITY: "bg-indigo-100 text-indigo-800",
      BEREAVEMENT: "bg-gray-100 text-gray-800",
      LWP: "bg-orange-100 text-orange-800",
    };
    return colors[leaveType] || "bg-gray-100 text-gray-800";
  };

  // Week view helpers
  const getWeekDates = (date: Date) => {
    const week = [];
    const startOfWeek = new Date(date);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day;
    startOfWeek.setDate(diff);

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }
    return week;
  };

  // Month view helpers
  const getMonthDates = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    const endDate = new Date(lastDay);

    // Adjust to start from Sunday
    startDate.setDate(startDate.getDate() - startDate.getDay());
    // Adjust to end on Saturday
    endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));

    const dates = [];
    const current = new Date(startDate);

    while (current <= endDate) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return dates;
  };

  const getLeaveForDate = (date: Date, members: any[]) => {
    const dateStr = date.toDateString();
    return members.filter(
      (member) =>
        member.leave_requests &&
        member.leave_requests.some((leave) => {
          const startDate = new Date(leave.start_date);
          const endDate = new Date(leave.end_date);
          return date >= startDate && date <= endDate;
        })
    );
  };

  const navigateDate = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);

    if (viewMode === "day") {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 1 : -1));
    } else if (viewMode === "week") {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7));
    } else if (viewMode === "month") {
      newDate.setMonth(newDate.getMonth() + (direction === "next" ? 1 : -1));
    }

    setCurrentDate(newDate);
  };

  const renderDayView = () => (
    <>
      {/* Team Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3">
            <Users className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Total Team Members</p>
              <p className="text-2xl font-bold text-gray-900">
                {teamMembers.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3">
            <AlertCircle className="h-6 w-6 text-red-600" />
            <div>
              <p className="text-sm text-gray-500">On Leave Today</p>
              <p className="text-2xl font-bold text-red-600">
                {onLeaveToday.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3">
            <Clock className="h-6 w-6 text-green-600" />
            <div>
              <p className="text-sm text-gray-500">Available Today</p>
              <p className="text-2xl font-bold text-green-600">
                {availableToday.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subordinates Section */}
      {subordinates && subordinates.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            My Team Members ({subordinates.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subordinates.map((subordinate) => {
              const isOnLeave =
                subordinate.leave_requests &&
                subordinate.leave_requests.length > 0;
              return (
                <div
                  key={subordinate.id}
                  className={`border rounded-lg p-4 ${
                    isOnLeave
                      ? "bg-red-50 border-red-200"
                      : "bg-green-50 border-green-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isOnLeave ? "bg-red-200" : "bg-green-200"
                      }`}
                    >
                      <span
                        className={`font-semibold ${
                          isOnLeave ? "text-red-700" : "text-green-700"
                        }`}
                      >
                        {subordinate.first_name[0]}
                        {subordinate.last_name[0]}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        {subordinate.first_name} {subordinate.last_name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {subordinate.role?.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {subordinate.department?.name}
                      </p>
                      {isOnLeave && subordinate.leave_requests[0] && (
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getLeaveTypeColor(
                            subordinate.leave_requests[0].leave_type.name
                          )}`}
                        >
                          {subordinate.leave_requests[0].leave_type.name}
                        </span>
                      )}
                      <div
                        className={`text-xs font-medium mt-1 ${
                          isOnLeave ? "text-red-600" : "text-green-600"
                        }`}
                      >
                        {isOnLeave ? "On Leave" : "Available"}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* On Leave Today */}
      {onLeaveToday.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            On Leave Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {onLeaveToday.map((member) => (
              <div key={member.id} className="border rounded-lg p-4 bg-red-50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center">
                    <span className="text-red-700 font-semibold">
                      {member.first_name[0]}
                      {member.last_name[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {member.first_name} {member.last_name}
                    </p>
                    <p className="text-sm text-gray-500">{member.role.name}</p>
                    {member.leave_requests[0] && (
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${getLeaveTypeColor(
                          member.leave_requests[0].leave_type.name
                        )}`}
                      >
                        {member.leave_requests[0].leave_type.name}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upcoming Leaves */}
      {upcomingLeaves.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Upcoming Leaves (Next 7 Days)
          </h2>
          <div className="space-y-3">
            {upcomingLeaves.map((leave) => (
              <div
                key={leave.id}
                className="border rounded-lg p-4 bg-yellow-50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center">
                      <span className="text-yellow-700 font-semibold">
                        {leave.user.first_name[0]}
                        {leave.user.last_name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {leave.user.first_name} {leave.user.last_name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {leave.start_date.toLocaleDateString()} -{" "}
                        {leave.end_date.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getLeaveTypeColor(
                      leave.leave_type.name
                    )}`}
                  >
                    {leave.leave_type.name}
                  </span>
                </div>
                {leave.reason && (
                  <p className="mt-2 text-sm text-gray-600 italic">
                    "{leave.reason}"
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );

  const renderWeekView = () => {
    const weekDates = getWeekDates(currentDate);

    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Week View</h2>
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-gray-700 p-2"
            >
              {day}
            </div>
          ))}
          {weekDates.map((date) => {
            const onLeave = getLeaveForDate(date, teamMembers);
            const isToday = date.toDateString() === todayDate.toDateString();

            return (
              <div
                key={date.toDateString()}
                className={`border rounded-lg p-2 min-h-[120px] ${
                  isToday ? "bg-blue-50 border-blue-300" : "bg-gray-50"
                }`}
              >
                <div
                  className={`text-center font-semibold mb-2 ${
                    isToday ? "text-blue-600" : "text-gray-900"
                  }`}
                >
                  {date.getDate()}
                </div>
                <div className="space-y-1">
                  {onLeave.slice(0, 3).map((member) => (
                    <div
                      key={member.id}
                      className="text-xs bg-red-100 text-red-800 rounded px-1 py-0.5 truncate"
                      title={`${member.first_name} ${member.last_name} - ${member.leave_requests[0]?.leave_type.name}`}
                    >
                      {member.first_name[0]}.{member.last_name}
                    </div>
                  ))}
                  {onLeave.length > 3 && (
                    <div className="text-xs text-gray-500">
                      +{onLeave.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderMonthView = () => {
    const monthDates = getMonthDates(currentDate);
    const currentMonth = currentDate.getMonth();

    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <div className="grid grid-cols-7 gap-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-gray-700 p-2"
            >
              {day}
            </div>
          ))}
          {monthDates.map((date) => {
            const onLeave = getLeaveForDate(date, teamMembers);
            const isToday = date.toDateString() === todayDate.toDateString();
            const isCurrentMonth = date.getMonth() === currentMonth;

            return (
              <div
                key={date.toDateString()}
                className={`border rounded p-1 min-h-[80px] ${
                  isToday
                    ? "bg-blue-50 border-blue-300"
                    : isCurrentMonth
                    ? "bg-white"
                    : "bg-gray-100"
                }`}
              >
                <div
                  className={`text-xs font-semibold mb-1 ${
                    isToday
                      ? "text-blue-600"
                      : isCurrentMonth
                      ? "text-gray-900"
                      : "text-gray-400"
                  }`}
                >
                  {date.getDate()}
                </div>
                <div className="space-y-0.5">
                  {onLeave.slice(0, 2).map((member) => (
                    <div
                      key={member.id}
                      className="text-xs bg-red-100 text-red-700 rounded px-1 truncate"
                      title={`${member.first_name} ${member.last_name}`}
                    >
                      {member.first_name[0]}.{member.last_name[0]}
                    </div>
                  ))}
                  {onLeave.length > 2 && (
                    <div className="text-xs text-gray-500">
                      +{onLeave.length - 2}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Calendar className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Team Calendar
              </h1>
              <p className="text-gray-600">{formatDate(currentDate)}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Welcome,</p>
            <p className="font-semibold text-gray-900">
              {currentUser?.first_name} {currentUser?.last_name}
            </p>
            <p className="text-sm text-gray-500">{currentUser?.role?.name}</p>
            {subordinates && subordinates.length > 0 && (
              <p className="text-xs text-blue-600 mt-1">
                Managing {subordinates.length} team member
                {subordinates.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>
        </div>

        {/* View Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigateDate("prev")}
              className="p-2 rounded-lg border hover:bg-gray-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setCurrentDate(new Date(todayDate))}
              className="px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg"
            >
              Today
            </button>
            <button
              onClick={() => navigateDate("next")}
              className="p-2 rounded-lg border hover:bg-gray-50"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            {(["day", "week", "month"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
                  viewMode === mode
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic View Content */}
      {viewMode === "day" && renderDayView()}
      {viewMode === "week" && renderWeekView()}
      {viewMode === "month" && renderMonthView()}
    </div>
  );
};

export default TeamCalendar;
