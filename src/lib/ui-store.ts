import { create } from "zustand";

export type ModalKind = "contact" | "devis" | "search" | null;

interface UIState {
  activeModal: ModalKind;
  devisEvent?: string;
  openModal: (kind: Exclude<ModalKind, null>, opts?: { devisEvent?: string }) => void;
  closeModal: () => void;
}

export const useUI = create<UIState>((set) => ({
  activeModal: null,
  devisEvent: undefined,
  openModal: (kind, opts) =>
    set({ activeModal: kind, devisEvent: opts?.devisEvent }),
  closeModal: () => set({ activeModal: null, devisEvent: undefined }),
}));
