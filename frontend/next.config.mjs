import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: false,
  cacheOnFrontEndNav: true,
  workboxOptions: {
    disableDevLogs: true
  }
});

export default withPWA({
  eslint: {
    ignoreDuringBuilds: true,
  },
});