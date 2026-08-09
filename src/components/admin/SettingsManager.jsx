import { useState, useEffect } from "react";
import { settingsApi } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Save } from "lucide-react";

export const SettingsManager = () => {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [settings, setSettings] = useState({
        hospital_name: "Venus Hospital (Pvt) Ltd",
        founding_year: "2014",
        phone_primary: "+94 36 2222 096",
        phone_secondary: "+94 36 2222 064",
        email: "Venusprivatehospital@gmail.com",
        address: "55A Colombo Road, Avissawella, Sri Lanka",
        operating_hours: "Hospital: 6am-10pm | OPD: 8am-8pm",
        tagline: "Trusted Care, Compassionate Healing."
    });

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        setLoading(true);
        try {
            const data = await settingsApi.get();
            if (data && Object.keys(data).length > 0) {
                setSettings((prev) => ({ ...prev, ...data }));
            }
        } catch (error) {
            console.error("Error fetching settings:", error);
            toast.error("Failed to load settings");
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);

        try {
            await settingsApi.update(settings);
            toast.success("Settings saved successfully");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-xl font-heading font-bold">General Settings</h3>
                <p className="text-muted-foreground text-sm">Update high-level information displayed across the site</p>
            </div>

            <form onSubmit={handleSave}>
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-lg">Contact & Identity</CardTitle>
                        <CardDescription>Basic hospital details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="hospital_name">Hospital Name</Label>
                                <Input
                                    id="hospital_name"
                                    value={settings.hospital_name}
                                    onChange={(e) => setSettings({ ...settings, hospital_name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="founding_year">Founding Year</Label>
                                <Input
                                    id="founding_year"
                                    value={settings.founding_year}
                                    onChange={(e) => setSettings({ ...settings, founding_year: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="phone_primary">Primary Phone</Label>
                                <Input
                                    id="phone_primary"
                                    value={settings.phone_primary}
                                    onChange={(e) => setSettings({ ...settings, phone_primary: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={settings.email}
                                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="operating_hours">Operating Hours</Label>
                                <Input
                                    id="operating_hours"
                                    value={settings.operating_hours}
                                    onChange={(e) => setSettings({ ...settings, operating_hours: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="tagline">Website Tagline</Label>
                            <Input
                                id="tagline"
                                value={settings.tagline}
                                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                                required
                            />
                        </div>

                        <div className="pt-4 border-t flex justify-end">
                            <Button type="submit" disabled={saving} className="min-w-[150px]">
                                {saving ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Save className="mr-2 h-4 w-4" />
                                        Save Settings
                                    </>
                                )}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </div>
    );
};
