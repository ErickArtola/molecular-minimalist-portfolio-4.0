export default function Footer() {
  return (
    <footer className="bg-hero-gray text-hero-text mt-16 lg:mt-24">
      <div className="container-scientific py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-h3 font-medium">About</h3>
            <p className="text-small text-hero-text">
              AWS Technical Account Manager in Costa Rica, focused on applying
              artificial intelligence to advance genomics research and oncology.
            </p>
          </div>

          {/* Quick Links - Placeholder for future links */}
          <div className="space-y-4">
            <h3 className="text-h3 font-medium">Research Areas</h3>
            <ul className="space-y-2 text-small text-hero-text">
              <li>AI in Genomics Analysis</li>
              <li>Machine Learning for Drug Discovery</li>
              <li>Computational Oncology</li>
              <li>Cloud Computing for Bioinformatics</li>
            </ul>
          </div>

          {/* Contact Info - Placeholder */}
          <div className="space-y-4">
            <h3 className="text-h3 font-medium">Connect</h3>
            <p className="text-small text-hero-text">
              Interested in collaborating on AI applications for genomics research?
              Let's explore the intersection of technology and biology together.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-scientific-800 text-center">
          <p className="text-small text-hero-text">
            © 2025 Erick Geovany Artola. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}