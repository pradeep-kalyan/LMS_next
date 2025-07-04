// app/team-calendar/page.tsx
import React from "react";
import { getTeamCalendar } from "@/app/actions/users/getTeamCalendar";
import TeamCalendar from "@/app/_components/TeamCalendar";
import { redirect } from "next/navigation";

const TeamCalendarPage = async () => {
  const teamData = await getTeamCalendar();

  if (!teamData) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TeamCalendar teamData={teamData} />
    </div>
  );
};

export default TeamCalendarPage;
