import { useState, useEffect } from "react";
import { mediaApi } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Upload, Trash2, Copy, Image as ImageIcon } from "lucide-react";

export const MediaManager = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        setLoading(true);
        try {
            const data = await mediaApi.list();
            setFiles(data || []);
        } catch (error) {
            console.error("Error fetching files:", error);
            toast.error("Failed to load media library");
        } finally {
            setLoading(false);
        }
    };

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        try {
            await mediaApi.upload(file);
            toast.success("File uploaded successfully");
            fetchFiles();
        } catch (error) {
            toast.error(error.message);
        } finally {
            setUploading(false);
            e.target.value = "";
        }
    };

    const handleDelete = async (fileName) => {
        if (!confirm("Are you sure you want to delete this file?")) return;

        try {
            await mediaApi.remove(fileName);
            toast.success("File deleted");
            fetchFiles();
        } catch (error) {
            toast.error(error.message);
        }
    };

    const copyUrl = (url) => {
        navigator.clipboard.writeText(url);
        toast.success("URL copied to clipboard");
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-heading font-bold">Media Library</h3>
                    <p className="text-muted-foreground text-sm">Upload and manage images for the website</p>
                </div>
                <div className="relative">
                    <Input
                        type="file"
                        className="hidden"
                        id="file-upload"
                        onChange={handleUpload}
                        disabled={uploading}
                        accept="image/*"
                    />
                    <Label
                        htmlFor="file-upload"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer shadow-md transition-all ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
                        {uploading ? "Uploading..." : "Upload Photo"}
                    </Label>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <Loader2 className="h-10 w-10 animate-spin text-primary" />
                </div>
            ) : files.length === 0 ? (
                <div className="text-center py-20 bg-muted/20 rounded-xl border-2 border-dashed border-muted">
                    <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No photos found. Upload your first photo!</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {files.map((file) => (
                        <Card key={file.name} className="overflow-hidden group hover:shadow-lg transition-all border-muted">
                            <div className="aspect-square relative overflow-hidden bg-muted flex items-center justify-center">
                                <img src={file.url} alt={file.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                    <Button size="icon" variant="secondary" className="h-8 w-8" onClick={() => copyUrl(file.url)}>
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                    <Button size="icon" variant="destructive" className="h-8 w-8" onClick={() => handleDelete(file.name)}>
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <CardContent className="p-2">
                                <p className="text-[10px] text-muted-foreground truncate" title={file.name}>{file.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};
