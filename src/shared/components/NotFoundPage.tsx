import { Link } from "react-router";
import PageSeo from "@/shared/components/PageSeo";

export default function NotFoundPage() {
  return (
    <section className="surface-card space-y-4 rounded-3xl p-8 text-center">
      <PageSeo
        title="Page Not Found"
        description="The page you are looking for does not exist in Flixora."
      />
      <h1 className="text-3xl font-semibold text-surface-950">Page not found</h1>
      <p className="text-muted">
        The route you requested is not available right now.
      </p>
      <Link
        to="/"
        className="text-lg font-semibold text-brand-700 underline decoration-accent-300 underline-offset-4 transition-colors hover:text-brand-800"
      >
        Back to home
      </Link>
    </section>
  );
}
