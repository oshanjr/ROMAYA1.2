import { useState } from "react";
import { Save, Image as ImageIcon, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AdminCMS() {
  const [activeTab, setActiveTab] = useState("homepage");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Content Management</h2>
          <p className="text-muted-foreground">Manage website content, banners, and static pages.</p>
        </div>
        <Button className="flex items-center gap-2">
          <Save className="h-4 w-4" /> Save Changes
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="homepage">Homepage</TabsTrigger>
          <TabsTrigger value="about">About Us</TabsTrigger>
          <TabsTrigger value="footer">Footer Links</TabsTrigger>
        </TabsList>

        <TabsContent value="homepage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>Update the main banner on the homepage.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hero-title">Main Title</Label>
                <Input id="hero-title" defaultValue="Elevate Your Lifestyle" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hero-subtitle">Subtitle</Label>
                <Textarea 
                  id="hero-subtitle" 
                  defaultValue="Discover our curated collection of premium fashion and modern home essentials." 
                  className="resize-none"
                />
              </div>
              <div className="space-y-2">
                <Label>Background Image</Label>
                <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-muted-foreground hover:bg-muted/50 transition-colors cursor-pointer">
                  <ImageIcon className="h-8 w-8 mb-2 opacity-50" />
                  <p className="font-medium text-sm">Click to upload image</p>
                  <p className="text-xs">1920x1080px recommended</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Featured Categories</CardTitle>
                <CardDescription>Manage the category blocks shown on the homepage.</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Plus className="h-4 w-4" /> Add Block
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: "The Fashion Gallery", subtitle: "Signature Fashion", link: "/category/fashion" },
                { title: "Modern Home Essentials", subtitle: "New Department", link: "/category/home" }
              ].map((block, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 border rounded-lg relative group">
                  <div className="h-16 w-16 bg-muted rounded flex items-center justify-center shrink-0">
                    <ImageIcon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <Label className="text-xs">Title</Label>
                        <Input defaultValue={block.title} className="h-8 text-sm" />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Subtitle/Badge</Label>
                        <Input defaultValue={block.subtitle} className="h-8 text-sm" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Link Destination</Label>
                      <Input defaultValue={block.link} className="h-8 text-sm" />
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About Us Content</CardTitle>
              <CardDescription>Update the text and images on the About page.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="about-heading">Main Heading</Label>
                <Input id="about-heading" defaultValue="Our Story" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="about-content">Content Body</Label>
                <Textarea 
                  id="about-content" 
                  defaultValue="ROMAYA was founded with a simple mission: to bring premium quality fashion and home goods to everyone..." 
                  className="min-h-[200px]"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="footer">
          <Card>
            <CardHeader>
              <CardTitle>Footer Configuration</CardTitle>
              <CardDescription>Manage footer links and company information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company-desc">Company Description</Label>
                <Textarea 
                  id="company-desc" 
                  defaultValue="Premium fashion and home essentials for the modern lifestyle." 
                  className="resize-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input id="contact-email" defaultValue="support@romaya.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Contact Phone</Label>
                  <Input id="contact-phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
