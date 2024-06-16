import { create } from "zustand";

import type { TranslationState } from "../types/store/translations";
import { useTranslationStore } from "./translation.store";

export const useCombinedStore = create<TranslationState>()((...a) => ({
  ...useTranslationStore(...a),
}));

export const { getInitialState, getState, setState, subscribe } =
  useCombinedStore;
