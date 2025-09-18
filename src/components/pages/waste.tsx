import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Recycle, 
  Trash2, 
  AlertCircle,
  CheckCircle,
  Plus,
  Phone,
  Mail,
  Navigation
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';

const Waste: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState('zone-a');
  const [requestPickupOpen, setRequestPickupOpen] = useState(false);

  // Mock data for waste collection
  const currentSchedule = {
    nextCollection: "Tomorrow, March 15",
    collectionType: "General Waste & Recycling",
    timeWindow: "7:00 AM - 11:00 AM",
    countdown: 18, // hours until next collection
  };

  const weeklySchedule = [
    { day: 'Monday', type: 'General Waste', time: '7:00 AM', status: 'completed' },
    { day: 'Tuesday', type: 'Recycling', time: '8:00 AM', status: 'completed' },
    { day: 'Wednesday', type: 'Organic Waste', time: '7:30 AM', status: 'completed' },
    { day: 'Thursday', type: 'General Waste', time: '7:00 AM', status: 'upcoming' },
    { day: 'Friday', type: 'Recycling', time: '8:00 AM', status: 'upcoming' },
    { day: 'Saturday', type: 'Bulk Items', time: '9:00 AM', status: 'scheduled' },
  ];

  const zones = [
    { id: 'zone-a', name: 'Zone A - Downtown', households: 2500, nextCollection: 'Tomorrow' },
    { id: 'zone-b', name: 'Zone B - Residential North', households: 3200, nextCollection: 'Friday' },
    { id: 'zone-c', name: 'Zone C - Industrial District', households: 800, nextCollection: 'Monday' },
    { id: 'zone-d', name: 'Zone D - Suburban South', households: 4100, nextCollection: 'Wednesday' },
  ];

  const recyclingStats = {
    monthlyRecycled: 850, // kg
    monthlyWaste: 1200, // kg
    recyclingRate: 71, // percentage
    co2Saved: 340, // kg CO2
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto">
              <Recycle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="heading-font text-4xl font-bold text-foreground">Waste Management</h1>
              <p className="body-font text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                Manage your waste collection schedule, track recycling progress, and request special pickups.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Next Collection Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="heading-font text-2xl font-bold mb-4">Next Collection</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5" />
                      <span className="text-lg">{currentSchedule.nextCollection}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Trash2 className="w-5 h-5" />
                      <span>{currentSchedule.collectionType}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5" />
                      <span>{currentSchedule.timeWindow}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center lg:text-right">
                  <div className="mono-font text-4xl font-bold mb-2">
                    {currentSchedule.countdown}h
                  </div>
                  <div className="text-green-100 mb-4">Until next pickup</div>
                  <Button variant="secondary" className="text-green-700">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Set Reminder
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Schedule & Zone Selection */}
          <div className="lg:col-span-2 space-y-8">
            {/* Zone Selection */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Select Your Zone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={selectedZone} onValueChange={setSelectedZone}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your pickup zone" />
                    </SelectTrigger>
                    <SelectContent>
                      {zones.map((zone) => (
                        <SelectItem key={zone.id} value={zone.id}>
                          <div className="flex justify-between items-center w-full">
                            <span>{zone.name}</span>
                            <Badge variant="outline" className="ml-4">
                              Next: {zone.nextCollection}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <div className="text-sm font-semibold mb-2">Zone Information</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Households served:</span>
                        <div className="mono-font font-bold">
                          {zones.find(z => z.id === selectedZone)?.households.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Next collection:</span>
                        <div className="font-bold">
                          {zones.find(z => z.id === selectedZone)?.nextCollection}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Weekly Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Weekly Collection Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {weeklySchedule.map((item, index) => (
                      <div 
                        key={item.day}
                        className={`flex items-center justify-between p-4 rounded-lg border ${
                          item.status === 'upcoming' ? 'bg-primary/5 border-primary/20' :
                          item.status === 'completed' ? 'bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800' :
                          'bg-muted/50 border-border'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            item.status === 'completed' ? 'bg-green-500' :
                            item.status === 'upcoming' ? 'bg-primary' :
                            'bg-muted-foreground'
                          }`}>
                            {item.status === 'completed' ? (
                              <CheckCircle className="w-5 h-5 text-white" />
                            ) : (
                              <Trash2 className="w-5 h-5 text-white" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold">{item.day}</div>
                            <div className="text-sm text-muted-foreground">{item.type}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="mono-font font-bold">{item.time}</div>
                          <Badge 
                            variant={
                              item.status === 'completed' ? 'default' :
                              item.status === 'upcoming' ? 'default' :
                              'secondary'
                            }
                            className={
                              item.status === 'completed' ? 'bg-green-500' :
                              item.status === 'upcoming' ? 'bg-primary' :
                              ''
                            }
                          >
                            {item.status === 'completed' ? 'Collected' :
                             item.status === 'upcoming' ? 'Tomorrow' :
                             'Scheduled'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Interactive Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Navigation className="w-5 h-5 text-primary" />
                    Pickup Zone Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                      <div className="font-semibold">Interactive Zone Map</div>
                      <div className="text-sm text-muted-foreground">
                        View collection routes and pickup locations
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Stats & Actions */}
          <div className="space-y-8">
            {/* Recycling Progress */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Recycle className="w-5 h-5 text-green-500" />
                    Monthly Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Recycling Rate</span>
                      <span className="mono-font font-bold text-green-500">
                        {recyclingStats.recyclingRate}%
                      </span>
                    </div>
                    <Progress value={recyclingStats.recyclingRate} className="h-3" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg dark:bg-green-950/20">
                      <div className="mono-font text-xl font-bold text-green-600">
                        {recyclingStats.monthlyRecycled}kg
                      </div>
                      <div className="text-xs text-muted-foreground">Recycled</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg dark:bg-gray-950/20">
                      <div className="mono-font text-xl font-bold text-gray-600">
                        {recyclingStats.monthlyWaste}kg
                      </div>
                      <div className="text-xs text-muted-foreground">Total Waste</div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg dark:bg-blue-950/20">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-semibold">Environmental Impact</span>
                    </div>
                    <div className="mono-font text-lg font-bold text-blue-600">
                      {recyclingStats.co2Saved}kg CO₂ saved
                    </div>
                    <div className="text-xs text-muted-foreground">This month</div>
                  </div>
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
                  <Dialog open={requestPickupOpen} onOpenChange={setRequestPickupOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full justify-start">
                        <Plus className="w-4 h-4 mr-2" />
                        Request Special Pickup
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Request Special Pickup</DialogTitle>
                        <DialogDescription>
                          Submit a request for special waste pickup service
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium">Pickup Type</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select pickup type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bulk">Bulk Items</SelectItem>
                              <SelectItem value="hazardous">Hazardous Waste</SelectItem>
                              <SelectItem value="electronics">Electronics</SelectItem>
                              <SelectItem value="garden">Garden Waste</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium">Address</label>
                          <Input placeholder="Enter pickup address" />
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium">Description</label>
                          <Textarea placeholder="Describe items to be collected" />
                        </div>
                        
                        <div className="flex gap-2">
                          <Button className="flex-1">Submit Request</Button>
                          <Button variant="outline" onClick={() => setRequestPickupOpen(false)}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Report Missed Collection
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Annual Schedule
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-primary" />
                    <div>
                      <div className="font-semibold">Waste Management Hotline</div>
                      <div className="mono-font text-sm text-muted-foreground">
                        (555) 123-WASTE
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-primary" />
                    <div>
                      <div className="font-semibold">Email Support</div>
                      <div className="text-sm text-muted-foreground">
                        waste@citycare.gov
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <div>
                      <div className="font-semibold">Service Hours</div>
                      <div className="text-sm text-muted-foreground">
                        Monday - Friday, 7 AM - 6 PM
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waste;