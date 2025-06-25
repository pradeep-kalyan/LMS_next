// app/_components/sidebar.tsx
"use client";
import Link from "next/link";
import { logout } from "../actions/auth/logout";
import { usePathname } from "next/navigation";

type SidebarProps = {
  role: string;
};

const roleLinks: Record<string, { name: string; path: string }[]> = {
  admin: [
    { name: "Home", path: "/admin/homepage" },
    { name: "All Leave Requests", path: "/admin/homepage/requests/all" },
    { name: "Manage Users", path: "/admin/homepage/users" },
    { name: "Manage Departments", path: "/admin/homepage/departments" },
    { name: "Manage Leave Types", path: "/admin/homepage/leavemanage" },
    { name: "View Roles", path: "/admin/homepage/roles" },
  ],
  manager: [
    { name: "Home", path: "/manager/homepage" },
    { name: "Request Leave", path: "/manager/homepage/requests" },
    { name: "View Status", path: "/manager/homepage/status" },
    { name: "All Leave Requests", path: "/manager/homepage/requests/all" },
  ],
  hr: [
    { name: "Home", path: "/hr/homepage" },
    { name: "Request Leave", path: "/hr/homepage/requests" },
    { name: "View Status", path: "/hr/homepage/status" },
    { name: "All Leave Requests", path: "/hr/homepage/requests/all" },
    { name: "Manage Users", path: "/hr/homepage/users" },
  ],
  employee: [
    { name: "Home", path: "/employee/homepage" },
    { name: "Request Leave", path: "/employee/homepage/request" },
    { name: "Leave Information", path: "/employee/homepage/view" },
  ],
};

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const links = roleLinks[role?.toLowerCase()] || [];

  return (
    <aside className="w-1/5 min-h-screen bg-white/10 backdrop-blur-xl border-r border-white/20 shadow-2xl p-6 flex flex-col items-center gap-8 text-white">
      <h1 className="text-xl font-bold tracking-wide text-center mb-4">
        Leave Portal
      </h1>
      <ul className="space-y-4 w-full">
        {links.map((link, i) => {
          const isActive = pathname === link.path;
          return (
            <li key={i}>
              <Link
                href={link.path}
                className={`block w-full px-4 py-3 rounded-xl hover:bg-white/10 text-white/80 hover:text-white transition-all text-center ${
                  isActive ? "bg-blue-400 text-white" : "text-black"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center items-end">
        <button
          onClick={logout}
          className="cursor-pointer bg-teal-600 px-8 py-2 rounded-2xl w-full justify-center items-end flex"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
