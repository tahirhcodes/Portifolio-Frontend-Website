import { Code2, Lightbulb, Users, Rocket } from "lucide-react";


const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainable code.",
    },


    {
        icon: Rocket,
        title: " Performance",
        description:
            "Optimizing for speed.",
    },

    {
        icon: Users,
        title: "Collaboration",
        description:
            "Working closely wiht teams.",
    },

    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies.",
    },
]


export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* left column  */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium uppercase tracking-wider">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">Building the future
                            <span className="font-serif font-normal text-white"> One component at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground  animate-fade-in animation-delay-200 ">
                            <p>
                                My name is Tahir Hussain, and I am a passionate Frontend Developer who enjoys building clean, responsive, and user-friendly websites. I focus on turning ideas and designs into real, working interfaces that look good on all devices.

                            </p>

                            <p>
                                I have strong skills in HTML, HTML5, CSS, Tailwind CSS, JavaScript, React, and Bootstrap. I use modern frontend practices to create fast, well-structured, and visually appealing web applications with smooth user experiences.

                            </p>

                            <p>
                                always pay attention to design details, performance, and usability. My goal is to deliver high-quality frontend solutions that help brands and businesses stand out online.

                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 font-medium italic text-foreground">
                            <p>
                                "My mission is to create clean, responsive, and user-friendly web interfaces that combine good design with strong functionality, helping users enjoy smooth and engaging digital experiences".
                            </p>
                        </div>
                    </div>

                    {/* right column  */}

                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) =>
                            <div key={idx} className="glass p-6 rounded-2xl animate-fade-in animation-">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}

                                </h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}