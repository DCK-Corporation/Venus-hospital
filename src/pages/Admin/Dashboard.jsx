import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Newspaper, FileText, Settings, Image as ImageIcon, LogOut, User as UserIcon } from "lucide-react";
import { NewsManager } from "@/components/admin/NewsManager";
import { ServicesManager } from "@/components/admin/ServicesManager";
import { MediaManager } from "@/components/admin/MediaManager";
import { SettingsManager } from "@/components/admin/SettingsManager";
import { toast } from "sonner";

const Dashboard = () => {
    const [session, setSession] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session) {
                navigate("/admin/login");
            } else {
                setSession(session);
            }
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session) {
                navigate("/admin/login");
            } else {
                setSession(session);
            }
        });

        return () => subscription.unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        toast.success("Logged out successfully");
        navigate("/");
    };

    if (!session) return null;

    return (
        <Layout>
            <div className="container mx-auto py-10 px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold font-heading text-foreground">Admin Dashboard</h1>
                        <p className="text-muted-foreground flex items-center gap-2">
                            <UserIcon className="h-4 w-4" />
                            {session.user.email}
                        </p>
                    </div>
                    <Button variant="destructive" onClick={handleLogout} className="flex items-center gap-2 shadow-md">
                        <LogOut className="h-4 w-4" />
                        Logout
                    </Button>
                </div>

                <Tabs defaultValue="news" className="space-y-6">
                    <TabsList className="bg-muted p-1 rounded-xl shadow-inner w-full md:w-auto h-auto flex flex-wrap">
                        <TabsTrigger value="news" className="flex-1 md:flex-none py-3 px-6 rounded-lg gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                            <Newspaper className="h-4 w-4" />
                            Manage News
                        </TabsTrigger>
                        <TabsTrigger value="services" className="flex-1 md:flex-none py-3 px-6 rounded-lg gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                            <FileText className="h-4 w-4" />
                            Services
                        </TabsTrigger>
                        <TabsTrigger value="images" className="flex-1 md:flex-none py-3 px-6 rounded-lg gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                            <ImageIcon className="h-4 w-4" />
                            Media
                        </TabsTrigger>
                        <TabsTrigger value="settings" className="flex-1 md:flex-none py-3 px-6 rounded-lg gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                            <Settings className="h-4 w-4" />
                            Settings
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="news" className="animate-in fade-in duration-300">
                        <NewsManager />
                    </TabsContent>

                    <TabsContent value="services" className="animate-in fade-in duration-300">
                        <ServicesManager />
                    </TabsContent>

                    <TabsContent value="images" className="animate-in fade-in duration-300">
                        <MediaManager />
                    </TabsContent>

                    <TabsContent value="settings" className="animate-in fade-in duration-300">
                        <SettingsManager />
                    </TabsContent>
                </Tabs>
            </div>
        </Layout>
    );
};

export default Dashboard;
