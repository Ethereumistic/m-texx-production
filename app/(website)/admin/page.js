"use client";

import { useSession } from "next-auth/react";
import AdminNav from "@/components/adminNav";


export default function Admin() {
  const { data: session, status } = useSession({
    required: true,
  });

  if(status === "loading") {
    return <></>
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <AdminNav />
      This is a protected page.
    </div>
  );
}