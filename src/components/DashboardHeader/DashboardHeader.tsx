"use client";

import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "../ui/sidebar";

const DashboardHeader = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center gap-4 flex-1 m-2">
      <SidebarTrigger />

      <span className="text-gray-700">
        خوش آمدی، {session?.user?.name || "کاربر"}
      </span>
      <Button
        variant="destructive"
        className="cursor-pointer"
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
      >
        خروج
      </Button>
    </div>
  );
};

export default DashboardHeader;
