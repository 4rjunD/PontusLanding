"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
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
                                    {item.href ? (
                                        <NavigationMenuLink asChild>
                                            <Link href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                                                <Button variant="ghost">{item.title}</Button>
                                            </Link>
                                        </NavigationMenuLink>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-10">
                                                            Book a call today
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                            >
                                                                <span>{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
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
                    <Button variant="outline" asChild>
                        <a href="https://form.typeform.com/to/rtxDJzOL" target="_blank" rel="noopener noreferrer">
                            Get Early Access
                        </a>
                    </Button>
                    <Button asChild>
                        <a href="https://cal.com/arjun-dixit-0nwkzi/30min" target="_blank" rel="noopener noreferrer">
                            Book a Demo
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
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                onClick={(e) => handleLinkClick(e, item.href)}
                                                className="flex justify-between items-center"
                                            >
                                                <span className="text-lg">{item.title}</span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                            </Link>
                                        ) : (
                                            <p className="text-lg">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="flex justify-between items-center"
                                                >
                                                    <span className="text-muted-foreground">
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1" />
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            ))}
                            <div className="pt-4 border-t flex flex-col gap-2">
                                <Button variant="outline" asChild className="w-full">
                                    <a href="https://form.typeform.com/to/rtxDJzOL" target="_blank" rel="noopener noreferrer">
                                        Get Early Access
                                    </a>
                                </Button>
                                <Button asChild className="w-full">
                                    <a href="https://cal.com/arjun-dixit-0nwkzi/30min" target="_blank" rel="noopener noreferrer">
                                        Book a Demo
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