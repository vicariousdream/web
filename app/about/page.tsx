import { Card, CardContent } from "@/components/ui/card"
import { Award, Briefcase, GraduationCap } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center luxury-text">About Me</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 luxury-text">Professional Summary</h2>
        <p className="text-muted-foreground">
          I am a versatile tech professional with expertise in cloud architecture, IT support, virtual assistance, and graphic design. 
          My passion lies in leveraging technology to solve complex problems and enhance business processes. 
          With a strong foundation in business administration and hands-on experience in various tech domains, 
          I bring a unique blend of technical skills and business acumen to every project.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 luxury-text">Work Experience</h2>
        <div className="space-y-6">
          {[
            { title: "Graphics Designer", company: "Nathan Designs", period: "2020 - Present" },
            { title: "Project Manager & Co-Founder", company: "ALX ETHIOPIA", period: "2018 - 2020" },
            { title: "Construction Assistant", company: "A.A.M.T.", period: "2016 - 2018" },
          ].map((job) => (
            <Card key={job.title} className="luxury-border overflow-hidden bg-card">
              <CardContent className="p-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold luxury-text">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                  <p className="text-xs text-muted-foreground">{job.period}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 luxury-text">Education & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <h2 className="text-2xl font-semibold mb-4 luxury-text">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["Cloud Architecture", "IT Support", "Virtual Assistance", "Graphic Design", "Project Management", "Technical Troubleshooting", "Remote Workflow Management", "Business Administration"].map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full transition-all duration-300 hover:bg-primary/20 hover:shadow-[0_0_10px_3px_rgba(var(--primary-rgb),0.3)] hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}

