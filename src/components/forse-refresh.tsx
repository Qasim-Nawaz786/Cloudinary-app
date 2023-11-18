"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
export const Forserefresh = () => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  return <></>;
};
