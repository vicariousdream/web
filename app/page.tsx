import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Award, Briefcase, GraduationCap } from 'lucide-react'
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4 luxury-text">Anasimos Abrha</h1>
        <p className="text-xl mb-8 text-muted-foreground">Tech-Savvy Professional | Cloud Architect | IT Support Specialist | Virtual Assistant | Graphic Designer</p>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/contact">Get in Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center luxury-text">Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "IT Support",
            "Creative Design",
            "Cloud Solutions",
            "Virtual Assistance",
            "Remote Workflow Management",
            "Technical Troubleshooting"
          ].map((skill) => (
            <Card key={skill} className="luxury-border overflow-hidden group bg-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl luxury-text">{skill[0]}</span>
                </div>
                <h3 className="font-semibold mb-2 luxury-text">{skill}</h3>
                <p className="text-sm text-muted-foreground">Expert in {skill.toLowerCase()} with proven track record.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center luxury-text">Experience Highlights</h2>
        <div className="space-y-6">
          {[
            { title: "Graphics Designer", company: "Nathan Designs", icon: Briefcase },
            { title: "Project Manager & Co-Founder", company: "ALX ETHIOPIA", icon: Briefcase },
            { title: "Construction Assistant", company: "A.A.M.T.", icon: Briefcase },
          ].map((job) => (
            <Card key={job.title} className="luxury-border overflow-hidden bg-card">
              <CardContent className="p-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <job.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold luxury-text">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center luxury-text">Education & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="luxury-border overflow-hidden bg-card">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <GraduationCap className="h-12 w-12 mb-4 text-primary" />
              <h3 className="font-semibold mb-2 luxury-text">Bachelor of Business Administration</h3>
              <p className="text-sm text-muted-foreground">University of the People</p>
            </CardContent>
          </Card>
          <Card className="luxury-border overflow-hidden bg-card">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Award className="h-12 w-12 mb-4 text-primary" />
              <h3 className="font-semibold mb-2 luxury-text">Certifications</h3>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">AWS Cloud Practitioner</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Oracle Cloud Infrastructure</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Graphics Design</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center luxury-text">Featured Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Cloud Migration Project", image: "/placeholder.svg?height=300&width=400" },
            { title: "EcoPulse Environmental Tool", image: "/placeholder.svg?height=300&width=400" },
          ].map((project) => (
            <Card key={project.title} className="luxury-border overflow-hidden group bg-card">
              <CardContent className="p-0 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-semibold luxury-text text-center px-4">{project.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

