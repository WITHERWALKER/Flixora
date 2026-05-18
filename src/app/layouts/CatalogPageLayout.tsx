import {
  cloneElement,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

import HeaderSections from "@/shared/components/HeaderSections";

import Button from "@/shared/ui/Button";
import Modal from "@/shared/ui/Modal";

interface ModalFormProps {
  onClose?: () => void;
}

interface CatalogPageLayoutProps {
  title: string;
  modalTitle: string;
  form: ReactElement<ModalFormProps>;
  action?: ReactNode;
  description?: string;
  children?: ReactNode;
}

export default function CatalogPageLayout({
  title,
  modalTitle,
  form,
  action,
  description,
  children,
}: CatalogPageLayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="flex flex-col gap-6">
      <HeaderSections
        sectionTitle={title}
        description={description}
        action={
          <div className="flex flex-wrap gap-4">
            {action}

            <Button
              size="sm"
              type="button"
              onClick={() => setIsModalOpen(true)}
            >
              Add {title}
            </Button>
          </div>
        }
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      >
        {cloneElement(form, {
          onClose: () => setIsModalOpen(false),
        })}
      </Modal>

      <div className="space-y-6">{children}</div>
    </section>
  );
}
