import { useState, useRef, useEffect } from "react";
import {Link} from "react-router-dom";
import { Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SearchIcon() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // This is a mock function to simulate fetching suggestions
    // In a real application, you would replace this with an API call
    const fetchSuggestions = (query: string) => {
      const mockSuggestions = [
        "T-shirts",
        "Jeans",
        "Dresses",
        "Shoes",
        "Accessories",
      ];
      return mockSuggestions.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
    };

    if (searchQuery) {
      setSuggestions(fetchSuggestions(searchQuery));
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>

      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div ref={searchRef} className="container mx-auto">
            <div className="relative mt-4">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            {suggestions.length > 0 && (
              <ul className="mt-2 rounded-md border bg-background shadow-md">
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-muted">
                    <Link
                      to={`/search?q=${encodeURIComponent(suggestion)}`}
                      onClick={() => setIsSearchOpen(false)}
                    >
                      {suggestion}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}
