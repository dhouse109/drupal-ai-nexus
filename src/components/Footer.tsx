const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-sm">
          <span className="text-primary">109</span>
          <span className="text-foreground">.studio</span>
          <span className="text-text-dim ml-4">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          {["GitHub", "Drupal.org", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
