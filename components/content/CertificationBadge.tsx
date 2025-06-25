import React from 'react';

interface CertificationBadgeProps {
  title: string;
  issuer: string;
  date?: string;
  credentialId?: string;
}

export const CertificationBadge: React.FC<CertificationBadgeProps> = ({
  title,
  issuer,
  date,
  credentialId,
}) => {
  return (
    <div className="group relative bg-white rounded-lg p-6 border border-scientific-100 hover:border-scientific-300 hover:shadow-molecular-md transition-all duration-250">
      {/* Molecular accent element */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-secondary rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
      
      <div className="space-y-3">
        {/* Certification Title */}
        <h3 className="text-h3 font-medium text-scientific-950 group-hover:text-accent transition-colors duration-250">
          {title}
        </h3>
        
        {/* Issuer */}
        <p className="text-body text-scientific-700">
          {issuer}
        </p>
        
        {/* Metadata */}
        <div className="space-y-1">
          {date && (
            <p className="text-small text-scientific-600">
              Issued: {date}
            </p>
          )}
          {credentialId && (
            <p className="text-small text-scientific-500">
              ID: {credentialId}
            </p>
          )}
        </div>
      </div>
      
      {/* Subtle molecular pattern on hover */}
      <div className="absolute bottom-2 right-2 w-8 h-8 opacity-0 group-hover:opacity-10 transition-opacity duration-250">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="currentColor" className="text-scientific-950" />
          <circle cx="12" cy="6" r="1.5" fill="currentColor" className="text-scientific-950" />
          <circle cx="12" cy="18" r="1.5" fill="currentColor" className="text-scientific-950" />
          <circle cx="6" cy="12" r="1.5" fill="currentColor" className="text-scientific-950" />
          <circle cx="18" cy="12" r="1.5" fill="currentColor" className="text-scientific-950" />
          <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="0.5" className="text-scientific-950" />
        </svg>
      </div>
    </div>
  );
};