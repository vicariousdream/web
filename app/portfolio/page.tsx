import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  { title: "Cloud Migration Project", image: "/placeholder.svg?height=300&width=400", description: "Successful migration of on-premises infrastructure to AWS cloud." },
  { title: "EcoPulse Environmental Tool", image: "/placeholder.svg?height=300&width=400", description: "Developed a web application for environmental data visualization." },
  { title: "IT Support System Overhaul", image: "/placeholder.svg?height=300&width=400", description: "Redesigned and implemented a new IT support ticketing system." },
  { title: "Virtual Assistant Onboarding Platform", image: "/placeholder.svg?height=300&width=400", description: "Created a comprehensive onboarding platform for new virtual assistants." },
]

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center luxury-text">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="luxury-border overflow-hidden group bg-card">
            <CardContent className="p-0 relative">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity p-4">
                <h3 className="text-xl font-semibold luxury-text text-center mb-2">{project.title}</h3>
                <p className="text-sm text-center text-muted-foreground">{project.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

