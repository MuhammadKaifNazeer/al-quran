"use client"

import { Button } from "@/components/ui/button"
import {
    BookOpen,
    Search,
    Settings,
    X,
} from "lucide-react"
import { ScrollArea } from "../ui/scroll-area"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ThemeToggler } from "../ThemeToggler/ThemeToggler"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { UserButton } from "../UserButton/UserButton"
import NavigationLinks from "@/data/navigation"

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="fixed md:hidden top-0 z-10 bg-background px-6 py-2.5 flex items-center justify-between w-full">
                <Link href={'/'}>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                <BookOpen className="size-4" />
                            </div>
                            <span className="font-semibold">AL Quran</span>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center justify-end space-x-4">
                    <div className="">
                        <Search className="h-4 w-4" />
                    </div>
                    <ThemeToggler />
                    <Button
                        variant="ghost"
                        size="icon"
                        className="shrink-0"
                        onClick={toggleSidebar}
                    >
                        <HamburgerMenuIcon className="size-4" />
                        <span className="sr-only">Toggle sidebar</span>
                    </Button>
                </div>
            </div>

            <div
                className={`fixed lg:hidden w-screen h-screen bg-black/70 z-[105]  duration-500  ${isOpen ? "-translate-x-0 opacity-1" : "-translate-x-full opacity-0"
                    }`}
                onClick={() => setIsOpen(false)}
            />

            <div className={`fixed top-0 z-[110] flex h-screen w-64 flex-col bg-background  duration-500 ${isOpen ? "-translate-x-0" : "-translate-x-full"
                }`}>
                <ScrollArea className="flex-1">
                    <div className="flex items-center justify-between">
                        <Link href={'/'}>
                            <div className="flex items-center gap-2 px-6 py-3">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        <BookOpen className="size-4" />
                                    </div>
                                    <span className="font-semibold">AL Quran</span>
                                </div>
                            </div>
                        </Link>
                        <div className="px-3 py-1 md:hidden flex items-center justify-end">
                            <Button
                                className="p-2 h-max w-max"
                                variant={"ghost"}
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <UserButton className="pl-[1.3rem]" />
                    </div>
                    <nav className="p-3">
                        <ul className="space-y-1">
                            {NavigationLinks.mainNav.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.href}>
                                        <Button
                                            variant={`${pathname === item.href ? "secondary" : "ghost"}`}
                                            className="w-full justify-start"
                                        >
                                            <item.icon className="mr-2 h-4 w-4" />
                                            {item.label}
                                        </Button>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </ScrollArea>
                <div className="p-3">
                    {NavigationLinks.secondaryNav.map((item, index) => (
                        <Link key={index} href={item.href}>
                            <Button
                                variant={`${pathname === item.href ? "secondary" : "ghost"}`}
                                className="w-full justify-start"
                            >
                                <item.icon className="mr-2 h-4 w-4" />
                                {item.label}
                            </Button>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
