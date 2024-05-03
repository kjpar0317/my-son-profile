"use client";

import { useState, useEffect } from "react";

export default function TestPage() {
  const [data, setData] = useState();

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const res = await fetch(`/api/test`);
    const result = await res.json();
    // Pass data to the page via props
    console.log(result);
    return setData(result);
  }

  return <div>test</div>;
}
