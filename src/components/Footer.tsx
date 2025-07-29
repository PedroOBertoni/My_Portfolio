import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-dark-surface/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Pedro Bertoni. {t('footer.rights')}
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              {t('footer.builtWith')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;