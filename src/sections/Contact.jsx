import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "../components/Button";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tahir@gmail.com",
    href: "mailto:tahir@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "23070732",
    href: "tel:23070732",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Gilgit, Pakistan",
    href: "#",
  },
];

export const Contact = () => {

  const [formData, serFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const hadleSubmit = async (e) => {
    e.preventDefault()
  }
  return (
    <section id="contact" className="py-32 reltive overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64  bg-highlight/5 rounded-full blur-3xl" />
      </div>


      <div className="container mx-auto px-6 relative z-10">

        {/* section header  */}

        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Get in touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">Let's build
            <span className="font-serif font-normal text-white"> something great.</span>
          </h2>
          <p className="text-muted-foreground animated-fade-in animation-delay-200">
            A selection of my recent work to make interactive and responsive web applications
          </p>
        </div>

        <div>
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in  animation-delay-300 ">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input value={formData.name} 
                onChange={(e) =>
                  serFormData({...formData, name: e.target.value})
                }
                id="name" type="text" required placeholder="Your Name..." className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary outline-none transition-all" />
              </div>

              <div>
                <label htmlFor="name" type="email" className="block text-sm font-medium mb-2">Email</label>
                <input value={formData.email} 
                onChange={(e) =>
                  serFormData({...formData, email: e.target.value})
                }
                type="email" required placeholder="your@email.com" className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary outline-none transition-all" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Message</label>
                <textarea value={formData.message} 
                onChange={(e) =>
                  serFormData({...formData, message: e.target.value})
                }
                 rows={5} type="text" required placeholder="Your Message..." className="w-full px-6 py-4  bg-surface rounded-xl border border-border focus:border-primary outline-none transition-all resize-none" />
              </div>

              <Button className="w-full " type="submit" size="lg">
                Send message
                <Send />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}