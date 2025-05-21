"use client"
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import * as m from "@/paraglide/messages.js"

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-md sticky p-5 top-0 z-50 flex">
      <div>
        logo
      </div>
      <div className="flex bg-gray-200">
        <Input type="text" color="" className="bg-transparent border-none outline-none" placeholder={m.header_search_placeholder()}  />
        <Search/>
      </div>
      <div>
        actions
      </div>
      <nav>
        <Button className="">
          Hello
          </Button>
      </nav>
    </header>
  );
}