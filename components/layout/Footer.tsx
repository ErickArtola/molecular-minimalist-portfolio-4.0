export default function Footer() {
  return (
    <footer className="bg-[#989898] text-white mt-16 lg:mt-24 border-t border-white/20">
      <div className="container-scientific py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-h3 font-medium text-white">About</h3>
            <p className="text-small text-white/80">
              AWS Technical Account Manager in Costa Rica, focused on applying 
              artificial intelligence to advance genomics research and oncology.
            </p>
          </div>

          {/* Quick Links - Placeholder for future links */}
          <div className="space-y-4">
            <h3 className="text-h3 font-medium text-white">Research Areas</h3>
            <ul className="space-y-2 text-small text-white/80">
              <li>AI in Genomics Analysis</li>
              <li>Machine Learning for Drug Discovery</li>
              <li>Computational Oncology</li>
              <li>Cloud Computing for Bioinformatics</li>
            </ul>
          </div>

          {/* Contact Info - Placeholder */}
          <div className="space-y-4">
            <h3 className="text-h3 font-medium text-white">Connect</h3>
            <p className="text-small text-white/80">
              Interested in collaborating on AI applications for genomics research? 
              Let's explore the intersection of technology and biology together.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-small text-white/70">
            © 2025 Erick Geovany Artola. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}