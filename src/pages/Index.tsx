import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import ScrollReveal from '@/components/ScrollReveal';
import { content } from '@/data/content';
import cyberSecurityLogo from '@/assets/cyber-security-logo.png';
import hitCampus from '@/assets/hit-campus.jpg';
import speaker1 from '@/assets/speaker-1.jpg';
import speaker2 from '@/assets/speaker-2.jpg';
import speaker3 from '@/assets/speaker-3.jpg';
import speaker4 from '@/assets/speaker-4.jpg';
import { Calendar, MapPin, Users, Mail, Phone, Clock, User, Award, BookOpen, Star, Zap, Shield } from 'lucide-react';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const currentContent = content[language];

  const handleLanguageChange = (lang: 'en' | 'bn') => {
    setLanguage(lang);
  };

  const speakerImages = [speaker1, speaker2, speaker3, speaker4];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation language={language} onLanguageChange={handleLanguageChange} />

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center text-white pt-20" style={{ background: 'linear-gradient(90deg, rgba(28, 178, 237, 1) 0%, rgba(51, 123, 212, 1) 50%, rgba(255, 255, 255, 1) 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <ScrollReveal direction="left">
              <div className="space-y-8">
                {/* College Logos */}
                <div className="flex items-center space-x-6 mb-8">
                  <img 
                    src={cyberSecurityLogo} 
                    alt="Cyber Security Logo" 
                    className="h-16 w-16" 
                  />
                  <img 
                    src={cyberSecurityLogo} 
                    alt="HIT Logo" 
                    className="h-16 w-16" 
                  />
                </div>

                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
                    {currentContent.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-black font-medium">
                    {currentContent.subtitle}
                  </p>
                  <p className="text-lg text-black">
                    {currentContent.organizedBy}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="px-4 py-3 glass-morphism hover-lift">
                    <Calendar className="w-5 h-5 mr-2" />
                    10-11 September 2025
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-3 glass-morphism hover-lift">
                    <MapPin className="w-5 h-5 mr-2" />
                    Haldia Institute of Technology
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-3 glass-morphism hover-lift">
                    <Users className="w-5 h-5 mr-2" />
                    Free Registration
                  </Badge>
                </div>

                <div className="flex space-x-4">
                  <Button
                    className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-elegant animate-glow"
                    onClick={() => window.open('https://ataicademy.aicte.gov.in/signup', '_blank')}
                  >
                    {language === 'en' ? 'Register Now' : 'এখনই নিবন্ধন করুন'}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-black text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black transition-smooth"
                    onClick={() => document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {language === 'en' ? 'View Schedule' : 'সময়সূচি দেখুন'}
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Side - College Image */}
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-elegant hover-lift">
                  <img 
                    src={hitCampus} 
                    alt="HIT Campus" 
                    className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Haldia Institute of Technology
                    </h3>
                    <p className="text-white/80">
                      Leading Technical Education Excellence
                    </p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full animate-float glass-morphism flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full animate-float glass-morphism flex items-center justify-center" style={{ animationDelay: '1s' }}>
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Organizers Section */}
      <section id="organizers" className="min-h-screen py-20 gradient-section">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                {language === 'en' ? 'Organizers & Leadership' : 'আয়োজক ও নেতৃত্ব'}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Meet the distinguished leaders and organizers behind this prestigious seminar'
                  : 'এই মর্যাদাপূর্ণ সেমিনারের পিছনে বিশিষ্ট নেতৃবৃন্দ ও আয়োজকদের সাথে পরিচিত হন'
                }
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Chief Patron */}
            <ScrollReveal direction="left" delay={100}>
              <Card className="gradient-card shadow-card hover-lift transition-smooth group">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="relative z-10">
                    <Award className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {currentContent.chiefPatron.title}
                    </h3>
                    <h4 className="font-bold mb-3 text-lg">{currentContent.chiefPatron.name}</h4>
                    <p className="text-muted-foreground">
                      {currentContent.chiefPatron.designation}
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-10 translate-x-10 transition-transform group-hover:scale-150"></div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Coordinator */}
            <ScrollReveal direction="up" delay={200}>
              <Card className="gradient-card shadow-card hover-lift transition-smooth group">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="relative z-10">
                    <User className="w-16 h-16 text-accent mx-auto mb-6 animate-float" style={{ animationDelay: '0.5s' }} />
                    <h3 className="text-xl font-bold text-accent mb-3">
                      {currentContent.coordinator.title}
                    </h3>
                    <h4 className="font-bold mb-3 text-lg">{currentContent.coordinator.name}</h4>
                    <p className="text-muted-foreground">
                      {currentContent.coordinator.designation}
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full -translate-y-10 translate-x-10 transition-transform group-hover:scale-150"></div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Co-Coordinator */}
            <ScrollReveal direction="right" delay={300}>
              <Card className="gradient-card shadow-card hover-lift transition-smooth group">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className="relative z-10">
                    <User className="w-16 h-16 text-accent mx-auto mb-6 animate-float" style={{ animationDelay: '1s' }} />
                    <h3 className="text-xl font-bold text-accent mb-3">
                      {currentContent.coCoordinator.title}
                    </h3>
                    <h4 className="font-bold mb-3 text-lg">{currentContent.coCoordinator.name}</h4>
                    <p className="text-muted-foreground">
                      {currentContent.coCoordinator.designation}
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full -translate-y-10 translate-x-10 transition-transform group-hover:scale-150"></div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Patrons */}
          <ScrollReveal delay={400}>
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center mb-12 text-gradient">
                {currentContent.patrons.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {currentContent.patrons.list.map((patron, index) => (
                  <ScrollReveal key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={500 + index * 100}>
                    <Card className="gradient-card shadow-card hover-lift transition-smooth group">
                      <CardContent className="p-6 relative overflow-hidden">
                        <div className="relative z-10">
                          <Star className="w-8 h-8 text-primary mb-3" />
                          <h4 className="font-bold mb-2 text-lg">{patron.name}</h4>
                          <p className="text-muted-foreground">{patron.designation}</p>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/5 rounded-full transition-transform group-hover:scale-150"></div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="min-h-screen py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                {currentContent.speakers.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Distinguished experts sharing cutting-edge insights in cybersecurity and technology'
                  : 'সাইবার নিরাপত্তা ও প্রযুক্তিতে অত্যাধুনিক অন্তর্দৃষ্টি ভাগ করে নিচ্ছেন বিশিষ্ট বিশেষজ্ঞরা'
                }
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {currentContent.speakers.list.map((speaker, index) => (
              <ScrollReveal key={index} direction="scale" delay={100 + index * 100}>
                <Card className="gradient-card shadow-card hover-lift transition-smooth group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img 
                        src={speakerImages[index % speakerImages.length]} 
                        alt={speaker}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                          <BookOpen className="w-6 h-6 text-primary mb-2" />
                          <p className="font-medium text-sm text-gray-900">Expert Speaker</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {speaker}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {language === 'en' ? 'Technology Expert' : 'প্রযুক্তি বিশেষজ্ঞ'}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="min-h-screen py-20 gradient-section">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                {currentContent.schedule.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {language === 'en' 
                  ? 'Comprehensive program schedule for both days of the seminar'
                  : 'সেমিনারের উভয় দিনের জন্য বিস্তৃত কর্মসূচির সময়সূচি'
                }
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Day 1 */}
            <ScrollReveal direction="left">
              <Card className="gradient-card shadow-card hover-lift transition-smooth group">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-primary/10 p-4 rounded-full">
                        <Calendar className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-8 text-primary text-center">
                      {currentContent.schedule.day1.title}
                    </h3>
                    <div className="space-y-6">
                      {currentContent.schedule.day1.sessions.map((session, index) => (
                        <div key={index} className="border-l-4 border-primary pl-6 py-3 hover:bg-primary/5 rounded-r-lg transition-colors">
                          <div className="flex items-center mb-3">
                            <Clock className="w-5 h-5 text-primary mr-3" />
                            <span className="font-bold text-sm bg-primary text-primary-foreground px-3 py-1 rounded-full">{session.time}</span>
                          </div>
                          <h4 className="font-bold mb-2 text-lg">{session.topic}</h4>
                          <p className="text-muted-foreground">{session.speaker}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full transition-transform group-hover:scale-150"></div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Day 2 */}
            <ScrollReveal direction="right">
              <Card className="gradient-card shadow-card hover-lift transition-smooth group">
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <div className="bg-accent/10 p-4 rounded-full">
                        <Calendar className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-8 text-accent text-center">
                      {currentContent.schedule.day2.title}
                    </h3>
                    <div className="space-y-6">
                      {currentContent.schedule.day2.sessions.map((session, index) => (
                        <div key={index} className="border-l-4 border-accent pl-6 py-3 hover:bg-accent/5 rounded-r-lg transition-colors">
                          <div className="flex items-center mb-3">
                            <Clock className="w-5 h-5 text-accent mr-3" />
                            <span className="font-bold text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full">{session.time}</span>
                          </div>
                          <h4 className="font-bold mb-2 text-lg">{session.topic}</h4>
                          <p className="text-muted-foreground">{session.speaker}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full transition-transform group-hover:scale-150"></div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Registration & Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Seminar Details */}
            <ScrollReveal direction="left">
              <Card className="gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary">
                    {currentContent.seminarDetails.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-primary/10">
                      <p className="text-sm font-medium">{currentContent.seminarDetails.registrationLink}</p>
                    </div>
                    <p className="text-green-600 font-medium">{currentContent.seminarDetails.registrationFree}</p>
                    <p className="text-sm">{currentContent.seminarDetails.deadline}</p>
                    <p className="text-sm">{currentContent.seminarDetails.mode}</p>
                    <p className="text-sm">{currentContent.seminarDetails.language}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Date & Venue */}
            <ScrollReveal direction="right">
              <Card className="gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary">
                    {currentContent.dateVenue.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-primary mr-3" />
                      <span>{currentContent.dateVenue.schedule}</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                      <span>{currentContent.dateVenue.venue}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Purpose & Outcomes */}
      <section className="py-16 gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScrollReveal direction="left">
              <Card className="gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary">
                    {currentContent.purpose.title}
                  </h3>
                  <p className="text-sm leading-relaxed">{currentContent.purpose.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card className="gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary">
                    {currentContent.outcomes.title}
                  </h3>
                  <p className="text-sm leading-relaxed">{currentContent.outcomes.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Institution Description */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Card className="max-w-4xl mx-auto gradient-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary text-center">
                  {currentContent.institutionDescription.title}
                </h3>
                <p className="text-sm leading-relaxed text-center">
                  {currentContent.institutionDescription.description}
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 gradient-hero text-white flex items-center">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
                {currentContent.contact.title}
              </h3>
              <p className="text-xl opacity-90 mb-12">
                {language === 'en' 
                  ? 'Get in touch with us for more information about the seminar'
                  : 'সেমিনার সম্পর্কে আরও তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন'
                }
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="glass-morphism p-8 rounded-2xl hover-lift">
                  <Mail className="w-12 h-12 mx-auto mb-4 animate-float" />
                  <h4 className="font-bold text-lg mb-2">Email</h4>
                  <span className="text-white/80">{currentContent.contact.email}</span>
                </div>
                <div className="glass-morphism p-8 rounded-2xl hover-lift">
                  <Phone className="w-12 h-12 mx-auto mb-4 animate-float" style={{ animationDelay: '0.5s' }} />
                  <h4 className="font-bold text-lg mb-2">Phone</h4>
                  <span className="text-white/80">{currentContent.contact.mobile}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-elegant animate-glow px-8 py-4 text-lg"
                  onClick={() => window.open('https://ataicademy.aicte.gov.in/signup', '_blank')}
                >
                  {language === 'en' ? 'Register Now' : 'এখনই নিবন্ধন করুন'}
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary transition-smooth px-8 py-4 text-lg"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {language === 'en' ? 'Back to Top' : 'শীর্ষে ফিরুন'}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img src={cyberSecurityLogo} alt="Logo" className="h-8 w-8" />
            <span className="font-semibold">Haldia Institute of Technology</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 HIT. {language === 'en' ? 'All rights reserved.' : 'সর্বস্বত্ব সংরক্ষিত।'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;