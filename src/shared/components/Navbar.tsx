import { NavLink } from "react-router";

import { Bell, Search } from "lucide-react";

const navigation = [
  { label: "Home", path: "/" },
  { label: "Movies", path: "/movies" },
  { label: "Series", path: "/series" },
  { label: "Kids", path: "/kids" },
  { label: "My List", path: "/my-list" },
];

export default function Navbar() {
  return (
    <header className="border-b border-surface-200 bg-white/90 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-14">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-surface-950 text-lg font-black italic text-white shadow-[0_16px_40px_-22px_rgba(21,25,38,0.55)] ring-2 ring-accent-300/70">
              F
            </span>

            <span className="text-2xl font-bold italic text-surface-950">
              Flixora
            </span>
          </NavLink>

          <ul className="flex flex-wrap items-center gap-4 lg:gap-6">
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `
                  rounded-full px-3 py-2 text-lg font-medium transition-all duration-200
                  hover:bg-support-50 hover:text-support-800
                  ${isActive ? "bg-brand-50 text-brand-700" : "text-surface-700"}
                  `
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-6 self-end lg:self-auto">
          <button
            type="button"
            aria-label="Search in Flixora"
            className="rounded-full p-2 text-surface-700 transition-colors hover:bg-support-50 hover:text-support-800"
          >
            <Search />
          </button>

          <button
            type="button"
            aria-label="Open notifications"
            className="rounded-full p-2 text-surface-700 transition-colors hover:bg-support-50 hover:text-support-800"
          >
            <Bell />
          </button>

          <button
            type="button"
            aria-label="Open user profile"
            className="rounded-full ring-2 ring-transparent transition-all hover:ring-accent-300"
          >
            <img
              src="https://media.glamour.mx/photos/65b096f13756393e0200c63d/16:9/w_2560%2Cc_limit/que-significa-tu-foto-de-perfil.jpg"
              alt="User profile"
              className="size-10 rounded-full object-cover"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
