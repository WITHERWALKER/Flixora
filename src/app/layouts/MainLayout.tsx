import { Outlet } from "react-router";

import Navbar from "@/shared/components/Navbar";

export default function MainLayout() {
  return (
    <div className="surface-app min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-brand-800 focus:ring-4 focus:ring-brand-200"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="mx-auto max-w-5xl px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}
