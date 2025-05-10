
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const AdminSetup = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const makeAdmin = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      
      const { error } = await supabase
        .from("profiles")
        .update({ role: "admin" })
        .eq("id", user.id);
      
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "You are now an admin! Refresh the page to see admin features.",
      });
      
      setIsOpen(false);
    } catch (error) {
      console.error("Error setting admin role:", error);
      toast({
        title: "Error",
        description: "Failed to set admin role. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Setup Admin
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Setup Admin Access</DialogTitle>
            <DialogDescription>
              This will set your account as an admin, giving you access to manage blog posts and other content.
              Only do this if you're the site owner.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)} disabled={loading}>
              Cancel
            </Button>
            <Button onClick={makeAdmin} disabled={loading}>
              {loading ? "Setting up..." : "Make me admin"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminSetup;
