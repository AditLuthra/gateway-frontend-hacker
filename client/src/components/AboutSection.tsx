export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-dark-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-makr-blue mb-4">
            &lt;ABOUT /&gt;
          </h2>
          <p className="text-xl text-dark-text max-w-3xl mx-auto">
            Makrx is more than a makerspace—it's a digital ecosystem where creators, 
            hackers, and innovators converge to build the impossible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="neon-border rounded-lg p-6 bg-dark-surface/30">
            <div className="text-makr-yellow text-4xl mb-4">
              <i className="fas fa-tools"></i>
            </div>
            <h3 className="text-xl font-mono font-bold mb-3 text-makr-yellow">Workshop Access</h3>
            <p className="text-dark-text">
              State-of-the-art equipment including 3D printers, CNC machines, 
              laser cutters, and electronics labs.
            </p>
          </div>

          <div className="neon-border rounded-lg p-6 bg-dark-surface/30">
            <div className="text-makr-blue text-4xl mb-4">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-xl font-mono font-bold mb-3 text-makr-blue">Community</h3>
            <p className="text-dark-text">
              Connect with like-minded makers, share knowledge, 
              and collaborate on groundbreaking projects.
            </p>
          </div>

          <div className="neon-border rounded-lg p-6 bg-dark-surface/30">
            <div className="text-terminal-green text-4xl mb-4">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3 className="text-xl font-mono font-bold mb-3 text-terminal-green">Innovation</h3>
            <p className="text-dark-text">
              From concept to prototype to market—we provide the resources 
              to bring your wildest ideas to life.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern makerspace workshop" 
              className="rounded-xl shadow-lg w-full h-auto neon-border"
              data-testid="about-workshop-image"
            />
          </div>
          <div>
            <h3 className="text-3xl font-mono font-bold text-makr-yellow mb-6">
              {'{MAKING_THE_FUTURE}'}
            </h3>
            <p className="text-lg text-dark-text mb-6">
              Our facility spans over 10,000 square feet of creative chaos, 
              equipped with everything from vintage oscilloscopes to quantum computers.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fas fa-check text-terminal-green"></i>
                <span className="font-mono">24/7 Access for Members</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check text-terminal-green"></i>
                <span className="font-mono">Expert Mentorship Program</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check text-terminal-green"></i>
                <span className="font-mono">Open Source Hardware Library</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check text-terminal-green"></i>
                <span className="font-mono">Regular Hackathons & Workshops</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
