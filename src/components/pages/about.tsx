import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Target, 
  Award, 
  MapPin,
  TrendingUp,
  Shield,
  Heart,
  Lightbulb,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AboutProps {
  onPageChange: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onPageChange }) => {
  const cityStats = [
    { label: "Population", value: "2.3M", icon: Users },
    { label: "City Area", value: "847 km²", icon: MapPin },
    { label: "Districts", value: "12", icon: Target },
    { label: "Services Available", value: "50+", icon: Award }
  ];

  const landmarks = [
    {
      name: "City Hall",
      description: "Historic government building serving as the administrative center",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Central Park",
      description: "550-acre green space in the heart of downtown",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "Innovation District",
      description: "Tech hub driving economic growth and innovation",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Open governance and clear communication with all residents"
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Putting the needs of our citizens at the center of everything we do"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing technology to improve city services and quality of life"
    },
    {
      icon: TrendingUp,
      title: "Sustainability",
      description: "Building a greener, more sustainable future for generations to come"
    }
  ];

  const faqs = [
    {
      question: "How do I register for CityCare services?",
      answer: "You can register for CityCare by clicking the 'Sign Up' button and providing your basic information. Registration is free and gives you access to all city services through our platform."
    },
    {
      question: "What services are available through CityCare?",
      answer: "CityCare provides access to over 50 city services including waste management, water supply monitoring, public transport information, emergency services, permits and licensing, and much more. All services are designed to be accessible 24/7."
    },
    {
      question: "How do I report a city service issue?",
      answer: "You can report issues through the 'Report Issue' page, by calling our service hotline, or through the mobile app. All reports are tracked and you'll receive updates on the resolution progress."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, CityCare uses enterprise-grade security measures to protect your personal information. We follow strict data protection protocols and never share your information with third parties without your consent."
    },
    {
      question: "How can I stay updated on city news and alerts?",
      answer: "You can subscribe to SMS alerts, email notifications, or check the latest updates on your CityCare dashboard. We provide real-time information about service disruptions, emergency alerts, and city news."
    },
    {
      question: "What if I need help using CityCare?",
      answer: "Our customer support team is available Monday-Friday 8 AM to 6 PM. You can contact us through phone, email, or live chat. We also provide comprehensive help guides and video tutorials."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                About Our City
              </Badge>
              <h1 className="heading-font text-4xl lg:text-5xl font-bold text-foreground">
                Building a Smarter,<br />
                <span className="text-primary">Connected Community</span>
              </h1>
              <p className="body-font text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
                CityCare represents our commitment to providing exceptional city services through 
                innovative technology, transparent governance, and community-centered solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => onPageChange('services')}>
                Explore Services
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => onPageChange('contact')}>
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* City Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-4 gap-8">
              {cityStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6">
                    <CardContent className="space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                        <stat.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <div className="mono-font text-3xl font-bold text-primary">{stat.value}</div>
                        <div className="text-muted-foreground">{stat.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="heading-font text-3xl font-bold mb-4">Our Mission</h2>
                <p className="body-font text-lg text-muted-foreground leading-relaxed">
                  To create an inclusive, sustainable, and technologically advanced city that 
                  serves all residents with excellence, transparency, and innovation. We strive 
                  to make city services accessible, efficient, and responsive to community needs.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="heading-font text-xl font-bold">What Sets Us Apart</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>24/7 digital access to all city services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Real-time service tracking and updates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Community-driven feedback and improvements</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Sustainable and environmentally conscious practices</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="City Planning Meeting"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-font text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="body-font text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and shape our commitment to serving the community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="heading-font text-lg font-bold">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* City Landmarks */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-font text-3xl font-bold mb-4">City Landmarks</h2>
            <p className="body-font text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the iconic places that define our city's character and history.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {landmarks.map((landmark, index) => (
              <motion.div
                key={landmark.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={landmark.image}
                      alt={landmark.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="heading-font text-lg font-bold mb-2">{landmark.name}</h3>
                    <p className="text-muted-foreground text-sm">{landmark.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-font text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="body-font text-xl text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about CityCare and our city services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="heading-font font-semibold">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-font text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="body-font text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions or need assistance? Our team is here to help you navigate city services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="heading-font text-lg font-bold mb-2">Phone Support</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Speak directly with our support team
                    </p>
                    <div className="mono-font font-bold text-primary">(555) 311-CITY</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="heading-font text-lg font-bold mb-2">Email Support</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Send us a message anytime
                    </p>
                    <div className="text-primary">info@citycare.gov</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="heading-font text-lg font-bold mb-2">Office Hours</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Visit us in person
                    </p>
                    <div className="text-sm">
                      <div>Monday - Friday</div>
                      <div className="mono-font font-bold text-primary">8:00 AM - 6:00 PM</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;