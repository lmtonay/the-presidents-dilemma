"use client";

import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";
import getActionButtons, { ActionButtons } from "@/data/actionButtons";

interface ActionsStore {
    actions: ActionButtons;
    setActions: (actions: ActionButtons) => void;
    refreshActions: () => void;
}

const useActionsStore = createStore<ActionsStore>((set) => ({
    actions: getActionButtons(),
    setActions: (actions) => {
        set({ actions })
    },
    refreshActions: () => {
        set({ actions: getActionButtons() })

    },
}));

const useActions = () => useStore(useActionsStore);

export default useActions;
export const actionsStore = useActionsStore;
