import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  Filter,
  Recycle, 
  Droplets, 
  Bus, 
  Phone,
  FileText,
  MapPin,
  Users,
  Building,
  Zap,
  Shield,
  Heart,
  GraduationCap,
  ArrowRight,
  Clock,
  Star
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface ServicesProps {
  onPageChange: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onPageChange }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', label: 'All Services', count: 12 },
    { id: 'infrastructure', label: 'Infrastructure', count: 4 },
    { id: 'community', label: 'Community', count: 3 },
    { id: 'emergency', label: 'Emergency', count: 2 },
    { id: 'environment', label: 'Environment', count: 3 }
  ];

  const allServices = [
    {
      id: 'waste',
      icon: Recycle,
      title: "Waste Management",
      description: "Schedule pickups, view collection times, track recycling progress, and report missed collections",
      category: 'environment',
      color: "bg-green-500",
      page: "waste",
      features: ['Pickup Scheduling', 'Collection Calendar', 'Recycling Tracking', 'Issue Reporting'],
      rating: 4.8,
      users: "25K+ users",
      availability: "24/7 Online"
    },
    {
      id: 'water',
      icon: Droplets,
      title: "Water Supply",
      description: "Monitor water quality, view outage alerts, check billing, and report water issues",
      category: 'infrastructure',
      color: "bg-blue-500",
      page: "water",
      features: ['Quality Monitoring', 'Outage Alerts', 'Billing Access', 'Issue Reporting'],
      rating: 4.9,
      users: "40K+ users",
      availability: "24/7 Monitoring"
    },
    {
      id: 'transport',
      icon: Bus,
      title: "Public Transport",
      description: "Real-time schedules, route planning, service updates, and accessibility information",
      category: 'infrastructure',
      color: "bg-purple-500",
      page: "transport",
      features: ['Live Schedules', 'Route Planning', 'Service Alerts', 'Accessibility Info'],
      rating: 4.7,
      users: "60K+ users",
      availability: "Live Updates"
    },
    {
      id: 'emergency',
      icon: Phone,
      title: "Emergency Services",
      description: "Quick access to emergency contacts, hospital locations, and emergency preparedness",
      category: 'emergency',
      color: "bg-red-500",
      page: "emergency",
      features: ['Emergency Contacts', 'Hospital Locator', 'Alert System', 'Safety Resources'],
      rating: 5.0,
      users: "50K+ users",
      availability: "24/7 Emergency"
    },
    {
      id: 'permits',
      icon: FileText,
      title: "Permits & Licenses",
      description: "Apply for permits, track applications, renew licenses, and access forms",
      category: 'community',
      color: "bg-yellow-500",
      page: "permits",
      features: ['Online Applications', 'Status Tracking', 'Digital Forms', 'Renewal Alerts'],
      rating: 4.6,
      users: "15K+ users",
      availability: "Business Hours"
    },
    {
      id: 'housing',
      icon: Building,
      title: "Housing Services",
      description: "Housing assistance, property information, rental resources, and zoning details",
      category: 'community',
      color: "bg-indigo-500",
      page: "housing",
      features: ['Housing Assistance', 'Property Search', 'Rental Resources', 'Zoning Info'],
      rating: 4.5,
      users: "20K+ users",
      availability: "Business Hours"
    },
    {
      id: 'utilities',
      icon: Zap,
      title: "Utilities",
      description: "Electricity, gas, and internet services management and outage reporting",
      category: 'infrastructure',
      color: "bg-orange-500",
      page: "utilities",
      features: ['Outage Reporting', 'Service Management', 'Billing Support', 'Connection Requests'],
      rating: 4.4,
      users: "35K+ users",
      availability: "24/7 Support"
    },
    {
      id: 'safety',
      icon: Shield,
      title: "Public Safety",
      description: "Crime reporting, safety alerts, neighborhood watch, and security resources",
      category: 'emergency',
      color: "bg-gray-700",
      page: "safety",
      features: ['Crime Reporting', 'Safety Alerts', 'Neighborhood Watch', 'Security Tips'],
      rating: 4.7,
      users: "30K+ users",
      availability: "24/7 Monitoring"
    },
    {
      id: 'health',
      icon: Heart,
      title: "Health Services",
      description: "Health clinic locations, vaccination schedules, health alerts, and wellness programs",
      category: 'community',
      color: "bg-pink-500",
      page: "health",
      features: ['Clinic Locator', 'Vaccination Info', 'Health Alerts', 'Wellness Programs'],
      rating: 4.8,
      users: "28K+ users",
      availability: "24/7 Info"
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: "Education",
      description: "School information, enrollment assistance, educational programs, and resources",
      category: 'community',
      color: "bg-cyan-500",
      page: "education",
      features: ['School Directory', 'Enrollment Help', 'Program Info', 'Educational Resources'],
      rating: 4.6,
      users: "22K+ users",
      availability: "Business Hours"
    },
    {
      id: 'parks',
      icon: MapPin,
      title: "Parks & Recreation",
      description: "Park locations, facility booking, event schedules, and recreational programs",
      category: 'environment',
      color: "bg-green-600",
      page: "parks",
      features: ['Park Directory', 'Facility Booking', 'Event Calendar', 'Program Registration'],
      rating: 4.7,
      users: "18K+ users",
      availability: "Seasonal Hours"
    },
    {
      id: 'community',
      icon: Users,
      title: "Community Programs",
      description: "Local events, volunteer opportunities, community meetings, and civic engagement",
      category: 'community',
      color: "bg-teal-500",
      page: "community",
      features: ['Event Calendar', 'Volunteer Matching', 'Meeting Schedules', 'Civic Engagement'],
      rating: 4.9,
      users: "12K+ users",
      availability: "Community Hours"
    }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                All City Services
              </Badge>
              <h1 className="heading-font text-4xl lg:text-5xl font-bold text-foreground">
                Comprehensive City Services
              </h1>
              <p className="body-font text-xl text-muted-foreground mt-4 max-w-3xl mx-auto">
                Access all municipal services from one central hub. Everything you need to 
                interact with city services, all in one place.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-base"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {serviceCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.label} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {serviceCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all duration-200"
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center">
              <h2 className="heading-font text-2xl font-bold">
                {selectedCategory === 'all' ? 'All Services' : 
                 serviceCategories.find(cat => cat.id === selectedCategory)?.label} 
                <span className="text-muted-foreground ml-2">({filteredServices.length})</span>
              </h2>
              <div className="text-sm text-muted-foreground">
                Showing {filteredServices.length} of {allServices.length} services
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 shadow-lg"
                  onClick={() => onPageChange(service.page)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm mono-font font-bold">{service.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="heading-font text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Service Features */}
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Key Features
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {service.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{service.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Service Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div>
                        <div className="text-xs text-muted-foreground">Users</div>
                        <div className="text-sm mono-font font-bold">{service.users}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Availability</div>
                        <div className="text-sm mono-font font-bold">{service.availability}</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Access Service
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="heading-font text-xl font-bold mb-2">No services found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-font text-3xl font-bold mb-4">Service Categories</h2>
            <p className="body-font text-xl text-muted-foreground max-w-2xl mx-auto">
              Our services are organized into key categories to help you find what you need quickly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.filter(cat => cat.id !== 'all').map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent>
                    <h3 className="heading-font text-lg font-bold mb-2">{category.label}</h3>
                    <div className="mono-font text-2xl font-bold text-primary mb-2">
                      {category.count}
                    </div>
                    <div className="text-sm text-muted-foreground">Available Services</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;