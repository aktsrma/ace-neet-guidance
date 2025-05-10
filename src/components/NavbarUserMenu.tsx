
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const NavbarUserMenu = () => {
  const { user, signOut, loading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    const checkUserRole = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();
          
        if (error) throw error;
        setIsAdmin(data?.role === "admin");
      } catch (error) {
        console.error("Error checking user role:", error);
      }
    };
    
    checkUserRole();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <Button variant="ghost" size="sm" disabled>Loading...</Button>;
  }

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link to="/login">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
        </Link>
        <Link to="/signup">
          <Button size="sm">
            Sign up
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
            {user.email?.charAt(0).toUpperCase()}
          </div>
          <span className="hidden md:inline">
            {user.email?.split('@')[0]}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {isAdmin && (
          <>
            <DropdownMenuItem asChild>
              <Link to="/admin" className="w-full cursor-pointer">
                Admin Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarUserMenu;
