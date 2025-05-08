export const clerkConfig = {
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  signInOptions: {
    // Only show email/password and phone/OTP options
    firstFactorOptions: {
      emailAddress: {
        enabled: true,
      },
      phoneNumber: {
        enabled: true,
      },
      // Disable other options
      username: {
        enabled: false,
      },
      web3Wallet: {
        enabled: false,
      },
    },
    // Disable social sign-ins
    socialProviderStrategies: [],
  },
};
