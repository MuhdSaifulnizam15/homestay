"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SUPPORTED_LOCALES } from "@/constants";
// import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = SUPPORTED_LOCALES.includes(segments[0])
    ? segments[0]
    : "ms";

  const handleChange = (locale: string) => {
    const newPath =
      SUPPORTED_LOCALES.includes(segments[0])
        ? [locale, ...segments.slice(1)].join("/")
        : [locale, ...segments].join("/");

    router.push(`/${newPath}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          {/* <Globe size={16} className="text-muted-foreground" /> */}
          {currentLocale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-content" align="start">
        <DropdownMenuRadioGroup
          value={currentLocale}
          onValueChange={(locale) => handleChange(locale)}
        >
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ms">Bahasa Melayu</DropdownMenuRadioItem>
          {/* <DropdownMenuRadioItem value="cn">中文</DropdownMenuRadioItem> */}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LanguageSwitcher };
