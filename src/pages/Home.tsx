"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/NewsLetter";
import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Home = () => {
  const { user, isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    const addUser = async () => {
      if (!user) return;

      console.log("Clerk User:", user);

      const isPhoneVerified = user.phoneNumbers?.[0]?.verification?.status === "verified";
      const isEmailVerified = user.emailAddresses?.[0]?.verification?.status === "verified";

      let verificationStatus = "UNVERIFIED";

      if (isPhoneVerified && isEmailVerified) {
        verificationStatus = "VERIFIED";
      } else if (isPhoneVerified) {
        verificationStatus = "PHONE_VERIFIED";
      } else if (isEmailVerified) {
        verificationStatus = "EMAIL_VERIFIED";
      }

      console.log("Verification Status:", verificationStatus);

      let signUpType = "PHONE";
      const googleSignUp = user.externalAccounts?.[0]?.provider === "google";

      if (googleSignUp) {
        signUpType = "GOOGLE";
      }

      console.log("Signup Type:", signUpType);
      try {
        await axios.post("/api/user/create", {
          id: user.id,
          phone: user.phoneNumbers?.[0]?.phoneNumber || null,
          email: user.emailAddresses?.[0]?.emailAddress || null,
          type: signUpType,
          status: verificationStatus,
        });
        console.log("User Added or Updated successfully");
        toast.success("Login success");
      } catch (error) {
        console.log("Error adding user", error);
        toast.error("Login Failed :(");
      }
    };

    if (isLoaded && isSignedIn) {
      addUser();
    }
  }, [user, isLoaded, isSignedIn]);

  return (
    <div>
      <Navbar />
      <Hero />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
