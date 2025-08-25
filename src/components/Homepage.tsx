import React, { useState } from 'react';
import { ArrowRight, Star, Users, TrendingUp, Shield, Calendar, Phone, Mail, MapPin, User, AtSign, Building } from 'lucide-react';
import logo from "../assets/ChatGPT Image Aug 25, 2025, 01_03_39 PM.png"
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatProps {
  number: string;
  label: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  platform: string;
  followers: string;
  experience: string;
  goals: string;
}

const Homepage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    platform: '',
    followers: '',
    experience: '',
    goals: ''
  });

  const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="text-black mb-6">{icon}</div>
      <h3 className="text-xl font-semibold text-black mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );

  const Stat: React.FC<StatProps> = ({ number, label }) => (
    <div className="text-center">
      <div className="text-4xl font-light text-black mb-2">{number}</div>
      <div className="text-gray-500 font-light">{label}</div>
    </div>
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <img src={logo} alt="" className='w-full h-full object-cover' />
              </div>
           
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-black transition-colors font-light">Services</a>
              <a href="#about" className="text-gray-600 hover:text-black transition-colors font-light">About</a>
              <a href="#contact" className="text-gray-600 hover:text-black transition-colors font-light">Contact</a>
              <a href="#register" className="text-gray-600 hover:text-black transition-colors font-light">Apply</a>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all font-light">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-px bg-black"></div>
                <div className="w-full h-px bg-black"></div>
                <div className="w-full h-px bg-black"></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-gray-50 rounded-xl p-4">
              <a href="#services" className="block text-gray-600 hover:text-black py-3 font-light">Services</a>
              <a href="#about" className="block text-gray-600 hover:text-black py-3 font-light">About</a>
              <a href="#contact" className="block text-gray-600 hover:text-black py-3 font-light">Contact</a>
              <a href="#register" className="block text-gray-600 hover:text-black py-3 font-light">Apply</a>
              <button className="w-full bg-black text-white px-6 py-3 rounded-full mt-4 font-light">
                Get Started
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light text-black mb-8 leading-tight">
            Talent Management
            <br />
            <span className="font-extralight text-gray-400">Reimagined</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            We handle the business side of content creation so you can focus on what you do best. Professional management for the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-light hover:bg-gray-800 transition-all flex items-center gap-3 group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-300 text-black px-10 py-4 rounded-full text-lg font-light hover:bg-gray-50 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <Stat number="500+" label="Active Creators" />
            <Stat number="$10M+" label="Revenue Generated" />
            <Stat number="95%" label="Client Satisfaction" />
            <Stat number="24/7" label="Support Available" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-black mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive management solutions designed to maximize your potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<TrendingUp className="w-10 h-10" />}
            title="Growth Strategy"
            description="Data-driven approaches to grow your audience and increase engagement across all platforms with measurable results."
          />
          <ServiceCard
            icon={<Users className="w-10 h-10" />}
            title="Account Management"
            description="Professional management of your content calendar, fan interactions, and platform optimization by industry experts."
          />
          <ServiceCard
            icon={<Star className="w-10 h-10" />}
            title="Brand Development"
            description="Build a strong personal brand that resonates with your audience and attracts premium partnership opportunities."
          />
          <ServiceCard
            icon={<Shield className="w-10 h-10" />}
            title="Privacy Protection"
            description="Comprehensive privacy and security measures to protect your personal information and intellectual property."
          />
          <ServiceCard
            icon={<Calendar className="w-10 h-10" />}
            title="Content Planning"
            description="Strategic content planning and scheduling to maintain consistent engagement and sustainable growth patterns."
          />
          <ServiceCard
            icon={<TrendingUp className="w-10 h-10" />}
            title="Revenue Optimization"
            description="Maximize your earnings through strategic pricing, promotions, and premium content offerings tailored to your audience."
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-light text-black mb-12">Why Choose VVV Inc?</h2>
            <div className="bg-white border border-gray-100 rounded-3xl p-12">
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                We understand the unique challenges content creators face in today's digital landscape. 
                Our team of experienced professionals provides personalized management services that 
                allow you to focus on what you do best — creating content.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                With industry expertise and cutting-edge tools, we help creators build sustainable 
                businesses while maintaining their creative freedom and personal brand integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-light text-black mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Ready to take your content creation to the next level? Let's discuss how we can help.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <Phone className="w-8 h-8 text-black mx-auto mb-4" />
            <h3 className="text-black font-medium mb-3">Phone</h3>
            <p className="text-gray-600 font-light">+234 9058995592</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <Mail className="w-8 h-8 text-black mx-auto mb-4" />
            <h3 className="text-black font-medium mb-3">Email</h3>
            <p className="text-gray-600 font-light">haymanmaurice1995@gmail.com</p>
          </div>
          <div className="text-center p-8 bg-gray-50 rounded-2xl">
            <MapPin className="w-8 h-8 text-black mx-auto mb-4" />
            <h3 className="text-black font-medium mb-3">Location</h3>
            <p className="text-gray-600 font-light">Lagos, Nigeria</p>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="register" className="bg-black py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light text-white mb-8">Apply to Join VVV Inc</h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
                Ready to take your content creation career to the next level? Fill out our application form and let's start building your success story together.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-light"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-light"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-3">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-light"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-3">
                    Primary Platform *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      id="platform"
                      name="platform"
                      required
                      value={formData.platform}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-light appearance-none bg-white"
                    >
                      <option value="">Select your main platform</option>
                      <option value="onlyfans">OnlyFans</option>
                      <option value="instagram">Instagram</option>
                      <option value="tiktok">TikTok</option>
                      <option value="twitter">Twitter/X</option>
                      <option value="youtube">YouTube</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="followers" className="block text-sm font-medium text-gray-700 mb-3">
                    Current Follower Count
                  </label>
                  <select
                    id="followers"
                    name="followers"
                    value={formData.followers}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-light appearance-none bg-white"
                  >
                    <option value="">Select range</option>
                    <option value="0-1k">0 - 1,000</option>
                    <option value="1k-10k">1,000 - 10,000</option>
                    <option value="10k-50k">10,000 - 50,000</option>
                    <option value="50k-100k">50,000 - 100,000</option>
                    <option value="100k+">100,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-3">
                    Content Creation Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-light appearance-none bg-white"
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Just starting out (0-6 months)</option>
                    <option value="intermediate">Some experience (6 months - 2 years)</option>
                    <option value="experienced">Experienced (2+ years)</option>
                    <option value="professional">Professional creator (3+ years)</option>
                  </select>
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-3">
                  What are your main goals? *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  required
                  rows={5}
                  value={formData.goals}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all font-light resize-none"
                  placeholder="Tell us about your content creation goals, what you hope to achieve, and how we can help you succeed..."
                />
              </div>

              <div className="mt-10 text-center">
                <button
                  type="submit"
                  className="bg-black text-white px-12 py-4 rounded-full text-lg font-light hover:bg-gray-800 transition-all inline-flex items-center gap-3"
                >
                  Submit Application
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-sm text-gray-500 mt-4 font-light">
                  We'll review your application and get back to you within 48 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-medium text-sm">V</span>
              </div>
              <span className="text-xl font-medium text-black">VVV Inc</span>
            </div>
            <p className="text-gray-500 mb-6 font-light">Professional talent management for the digital age</p>
            <div className="flex justify-center space-x-8 mb-8">
              <a href="#services" className="text-gray-400 hover:text-black transition-colors font-light">Services</a>
              <a href="#about" className="text-gray-400 hover:text-black transition-colors font-light">About</a>
              <a href="#contact" className="text-gray-400 hover:text-black transition-colors font-light">Contact</a>
              <a href="#register" className="text-gray-400 hover:text-black transition-colors font-light">Apply</a>
            </div>
            <p className="text-gray-400 text-sm font-light">© 2025 VVV Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;