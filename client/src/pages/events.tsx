import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, MapPin, Clock, Users, Star, Filter,
  Search, ChevronRight, ExternalLink, Play, Award,
  BookOpen, Wrench, Zap, Globe
} from "lucide-react";
import { EnhancedNavigation } from "@/components/EnhancedNavigation";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { SEOStructuredData } from "@/components/SEOStructuredData";
import { ThreeBackground } from "@/components/ThreeBackground";
import { Button } from "@/components/ui/button";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'competition' | 'meetup' | 'online';
  capacity: number;
  registered: number;
  price: number;
  instructor?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  featured?: boolean;
}

const upcomingEvents: Event[] = [
  {
    id: '1',
    title: '3D Printing Workshop: From Design to Print',
    description: 'Learn the complete 3D printing workflow from CAD design to finished product. Hands-on experience with industry-standard equipment.',
    date: '2024-02-15',
    time: '10:00 AM - 4:00 PM',
    location: 'MakrCave Bangalore',
    type: 'workshop',
    capacity: 20,
    registered: 15,
    price: 2500,
    instructor: 'Dr. Sarah Chen',
    difficulty: 'Beginner',
    tags: ['3D Printing', 'CAD', 'Design'],
    featured: true
  },
  {
    id: '2',
    title: 'Maker Innovation Challenge 2024',
    description: 'Annual competition for innovative maker projects. Win prizes worth ₹1 lakh and mentorship opportunities.',
    date: '2024-02-20',
    time: '9:00 AM - 6:00 PM',
    location: 'Multiple Locations',
    type: 'competition',
    capacity: 100,
    registered: 67,
    price: 0,
    difficulty: 'Advanced',
    tags: ['Competition', 'Innovation', 'Prizes'],
    featured: true
  },
  {
    id: '3',
    title: 'Arduino & IoT Fundamentals',
    description: 'Build your first IoT device with Arduino. Learn sensors, connectivity, and data visualization.',
    date: '2024-02-22',
    time: '2:00 PM - 6:00 PM',
    location: 'Online',
    type: 'online',
    capacity: 50,
    registered: 32,
    price: 1500,
    instructor: 'Mike Rodriguez',
    difficulty: 'Intermediate',
    tags: ['Arduino', 'IoT', 'Electronics']
  },
  {
    id: '4',
    title: 'Laser Cutting & Engraving Masterclass',
    description: 'Master precision cutting and creative engraving techniques. Work with wood, acrylic, and leather.',
    date: '2024-02-25',
    time: '11:00 AM - 5:00 PM',
    location: 'MakrCave Mumbai',
    type: 'workshop',
    capacity: 15,
    registered: 8,
    price: 3000,
    instructor: 'Lisa Park',
    difficulty: 'Intermediate',
    tags: ['Laser Cutting', 'Design', 'Materials']
  },
  {
    id: '5',
    title: 'Delhi Makers Meetup',
    description: 'Monthly networking event for Delhi maker community. Share projects, find collaborators, and learn from peers.',
    date: '2024-02-28',
    time: '6:00 PM - 9:00 PM',
    location: 'MakrCave Delhi',
    type: 'meetup',
    capacity: 40,
    registered: 28,
    price: 0,
    difficulty: 'Beginner',
    tags: ['Networking', 'Community', 'Projects']
  }
];

const pastEvents: Event[] = [
  {
    id: 'p1',
    title: 'CNC Machining Intensive',
    description: 'Advanced CNC programming and operation workshop',
    date: '2024-01-20',
    time: '9:00 AM - 5:00 PM',
    location: 'MakrCave Bangalore',
    type: 'workshop',
    capacity: 12,
    registered: 12,
    price: 4000,
    instructor: 'James Wilson',
    difficulty: 'Advanced',
    tags: ['CNC', 'Machining', 'Manufacturing']
  },
  {
    id: 'p2',
    title: 'Hackathon 2024: Smart Cities',
    description: '48-hour hackathon focused on smart city solutions',
    date: '2024-01-15',
    time: '9:00 AM - 9:00 AM',
    location: 'Multiple Locations',
    type: 'competition',
    capacity: 200,
    registered: 180,
    price: 500,
    difficulty: 'Advanced',
    tags: ['Hackathon', 'Smart Cities', 'IoT']
  }
];

export default function Events() {
  const [filter, setFilter] = useState<'all' | 'workshop' | 'competition' | 'meetup' | 'online'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesFilter = filter === 'all' || event.type === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'workshop': return <Wrench className="w-4 h-4" />;
      case 'competition': return <Award className="w-4 h-4" />;
      case 'meetup': return <Users className="w-4 h-4" />;
      case 'online': return <Globe className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'workshop': return 'bg-makr-blue/20 text-makr-blue border border-makr-blue/30';
      case 'competition': return 'bg-purple-500/20 text-purple-400 border border-purple-500/30';
      case 'meetup': return 'bg-terminal-green/20 text-terminal-green border border-terminal-green/30';
      case 'online': return 'bg-makr-yellow/20 text-makr-yellow border border-makr-yellow/30';
      default: return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-terminal-green/20 text-terminal-green border border-terminal-green/30';
      case 'Intermediate': return 'bg-makr-yellow/20 text-makr-yellow border border-makr-yellow/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
    }
  };

  return (
    <>
      <Helmet>
        <title>Events & Workshops - MakrX Community | MakrX.org</title>
        <meta 
          name="description" 
          content="Join MakrX community events: 3D printing workshops, maker competitions, IoT bootcamps, and networking meetups. Learn, create, and connect with fellow makers."
        />
      </Helmet>
      
      <SEOStructuredData type="event" />
      
      <ThreeBackground />
      <EnhancedNavigation />
      
      <main className="pt-16 min-h-screen relative z-10">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-makr-blue/10 backdrop-blur-sm border border-makr-blue/30 rounded-full px-6 py-2 mb-6">
              <Calendar className="h-5 w-5 text-makr-blue animate-pulse" />
              <span className="text-makr-blue font-mono font-semibold tracking-wider">
                COMMUNITY EVENTS
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-mono font-bold mb-4">
              <span className="text-gradient-cyberpunk">Events</span> & Workshops
            </h1>
            <p className="text-xl text-dark-text-secondary max-w-2xl mx-auto font-mono">
              Join our vibrant maker community through workshops, competitions, 
              and networking events designed to inspire and educate.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="mb-8 animate-slide-in-left">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {(['all', 'workshop', 'competition', 'meetup', 'online'] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`px-4 py-2 rounded-lg capitalize transition-all flex items-center gap-2 font-mono ${
                      filter === type
                        ? 'bg-makr-blue text-white border border-makr-blue/50 shadow-neon'
                        : 'bg-dark-bg-secondary border border-makr-blue/30 text-dark-text-secondary hover:border-makr-blue hover:text-makr-blue'
                    }`}
                  >
                    {type !== 'all' && getTypeIcon(type)}
                    {type}
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-text-muted" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-dark-bg-secondary border border-makr-blue/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-makr-blue focus:border-transparent text-dark-text-primary font-mono"
                />
              </div>
            </div>
          </div>

          {/* Featured Events */}
          {filter === 'all' && (
            <div className="mb-12 animate-slide-in-right">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gradient-cyberpunk font-mono">
                <Star className="w-6 h-6 text-makr-yellow" />
                Featured Events
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {upcomingEvents.filter(event => event.featured).map(event => (
                  <div key={event.id} className="card-cyberpunk overflow-hidden border border-makr-blue/30">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 rounded-lg text-xs flex items-center gap-1 font-mono ${getTypeColor(event.type)}`}>
                          {getTypeIcon(event.type)}
                          {event.type}
                        </span>
                        <span className={`px-2 py-1 rounded-lg text-xs font-mono ${getDifficultyColor(event.difficulty)}`}>
                          {event.difficulty}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-gradient-cyberpunk font-mono">{event.title}</h3>
                      <p className="text-dark-text-secondary mb-4 line-clamp-2 font-mono">{event.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-dark-text-secondary font-mono">
                          <Calendar className="w-4 h-4 text-makr-blue" />
                          {new Date(event.date).toLocaleDateString('en-IN', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-dark-text-secondary font-mono">
                          <Clock className="w-4 h-4 text-makr-yellow" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-dark-text-secondary font-mono">
                          <MapPin className="w-4 h-4 text-terminal-green" />
                          {event.location}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-gradient-cyberpunk font-mono">
                          {event.price === 0 ? 'Free' : `₹${event.price.toLocaleString()}`}
                        </div>
                        <button className="btn-cyberpunk px-6 py-2 rounded-lg transition-all font-mono">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Events */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-gradient-cyberpunk font-mono">
              {filter === 'all' ? 'All Upcoming Events' : `${filter.charAt(0).toUpperCase() + filter.slice(1)} Events`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <div key={event.id} className="card-cyberpunk hover:shadow-neon-lg transition-all border border-makr-blue/30">
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded text-xs flex items-center gap-1 font-mono ${getTypeColor(event.type)}`}>
                        {getTypeIcon(event.type)}
                        {event.type}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-mono ${getDifficultyColor(event.difficulty)}`}>
                        {event.difficulty}
                      </span>
                    </div>
                    
                    <h3 className="font-bold mb-2 line-clamp-2 text-gradient-cyberpunk font-mono">{event.title}</h3>
                    <p className="text-sm text-dark-text-secondary mb-3 line-clamp-2 font-mono">{event.description}</p>
                    
                    <div className="space-y-1 mb-4 text-xs text-dark-text-secondary font-mono">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-makr-blue" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-terminal-green" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-makr-yellow" />
                        {event.registered}/{event.capacity} registered
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gradient-cyberpunk font-mono">
                        {event.price === 0 ? 'Free' : `₹${event.price.toLocaleString()}`}
                      </span>
                      <button className="text-makr-blue hover:text-makr-yellow font-medium text-sm flex items-center gap-1 transition-colors font-mono">
                        Register <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div className="animate-slide-in-left">
            <h2 className="text-2xl font-bold mb-6 text-gradient-cyberpunk font-mono">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map(event => (
                <div key={event.id} className="bg-dark-bg-secondary border border-gray-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 rounded text-xs flex items-center gap-1 font-mono ${getTypeColor(event.type)}`}>
                      {getTypeIcon(event.type)}
                      {event.type}
                    </span>
                    <span className="px-2 py-1 rounded text-xs bg-gray-500/20 text-gray-400 border border-gray-500/30 font-mono">Completed</span>
                  </div>
                  
                  <h3 className="font-bold mb-2 text-dark-text-primary font-mono">{event.title}</h3>
                  <p className="text-sm text-dark-text-secondary mb-3 font-mono">{event.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-dark-text-secondary font-mono">
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                    <span>{event.registered} participants</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <EnhancedFooter />
    </>
  );
}