import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-dark-surface to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-subtle/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-glow"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in">
            {t('hero.greeting')}
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text animate-fade-in-up">
            Pedro Bertoni
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 animate-fade-in-up">
            {t('hero.title')}
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up">
            <Button
              onClick={scrollToProjects}
              variant="hero"
              size="xl"
              className="group"
            >
              {t('hero.cta')}
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>

            <div className="flex gap-4">
              <Button
                variant="glow"
                size="lg"
                asChild
              >
                <a
                  href="https://github.com/PedroOBertoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
              </Button>

              <Button
                variant="glow"
                size="lg"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/pedro-bertoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
              <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;