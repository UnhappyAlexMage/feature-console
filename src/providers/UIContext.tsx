import { createContext, useContext, useState, type ReactNode } from "react";

type UIContextState = {
    isCreateModalOpen: boolean,
    openCreateModal: () => void,
    closeCreateModal: () => void,
};

const UIContext = createContext<UIContextState | null>(null);

export const UIProvider = ({ children } : { children: ReactNode }) => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    return (
        <UIContext.Provider
            value={{
                isCreateModalOpen,
                openCreateModal: () => setIsCreateModalOpen(true),
                closeCreateModal: () => setIsCreateModalOpen(false),
            }}
        >
            { children }
        </UIContext.Provider>
    )
};

export const useUI = () => {
    const context = useContext(UIContext);
    if(!context) {
        throw new Error('useUI error');
    };

    return context;
};