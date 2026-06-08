import { Menu, X } from "lucide-react";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";

const navlinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#exprience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
            }`}
        >
            <nav className="w-full max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* LOGO */}
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    TH<span>..</span>
                </a>

                {/* DESKTOP NAV */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navlinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA BUTTON */}
                <div className="hidden md:block">
                    <Button size="sm">Contact Me</Button>
                </div>

                {/* MOBILE MENU BUTTON */}
                <div
                    className="md:hidden p-2 text-foreground cursor-pointer z-50"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </nav>

            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
                <div className="md:hidden w-full glass-strong animate-fade-in border-t border-border">
                    <div className="px-6 py-4 flex flex-col gap-3 w-full">

                        {navlinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="text-lg text-muted-foreground hover:text-foreground py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}

                        <Button className="w-full">
                            Contact Me
                        </Button>

                    </div>
                </div>
            )}
        </header>
    );
};