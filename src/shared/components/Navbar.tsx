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
    <header className="border-b-2 border-surface-900 bg-surface-50">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-14">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-md border-2 border-surface-900 bg-brand-500 text-lg font-black text-white shadow-[3px_3px_0_#2b2c34]">
              F
            </span>

            <span className="text-3xl font-black text-surface-900">
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
                  rounded-md border-2 px-3 py-2 text-lg font-bold transition-all duration-200
                  hover:border-surface-900 hover:bg-brand-50 hover:text-brand-700
                  ${isActive ? "border-surface-900 bg-support-300 text-surface-900" : "border-transparent text-surface-900/70"}
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
            className="rounded-md border-2 border-transparent p-2 text-surface-900 transition-colors hover:border-surface-900 hover:bg-brand-50 hover:text-brand-500"
          >
            <Search />
          </button>

          <button
            type="button"
            aria-label="Open notifications"
            className="rounded-md border-2 border-transparent p-2 text-surface-900 transition-colors hover:border-surface-900 hover:bg-brand-50 hover:text-brand-500"
          >
            <Bell />
          </button>

          <button
            type="button"
            aria-label="Open user profile"
            className="rounded-full border-2 border-surface-900 transition-all hover:shadow-[3px_3px_0_#2b2c34]"
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
