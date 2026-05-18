import type React from "react";
import Loading from "@/shared/components/Loading";
import NotFound from "@/shared/components/NotFoundItem";

interface ListDefaultProps<T> {
  list?: T[];
  renderItem: (item: T) => React.ReactNode;
  loadingMessage?: string;
  emptyMessage?: string;
}

export default function ListDefault<T>({
  list,
  renderItem,
  loadingMessage = "Cargando elementos...",
  emptyMessage = "No hay elementos disponibles.",
}: ListDefaultProps<T>) {
  if (!list) {
    return <Loading message={loadingMessage} />;
  }

  if (list.length === 0) {
    return <NotFound message={emptyMessage} />;
  }

  return <>{list.map(renderItem)}</>;
}
