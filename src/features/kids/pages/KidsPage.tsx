import HeaderSections from "@/shared/components/HeaderSections";
import EmptyState from "@/shared/components/EmptyState";
import PageSeo from "@/shared/components/PageSeo";

export default function KidsPage() {
  return (
    <section className="space-y-6">
      <PageSeo
        title="Kids"
        description="A safer and simpler discovery space for family-friendly titles in Flixora."
      />

      <HeaderSections
        sectionTitle="Kids"
        description="Curate a friendlier browsing experience for family audiences and younger viewers."
      />

      <EmptyState
        title="Kids picks will appear here"
        description="Use this area to highlight age-appropriate content, featured collections, and trusted recommendations."
      />
    </section>
  );
}
