"use client";

import { useModal } from "@/components/ModalContext";

/** Any button that should open the site-wide enquiry / brochure modal. */
export default function OpenModalButton({ children, className = "", ...rest }) {
  const { openModal } = useModal();
  return (
    <button type="button" onClick={() => openModal()} className={`cursor-pointer ${className}`} {...rest}>
      {children}
    </button>
  );
}
