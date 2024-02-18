"use client";

import Live from "../components/Live";
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />

      <a href="https://www.youtube.com/watch?v=oKIThIihv60&t=445s">Video Tutorial. 1:45:45</a>

      <section className="flex h-full flex-row">
        <Live />
      </section>
    </main>
  );
}
