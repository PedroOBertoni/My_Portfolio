import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { 
  SiSharp, 
  SiJavascript, 
  SiPython,
  SiReact,
  SiHtml5,
  SiCss3,
  SiDotnet,
  SiOracle,
  SiPostgresql,
  SiGit,
  SiRailway,
  SiVercel
} from 'react-icons/si';
import { Code, Coffee } from 'lucide-react';
import { Database } from 'lucide-react';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.languages'),
      skills: [
        { name: 'C#', icon: <SiSharp className="h-8 w-8" />, color: 'text-purple-500' },
        { name: 'Java', icon: <Coffee className="h-8 w-8" />, color: 'text-orange-500' },
        { name: 'JavaScript', icon: <SiJavascript className="h-8 w-8" />, color: 'text-yellow-500' },
        { name: 'Python', icon: <SiPython className="h-8 w-8" />, color: 'text-blue-500' },
      ]
    },
    {
      title: t('skills.webStack'),
      skills: [
        { name: 'ASP.NET Core', icon: <SiDotnet className="h-8 w-8" />, color: 'text-purple-600' },
        { name: 'React', icon: <SiReact className="h-8 w-8" />, color: 'text-cyan-500' },
        { name: 'HTML5', icon: <SiHtml5 className="h-8 w-8" />, color: 'text-orange-600' },
        { name: 'CSS3', icon: <SiCss3 className="h-8 w-8" />, color: 'text-blue-600' },
      ]
    },
    {
      title: t('skills.databases'),
      skills: [
        { name: 'Oracle', icon: <SiOracle className="h-8 w-8" />, color: 'text-red-500' },
        { name: 'PostgreSQL', icon: <SiPostgresql className="h-8 w-8" />, color: 'text-blue-700' },
        { name: 'Firebird', icon: <Database className="h-8 w-8" />, color: 'text-yellow-600' },
      ]
    },
    {
      title: t('skills.tools'),
      skills: [
        { name: 'Git', icon: <SiGit className="h-8 w-8" />, color: 'text-orange-500' },
        { name: 'Visual Studio', icon: <Code className="h-8 w-8" />, color: 'text-purple-500' },
        { name: 'Railway', icon: <SiRailway className="h-8 w-8" />, color: 'text-primary' },
        { name: 'Vercel', icon: <SiVercel className="h-8 w-8" />, color: 'text-foreground' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            {t('skills.title')}
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="glass-card hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-center text-primary group-hover:text-cyan-subtle transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group/skill"
                      >
                        <div className={`${skill.color} group-hover/skill:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </div>
                        <span className="text-xs text-center mt-2 text-muted-foreground group-hover/skill:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
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

export default Skills;