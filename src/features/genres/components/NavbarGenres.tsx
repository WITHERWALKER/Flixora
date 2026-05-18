import { NavLink } from "react-router";

const genres = [
  { label: "All Popular", to: "/movies" },
  { label: "Action", to: "/movies?genre=action" },
  { label: "Comedy", to: "/movies?genre=comedy" },
  { label: "Adventure", to: "/movies?genre=adventure" },
  { label: "Horror", to: "/movies?genre=horror" },
  { label: "Documentary", to: "/movies?genre=documentary" },
  { label: "Romance", to: "/movies?genre=romance" },
  { label: "Animation", to: "/movies?genre=animation" },
];

export default function NavbarGenres() {
  return (
    <nav aria-label="Browse genres">
      <ul className="flex flex-wrap gap-3">
        {genres.map((genre) => (
          <li key={genre.label}>
            <NavLink
              to={genre.to}
              className={({ isActive }) =>
                `inline-flex rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "border-support-500 bg-support-600 text-white shadow-[0_18px_48px_-24px_rgba(15,119,114,0.34)]"
                    : "border-surface-200 bg-white/90 text-surface-800 hover:border-support-300 hover:bg-support-50 hover:text-support-800"
                }`
              }
            >
              {genre.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
