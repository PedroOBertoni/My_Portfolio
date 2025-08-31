import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        projects: "Projects", 
        contact: "Contact",
        skills: "Skills"
      },
      hero: {
        greeting: "Hi, I'm",
        title: "Software Developer in Training",
        subtitle: "4th semester Software Engineering student with real-world experience in database management and automation solutions.",
        cta: "View My Work"
      },
      about: {
        title: "About Me",
        description: "I'm Pedro Bertoni, a passionate Software Developer in training at Uni-FACEF in Franca, São Paulo, Brazil. Currently in my 4th semester of Software Engineering, I work at Jussara as a Support Analyst handling real-world database challenges.",
        achievement1: "In less than a year, I became the employee with the highest number of support tickets resolved, second only to the department head.",
        achievement2: "I developed an internal web scraping tool that automates fiscal title report extraction, significantly increasing team productivity.",
        workDescription: "My daily work involves data corrections via DML and supporting business operations through SQL adjustments and troubleshooting with Oracle, PostgreSQL, and Firebird databases."
      },
      skills: {
        title: "Technologies & Skills",
        languages: "Programming Languages",
        webStack: "Web Technologies", 
        databases: "Databases",
        tools: "Tools & Platforms"
      },
      projects: {
        title: "Featured Projects",
        salesweb: {
          title: "SalesWeb MVC System",
          description: "Complete sales management system built with ASP.NET MVC and PostgreSQL. Features seller registration, date-filtered sales reports, department grouping, and interactive dashboards using Chart.js.",
          tech: "ASP.NET MVC • PostgreSQL • Chart.js • Bootstrap"
        },
        scraper: {
          title: "Fiscal Reports Scraper",
          description: "Internal Python automation tool that collects data from web pages and generates PDF reports of fiscal titles. Developed to streamline compliance tasks and reduce manual labor.",
          tech: "Python • Web Scraping • PDF Generation • Automation"
        },
        viewProject: "View Project",
        liveDemo: "Live Demo",
        privateRepo: "Private Repository"
      },
      contact: {
        title: "Let's Connect",
        description: "I'm always interested in new opportunities and collaborations. Feel free to reach out!",
        github: "GitHub Profile",
        linkedin: "LinkedIn Profile",
        email: "Send Email"
      },
      footer: {
        rights: "All rights reserved.",
        builtWith: "Built with React, TypeScript & Tailwind CSS"
      }
    }
  },
  pt: {
    translation: {
      nav: {
        about: "Sobre",
        projects: "Projetos",
        contact: "Contato", 
        skills: "Habilidades"
      },
      hero: {
        greeting: "Olá, eu sou",
        title: "Desenvolvedor de Software em Formação",
        subtitle: "Estudante do 4º semestre de Engenharia de Software com experiência prática em gerenciamento de banco de dados e soluções de automação.",
        cta: "Ver Meu Trabalho"
      },
      about: {
        title: "Sobre Mim",
        description: "Sou Pedro Bertoni, um Desenvolvedor de Software apaixonado em formação na Uni-FACEF em Franca, São Paulo, Brasil. Atualmente no 4º semestre de Engenharia de Software, trabalho na Jussara como Analista de Suporte lidando com desafios reais de banco de dados.",
        achievement1: "Em menos de um ano, me tornei o funcionário com o maior número de tickets de suporte resolvidos, atrás apenas do chefe do departamento.",
        achievement2: "Desenvolvi uma ferramenta interna de web scraping que automatiza a extração de relatórios de títulos fiscais, aumentando significativamente a produtividade da equipe.",
        workDescription: "Meu trabalho diário envolve correções de dados via DML e suporte às operações de negócio através de ajustes SQL e resolução de problemas com bancos Oracle, PostgreSQL e Firebird."
      },
      skills: {
        title: "Tecnologias e Habilidades",
        languages: "Linguagens de Programação",
        webStack: "Tecnologias Web",
        databases: "Bancos de Dados", 
        tools: "Ferramentas e Plataformas"
      },
      projects: {
        title: "Projetos em Destaque",
        salesweb: {
          title: "Sistema SalesWeb MVC",
          description: "Sistema completo de gestão de vendas desenvolvido com ASP.NET MVC e PostgreSQL. Possui cadastro de vendedores, relatórios de vendas filtrados por data, agrupamento por departamento e dashboards interativos usando Chart.js.",
          tech: "ASP.NET MVC • PostgreSQL • Chart.js • Bootstrap"
        },
        scraper: {
          title: "Extrator de Relatórios Fiscais",
          description: "Ferramenta de automação Python interna que coleta dados de páginas web e gera relatórios PDF de títulos fiscais. Desenvolvida para otimizar tarefas de conformidade e reduzir trabalho manual.",
          tech: "Python • Web Scraping • Geração PDF • Automação"
        },
        viewProject: "Ver Projeto",
        liveDemo: "Demo Online",
        privateRepo: "Repositório Privado"
      },
      contact: {
        title: "Vamos Nos Conectar",
        description: "Estou sempre interessado em novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!",
        github: "Perfil GitHub",
        linkedin: "Perfil LinkedIn", 
        email: "Enviar Email"
      },
      footer: {
        rights: "Todos os direitos reservados.",
        builtWith: "Desenvolvido com React, TypeScript e Tailwind CSS"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;