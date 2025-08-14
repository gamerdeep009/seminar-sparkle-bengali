import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import DarkModeToggle from '@/components/DarkModeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import ScrollReveal from '@/components/ScrollReveal';
import { content } from '@/data/content';
import cyberSecurityLogo from '@/assets/cyber-security-logo.png';
import hitCampus from '@/assets/hit-campus.jpg';
import { Calendar, MapPin, Users, Mail, Phone, Clock, User, Award, BookOpen } from 'lucide-react';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const currentContent = content[language];

  const handleLanguageChange = (lang: 'en' | 'bn') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 gradient-hero shadow-elegant">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={cyberSecurityLogo} alt="Cyber Security Logo" className="h-12 w-12" />
              <div className="text-white">
                <h1 className="text-xl font-bold">HIT Seminar 2025</h1>
                <p className="text-sm opacity-90">Cyber Physical Systems</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageToggle currentLanguage={language} onLanguageChange={handleLanguageChange} />
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {currentContent.title}
              </h1>
              <p className="text-xl md:text-2xl mb-4 opacity-90">
                {currentContent.subtitle}
              </p>
              <p className="text-lg mb-8 opacity-80">
                {currentContent.organizedBy}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="secondary" className="px-4 py-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  10-11 September 2025
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  Haldia Institute of Technology
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  Free Registration
                </Badge>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Campus Image */}
      <ScrollReveal>
        <div className="w-full h-64 md:h-96 relative overflow-hidden">
          <img 
            src={hitCampus} 
            alt="HIT Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </ScrollReveal>

      {/* Organizers Section */}
      <section className="py-16 gradient-section">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              {language === 'en' ? 'Organizers & Leadership' : 'আয়োজক ও নেতৃত্ব'}
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Chief Patron */}
            <ScrollReveal direction="left" delay={100}>
              <Card className="gradient-card shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {currentContent.chiefPatron.title}
                  </h3>
                  <h4 className="font-semibold mb-2">{currentContent.chiefPatron.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {currentContent.chiefPatron.designation}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Coordinator */}
            <ScrollReveal direction="up" delay={200}>
              <Card className="gradient-card shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <User className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-accent mb-2">
                    {currentContent.coordinator.title}
                  </h3>
                  <h4 className="font-semibold mb-2">{currentContent.coordinator.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {currentContent.coordinator.designation}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Co-Coordinator */}
            <ScrollReveal direction="right" delay={300}>
              <Card className="gradient-card shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <User className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-accent mb-2">
                    {currentContent.coCoordinator.title}
                  </h3>
                  <h4 className="font-semibold mb-2">{currentContent.coCoordinator.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {currentContent.coCoordinator.designation}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Patrons */}
          <ScrollReveal delay={400}>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8 text-primary">
                {currentContent.patrons.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {currentContent.patrons.list.map((patron, index) => (
                  <ScrollReveal key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={500 + index * 100}>
                    <Card className="gradient-card shadow-card">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-1">{patron.name}</h4>
                        <p className="text-sm text-muted-foreground">{patron.designation}</p>
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              {currentContent.speakers.title}
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {currentContent.speakers.list.map((speaker, index) => (
              <ScrollReveal key={index} direction="scale" delay={100 + index * 50}>
                <Card className="gradient-card shadow-card hover:shadow-elegant transition-smooth">
                  <CardContent className="p-4 text-center">
                    <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-sm font-medium">{speaker}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 gradient-section">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              {currentContent.schedule.title}
            </h2>
          </ScrollReveal>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Day 1 */}
            <ScrollReveal direction="left">
              <Card className="gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary text-center">
                    {currentContent.schedule.day1.title}
                  </h3>
                  <div className="space-y-4">
                    {currentContent.schedule.day1.sessions.map((session, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4 py-2">
                        <div className="flex items-center mb-2">
                          <Clock className="w-4 h-4 text-primary mr-2" />
                          <span className="font-semibold text-sm">{session.time}</span>
                        </div>
                        <h4 className="font-medium mb-1">{session.topic}</h4>
                        <p className="text-sm text-muted-foreground">{session.speaker}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Day 2 */}
            <ScrollReveal direction="right">
              <Card className="gradient-card shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary text-center">
                    {currentContent.schedule.day2.title}
                  </h3>
                  <div className="space-y-4">
                    {currentContent.schedule.day2.sessions.map((session, index) => (
                      <div key={index} className="border-l-4 border-accent pl-4 py-2">
                        <div className="flex items-center mb-2">
                          <Clock className="w-4 h-4 text-accent mr-2" />
                          <span className="font-semibold text-sm">{session.time}</span>
                        </div>
                        <h4 className="font-medium mb-1">{session.topic}</h4>
                        <p className="text-sm text-muted-foreground">{session.speaker}</p>
                      </div>
                    ))}
                  </div>
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
      <section className="py-16 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-8">{currentContent.contact.title}</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span className="text-sm">{currentContent.contact.email}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="text-sm">{currentContent.contact.mobile}</span>
                </div>
              </div>
              <div className="mt-8">
                <Button
                  className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-elegant"
                  onClick={() => window.open('https://ataicademy.aicte.gov.in/signup', '_blank')}
                >
                  {language === 'en' ? 'Register Now' : 'এখনই নিবন্ধন করুন'}
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