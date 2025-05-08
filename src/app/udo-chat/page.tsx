"use server";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import UdoChat from "@/pages/UdoChat";

export default async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }
  return <UdoChat />;
}
