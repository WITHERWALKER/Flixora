import CatalogPageLayout from "@/app/layouts/CatalogPageLayout";

import AddMovieForm from "@/features/movies/components/AddMovieForm";
import EmptyState from "@/shared/components/EmptyState";
import PageSeo from "@/shared/components/PageSeo";

export default function SeriesPage() {
  return (
    <>
      <PageSeo
        title="Series"
        description="Organize and expand your Flixora series catalog from a single section."
      />

      <CatalogPageLayout
        title="Series"
        modalTitle="Add Series"
        description="Create a dedicated place for episodic content while keeping the same editorial workflow."
        form={<AddMovieForm />}
      >
        <EmptyState
          title="Series catalog coming soon"
          description="This section is ready for the same reusable catalog patterns already used in movies."
        />
      </CatalogPageLayout>
    </>
  );
}
