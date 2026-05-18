import NotFoundImage from "@/assets/NotFound.png";

interface NotFoundItemProps {
  message: string;
}

export default function NotFoundItem({ message }: NotFoundItemProps) {
  return (
    <section className="surface-panel flex w-full items-center justify-center gap-4 rounded-md p-4">
      <img src={NotFoundImage} alt="" aria-hidden="true" className="w-44" />
      <p className="text-xl font-bold text-surface-900">{message}</p>
    </section>
  );
}
