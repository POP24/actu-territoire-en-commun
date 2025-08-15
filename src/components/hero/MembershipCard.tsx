interface MembershipCardProps {
  price: string;
  title: string;
  description: string;
  type: 'local' | 'architect';
}

const MembershipCard = ({ price, title, description, type }: MembershipCardProps) => {
  const isLocal = type === 'local';
  const colorClasses = isLocal 
    ? "from-primary/20 to-secondary/20 border-primary/30 text-primary" 
    : "from-secondary/20 to-accent/20 border-secondary/30 text-secondary";
  
  const iconClasses = isLocal 
    ? "from-primary to-secondary" 
    : "from-secondary to-accent";

  return (
    <div className={`group relative bg-gradient-to-br ${colorClasses} backdrop-blur-lg rounded-2xl p-6 sm:p-8 border shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105`}>
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${iconClasses} rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
      
      <div className="relative z-10">
        <div className={`w-12 h-12 bg-gradient-to-br ${iconClasses} rounded-xl mb-4 flex items-center justify-center shadow-lg`}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isLocal ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5-5-9-5-9-9s4-4 9-9" />
            )}
          </svg>
        </div>
        
        <div className="text-foreground text-2xl font-bold mb-2">{price}</div>
        
        <h3 className="text-foreground font-bold mb-4 text-xl leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed font-medium">
          {description}
        </p>
        
        <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-current/60 to-transparent ${isLocal ? 'text-primary' : 'text-secondary'}`}></div>
      </div>
    </div>
  );
};

export default MembershipCard;