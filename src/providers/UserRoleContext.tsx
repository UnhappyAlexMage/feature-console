import { createContext, useContext, useState, type ReactNode } from "react";
import type { UserRole } from "../entities/featureFlag/model/types";

type UserRoleContextValue = {
    userRole: UserRole,
    setUserRole: (UserRole: UserRole) => void;
}

const AuthContext = createContext<UserRoleContextValue | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [userRole, setUserRole] = useState<UserRole>("viewer");

    return(
        <AuthContext.Provider value={{ userRole, setUserRole }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const contextRole = useContext(AuthContext);
    if(!contextRole) {
        throw new Error("useAuth must be used wethin AuthContext");
    }

    return contextRole;
}