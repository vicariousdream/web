import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-secondary/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left text-muted-foreground">
            © {new Date().getFullYear()} Anasimos Abrha. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/anasimos" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/anasimos-abrha" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:Anasimiosabrha@gmail.com" className="text-muted-foreground hover:text-primary">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

