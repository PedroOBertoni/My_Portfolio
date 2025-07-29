import { useTranslation } from 'react-i18next';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const { t } = useTranslation();

  const contactLinks = [
    {
      name: t('contact.github'),
      url: 'https://github.com/PedroOBertoni',
      icon: <Github className="h-6 w-6" />,
      description: 'View my repositories and contributions'
    },
    {
      name: t('contact.linkedin'),
      url: 'https://www.linkedin.com/in/pedro-bertoni',
      icon: <Linkedin className="h-6 w-6" />,
      description: 'Connect with me professionally'
    },
    {
      name: t('contact.email'),
      url: 'mailto:pedro@bertoni.dev',
      icon: <Mail className="h-6 w-6" />,
      description: 'Send me a direct message'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            {t('contact.title')}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => (
              <Card key={index} className="glass-card hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300 mb-4">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {link.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="w-full group-hover:border-primary/50 group-hover:text-primary"
                  >
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Connect
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;