interface LoadingPageProps {
  message?: string;
}

export default function LoadingPage({ message }: LoadingPageProps) {
  return (
    <section
      className="mx-auto flex w-full flex-col items-center justify-center gap-4"
      aria-live="polite"
    >
      <p className="text-2xl font-black text-surface-900">{message}</p>
    </section>
  );
}
