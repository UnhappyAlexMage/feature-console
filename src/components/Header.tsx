import type { Environment, UserRole } from "../entities/featureFlag/model/types";
import { useEnvironment } from "../providers/EnvironmentContext";
import { useAuth } from "../providers/UserRoleContext";
import icon from "../../src/assets/images/icon.png"

const environments: Environment[] = ["dev", "stage", "prod"];
const roles: UserRole[] = ["viewer", "editor", "admin"];

export const Header = () => {
    const { environment, setEnvironment } = useEnvironment();
    const { userRole, setUserRole } = useAuth();
    return (
        <div className="container mx-auto px-0 h-full flex justify-between items-center">
                <div className="flex items-center justify-items-center">
                    <img className="w-14 h-14 rounded-xl shadow-lg transition-all hover:scale-105 hover:shadow-xl" src={icon} alt="Logo" />
                    <h1>Fake FeatureConsole</h1>
                </div>
                <div className="flex ">
                    <div className="flex items-center justify-center text-center mr-3 gap-3 px-4 py-3 bg-gray-800 rounded-lg border border-cyan-900/30 shadow-lg shadow-cyan-950/20">
                        {/* <div className="w-6 h-6 bg-linear-to-b mt-2 from-cyan-400 to-cyan-500 rounded-full shadow-lg shadow-cyan-500/30 animate-pulse" /> */}
                        <h1 className="text-lg font-semibold bg-linear-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent tracking-tight">Env:</h1>
                        <select
                            name="environment"
                            value={environment}
                            onChange={(e) => setEnvironment(e.target.value as Environment)}
                            className=" mt-3.5 px-4 py-2 rounded-lg border border-cyan-700/50 bg-gray-900 text-cyan-100 font-medium 
                                        shadow-sm hover:border-cyan-500 hover:bg-gray-800 focus:outline-none focus:ring-2 
                                        focus:ring-cyan-400 focus:border-transparent transition-all cursor-pointer min-w-35
                                        backdrop-blur-sm bg-linear-to-b from-gray-900/90 to-gray-800/90"
                        >
                            {environments.map((env) => (
                            <option className="bg-gray-900 text-cyan-100 py-1 hover:bg-gray-800" key={env} value={env}>
                                {env.toUpperCase()}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center justify-center text-center gap-3 px-4 py-3 bg-gray-800 rounded-lg border border-cyan-900/30 shadow-lg shadow-cyan-950/20">
                        <h1 className="text-lg font-semibold bg-linear-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent tracking-tight">Roles:</h1>
                        <select 
                            value={userRole}
                            onChange={(e) => setUserRole(e.target.value as UserRole)}
                            className="mt-3.5 px-4 py-2 rounded-lg border border-cyan-700/50 bg-gray-900 text-cyan-100 font-medium 
                                        shadow-sm hover:border-cyan-500 hover:bg-gray-800 focus:outline-none focus:ring-2 
                                        focus:ring-cyan-400 focus:border-transparent transition-all cursor-pointer min-w-35
                                        backdrop-blur-sm bg-linear-to-b from-gray-900/90 to-gray-800/90"
                        >
                            {roles.map((role) => (
                                <option className="bg-gray-900 text-cyan-100 py-1 hover:bg-gray-800" key={role} value={role}>
                                    {role.toUpperCase()}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
        </div>
    );
}