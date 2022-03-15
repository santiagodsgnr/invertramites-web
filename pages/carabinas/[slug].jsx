import React from "react";
import { useRouter } from "next/router";

export default function slug() {
  const router = useRouter();
  const { slug } = router.query;
  return <div>{slug}</div>;
}
