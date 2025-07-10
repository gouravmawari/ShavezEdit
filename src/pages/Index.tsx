import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Play, Award, Users, Clock, Mail, Phone, ExternalLink, Menu, X, Star, Zap, Download, CheckCircle, Instagram, Linkedin, Twitter, Volume2, Globe, Target, Palette, Camera, Music, Smartphone, Monitor, Play as PlayIcon, Edit, Check, Headphones, Video, Building2, ShoppingBag, Film, Mic, Hash, Briefcase, Sparkles, Eye, Layers, TrendingUp } from 'lucide-react';
import VideoRenderingElement from '@/components/VideoRenderingElement';
import { toast } from 'sonner';



const Index = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredVideoId, setHoveredVideoId] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleVideoHover = (event: React.MouseEvent<HTMLDivElement>, shouldPlaySound: boolean, videoId: number | null) => {
    const video = event.currentTarget.querySelector('video');
    if (video) {
      video.muted = !shouldPlaySound;
    }
    setHoveredVideoId(videoId);
  };

  const portfolioItems = [
    {
      id: 1,
      title: "Corporate Vision Campaign",
      category: "corporate",
      client: "Fortune 500 Enterprise",
      thumbnail: "https://storage.googleapis.com/shavez_portfolio/Deep_Ads%204_V2-video-export-2024-12-23T11-23-21.928Z.mp4",
      description: "Transforming corporate messaging into compelling visual narrative through advanced color grading and motion graphics."
    },
    {
      id: 2,
      title: "Cinematic Brand Story",
      category: "commercial",
      client: "Global Fashion Brand",
      thumbnail: "https://storage.googleapis.com/shavez_portfolio/Deep_Ads%204_V2-video-export-2024-12-23T11-23-21.928Z.mp4",
      description: "Award-winning commercial featuring complex multi-camera editing and sophisticated color psychology."
    },
    {
      id: 3,
      title: "Documentary Excellence",
      category: "documentary",
      client: "International Film Festival",
      thumbnail: "https://storage.googleapis.com/shavez_portfolio/full%20edit%20video.mp4",
      description: "Festival-selected documentary showcasing narrative mastery and emotional storytelling through precise editing."
    },
    {
      id: 4,
      title: "Music Video Artistry",
      category: "music",
      client: "Grammy-Nominated Artist",
      thumbnail: "https://storage.googleapis.com/shavez_portfolio/Alabidave_16_10_V1.mp4",
      description: "Visually stunning music video combining rhythm-based editing with innovative visual effects."
    },
    {
      id: 5,
      title: "Social Media Mastery",
      category: "social",
      client: "Viral Campaign Series",
      thumbnail: "https://storage.googleapis.com/shavez_portfolio/quick%20coding%20tip.mp4",
      description: "Platform-optimized content achieving millions of views through strategic editing and pacing."
    },
    {
      id: 6,
      title: "Branded Content Excellence",
      category: "branded",
      client: "Tech Innovation Leader",
      thumbnail: "https://storage.googleapis.com/shavez_portfolio/what%20if%20you%20loose%20your%20job.mp4",
      description: "Sophisticated branded content balancing entertainment value with strategic messaging."
    },
    {
      id: 9,
      title: "Social Media Mastery 3",
      category: "social",
      client: "Viral Campaign Series",
      thumbnail: "https://storage.googleapis.com/shavez_portfolio/Market%20Share%20of%20Windows.mp4",
      description: "Platform-optimized content achieving millions of views through strategic editing and pacing."
    },
    {
      id: 12,
      title: "Branded Content Excellence 3",
      category: "branded",
      client: "Tech Innovation Leader",
      thumbnail: "https://storage.googleapis.com/shavez_portfolio/Market%20Share%20of%20Windows.mp4",
      description: "Sophisticated branded content balancing entertainment value with strategic messaging."
    }
  ];

  const services = [
    {
      title: "Full Post-Production",
      description: "Complete offline and online editing services from raw footage to final delivery, ensuring seamless workflow and exceptional quality.",
      icon: Video,
      features: ["Raw Footage Processing", "Color Correction", "Audio Mixing", "Final Delivery"],
      tier: "premium",
      complexity: "Advanced"
    },
    {
      title: "Digital Advertising Solutions",
      description: "We can create and run ads for your business. Ads can significantly improve your brand visibility, lead generation, and sales conversion.",
      icon: Target,
      features: ["Target the right audience with precision", "Increase website traffic and brand awareness", "Track performance and optimize results", "Boost sales and business growth"],
      tier: "professional",
      complexity: "Expert"
    },
    {
      title: "Full-Stack Web Development",
      description: "We build full-stack websites using any modern tech stack, optimized for speed, performance, and beautiful UI/UX design.",
      icon: Globe,
      features: ["Modern Tech Stack Implementation", "Speed & Performance Optimization", "Beautiful UI/UX Design", "Responsive Cross-Platform Design"],
      tier: "premium",
      complexity: "Advanced"
    },
    {
      title: "Digital Growth Strategy",
      description: "We help grow your business through digital strategies tailored to your needs.",
      icon: TrendingUp,
      features: ["Improve brand reach across platforms", "Build customer trust and engagement", "Drive more conversions with optimized strategies", "Data-driven growth optimization"],
      tier: "professional",
      complexity: "Expert"
    },
    {
      title: "Sound Design & Mixing",
      description: "Comprehensive audio post-production including dialogue editing, music composition, and immersive sound design.",
      icon: Headphones,
      features: ["Dialogue Editing", "Music Composition", "Sound Effects", "Audio Mastering"],
      tier: "premium",
      complexity: "Advanced"
    },
    {
      title: "Multi-Platform Optimization",
      description: "Content optimization for various platforms including social media cuts, broadcast versions, and cinema formats.",
      icon: Monitor,
      features: ["Platform Adaptation", "Format Conversion", "Size Optimization", "Quality Assurance"],
      tier: "standard",
      complexity: "Intermediate"
    }
  ];

  const experience = [
    {
      year: "June 2022 - December 2022",
      title: "Graphics Designer & Website Manager",
      company: "Code With Harry (Indian YouTuber)",
      description: "Designed and printed high-quality graphics for merchandise and promotional materials. Managed website updates, ensuring seamless navigation and optimized user experience. Contributed to branding efforts through cohesive visual design and content packaging.",
      achievements: "High-quality merchandise design • Website optimization • Cohesive visual branding"
    },
    {
      year: "January 2023 - June 2024",
      title: "Full-Time Video Editor",
      company: "Code With Harry (Indian YouTuber)",
      description: "Edited high-engagement videos for YouTube, utilizing advanced tools for storytelling and audience retention. Designed thumbnails and motion graphics to boost click-through rates. Collaborated with the content creation team to produce tutorials, live sessions, and explainer videos.",
      achievements: "Advanced storytelling techniques • Innovative editing methods • Enhanced channel growth and engagement"
    },
    {
      year: "June 2024 - Present",
      title: "Freelance Photo & Video Content Editor",
      company: "Traahi Studio (Professional Editing Studio)",
      description: "Partnered with top-rated Fiverr brands to deliver high-quality photo and video editing services. Specialized in cinematic video editing, color grading, and post-production for international clients. Maintained excellent client satisfaction by delivering projects before deadlines and exceeding expectations.",
      achievements: "Top Fiverr partnerships • International client satisfaction • Cinematic editing expertise"
    }
  ];

  const uniquePortfolioItems = portfolioItems.filter(
    (item, index, self) => index === self.findIndex((t) => t.thumbnail === item.thumbnail)
  );

  const filteredPortfolio = activeFilter === 'all' 
    ? uniquePortfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" }
  ];

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Convert Google Drive share link to direct download link
    const driveFileId = '1UqPd7PlpC0omw5QiX0XXsEXnB_fWkmLn';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;
    
    // Create a temporary anchor element and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Mohd_Shavez_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <div className="min-h-screen bg-portfolio-black text-portfolio-white overflow-x-hidden">
      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 navbar-fixed ${
        isScrolled ? 'navbar-glass' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 min-h-[64px]">
            <div className="text-xl sm:text-2xl font-bold font-display flex-shrink-0">
              <span className="text-portfolio-yellow">Shavez</span>
              <span className="text-portfolio-white ml-1 sm:ml-2">Edit</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="relative group hover:text-portfolio-yellow transition-all duration-300 font-medium text-portfolio-white hover:scale-105 px-2 py-1 whitespace-nowrap text-sm lg:text-base"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-yellow transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:scale-110 transition-transform duration-300 hover:bg-portfolio-yellow/20 text-portfolio-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-portfolio-black/95 backdrop-blur-md py-4 space-y-2 border-t border-portfolio-yellow/20 animate-fade-in-down">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 hover:text-portfolio-yellow transition-colors duration-300 text-portfolio-white font-medium hover:bg-portfolio-yellow/10 rounded-lg mx-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-18">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-black/90 via-portfolio-black/70 to-portfolio-red/20 z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/a3837f95-91ba-4c17-b046-3251fba9164f.png"
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        {/* Cinematic overlay effects */}
        <div className="absolute inset-0 z-15">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-portfolio-yellow rounded-full opacity-30 floating-animation"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight">
                <span className="block text-reveal animation-delay-0 text-portfolio-white">Transforming</span>
                <span className="block text-reveal animation-delay-300 text-portfolio-yellow">Vision</span>
                <span className="block text-reveal animation-delay-600 text-portfolio-white">Into Unforgettable</span>
                <span className="block text-reveal animation-delay-900 text-portfolio-red">Video</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl mb-12 text-portfolio-white/90 animate-fade-in-up animation-delay-1200 font-medium max-w-4xl leading-relaxed">
              Expert video editing for discerning brands and filmmakers seeking narrative power and global impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-scale-in animation-delay-1500 mb-8 sm:mb-12">
              <Button 
                className="bg-portfolio-yellow text-portfolio-black hover:bg-portfolio-yellow/90 hover:scale-105 transition-all duration-300 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-2xl text-sm sm:text-base hover:shadow-portfolio-yellow/30 group w-full sm:w-auto"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                Explore My Work 
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-portfolio-yellow text-portfolio-yellow hover:bg-portfolio-yellow hover:text-portfolio-black hover:scale-105 transition-all duration-300 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base hover:shadow-2xl hover:shadow-portfolio-yellow/30 w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Project
              </Button>
            </div>
          </div>

          {/* Right Side - Video Rendering Element */}
          <div className="animate-scale-in animation-delay-1200 hidden lg:block">
            <VideoRenderingElement />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-portfolio-white text-portfolio-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display mb-8">
                Crafting Stories That <span className="text-portfolio-yellow">Captivate</span> & <span className="text-portfolio-red">Convert</span>
              </h2>
              <p className="text-base sm:text-lg mb-6 text-gray-700 leading-relaxed">
                Experienced Photo & Video Editor and Web Manager with expertise in crafting high-quality visual content. Skilled in collaborating with YouTubers, Indian and international creators, and top-rated Fiverr professionals.
              </p>
              <p className="text-base sm:text-lg mb-8 text-gray-700 leading-relaxed">
                Master editor delivering creative, impactful results that elevate brand presence and storytelling across platforms with precision and flair. From YouTube content creation to international client projects, I deliver content that captivates audiences and drives engagement.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-portfolio-yellow mb-2">70+</div>
                  <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-portfolio-red mb-2">50M+</div>
                  <div className="text-sm text-gray-600 font-medium">Total Views Generated</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-portfolio-yellow text-portfolio-black hover:bg-portfolio-yellow/90 font-semibold px-6 py-3 w-full sm:w-auto"
                  onClick={handleDownloadCV}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
                <Button 
                  variant="outline" 
                  className="border-portfolio-black text-portfolio-black hover:bg-portfolio-black hover:text-white font-semibold px-6 py-3 w-full sm:w-auto"
                  onClick={() => window.open('https://www.linkedin.com/in/mohd-shavez-883a4a347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}
                >
                  View LinkedIn
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative group">
                <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-portfolio-yellow via-portfolio-red to-portfolio-yellow rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img 
                  src="/image.png"
                  alt="Mohd Shavez - Professional Video Editor"
                  className="relative w-full h-auto max-h-[500px] lg:max-h-[600px] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display mb-8 text-portfolio-black">
              Featured <span className="text-portfolio-yellow">Portfolio</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover award-winning projects that showcase technical excellence and creative storytelling
            </p>
          </div>

          {/* Interactive Category Explorer */}
          <div className="mb-12 sm:mb-20 overflow-visible">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-portfolio-yellow/10 backdrop-blur-sm border border-portfolio-yellow/20 rounded-full px-4 sm:px-6 py-3 mb-6">
                <Eye className="h-5 w-5 text-portfolio-yellow" />
                <span className="text-portfolio-yellow font-semibold text-sm sm:text-base">Explore by Category</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-portfolio-black mb-4">
                Discover <span className="text-portfolio-yellow">Masterpieces</span> by Genre
              </h3>
            </div>

            <div className="flex overflow-x-auto pb-8 pt-4 -mx-2 px-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 sm:gap-6 sm:pb-8 sm:pt-4 sm:px-4 scrollbar-hide">
              {[
                { 
                  key: 'all', 
                  name: 'All Works', 
                  icon: Layers, 
                  color: 'from-purple-500 to-pink-500',
                  bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
                  count: 6,
                  description: 'Complete Collection'
                },
                { 
                  key: 'corporate', 
                  name: 'Corporate', 
                  icon: Building2, 
                  color: 'from-blue-500 to-cyan-500',
                  bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
                  count: portfolioItems.filter(item => item.category === 'corporate').length,
                  description: 'Business Excellence'
                },
                { 
                  key: 'commercial', 
                  name: 'Commercial', 
                  icon: ShoppingBag, 
                  color: 'from-emerald-500 to-teal-500',
                  bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
                  count: portfolioItems.filter(item => item.category === 'commercial').length,
                  description: 'Brand Stories'
                },
                { 
                  key: 'documentary', 
                  name: 'Documentary', 
                  icon: Film, 
                  color: 'from-amber-500 to-orange-500',
                  bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
                  count: portfolioItems.filter(item => item.category === 'documentary').length,
                  description: 'Real Stories'
                },
                { 
                  key: 'music', 
                  name: 'Music', 
                  icon: Mic, 
                  color: 'from-rose-500 to-red-500',
                  bgColor: 'bg-gradient-to-br from-rose-50 to-red-50',
                  count: portfolioItems.filter(item => item.category === 'music').length,
                  description: 'Audio Visual Art'
                },
                { 
                  key: 'social', 
                  name: 'Social', 
                  icon: Hash, 
                  color: 'from-indigo-500 to-purple-500',
                  bgColor: 'bg-gradient-to-br from-indigo-50 to-purple-50',
                  count: portfolioItems.filter(item => item.category === 'social').length,
                  description: 'Viral Content'
                },
                { 
                  key: 'branded', 
                  name: 'Branded', 
                  icon: Briefcase, 
                  color: 'from-yellow-500 to-amber-500',
                  bgColor: 'bg-gradient-to-br from-yellow-50 to-amber-50',
                  count: portfolioItems.filter(item => item.category === 'branded').length,
                  description: 'Brand Identity'
                }
              ].map((category, index) => {
                const IconComponent = category.icon;
                const isActive = activeFilter === category.key;
                
                return (
                  <div
                    key={category.key}
                    onClick={() => setActiveFilter(category.key)}
                    className={`group relative cursor-pointer transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-3 flex-shrink-0 w-4/5 sm:w-auto ${
                      isActive ? 'scale-105 z-20' : 'hover:scale-105 hover:z-10'
                    } ${index > 0 ? 'ml-6 sm:ml-0' : ''} my-3 sm:my-2`}
                  >
                    <div className={`
                      relative overflow-hidden rounded-2xl border-2 transition-all duration-500 backdrop-blur-sm h-full
                      ${isActive 
                        ? 'border-portfolio-yellow shadow-2xl shadow-portfolio-yellow/30 bg-portfolio-yellow/20' 
                        : `border-gray-200 hover:border-portfolio-yellow group-hover:shadow-xl group-hover:shadow-portfolio-yellow/20 ${category.bgColor}`
                      }
                    `}>
                      <div className="absolute inset-0 opacity-10">
                        <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${category.color} rounded-full filter blur-xl`}></div>
                        <div className={`absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br ${category.color} rounded-full filter blur-lg`}></div>
                      </div>

                      <div className="relative p-4 sm:p-6 text-center flex flex-col justify-center h-full">
                        <div className={`
                          inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl mb-4 transition-all duration-300 mx-auto
                          ${isActive 
                            ? 'bg-portfolio-yellow text-portfolio-black scale-110' 
                            : `bg-gradient-to-br ${category.color} text-white group-hover:scale-110`
                          }
                        `}>
                          <IconComponent className="h-6 w-6 sm:h-8 sm:w-8" />
                        </div>

                        <h4 className={`
                          font-bold text-base sm:text-lg mb-2 transition-colors duration-300
                          ${isActive ? 'text-portfolio-yellow' : 'text-gray-800 group-hover:text-portfolio-yellow'}
                        `}>
                          {category.name}
                        </h4>

                        <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 mb-3 leading-relaxed transition-colors duration-300">
                          {category.description}
                        </p>

                        <div className={`
                          inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 mx-auto
                          ${isActive 
                            ? 'bg-portfolio-yellow/20 text-portfolio-yellow border border-portfolio-yellow/30' 
                            : 'bg-gray-100 text-gray-600 group-hover:bg-portfolio-yellow/10 group-hover:text-portfolio-yellow'
                          }
                        `}>
                          <TrendingUp className="h-3 w-3" />
                          {category.count} Projects
                        </div>

                        {isActive && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-portfolio-yellow rounded-full flex items-center justify-center animate-pulse">
                            <Sparkles className="h-3 w-3 text-portfolio-black" />
                          </div>
                        )}
                      </div>


                    </div>

                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl bg-portfolio-yellow/20 animate-ping -z-10"></div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 sm:px-6 py-3 shadow-lg">
                <div className="w-3 h-3 bg-portfolio-yellow rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  Showing {filteredPortfolio.length} {activeFilter === 'all' ? 'projects' : `${activeFilter} projects`}
                </span>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <Card 
                key={item.id}
                className="overflow-hidden bg-white border-2 border-gray-200 rounded-2xl transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20 hover:border-portfolio-yellow"
                onMouseEnter={(e) => handleVideoHover(e, true, item.id)}
                onMouseLeave={(e) => handleVideoHover(e, false, null)}
              >
                <div className="relative aspect-[9/16] w-full bg-black overflow-hidden">
                  <video
                    src={item.thumbnail}
                    title={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {hoveredVideoId === item.id && (
                    <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full animate-fade-in">
                      <Volume2 className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-portfolio-black group-hover:text-portfolio-yellow transition-colors">{item.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{item.description}</p>
                  <div className="text-portfolio-red font-semibold text-sm sm:text-base">{item.client}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-br from-portfolio-black via-gray-900 to-portfolio-black text-portfolio-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-portfolio-yellow rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-portfolio-red rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 bg-portfolio-yellow/10 backdrop-blur-sm border border-portfolio-yellow/20 rounded-full px-4 sm:px-6 py-3 mb-8">
              <Globe className="h-5 w-5 text-portfolio-yellow" />
              <span className="text-portfolio-yellow font-semibold text-sm sm:text-base">Global Excellence Standards</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8 leading-tight">
              <span className="text-white">World-Class</span><br />
              <span className="text-portfolio-yellow">Creative Services</span>
            </h2>
            <p className="text-base sm:text-xl text-portfolio-white/70 max-w-4xl mx-auto leading-relaxed">
              Award-winning post-production solutions trusted by international brands, 
              filmmakers, and content creators worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8">
              <div className="flex items-center gap-2 text-portfolio-white/60 text-sm sm:text-base">
                <Award className="h-5 w-5 text-portfolio-yellow" />
                <span>Industry Certified</span>
              </div>
              <div className="flex items-center gap-2 text-portfolio-white/60 text-sm sm:text-base">
                <Globe className="h-5 w-5 text-portfolio-yellow" />
                <span>Global Clientele</span>
              </div>
              <div className="flex items-center gap-2 text-portfolio-white/60 text-sm sm:text-base">
                <Clock className="h-5 w-5 text-portfolio-yellow" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const tierColors = {
                premium: "from-yellow-500/20 to-orange-500/20 border-yellow-500/30",
                professional: "from-blue-500/20 to-purple-500/20 border-blue-500/30",
                standard: "from-green-500/20 to-teal-500/20 border-green-500/30"
              };

              return (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden bg-gradient-to-br ${tierColors[service.tier]} border-2 hover:border-portfolio-yellow transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-portfolio-yellow/20 backdrop-blur-sm`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardContent className="p-6 sm:p-8 relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 sm:p-4 bg-portfolio-white/10 rounded-2xl group-hover:bg-portfolio-yellow/20 transition-colors duration-300">
                        <IconComponent className="h-7 w-7 sm:h-8 sm:w-8 text-portfolio-yellow group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-portfolio-yellow bg-portfolio-yellow/10 px-3 py-1 rounded-full border border-portfolio-yellow/20">
                          {service.complexity}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-portfolio-yellow transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-portfolio-white/70 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="h-4 w-4 text-portfolio-yellow flex-shrink-0" />
                          <span className="text-portfolio-white/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>


                </CardContent>
              </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-portfolio-yellow/10 via-portfolio-red/10 to-portfolio-yellow/10 rounded-3xl p-6 sm:p-8 md:p-12 border border-portfolio-yellow/20 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Elevate Your Content?
              </h3>
              <p className="text-portfolio-white/70 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
                Join 500+ satisfied clients worldwide who trust our expertise for their most important projects
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-portfolio-yellow text-portfolio-black hover:bg-portfolio-yellow/90 font-bold px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-portfolio-yellow text-portfolio-yellow hover:bg-portfolio-yellow hover:text-portfolio-black font-bold px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Production Section */}
      <section className="section-padding bg-gradient-to-br from-portfolio-white to-gray-100 text-portfolio-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-yellow rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-portfolio-red rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-portfolio-yellow/10 backdrop-blur-sm border border-portfolio-yellow/20 rounded-full px-4 sm:px-6 py-3 mb-8">
              <Mic className="h-5 w-5 text-portfolio-yellow" />
              <span className="text-portfolio-yellow font-semibold text-sm sm:text-base">Audio Excellence</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-8 leading-tight">
              <span className="text-portfolio-black">Professional</span><br />
              <span className="text-portfolio-yellow">Podcast Editing</span><br />
              <span className="text-portfolio-red">& Production</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your raw podcast recordings into polished, professional content with our comprehensive audio and video production services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Side - Features */}
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-portfolio-yellow/20 rounded-xl group-hover:bg-portfolio-yellow transition-colors duration-300">
                  <Headphones className="h-6 w-6 text-portfolio-yellow group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-portfolio-yellow transition-colors duration-300">Professional Audio Editing</h3>
                  <p className="text-gray-600 leading-relaxed">Expert editing to remove filler words, improve pacing, and create engaging listening experiences.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-portfolio-red/20 rounded-xl group-hover:bg-portfolio-red transition-colors duration-300">
                  <Volume2 className="h-6 w-6 text-portfolio-red group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-portfolio-red transition-colors duration-300">Sound Quality Enhancement</h3>
                  <p className="text-gray-600 leading-relaxed">Advanced audio processing to eliminate background noise, balance levels, and optimize sound clarity.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500 transition-colors duration-300">
                  <Video className="h-6 w-6 text-blue-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300">Full Video Production</h3>
                  <p className="text-gray-600 leading-relaxed">Complete video podcast creation with dynamic visuals, graphics, and professional formatting.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-green-500/20 rounded-xl group-hover:bg-green-500 transition-colors duration-300">
                  <CheckCircle className="h-6 w-6 text-green-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-500 transition-colors duration-300">High-Quality Delivery</h3>
                  <p className="text-gray-600 leading-relaxed">Final delivery in multiple formats optimized for all major podcast platforms and social media.</p>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-portfolio-black to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-yellow/10 to-portfolio-red/10"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-portfolio-yellow rounded-full flex items-center justify-center">
                      <Mic className="h-8 w-8 text-portfolio-black" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Your Podcast Studio</h4>
                      <p className="text-gray-300">Professional Production Ready</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">Recording: High Quality</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-portfolio-yellow rounded-full animate-pulse"></div>
                      <span className="text-sm">Processing: Audio Enhancement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-portfolio-red rounded-full animate-pulse"></div>
                      <span className="text-sm">Output: Multi-Format Delivery</span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-300">Processing Progress</span>
                      <span className="text-sm text-portfolio-yellow font-semibold">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-portfolio-yellow to-portfolio-red h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-portfolio-yellow/30 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-portfolio-red/20 rounded-full animate-float"></div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-portfolio-yellow/10 via-portfolio-red/10 to-portfolio-yellow/10 rounded-3xl p-8 sm:p-12 border border-portfolio-yellow/20 backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-portfolio-black">
                Ready to Elevate Your Podcast?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
                Join successful podcasters who trust us to deliver professional, engaging content that captivates their audience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-portfolio-yellow text-portfolio-black hover:bg-portfolio-yellow/90 font-bold px-8 py-4 rounded-lg text-lg hover:scale-105 transition-all duration-300 group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mic className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Get Your Podcast Edited
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-portfolio-black text-portfolio-black hover:bg-portfolio-black hover:text-white font-bold px-8 py-4 rounded-lg text-lg hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-portfolio-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display mb-8 text-portfolio-black">
              Professional <span className="text-portfolio-red">Journey</span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Building expertise through collaboration with industry leaders
            </p>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-portfolio-yellow hover-lift shadow-xl group transition-all duration-500">
                <div className="lg:w-1/4">
                  <div className="text-portfolio-yellow font-bold text-base sm:text-xl mb-2">{exp.year}</div>
                  <div className="text-portfolio-green font-semibold text-xs sm:text-sm">{exp.achievements}</div>
                </div>
                <div className="lg:w-3/4">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-portfolio-black group-hover:text-portfolio-yellow transition-colors">{exp.title}</h3>
                  <div className="text-portfolio-red font-bold mb-4 text-base sm:text-lg">{exp.company}</div>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-br from-portfolio-black via-portfolio-black to-portfolio-red/20 text-portfolio-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display mb-8">
              Let's Create Something <span className="text-portfolio-yellow">Exceptional</span>
            </h2>
            <p className="text-base sm:text-xl text-portfolio-white/80 max-w-3xl mx-auto">
              Ready to elevate your next project? Let's discuss how we can bring your vision to life.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="animate-fade-in">
              <h3 className="text-xl sm:text-2xl font-bold mb-8 text-portfolio-yellow">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-base sm:text-lg">
                  <Mail className="h-6 w-6 text-portfolio-yellow" />
                  <span className="text-portfolio-white break-all">Shavedit7860@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-base sm:text-lg">
                  <Phone className="h-6 w-6 text-portfolio-yellow" />
                  <span className="text-portfolio-white">+91 97580 62034</span>
                </div>
                <div className="pt-4">
                  <h4 className="text-base sm:text-lg font-semibold mb-4 text-portfolio-yellow">Connect on Social</h4>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/shav_edit?igsh=MXR2aTh0c2hzODZoNA==" target="_blank" rel="noopener noreferrer" className="p-3 bg-portfolio-yellow/20 rounded-lg hover:bg-portfolio-yellow hover:text-portfolio-black transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohd-shavez-883a4a347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-3 bg-portfolio-yellow/20 rounded-lg hover:bg-portfolio-yellow hover:text-portfolio-black transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="https://x.com/shavez75515?s=08" target="_blank" rel="noopener noreferrer" className="p-3 bg-portfolio-yellow/20 rounded-lg hover:bg-portfolio-yellow hover:text-portfolio-black transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
              <form 
                action="https://formsubmit.co/100be4891b3868db13234ebd8ad5a368" 
                method="POST" 
                className="space-y-6"
                onSubmit={() => {
                  toast.success("Your message has been sent successfully! We'll get back to you soon.");
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Input 
                      type="text"
                      name="name"
                      placeholder="Your Name" 
                      className="bg-portfolio-white/10 border-portfolio-white/30 text-portfolio-white placeholder:text-portfolio-white/60 py-3 focus:border-portfolio-yellow h-12 text-base"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      name="email"
                      placeholder="Your Email"
                      className="bg-portfolio-white/10 border-portfolio-white/30 text-portfolio-white placeholder:text-portfolio-white/60 py-3 focus:border-portfolio-yellow h-12 text-base"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Textarea 
                    name="message"
                    placeholder="Your Message" 
                    className="bg-portfolio-white/10 border-portfolio-white/30 text-portfolio-white placeholder:text-portfolio-white/60 py-3 focus:border-portfolio-yellow text-base"
                    rows={5}
                    required
                  />
                </div>
                
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New message from Shavez Edit website" />
                <input type="hidden" name="_captcha" value="false" />
                
                <Button 
                  type="submit"
                  className="w-full bg-portfolio-yellow text-portfolio-black hover:bg-portfolio-yellow/90 font-bold py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-portfolio-black border-t border-portfolio-yellow/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold font-display mb-4">
              <span className="text-portfolio-yellow">Shavez</span>
              <span className="text-portfolio-white ml-2">Edit</span>
            </div>
            <p className="text-portfolio-white/60 text-sm sm:text-base">© 2024 Mohd Shavez. Transforming vision into unforgettable video.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
