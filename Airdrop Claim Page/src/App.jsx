import  { useState, useEffect } from 'react';
import { 
  Gift, 
  AlertCircle, 
  Menu,
  X,
  Sparkles,
  Twitter, Instagram, Facebook
} from 'lucide-react';
import './App.css';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
 

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 

  

  const stats = [
    { label: "Total Airdrop", value: "100M SCOLT" },
    { label: "Claimed", value: "67.3M" },
    { label: "Eligible Wallets", value: "45K+" },
    { label: "Time Remaining", value: "15 Days" }
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              SolColt
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
    <Twitter size={20} />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
    <Instagram size={20} />
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
    <Facebook size={20} />
  </a>
  
  <button 
    className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
  >
    <button class="connect-button">Claim Now</button>
  </button>
</div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <a href="#claim" className="hover:text-blue-400 transition-colors">Claim</a>
                <a href="#eligibility" className="hover:text-blue-400 transition-colors">Eligibility</a>
                <a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a>
                <button 
                
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all text-left"
                >
                  <button class="connect-button">Claim Now</button>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 main-bg">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm text-gray-300">Limited Time Airdrop - 67.3M/100M Claimed</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-purple-200 bg-clip-text text-transparent">
              Claim Your Free
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-purple-500 bg-clip-text text-transparent">
                SCOLT Tokens
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Get up to 2,500 SCOLT tokens absolutely free! Connect your Solana wallet to check eligibility 
              and claim your share of the 100M token airdrop.
            </p>

            {/* Countdown Timer */}
          
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
             
                className="bg-gradient-to-r from-yellow-500 to-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all transform hover:scale-105 flex items-center justify-center"
              >
               Connect Wallet to Claim
                <Gift className="ml-2 w-5 h-5" />
              </button>
              
              <button className="border border-gray-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all flex items-center justify-center">
                <AlertCircle className="mr-2 w-5 h-5" />
                Check Eligibility
              </button>
            </div>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800 text-center">
            <p>&copy; 2025 SolColt. All rights reserved.</p>

      </footer>
    </div>
  );
}

export default App;