import { useTranslation } from 'react-i18next';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, Code, Database } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      icon: <Trophy className="h-6 w-6 text-primary" />,
      text: t('about.achievement1')
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      text: t('about.achievement2')
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      text: t('about.workDescription')
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-surface/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            {t('about.title')}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main description */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('about.description')}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  Uni-FACEF
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  4th Semester
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  Jussara Company
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  Support Analyst
                </Badge>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="glass-card hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        {achievement.icon}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;