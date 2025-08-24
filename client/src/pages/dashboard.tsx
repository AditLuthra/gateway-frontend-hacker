import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { 
  User, Settings, CreditCard, Bell, Shield, ExternalLink,
  Edit3, Save, X, Check, Calendar, Package, Zap, Building2,
  Activity, TrendingUp, Award, Clock
} from 'lucide-react';
import { EnhancedNavigation } from "@/components/EnhancedNavigation";
import { EnhancedFooter } from "@/components/EnhancedFooter";
import { SEOStructuredData } from "@/components/SEOStructuredData";
import { ThreeBackground } from "@/components/ThreeBackground";

interface UserProfile {
  name: string;
  email: string;
  role: string;
  memberSince: string;
  location: string;
  bio: string;
  avatar: string;
}

interface DashboardStats {
  totalProjects: number;
  ordersCompleted: number;
  eventsByou: number;
  makerspaceVisits: number;
}

export default function Dashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: "Alex Chen",
    email: "alex.chen@email.com", 
    role: "Maker",
    memberSince: "January 2024",
    location: "San Francisco, CA",
    bio: "Passionate maker interested in robotics and 3D printing. Always looking to learn new skills and collaborate on innovative projects.",
    avatar: "AC"
  });

  const [editedProfile, setEditedProfile] = useState<UserProfile>(profile);

  const stats: DashboardStats = {
    totalProjects: 12,
    ordersCompleted: 28,
    eventsByou: 5,
    makerspaceVisits: 45
  };

  const recentActivity = [
    { type: "order", title: "3D Print Order #3428", status: "Completed", date: "2 hours ago", icon: <Package className="w-4 h-4" /> },
    { type: "event", title: "Arduino Workshop", status: "Attended", date: "1 day ago", icon: <Calendar className="w-4 h-4" /> },
    { type: "makerspace", title: "TechShop SF Visit", status: "Checked Out", date: "3 days ago", icon: <Building2 className="w-4 h-4" /> },
    { type: "project", title: "Smart Home Hub v2", status: "Updated", date: "1 week ago", icon: <Zap className="w-4 h-4" /> }
  ];

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
    // Here you would typically make an API call to update the profile via Keycloak
    console.log('Profile updated:', editedProfile);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - My Profile & Activity | MakrX.org</title>
        <meta 
          name="description" 
          content="Manage your MakrX profile, view activity, track projects, and access all ecosystem platforms from your personal dashboard."
        />
      </Helmet>
      
      <SEOStructuredData type="website" />
      
      <ThreeBackground />
      <EnhancedNavigation />
      
      <main className="min-h-screen relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-makr-blue/10 backdrop-blur-sm border border-makr-blue/30 rounded-full px-6 py-2 mb-6">
              <User className="h-5 w-5 text-makr-blue animate-pulse" />
              <span className="text-makr-blue font-mono font-semibold tracking-wider">
                USER DASHBOARD
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-cyberpunk mb-4 font-mono">
              Welcome back, {profile.name.split(' ')[0]}
            </h1>
            <p className="text-xl text-dark-text-secondary font-mono">
              Manage your profile and track your maker journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="card-cyberpunk p-8 border border-makr-blue/30 hover:shadow-neon transition-all">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gradient-cyberpunk font-mono">Profile</h2>
                  {!isEditing && (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="p-2 rounded-lg hover:bg-makr-blue/10 transition-colors"
                    >
                      <Edit3 className="w-5 h-5 text-makr-blue" />
                    </button>
                  )}
                </div>

                {/* Avatar */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-makr-blue/20 border border-makr-blue/50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-neon">
                    <span className="text-2xl font-bold text-makr-blue font-mono">{profile.avatar}</span>
                  </div>
                  <div className="text-sm text-dark-text-muted font-mono">Member since {profile.memberSince}</div>
                </div>

                {/* Profile Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-text-secondary mb-1 font-mono">Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProfile.name}
                        onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                        className="w-full px-3 py-2 bg-dark-bg-secondary border border-makr-blue/30 rounded-lg text-dark-text-primary focus:outline-none focus:border-makr-yellow/50 transition-colors font-mono"
                      />
                    ) : (
                      <p className="text-dark-text-primary font-mono">{profile.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-text-secondary mb-1 font-mono">Email</label>
                    <p className="text-dark-text-primary font-mono">{profile.email}</p>
                    <p className="text-xs text-dark-text-muted font-mono">Managed via Keycloak SSO</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-text-secondary mb-1 font-mono">Role</label>
                    {isEditing ? (
                      <select
                        value={editedProfile.role}
                        onChange={(e) => setEditedProfile({ ...editedProfile, role: e.target.value })}
                        className="w-full px-3 py-2 bg-dark-bg-secondary border border-makr-blue/30 rounded-lg text-dark-text-primary focus:outline-none focus:border-makr-yellow/50 transition-colors font-mono"
                      >
                        <option value="Maker">Maker</option>
                        <option value="Makerspace Owner">Makerspace Owner</option>
                        <option value="Service Provider">Service Provider</option>
                        <option value="Educator">Educator</option>
                      </select>
                    ) : (
                      <p className="text-dark-text-primary font-mono">{profile.role}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-text-secondary mb-1 font-mono">Location</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProfile.location}
                        onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
                        className="w-full px-3 py-2 bg-dark-bg-secondary border border-makr-blue/30 rounded-lg text-dark-text-primary focus:outline-none focus:border-makr-yellow/50 transition-colors font-mono"
                      />
                    ) : (
                      <p className="text-dark-text-primary font-mono">{profile.location}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-text-secondary mb-1 font-mono">Bio</label>
                    {isEditing ? (
                      <textarea
                        value={editedProfile.bio}
                        onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                        rows={4}
                        className="w-full px-3 py-2 bg-dark-bg-secondary border border-makr-blue/30 rounded-lg text-dark-text-primary focus:outline-none focus:border-makr-yellow/50 transition-colors resize-none font-mono"
                      />
                    ) : (
                      <p className="text-dark-text-primary font-mono text-sm">{profile.bio}</p>
                    )}
                  </div>
                </div>

                {/* Edit Buttons */}
                {isEditing && (
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={handleSave}
                      className="flex-1 btn-cyberpunk py-2 px-4 font-semibold rounded-lg transition-all font-mono"
                    >
                      <Save className="w-4 h-4 inline mr-2" />
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex-1 py-2 px-4 bg-dark-bg-secondary border border-dark-border rounded-lg text-dark-text-secondary hover:bg-dark-bg-primary transition-colors font-mono"
                    >
                      <X className="w-4 h-4 inline mr-2" />
                      Cancel
                    </button>
                  </div>
                )}
              </div>

              {/* Quick Links */}
              <div className="card-cyberpunk p-6 border border-terminal-green/30 mt-6">
                <h3 className="text-xl font-bold text-gradient-cyberpunk mb-4 font-mono">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="https://auth.makrx.org/account"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-dark-text-secondary hover:text-makr-blue transition-colors font-mono"
                  >
                    <Shield className="w-4 h-4" />
                    <span>Account Security</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://auth.makrx.org/preferences"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-dark-text-secondary hover:text-makr-blue transition-colors font-mono"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Preferences</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://billing.makrx.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-dark-text-secondary hover:text-makr-blue transition-colors font-mono"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Billing & Payments</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="card-cyberpunk p-6 text-center">
                  <div className="w-12 h-12 bg-makr-blue/10 border border-makr-blue/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-makr-blue" />
                  </div>
                  <div className="text-2xl font-bold text-gradient-cyberpunk mb-1 font-mono">{stats.totalProjects}</div>
                  <div className="text-sm text-dark-text-muted font-mono">Total Projects</div>
                </div>

                <div className="card-cyberpunk p-6 text-center">
                  <div className="w-12 h-12 bg-terminal-green/10 border border-terminal-green/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Package className="w-6 h-6 text-terminal-green" />
                  </div>
                  <div className="text-2xl font-bold text-gradient-cyberpunk mb-1 font-mono">{stats.ordersCompleted}</div>
                  <div className="text-sm text-dark-text-muted font-mono">Orders Completed</div>
                </div>

                <div className="card-cyberpunk p-6 text-center">
                  <div className="w-12 h-12 bg-makr-yellow/10 border border-makr-yellow/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-makr-yellow" />
                  </div>
                  <div className="text-2xl font-bold text-gradient-cyberpunk mb-1 font-mono">{stats.eventsByou}</div>
                  <div className="text-sm text-dark-text-muted font-mono">Events Hosted</div>
                </div>

                <div className="card-cyberpunk p-6 text-center">
                  <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/30 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Building2 className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="text-2xl font-bold text-gradient-cyberpunk mb-1 font-mono">{stats.makerspaceVisits}</div>
                  <div className="text-sm text-dark-text-muted font-mono">Makerspace Visits</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="card-cyberpunk p-8 border border-makr-blue/30">
                <h3 className="text-2xl font-bold text-gradient-cyberpunk mb-6 font-mono">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-dark-bg-secondary rounded-lg border border-dark-border">
                      <div className="w-10 h-10 bg-makr-blue/10 border border-makr-blue/30 rounded-lg flex items-center justify-center">
                        <div className="text-makr-blue">{activity.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-dark-text-primary font-mono">{activity.title}</h4>
                        <p className="text-sm text-dark-text-muted font-mono">{activity.status}</p>
                      </div>
                      <div className="text-sm text-dark-text-muted font-mono">{activity.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platform Access */}
              <div className="card-cyberpunk p-8 border border-terminal-green/30">
                <h3 className="text-2xl font-bold text-gradient-cyberpunk mb-6 font-mono">MakrX Ecosystem Access</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <a
                    href="https://makrcave.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-dark-bg-secondary rounded-lg border border-makr-blue/30 hover:border-makr-blue/50 hover:shadow-neon transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-makr-blue" />
                      <span className="font-semibold text-dark-text-primary font-mono">MakrCave</span>
                      <ExternalLink className="w-4 h-4 text-dark-text-muted group-hover:text-makr-blue transition-colors" />
                    </div>
                    <p className="text-sm text-dark-text-muted font-mono">Access makerspaces and manage projects</p>
                  </a>

                  <a
                    href="https://makrx.store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-dark-bg-secondary rounded-lg border border-terminal-green/30 hover:border-terminal-green/50 hover:shadow-neon-green transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Package className="w-5 h-5 text-terminal-green" />
                      <span className="font-semibold text-dark-text-primary font-mono">MakrX Store</span>
                      <ExternalLink className="w-4 h-4 text-dark-text-muted group-hover:text-terminal-green transition-colors" />
                    </div>
                    <p className="text-sm text-dark-text-muted font-mono">Order tools and custom manufacturing</p>
                  </a>

                  <a
                    href="https://events.makrx.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-dark-bg-secondary rounded-lg border border-orange-500/30 hover:border-orange-500/50 hover:shadow-neon transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-orange-500" />
                      <span className="font-semibold text-dark-text-primary font-mono">MakrX.events</span>
                      <ExternalLink className="w-4 h-4 text-dark-text-muted group-hover:text-orange-500 transition-colors" />
                    </div>
                    <p className="text-sm text-dark-text-muted font-mono">Host and join maker events</p>
                  </a>

                  <a
                    href="https://providers.makrx.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-dark-bg-secondary rounded-lg border border-makr-yellow/30 hover:border-makr-yellow/50 hover:shadow-neon-yellow transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Settings className="w-5 h-5 text-makr-yellow" />
                      <span className="font-semibold text-dark-text-primary font-mono">Provider Panel</span>
                      <ExternalLink className="w-4 h-4 text-dark-text-muted group-hover:text-makr-yellow transition-colors" />
                    </div>
                    <p className="text-sm text-dark-text-muted font-mono">Manage your service provider account</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <EnhancedFooter />
    </>
  );
}