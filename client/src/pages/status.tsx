import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, AlertTriangle, XCircle, Clock,
  TrendingUp, Activity, Server, Globe, Database,
  Zap, Shield, RefreshCw
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'partial_outage' | 'major_outage';
  description: string;
  uptime: number;
  responseTime: number;
  lastChecked: string;
}

interface Incident {
  id: string;
  title: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved';
  severity: 'minor' | 'major' | 'critical';
  description: string;
  startTime: string;
  resolvedTime?: string;
  updates: IncidentUpdate[];
}

interface IncidentUpdate {
  time: string;
  message: string;
  status: string;
}

export default function Status() {
  const [services, setServices] = useState<ServiceStatus[]>([]);
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    // Simulate real-time status updates
    const fetchStatus = () => {
      setServices([
        {
          name: 'MakrX Gateway',
          status: 'operational',
          description: 'Main website and authentication',
          uptime: 99.97,
          responseTime: 156,
          lastChecked: new Date().toISOString()
        },
        {
          name: 'MakrCave Platform',
          status: 'operational',
          description: 'Makerspace management system',
          uptime: 99.94,
          responseTime: 203,
          lastChecked: new Date().toISOString()
        },
        {
          name: 'MakrX Store',
          status: 'operational',
          description: 'E-commerce and ordering platform',
          uptime: 99.99,
          responseTime: 145,
          lastChecked: new Date().toISOString()
        },
        {
          name: 'Learning Platform',
          status: 'operational',
          description: 'Course delivery and certification',
          uptime: 99.91,
          responseTime: 189,
          lastChecked: new Date().toISOString()
        },
        {
          name: 'Authentication (SSO)',
          status: 'operational',
          description: 'User authentication and authorization',
          uptime: 99.98,
          responseTime: 98,
          lastChecked: new Date().toISOString()
        },
        {
          name: 'Payment Processing',
          status: 'operational',
          description: 'Payment gateway and billing',
          uptime: 99.96,
          responseTime: 234,
          lastChecked: new Date().toISOString()
        },
        {
          name: 'API Services',
          status: 'operational',
          description: 'Public and internal APIs',
          uptime: 99.95,
          responseTime: 178,
          lastChecked: new Date().toISOString()
        },
        {
          name: 'File Storage',
          status: 'operational',
          description: 'Document and media storage',
          uptime: 99.99,
          responseTime: 89,
          lastChecked: new Date().toISOString()
        }
      ]);

      setIncidents([
        {
          id: 'INC-2024-001',
          title: 'Resolved: Brief API latency spike',
          status: 'resolved',
          severity: 'minor',
          description: 'Some users experienced increased response times for API calls between 14:30-14:45 IST.',
          startTime: '2024-01-23T14:30:00Z',
          resolvedTime: '2024-01-23T14:45:00Z',
          updates: [
            {
              time: '2024-01-23T14:45:00Z',
              message: 'Issue resolved. All systems operating normally.',
              status: 'resolved'
            },
            {
              time: '2024-01-23T14:35:00Z',
              message: 'Identified database connection pool saturation. Implementing fix.',
              status: 'identified'
            },
            {
              time: '2024-01-23T14:32:00Z',
              message: 'Investigating reports of increased API response times.',
              status: 'investigating'
            }
          ]
        }
      ]);

      setLastUpdated(new Date().toISOString());
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-makr-yellow" />;
      case 'partial_outage':
        return <AlertTriangle className="w-5 h-5 text-orange-400" />;
      case 'major_outage':
        return <XCircle className="w-5 h-5 text-red-400" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-400 border-green-400/30 bg-green-400/10';
      case 'degraded':
        return 'text-makr-yellow border-makr-yellow/30 bg-makr-yellow/10';
      case 'partial_outage':
        return 'text-orange-400 border-orange-400/30 bg-orange-400/10';
      case 'major_outage':
        return 'text-red-400 border-red-400/30 bg-red-400/10';
      default:
        return 'text-gray-400 border-gray-400/30 bg-gray-400/10';
    }
  };

  const getIncidentSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'major':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      case 'minor':
        return 'text-makr-yellow bg-makr-yellow/10 border-makr-yellow/30';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const overallStatus = services.every(s => s.status === 'operational') ? 'operational' : 'degraded';

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navigation />
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-makr-blue/20 to-green-400/20"></div>
      </div>

      <div className="relative pt-24 pb-16">
        {/* Header */}
        <section className="py-16 border-b border-makr-blue/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-8">
              <Activity className="w-16 h-16 text-makr-yellow mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold text-makr-yellow mb-4 tracking-wider">
                SYSTEM_STATUS.monitor()
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Real-time status monitoring for all MakrX services
              </p>
              
              {/* Overall Status */}
              <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl border ${getStatusColor(overallStatus)}`}>
                {getStatusIcon(overallStatus)}
                <span className="font-semibold">
                  {overallStatus === 'operational' ? 'All Systems Operational' : 'Some Systems Degraded'}
                </span>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                <RefreshCw className="w-4 h-4" />
                <span>Last updated: {new Date(lastUpdated).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Service Status Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-makr-yellow">
              SERVICE_HEALTH.getAll()
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6 hover:border-makr-yellow/50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-makr-yellow mb-1">{service.name}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                    <div className="ml-3">
                      {getStatusIcon(service.status)}
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Uptime:</span>
                      <span className="text-green-400 font-semibold">{service.uptime}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-makr-blue font-semibold">{service.responseTime}ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className={`font-semibold capitalize ${service.status === 'operational' ? 'text-green-400' : 'text-makr-yellow'}`}>
                        {service.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-makr-yellow">
              PERFORMANCE_METRICS.aggregate()
            </h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center bg-black border border-makr-blue/30 rounded-xl p-6">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-400 mb-1">99.97%</div>
                <div className="text-gray-400 text-sm">Overall Uptime</div>
              </div>
              
              <div className="text-center bg-black border border-makr-blue/30 rounded-xl p-6">
                <Zap className="w-8 h-8 text-makr-yellow mx-auto mb-2" />
                <div className="text-2xl font-bold text-makr-yellow mb-1">156ms</div>
                <div className="text-gray-400 text-sm">Avg Response</div>
              </div>
              
              <div className="text-center bg-black border border-makr-blue/30 rounded-xl p-6">
                <Server className="w-8 h-8 text-makr-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-makr-blue mb-1">8/8</div>
                <div className="text-gray-400 text-sm">Services Online</div>
              </div>
              
              <div className="text-center bg-black border border-makr-blue/30 rounded-xl p-6">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-400 mb-1">0</div>
                <div className="text-gray-400 text-sm">Active Incidents</div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-makr-yellow">
              INCIDENT_HISTORY.getRecent()
            </h2>
            
            {incidents.length > 0 ? (
              <div className="space-y-6">
                {incidents.map((incident) => (
                  <div key={incident.id} className="bg-gray-900 border border-makr-blue/30 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-lg text-xs font-semibold border uppercase ${getIncidentSeverityColor(incident.severity)}`}>
                            {incident.severity}
                          </span>
                          <span className="text-gray-400 text-sm">#{incident.id}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-makr-yellow mb-2">{incident.title}</h3>
                        <p className="text-gray-300">{incident.description}</p>
                      </div>
                      <div className="text-right text-sm text-gray-400">
                        <div>Started: {new Date(incident.startTime).toLocaleString('en-IN')}</div>
                        {incident.resolvedTime && (
                          <div>Resolved: {new Date(incident.resolvedTime).toLocaleString('en-IN')}</div>
                        )}
                      </div>
                    </div>
                    
                    {/* Incident Updates */}
                    <div className="border-t border-gray-700 pt-4">
                      <h4 className="text-sm font-semibold text-makr-blue mb-3">Update Timeline:</h4>
                      <div className="space-y-3">
                        {incident.updates.map((update, updateIndex) => (
                          <div key={updateIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-makr-blue rounded-full mt-2 flex-shrink-0"></div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-sm text-gray-400">
                                  {new Date(update.time).toLocaleString('en-IN')}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded ${update.status === 'resolved' ? 'bg-green-400/20 text-green-400' : 'bg-makr-yellow/20 text-makr-yellow'}`}>
                                  {update.status}
                                </span>
                              </div>
                              <p className="text-gray-300 text-sm">{update.message}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-400 mb-2">No Recent Incidents</h3>
                <p className="text-gray-400">All systems have been running smoothly</p>
              </div>
            )}
          </div>
        </section>

        {/* Status Subscription */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-makr-yellow">
              NOTIFICATIONS.subscribe()
            </h2>
            <p className="text-gray-300 mb-8">
              Stay informed about system status updates and maintenance windows
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black border border-makr-blue/30 rounded-xl p-6">
                <Globe className="w-8 h-8 text-makr-blue mx-auto mb-4" />
                <h3 className="font-semibold text-makr-blue mb-2">Status Page</h3>
                <p className="text-gray-400 text-sm">Bookmark this page for real-time updates</p>
              </div>
              
              <div className="bg-black border border-makr-blue/30 rounded-xl p-6">
                <Database className="w-8 h-8 text-makr-yellow mx-auto mb-4" />
                <h3 className="font-semibold text-makr-yellow mb-2">Email Alerts</h3>
                <p className="text-gray-400 text-sm">Get notified of major incidents via email</p>
              </div>
              
              <div className="bg-black border border-makr-blue/30 rounded-xl p-6">
                <Activity className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold text-green-400 mb-2">SMS Updates</h3>
                <p className="text-gray-400 text-sm">Critical alerts sent directly to your phone</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <section className="py-12 border-t border-makr-blue/30">
          <div className="max-w-4xl mx-auto px-6 text-center text-gray-400">
            <p>
              For real-time updates, follow us on{' '}
              <a href="#" className="text-makr-blue hover:underline">Twitter</a> or 
              subscribe to our{' '}
              <a href="#" className="text-makr-blue hover:underline">status page updates</a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}