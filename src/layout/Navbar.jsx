import { useEffect, useState } from "react";
import { Button } from "../components/Button";

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
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* HEADER */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
                    }`}
            >
                <nav className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between overflow-x-hidden">

                    {/* LOGO */}
                    <a
                        href="#"
                        className="text-xl font-bold tracking-tight hover:text-primary shrink-0"
                    >
                        TH<span>..</span>
                    </a>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center">
                        <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                            {navlinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface whitespace-nowrap"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA BUTTON */}
                    <div className="hidden md:block shrink-0">
                        <Button size="sm">Contact Me</Button>
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        type="button"
                        className="md:hidden p-2 shrink-0 z-50"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    >
                        ☰
                    </button>

                </nav>
            </header>

            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-x-0 top-[64px] w-full max-w-full overflow-x-hidden glass-strong border-t border-border z-40">

                    <div className="px-6 py-4 flex flex-col gap-3 w-full">

                        {navlinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="block text-lg text-muted-foreground hover:text-foreground py-2"
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
        </>
    );
};