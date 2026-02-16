"use client";

import { Spin } from "antd";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function XacThucPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const domain = process.env.NEXT_PUBLIC_DB_URL
  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");

    if (!accessToken || !refreshToken) {
      router.replace(`${domain}/api/auth/google`);
      return;
    }

    document.cookie = [
      `access_token=${accessToken}`,
      "path=/",
      "max-age=3600",
      "samesite=lax",
    ].join("; ");

    document.cookie = [
      `refresh_token=${refreshToken}`,
      "path=/",
      "max-age=604800",
      "samesite=lax",
    ].join("; ");

    window.history.replaceState({}, "", "/");

    router.replace("/");
  }, []);

  return <div style={{display:"flex", justifyContent:'center', alignItems:'center', height:'100vh'}}><Spin size="large"/></div>;
}
