import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Droplets, 
  AlertTriangle, 
  Clock, 
  TrendingUp,
  Beaker,
  MapPin,
  Phone,
  CreditCard,
  Download,
  RefreshCw,
  CheckCircle,
  XCircle,
  Info
} from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const Water: React.FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  // Mock water data
  const waterQuality = {
    overallRating: 'Excellent',
    score: 94,
    lastTested: '2 hours ago',
    metrics: [
      { name: 'pH Level', value: 7.2, range: '6.5-8.5', status: 'good' },
      { name: 'Chlorine', value: 0.8, range: '0.2-4.0 mg/L', status: 'good' },
      { name: 'Turbidity', value: 0.3, range: '<1 NTU', status: 'excellent' },
      { name: 'Hardness', value: 120, range: '60-120 mg/L', status: 'good' },
    ]
  };

  const currentOutages = [
    {
      id: 1,
      area: 'Downtown District 3',
      reason: 'Planned maintenance',
      startTime: '6:00 AM',
      endTime: '2:00 PM',
      affectedHouseholds: 1200,
      status: 'ongoing'
    },
    {
      id: 2,
      area: 'Riverside Avenue',
      reason: 'Pipe repair',
      startTime: '10:00 PM',
      endTime: '4:00 AM',
      affectedHouseholds: 450,
      status: 'scheduled'
    }
  ];

  const supplySchedule = [
    { area: 'Zone A', time: '6:00 AM - 10:00 AM', pressure: 'High', status: 'active' },
    { area: 'Zone B', time: '10:00 AM - 2:00 PM', pressure: 'Medium', status: 'upcoming' },
    { area: 'Zone C', time: '2:00 PM - 6:00 PM', pressure: 'High', status: 'upcoming' },
    { area: 'Zone D', time: '6:00 PM - 10:00 PM', pressure: 'Medium', status: 'upcoming' },
  ];

  const billingInfo = {
    currentMonth: {
      usage: 12500, // liters
      cost: 45.80,
      dueDate: 'March 25, 2024',
      status: 'unpaid'
    },
    lastMonth: {
      usage: 11200,
      cost: 42.50,
      status: 'paid'
    },
    yearlyUsage: [
      { month: 'Jan', usage: 10800 },
      { month: 'Feb', usage: 11200 },
      { month: 'Mar', usage: 12500 },
    ]
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto">
              <Droplets className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="heading-font text-4xl font-bold text-foreground">Water Supply</h1>
              <p className="body-font text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
                Monitor water quality, view supply schedules, check outage alerts, and manage your water billing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Active Alerts */}
        {currentOutages.some(outage => outage.status === 'ongoing') && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
              <AlertTriangle className="h-4 w-4 text-orange-600" />
              <AlertTitle className="text-orange-800 dark:text-orange-200">
                Active Water Service Interruption
              </AlertTitle>
              <AlertDescription className="text-orange-700 dark:text-orange-300">
                Water service is currently affected in Downtown District 3 due to planned maintenance. 
                Service expected to resume by 2:00 PM today.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}

        <Tabs defaultValue="quality" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="quality" className="flex items-center gap-2">
              <Beaker className="w-4 h-4" />
              Quality
            </TabsTrigger>
            <TabsTrigger value="supply" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Supply
            </TabsTrigger>
            <TabsTrigger value="outages" className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Outages
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Billing
            </TabsTrigger>
          </TabsList>

          {/* Water Quality Tab */}
          <TabsContent value="quality" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Overall Quality Score */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-1"
              >
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center gap-2">
                      <Droplets className="w-5 h-5 text-blue-500" />
                      Water Quality Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <div>
                      <div className="mono-font text-5xl font-bold text-blue-500 mb-2">
                        {waterQuality.score}
                      </div>
                      <Badge className="bg-green-500 text-white">
                        {waterQuality.overallRating}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <Progress value={waterQuality.score} className="h-3" />
                      <div className="text-sm text-muted-foreground">
                        Last updated: {waterQuality.lastTested}
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleRefresh} 
                      disabled={refreshing}
                      className="w-full"
                    >
                      {refreshing ? (
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <RefreshCw className="w-4 h-4 mr-2" />
                      )}
                      Refresh Data
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quality Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Detailed Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {waterQuality.metrics.map((metric, index) => (
                        <div key={metric.name} className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">{metric.name}</span>
                            {metric.status === 'excellent' ? (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            ) : metric.status === 'good' ? (
                              <CheckCircle className="w-5 h-5 text-blue-500" />
                            ) : (
                              <XCircle className="w-5 h-5 text-orange-500" />
                            )}
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="mono-font font-bold text-lg">
                                {metric.value}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                Safe range: {metric.range}
                              </span>
                            </div>
                            
                            <div className={`h-2 rounded-full ${
                              metric.status === 'excellent' ? 'bg-green-100' :
                              metric.status === 'good' ? 'bg-blue-100' :
                              'bg-orange-100'
                            }`}>
                              <div className={`h-full rounded-full ${
                                metric.status === 'excellent' ? 'bg-green-500' :
                                metric.status === 'good' ? 'bg-blue-500' :
                                'bg-orange-500'
                              } w-3/4`} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Quality Report */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Monthly Quality Report</span>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto" />
                      <div className="font-semibold">Quality Trend Chart</div>
                      <div className="text-sm text-muted-foreground">
                        30-day water quality metrics visualization
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Supply Schedule Tab */}
          <TabsContent value="supply" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Today's Supply Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {supplySchedule.map((schedule, index) => (
                      <div 
                        key={schedule.area}
                        className={`flex items-center justify-between p-4 rounded-lg border ${
                          schedule.status === 'active' ? 'bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800' :
                          'bg-muted/50 border-border'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            schedule.status === 'active' ? 'bg-blue-500' : 'bg-muted-foreground'
                          }`}>
                            <Droplets className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold">{schedule.area}</div>
                            <div className="text-sm text-muted-foreground">{schedule.time}</div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <Badge 
                            variant={schedule.status === 'active' ? 'default' : 'secondary'}
                            className={schedule.status === 'active' ? 'bg-blue-500' : ''}
                          >
                            {schedule.pressure} Pressure
                          </Badge>
                          <div className="text-sm text-muted-foreground mt-1">
                            {schedule.status === 'active' ? 'Currently Active' : 'Upcoming'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Supply Map */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Water Distribution Network
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                      <div className="font-semibold">Interactive Network Map</div>
                      <div className="text-sm text-muted-foreground">
                        View water supply zones and pressure levels
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Outages & Maintenance Tab */}
          <TabsContent value="outages" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    Current & Scheduled Outages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {currentOutages.map((outage) => (
                      <div 
                        key={outage.id}
                        className={`p-4 rounded-lg border ${
                          outage.status === 'ongoing' ? 'bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800' :
                          'bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-semibold text-lg">{outage.area}</h3>
                            <p className="text-muted-foreground">{outage.reason}</p>
                          </div>
                          <Badge 
                            variant={outage.status === 'ongoing' ? 'destructive' : 'secondary'}
                          >
                            {outage.status === 'ongoing' ? 'Active' : 'Scheduled'}
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Start Time:</span>
                            <div className="mono-font font-bold">{outage.startTime}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">End Time:</span>
                            <div className="mono-font font-bold">{outage.endTime}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Affected:</span>
                            <div className="mono-font font-bold">
                              {outage.affectedHouseholds.toLocaleString()} households
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Stay Updated</h4>
                        <p className="text-sm text-muted-foreground">
                          Subscribe to SMS alerts to receive real-time notifications about water service 
                          interruptions in your area.
                        </p>
                        <Button size="sm" className="mt-2">
                          Subscribe to Alerts
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Current Bill */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      Current Bill
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center p-6 bg-muted rounded-lg">
                      <div className="mono-font text-3xl font-bold text-primary mb-2">
                        ${billingInfo.currentMonth.cost}
                      </div>
                      <div className="text-muted-foreground">March 2024</div>
                      <Badge 
                        variant="destructive" 
                        className="mt-2"
                      >
                        Due {billingInfo.currentMonth.dueDate}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Water Usage</span>
                        <span className="mono-font font-bold">
                          {billingInfo.currentMonth.usage.toLocaleString()}L
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Previous Month</span>
                        <span className="mono-font font-bold">
                          {billingInfo.lastMonth.usage.toLocaleString()}L
                        </span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span>Change</span>
                        <span className="mono-font font-bold text-orange-500">
                          +{((billingInfo.currentMonth.usage - billingInfo.lastMonth.usage) / billingInfo.lastMonth.usage * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1">Pay Now</Button>
                      <Button variant="outline">Download Bill</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Usage History */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Usage History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto" />
                        <div className="font-semibold">Usage Chart</div>
                        <div className="text-sm text-muted-foreground">
                          Monthly consumption trends
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact & Support */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Billing Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold">Billing Hotline</div>
                        <div className="mono-font text-sm text-muted-foreground">
                          (555) 123-BILL
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold">Customer Service</div>
                        <div className="text-sm text-muted-foreground">
                          Mon-Fri, 8 AM - 6 PM
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-primary" />
                      <div>
                        <div className="font-semibold">Payment Options</div>
                        <div className="text-sm text-muted-foreground">
                          Online, Phone, Auto-pay
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Water;