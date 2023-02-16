import { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import ModalLoading from "./ModalLoading";

export function openModal() {
  const Modal = lazy(() => import("./modalSetting"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<ModalLoading />}>
      <Modal root={root} title="modal configuraciones" />
    </Suspense>
  );
}

export function openModalAccount() {
  const Modal = lazy(() => import("./modalAccount"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv);
  root.render(
    <Suspense fallback={<ModalLoading />}>
      <Modal root={root} title="modal de tu cuenta" />
    </Suspense>
  );
}
