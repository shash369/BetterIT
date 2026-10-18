import { Stack, useRouter } from "expo-router";
import "../../global.css";
import React, { useEffect } from "react";
import { AuthProvider } from "../../lib/auth-context";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const isAuth = false;

  useEffect(() => {
    if (!isAuth) {
      router.replace("/auth");
    }
  });

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <AuthProvider>
        <RouteGuard>
          <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
          </Stack>
      </RouteGuard>
    </AuthProvider>
  );
}