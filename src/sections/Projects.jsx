import { ArrowUpRight } from "lucide-react"

const projects = [
    {
        title: "Hero Section",
        description: "A beatiful and user friendly and also responsive hero section of a crpto web site",
        image: "/projects/crpto.png",
        tags: ["HTML", "Tailwind", "JavaScript"],
    },


    {
        title: "Landing page",
        description: "A beatiful and user friendly and also responsive hero section of a crpto web site",
        image: "/projects/doctor.png",
        tags: ["HTML", "Tailwind", "JavaScript"],
    },

    {
        title: "Hero Section",
        description: "A beatiful and user friendly and also responsive hero section of a crpto web site",
        image: "/projects/tech.png",
        tags: ["HTML", "Tailwind", "JavaScript"],
    }
]


export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* section header  */}

                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured work</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Projects that
                        <span className="font-serif font-normal text-white"> make an impact</span>
                    </h2>
                    <p className="text-muted-foreground animated-fade-in animation-delay-200">
                        A selection of my recent work to make interactive and responsive web applications
                    </p>
                </div>


                {/* project grid  */}
                <div className="grid md:grid-cols-2 gap-4">
                    {projects.map((project, idx) => (

                        <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1">
                            {/* image  */}
                            <div className="relative overflow-hidden aspect-video">
                                <img src={project.image} alt={project.title}

                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradiend-to-t from-card via-card/50 to-transparent opacity-60" />



                            </div>


                            {/* content  */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translat-y-1 trasition-all"/>
                                </div>

                                <p className="text-sm text-muted-foreground">{project.description}</p>

                                <div className="flex gap-2 flex-wrap ">
                                    {project.tags.map((tag, tagIdx) =>

                                        <span
                                        key={tagIdx}
                                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>

                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}