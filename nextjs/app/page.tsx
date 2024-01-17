"use client";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const [data, setData] = useState("");
  async function handleCLick() {
    const response = await fetch("/api/");

    console.log(response.status);
    const responseData = await response.json();
    setData(responseData.data);
    console.log(responseData.status);
  }
  const id = 1;
  const id_2 = 2;
  return (
    <div className="ml-6">
      <button onClick={handleCLick} className="text-3xl">
        TEST
      </button>
      <br />
      <Link href={`/blog/${id}`}>Link Patrick </Link>
      <br />
      <Link href={`/blog/${id_2}`}>Link Stranger</Link>
      {data ? (
        // Render content when there is data
        <div>
          <h1>Data is available:</h1>
          <p>{JSON.stringify(data)}</p>
        </div>
      ) : (
        // Render alternative content when there is no data
        <div>
          <h1>No data available</h1>
        </div>
      )}
    </div>
  );
}
