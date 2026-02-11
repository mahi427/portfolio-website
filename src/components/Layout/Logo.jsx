import { Code2, Sparkles } from 'lucide-react';

const Logo = () => {
  return (
    <a 
      href="/" 
      className="flex items-center space-x-3 group"
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
          <Code2 className="w-7 h-7 text-white" />
        </div>
        <div className="absolute -top-1 -right-1">
          <Sparkles className="w-4 h-4 text-yellow-400" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          AKSHAY
        </span>
        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wider">
          FULL STACK DEVELOPER
        </span>
      </div>
    </a>
  );
};

export default Logo;