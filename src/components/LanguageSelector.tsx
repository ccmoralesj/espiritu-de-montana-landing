"use client"

import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { CO, US, FR, FlagComponent } from "country-flag-icons/react/3x2";

type Language = {
  code: string
  label: string
  Component: FlagComponent;
}

const LANGUAGES: Language[] = [
  { code: "es", label: "Español", Component: CO },
  // { code: "en", label: "English", Component: US },
  // { code: "fr", label: "Français", Component: FR },
]

export function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState<Language>(LANGUAGES[0]) // 🇨🇴 default

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex text-secondary border-secondary items-center gap-2">
          <currentLang.Component className="w-5 h-5" title={currentLang.label} />
          <span>{currentLang.label}</span>
          <ChevronDown className="" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setCurrentLang(lang)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <lang.Component className="w-5 h-5" title={lang.label} />
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
