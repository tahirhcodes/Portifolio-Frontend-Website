import { ArrowRight } from "lucide-react"
import { Button } from "../components/Button"

const skills = [
    "HTML",
    "CSS",
    "HTML 5",
    "Tailwind CSS",
    "React",
    "JavaScript",

];


export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* bg  */}

            <div className="absolute inset-0">
                <img src="/b-g.avif" alt="Hero image" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* green dots  */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full opacity-40"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}vw`,
                            top: `${Math.random() * 100}vh`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `{Math.random() * }5s`,
                        }}
                    />
                ))}
            </div>

            {/* content  */}

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* left column - text content  */}

                    <div className="space-y-6">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Frontend . Developer
                            </span>
                        </div>

                        <div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in animation-delay-100">
                                Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                experience with
                                <br />
                                <span className="font-serif font-normal text-white">precision</span>
                            </h1 >
                            <p className="text-lg font-serif text-muted-foreground max-w-lg animate-fade-in animation-delay-300 mt-4">Hi, I'am Tahir Hussain - a Frontend web Developer specializing in HTML, HTML 5, CSS, Js, React and Tailwind css. I build scalable, performant websites that user love
                            </p>
                        </div>

                        {/* CTA  */}
                        <div className="animate-fade-in animation-delay-300">
                            <Button size="lg" >
                                Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                    {/* right column - profile img  */}

                    <div className="relative animate-fade-in animation-delay-300">

                        {/* profile img  */}
                        <div className="relative max-w-md mx-auto">
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img src="tahir.png" alt="tahir" className="w-full aspec-[4/5] object-cover rounded-2xl" />


                                {/* Floating badge */}

                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">Available for work</span>
                                    </div>
                                </div>
                                {/* stats badge */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-2xl font-bold text-primary">
                                        1+
                                        <div className="text-xs text-muted-foreground">Years Exp</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* skills */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee ">
                            {[...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}