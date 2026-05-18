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
                    ? "border-2 border-surface-900 bg-brand-500 text-white shadow-[3px_3px_0_#2b2c34]"
                    : "border-2 border-surface-900 bg-surface-50 text-surface-900 hover:bg-support-300"
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
