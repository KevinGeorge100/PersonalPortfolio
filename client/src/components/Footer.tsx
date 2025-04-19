export default function Footer() {
  return (
    <footer className="py-8 bg-dark border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold font-inter text-white">
              Kevin<span className="text-primary">George</span>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Kevin George. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
