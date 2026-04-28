export default function Footer() {
  return (
    <footer className="py-12 bg-dark text-gray-500 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-display font-bold text-dark">
              K
            </div>
            <span className="font-display font-bold text-xl tracking-tighter text-white">KIREI</span>
          </div>
          
          <div className="text-sm">
            © {new Date().getFullYear()} Kirei Portfolio. All rights reserved.
          </div>
          
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
