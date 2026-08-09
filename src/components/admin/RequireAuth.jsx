import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { authApi } from "@/lib/api";

// Wraps admin routes: checks the session cookie via /api/auth/me before
// rendering children, so an unauthenticated user never sees a flash of
// the dashboard while the check is in flight.
export function RequireAuth({ children }) {
    const [status, setStatus] = useState("checking"); // checking | authed | anon

    useEffect(() => {
        authApi
            .me()
            .then(() => setStatus("authed"))
            .catch(() => setStatus("anon"));
    }, []);

    if (status === "checking") {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
        );
    }

    if (status === "anon") {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
}
