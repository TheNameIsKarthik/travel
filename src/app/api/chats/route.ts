import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Define the carousel data structure
const carouselData = [
  {
    name: "Paris, France",
    image: "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg",
    budget: "$2000",
    provider: "TravelCo",
    link: "/paris",
  },
  {
    name: "Tokyo, Japan",
    image: "https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    budget: "$2500",
    provider: "ExploreJapan",
    link: "/tokyo",
  },
  {
    name: "London, UK",
    image: "https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    budget: "$3500",
    provider: "UK itinerary",
    link: "/london",
  },
  {
    name: "Bali, Indonesia",
    image: "https://images.pexels.com/photos/2166643/pexels-photo-2166643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    budget: "$1500",
    provider: "Bali Travel",
    link: "/bali",
  },
  {
    name: "Agra, India",
    image: "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    budget: "$2000",
    provider: "AgraAajao",
    link: "/agra",
  },
  {
    name: "Dubai, UAE",
    image: "https://images.pexels.com/photos/1707310/pexels-photo-1707310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    budget: "$2800",
    provider: "DesertEscape",
    link: "/dubai",
  },
  {
    name: "Rome, Italy",
    image: "https://images.pexels.com/photos/326709/pexels-photo-326709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    budget: "$2400",
    provider: "ItaliaTours",
    link: "/rome",
  },
  {
    name: "Barcelona, Spain",
    image: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    budget: "$2300",
    provider: "BarcelonaTrips",
    link: "/barcelona",
  },
  {
    name: "Bangkok, Thailand",
    image: "https://images.pexels.com/photos/1031780/pexels-photo-1031780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    budget: "$1700",
    provider: "ThaiTrails",
    link: "/bangkok",
  },
];

export async function POST(req: Request) {
  const { userId, title } = await req.json();

  try {
    if (!userId || !title) {
      return NextResponse.json({ success: false, message: "UserId and title are required" }, { status: 400 });
    }

    // Check if the user exists
    const user = await prisma.udoUser.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
    }

    // Create the new chat
    const chat = await prisma.udoChat.create({
      data: {
        title,
        userId,
      },
    });

    const aiMessageContent = "Hi, I can help you plan your trip! Here are some popular destinations.";

    // Save AI message with carousel data in the database
    const welcomeMessage = await prisma.udoMessage.create({
      data: {
        content: aiMessageContent,
        role: "assistant",
        chatId: chat.id,
        carouselData: carouselData,
      },
    });

    return NextResponse.json({ success: true, chat, welcomeMessage }, { status: 201 });
  } catch (error) {
    console.error("Create chat error:", error);
    return NextResponse.json({ success: false, error: "Failed to create chat" }, { status: 500 });
  }
}
