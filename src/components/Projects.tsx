import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, Lock } from 'lucide-react';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'salesweb',
      title: t('projects.salesweb.title'),
      description: t('projects.salesweb.description'),
      tech: t('projects.salesweb.tech'),
      githubUrl: 'https://github.com/PedroOBertoni/SalesWeb_ASPNET_MVC_SalesManager',
      liveUrl: 'https://salesweb-yi9p.onrender.com',
      isPrivate: false,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'scraper',
      title: t('projects.scraper.title'),
      description: t('projects.scraper.description'),
      tech: t('projects.scraper.tech'),
      githubUrl: null,
      liveUrl: null,
      isPrivate: true,
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-surface/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            {t('projects.title')}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="glass-card hover:bg-white/10 transition-all duration-300 group overflow-hidden">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-cyan-subtle/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.split(' • ').map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-black/50 text-white border-white/20">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild className="flex-1 min-w-fit">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          {t('projects.viewProject')}
                        </a>
                      </Button>
                    )}

                    {project.liveUrl && (
                      <Button variant="default" size="sm" asChild className="flex-1 min-w-fit">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {t('projects.liveDemo')}
                        </a>
                      </Button>
                    )}

                    {project.isPrivate && (
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Lock className="h-4 w-4" />
                        {t('projects.privateRepo')}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;