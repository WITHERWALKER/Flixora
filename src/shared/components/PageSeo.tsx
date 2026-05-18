import { useEffect } from "react";

interface PageSeoProps {
  title: string;
  description: string;
}

const DEFAULT_TITLE = "Flixora";

export default function PageSeo({ title, description }: PageSeoProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | ${DEFAULT_TITLE}`;

    let metaDescription = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;

    const shouldCreateMeta = !metaDescription;

    if (shouldCreateMeta) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    if (metaDescription) {
      metaDescription.content = description;
    }

    return () => {
      document.title = previousTitle || DEFAULT_TITLE;
    };
  }, [description, title]);

  return null;
}
