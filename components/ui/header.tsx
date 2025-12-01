"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
    const navigationItems = [
        {
            title: "Home",
            href: "#hero",
            description: "",
        },
        {
            title: "Features",
            href: "#features",
            description: "",
        },
        {
            title: "Compare Routes",
            href: "#compare",
            description: "",
        },
        {
            title: "How It Works",
            href: "#timeline",
            description: "",
        },
    ];

    const [isOpen, setOpen] = useState(false);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                const headerHeight = 80; // Approximate header height
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
            setOpen(false); // Close mobile menu
        }
    };

    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink asChild>
                                        <Link href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                                            <Button variant="ghost">{item.title}</Button>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center items-center">
                    <Link href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="cursor-pointer flex items-center">
                        <Image 
                            src="/PontusLogo.png" 
                            alt="Pontus" 
                            width={120} 
                            height={40}
                            className="h-6 w-auto md:h-8"
                            priority
                            unoptimized
                        />
                    </Link>
                </div>
                <div className="flex justify-end w-full gap-4">
                    <Button variant="outline" asChild className="bg-white text-black border-white hover:bg-gray-100 hover:text-black">
                        <a href="https://form.typeform.com/to/rtxDJzOL" target="_blank" rel="noopener noreferrer">
                            Get Full Early Access
                        </a>
                    </Button>
                    <Button asChild className="bg-white text-black hover:bg-gray-100 hover:text-black">
                        <a href="https://form.typeform.com/to/rtxDJzOL" target="_blank" rel="noopener noreferrer">
                            Sign up for Beta
                        </a>
                    </Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <Link
                                        href={item.href}
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                        className="flex justify-between items-center"
                                    >
                                        <span className="text-lg">{item.title}</span>
                                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                    </Link>
                                </div>
                            ))}
                            <div className="pt-4 border-t flex flex-col gap-2">
                                <Button variant="outline" asChild className="w-full bg-white text-black border-white hover:bg-gray-100 hover:text-black">
                                    <a href="https://form.typeform.com/to/rtxDJzOL" target="_blank" rel="noopener noreferrer">
                                        Get Full Early Access
                                    </a>
                                </Button>
                                <Button asChild className="w-full bg-white text-black hover:bg-gray-100 hover:text-black">
                                    <a href="https://form.typeform.com/to/rtxDJzOL" target="_blank" rel="noopener noreferrer">
                                        Sign up for Beta
                                    </a>
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header };