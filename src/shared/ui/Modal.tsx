import type { ReactNode } from "react";
import Button from "./Button";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-950/45 p-4 backdrop-blur-sm">
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
        className="surface-elevated relative w-full max-w-lg rounded-3xl p-6"
      >
        <div className="mb-6 flex items-center justify-between">
          {title && (
            <h2 id="modal-title" className="text-xl font-semibold text-surface-950">
              {title}
            </h2>
          )}

          <Button
            type="button"
            size="sm"
            variant="secondary"
            onClick={onClose}
            className="px-3 text-surface-800 hover:text-brand-800"
          >
            <X size={18} />
          </Button>
        </div>

        {children}
      </section>
    </div>
  );
}
