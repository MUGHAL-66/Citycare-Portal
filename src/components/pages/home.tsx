import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Recycle, 
  Droplets, 
  Bus, 
  Phone,
  Wind,
  Thermometer,
  CloudRain,
  AlertCircle,
  Star,
  Users,
  TrendingUp,
  MapPin,
  Clock,
  ChevronLeft,
  ChevronRight,
  FileText,
  MessageCircle
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomeProps {
  onPageChange: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [weatherData, setWeatherData] = useState({
    temperature: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    airQuality: 'Good',
    aqi: 45
  });

  // Mock news data
  const newsItems = [
    {
      title: "New Recycling Centers Opening Next Month",
      description: "Five new recycling facilities will be operational from March 1st",
      time: "2 hours ago",
      type: "Infrastructure"
    },
    {
      title: "Water Supply Maintenance Scheduled",
      description: "Planned maintenance in District 3 on weekend",
      time: "4 hours ago",
      type: "Maintenance"
    },
    {
      title: "Metro Line Extension Approved",
      description: "City council approves budget for Blue Line extension",
      time: "6 hours ago",
      type: "Transport"
    }
  ];

  // Auto-rotate news carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  const serviceCards = [
    {
      icon: Recycle,
      title: "Waste Management",
      description: "Schedule pickups, view collection times, and report issues",
      color: "bg-green-500",
      page: "waste"
    },
    {
      icon: Droplets,
      title: "Water Supply",
      description: "Check water quality, outage alerts, and billing",
      color: "bg-blue-500",
      page: "water"
    },
    {
      icon: Bus,
      title: "Transport",
      description: "Real-time schedules, route planning, and updates",
      color: "bg-purple-500",
      page: "transport"
    },
    {
      icon: Phone,
      title: "Emergency Services",
      description: "Quick access to emergency contacts and services",
      color: "bg-red-500",
      page: "emergency"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Local Resident",
      content: "CityCare makes it so easy to stay updated on city services. The app is intuitive and always current.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Business Owner",
      content: "Finally, a centralized platform for all city information. The waste scheduling feature has streamlined our operations.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Community Leader",
      content: "The emergency services integration gives me peace of mind. Quick access when it matters most.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  Smart City Services
                </Badge>
                <h1 className="heading-font text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your City, 
                  <span className="text-primary block">Connected</span>
                </h1>
                <p className="body-font text-xl text-muted-foreground mt-6 leading-relaxed">
                  Access all municipal services in one place. From waste management to emergency services, 
                  CityCare keeps you informed and connected to your community.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => onPageChange('services')}
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => onPageChange('about')}
                >
                  Learn More
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="mono-font text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Service Access</div>
                </div>
                <div className="text-center">
                  <div className="mono-font text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="mono-font text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                  alt="Modern Smart City"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Weather & Air Quality */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-font text-3xl font-bold text-center mb-8">Live City Conditions</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Thermometer className="w-5 h-5 text-primary" />
                    Current Weather
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="mono-font text-4xl font-bold text-primary">{weatherData.temperature}°C</div>
                      <div className="text-muted-foreground">{weatherData.condition}</div>
                    </div>
                    <CloudRain className="w-12 h-12 text-blue-500" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <div className="text-sm text-muted-foreground">Humidity</div>
                      <div className="mono-font font-bold">{weatherData.humidity}%</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Wind Speed</div>
                      <div className="mono-font font-bold">{weatherData.windSpeed} km/h</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Wind className="w-5 h-5 text-primary" />
                    Air Quality Index
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="mono-font text-4xl font-bold text-green-500">{weatherData.aqi}</div>
                      <div className="text-muted-foreground">{weatherData.airQuality}</div>
                    </div>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Wind className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Air Quality</span>
                      <span className="text-green-600">Excellent</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-font text-3xl font-bold mb-4">Essential City Services</h2>
            <p className="body-font text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick access to the services you need most. Everything is designed to be fast, reliable, and user-friendly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => onPageChange(service.page)}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="heading-font text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Access Service
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Alerts Carousel */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="heading-font text-3xl font-bold">Latest Updates</h2>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCurrentNewsIndex((prev) => prev === 0 ? newsItems.length - 1 : prev - 1)}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length)}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Card className="p-8">
              <motion.div
                key={currentNewsIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-6"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary">{newsItems[currentNewsIndex].type}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {newsItems[currentNewsIndex].time}
                    </span>
                  </div>
                  <h3 className="heading-font text-xl font-bold mb-2">{newsItems[currentNewsIndex].title}</h3>
                  <p className="text-muted-foreground">{newsItems[currentNewsIndex].description}</p>
                </div>
              </motion.div>
              
              <div className="flex justify-center gap-2 mt-6">
                {newsItems.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentNewsIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Report Issue CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="heading-font text-3xl font-bold mb-4">See Something? Say Something!</h2>
                  <p className="text-primary-foreground/90 text-lg mb-6">
                    Help keep our city running smoothly. Report issues, provide feedback, 
                    or suggest improvements directly to city officials.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="secondary" 
                      size="lg"
                      onClick={() => onPageChange('report')}
                    >
                      <FileText className="mr-2 w-5 h-5" />
                      Report an Issue
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    >
                      <MessageCircle className="mr-2 w-5 h-5" />
                      Give Feedback
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                    alt="Community Reporting"
                    className="w-full h-64 object-cover rounded-lg opacity-90"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-font text-3xl font-bold mb-4">Community Impact</h2>
            <p className="body-font text-xl text-muted-foreground max-w-2xl mx-auto">
              See how CityCare is making a difference in our community through real stories from real people.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <CardContent className="space-y-4">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                    <div className="pt-4 border-t border-border">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border"
          >
            <div className="text-center">
              <div className="mono-font text-3xl font-bold text-primary">15,000+</div>
              <div className="text-muted-foreground">Issues Resolved</div>
            </div>
            <div className="text-center">
              <div className="mono-font text-3xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="mono-font text-3xl font-bold text-primary">24h</div>
              <div className="text-muted-foreground">Avg Response Time</div>
            </div>
            <div className="text-center">
              <div className="mono-font text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Services Available</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;