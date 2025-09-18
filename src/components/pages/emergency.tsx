import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Shield, 
  Heart, 
  Flame, 
  Car,
  AlertTriangle,
  Clock,
  Navigation,
  PhoneCall,
  MessageSquare,
  ExternalLink,
  Info,
  Zap
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const Emergency: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const emergencyServices = [
    {
      id: 'police',
      name: 'Police',
      icon: Shield,
      number: '911',
      description: 'Law enforcement, crime reporting, security issues',
      color: 'bg-blue-600',
      directNumber: '(555) 911-POLICE',
      nonEmergency: '(555) 311-TIPS'
    },
    {
      id: 'fire',
      name: 'Fire Department',
      icon: Flame,
      number: '911',
      description: 'Fire emergencies, rescue operations, hazmat incidents',
      color: 'bg-red-600',
      directNumber: '(555) 911-FIRE',
      nonEmergency: '(555) 311-FIRE'
    },
    {
      id: 'medical',
      name: 'Medical Emergency',
      icon: Heart,
      number: '911',
      description: 'Medical emergencies, ambulance services, health crises',
      color: 'bg-green-600',
      directNumber: '(555) 911-MEDIC',
      nonEmergency: '(555) 311-HEALTH'
    },
    {
      id: 'traffic',
      name: 'Traffic Emergency',
      icon: Car,
      number: '511',
      description: 'Road accidents, traffic incidents, hazardous conditions',
      color: 'bg-orange-600',
      directNumber: '(555) 511-TRAFFIC',
      nonEmergency: '(555) 311-ROADS'
    }
  ];

  const nearbyServices = [
    {
      name: 'City General Hospital',
      type: 'Hospital',
      distance: '0.8 mi',
      address: '123 Medical Center Dr',
      phone: '(555) 123-4567',
      available: true,
      icon: Heart
    },
    {
      name: 'Fire Station 12',
      type: 'Fire Station',
      distance: '1.2 mi',
      address: '456 Fire Station Rd',
      phone: '(555) 987-6543',
      available: true,
      icon: Flame
    },
    {
      name: 'Police Precinct 3',
      type: 'Police Station',
      distance: '0.5 mi',
      address: '789 Law Enforcement Ave',
      phone: '(555) 456-7890',
      available: true,
      icon: Shield
    },
    {
      name: 'Emergency Care Clinic',
      type: 'Urgent Care',
      distance: '2.1 mi',
      address: '321 Urgent Care Blvd',
      phone: '(555) 654-3210',
      available: false,
      icon: Heart
    }
  ];

  const currentAlerts = [
    {
      id: 1,
      type: 'Weather',
      title: 'Severe Thunderstorm Warning',
      description: 'Heavy rain and strong winds expected until 8 PM',
      level: 'moderate',
      area: 'Downtown and surrounding areas',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'Traffic',
      title: 'Road Closure - Main Street',
      description: 'Water main break causing temporary road closure',
      level: 'low',
      area: 'Main Street between 1st and 3rd Ave',
      time: '4 hours ago'
    }
  ];

  const preparednessResources = [
    {
      title: 'Emergency Kit Checklist',
      description: 'Essential items for home emergency preparedness',
      category: 'Preparation'
    },
    {
      title: 'Evacuation Routes',
      description: 'Know your neighborhood evacuation plans',
      category: 'Planning'
    },
    {
      title: 'First Aid Guide',
      description: 'Basic first aid procedures and techniques',
      category: 'Medical'
    },
    {
      title: 'Emergency Contacts',
      description: 'Important numbers to have on hand',
      category: 'Contacts'
    }
  ];

  const handleEmergencyCall = (number: string) => {
    // In a real app, this would initiate a call
    window.open(`tel:${number}`, '_self');
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="heading-font text-4xl font-bold text-foreground">Emergency Services</h1>
              <p className="body-font text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                Quick access to emergency contacts, nearby services, and safety resources. 
                For life-threatening emergencies, call 911 immediately.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Emergency Call Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div>
                  <h2 className="heading-font text-3xl font-bold mb-4">Emergency? Call Now!</h2>
                  <p className="text-red-100 text-lg">
                    For immediate life-threatening emergencies
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-2xl px-12 py-6 bg-white text-red-600 hover:bg-red-50"
                  onClick={() => handleEmergencyCall('911')}
                >
                  <PhoneCall className="w-8 h-8 mr-4" />
                  Call 911
                </Button>
                
                <div className="text-sm text-red-100 max-w-md mx-auto">
                  This will connect you directly to emergency dispatch. 
                  Stay calm and provide your location and nature of emergency.
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Current Alerts */}
        {currentAlerts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Active Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentAlerts.map((alert) => (
                  <Alert 
                    key={alert.id}
                    className={`${
                      alert.level === 'high' ? 'border-red-200 bg-red-50 dark:bg-red-950/20' :
                      alert.level === 'moderate' ? 'border-orange-200 bg-orange-50 dark:bg-orange-950/20' :
                      'border-yellow-200 bg-yellow-50 dark:bg-yellow-950/20'
                    }`}
                  >
                    <AlertTriangle className={`h-4 w-4 ${
                      alert.level === 'high' ? 'text-red-600' :
                      alert.level === 'moderate' ? 'text-orange-600' :
                      'text-yellow-600'
                    }`} />
                    <AlertTitle>{alert.title}</AlertTitle>
                    <AlertDescription>
                      <div className="space-y-1">
                        <div>{alert.description}</div>
                        <div className="text-sm text-muted-foreground">
                          Area: {alert.area} • {alert.time}
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Emergency Services */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Emergency Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {emergencyServices.map((service) => (
                      <motion.div
                        key={service.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card 
                          className="cursor-pointer transition-all duration-200 hover:shadow-lg"
                          onClick={() => setSelectedService(service.id)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                <service.icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="heading-font text-lg font-bold mb-1">{service.name}</h3>
                                <p className="text-sm text-muted-foreground mb-3">
                                  {service.description}
                                </p>
                                <div className="flex gap-2">
                                  <Button 
                                    size="sm" 
                                    className={service.color}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleEmergencyCall(service.number);
                                    }}
                                  >
                                    <PhoneCall className="w-4 h-4 mr-1" />
                                    {service.number}
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleEmergencyCall(service.nonEmergency);
                                    }}
                                  >
                                    Non-Emergency
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Emergency Map */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-primary" />
                    Emergency Services Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center relative">
                    <div className="text-center space-y-2">
                      <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                      <div className="font-semibold">Interactive Emergency Map</div>
                      <div className="text-sm text-muted-foreground">
                        Locate nearest hospitals, police, and fire stations
                      </div>
                    </div>
                    <Button 
                      className="absolute bottom-4 right-4"
                      size="sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open Full Map
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Nearby Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Nearby Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {nearbyServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                      <div className={`w-8 h-8 ${
                        service.available ? 'bg-green-500' : 'bg-gray-400'
                      } rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <service.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sm truncate">{service.name}</h4>
                          <Badge 
                            variant={service.available ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {service.available ? "Open" : "Closed"}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <div>{service.type} • {service.distance}</div>
                          <div>{service.address}</div>
                          <div className="mono-font">{service.phone}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Report Non-Emergency Issue
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Info className="w-4 h-4 mr-2" />
                    Emergency Preparedness Guide
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Save Emergency Contacts
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Zap className="w-4 h-4 mr-2" />
                    Sign Up for Alerts
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Safety Resources */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Safety Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {preparednessResources.map((resource, index) => (
                    <div key={index} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="font-semibold text-sm mb-1">{resource.title}</div>
                      <div className="text-xs text-muted-foreground mb-2">{resource.description}</div>
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Emergency Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          size="lg"
          className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 shadow-lg"
          onClick={() => handleEmergencyCall('911')}
        >
          <PhoneCall className="w-8 h-8" />
        </Button>
      </motion.div>
    </div>
  );
};

export default Emergency;