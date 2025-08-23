export function ProjectsSection() {
  const projects = [
    {
      id: "iot-network",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Neural IoT Grid",
      subtitle: "IoT Sensor Network",
      description: "Distributed sensor network powered by Arduino and machine learning algorithms.",
      overlayDescription: "Smart environmental monitoring system",
      color: "makr-yellow"
    },
    {
      id: "robotic-arm",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Precision Manipulator",
      subtitle: "Robotic Arm",
      description: "Custom 3D printed robotic arm with computer vision integration.",
      overlayDescription: "6-axis precision manipulation system",
      color: "makr-blue"
    },
    {
      id: "custom-pcb",
      image: "https://pixabay.com/get/g7930c16baf7f8d36dce6e051fa9f47f013ce041065392bf8cb9d2230b3f508da1e7d6c48c27b031805429eee3d6455be016637be645fa27ae739523b5e301fb4_1280.jpg",
      title: "Quantum Interface",
      subtitle: "Custom PCB",
      description: "Custom PCB design for quantum computing interface applications.",
      overlayDescription: "High-frequency signal processing board",
      color: "terminal-green"
    },
    {
      id: "cnc-parts",
      image: "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Aero Components",
      subtitle: "CNC Precision",
      description: "CNC machined precision parts for aerospace applications.",
      overlayDescription: "Aerospace-grade aluminum components",
      color: "makr-yellow"
    },
    {
      id: "holographic-display",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "HoloVision",
      subtitle: "Holographic Display",
      description: "Next-generation holographic display technology for AR applications.",
      overlayDescription: "Volumetric projection system",
      color: "makr-blue"
    },
    {
      id: "biosensor",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "HealthTech Pro",
      subtitle: "BioSensor",
      description: "Advanced biomedical sensors for real-time health monitoring.",
      overlayDescription: "Wearable health monitoring device",
      color: "terminal-green"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-terminal-green mb-4">
            PROJECTS.exe
          </h2>
          <p className="text-xl text-dark-text max-w-3xl mx-auto">
            Witness the birth of tomorrow's technology in our maker showcase.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card relative neon-border rounded-lg overflow-hidden bg-dark-surface/30 group cursor-pointer"
              data-testid={`project-card-${project.id}`}
            >
              <img 
                src={project.image}
                alt={project.subtitle}
                className="w-full h-48 object-cover"
              />
              <div className="project-overlay absolute inset-0 bg-black/80 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className={`text-xl font-mono font-bold text-${project.color} mb-2`}>
                    {project.subtitle}
                  </h3>
                  <p className="text-sm text-dark-text">{project.overlayDescription}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className={`font-mono font-bold text-${project.color} mb-2`}>
                  {project.title}
                </h3>
                <p className="text-sm text-dark-text">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="px-8 py-4 border-2 border-makr-blue text-makr-blue font-mono font-bold rounded-md hover:bg-makr-blue hover:text-black transition-all glitch-hover"
            data-testid="button-load-more-projects"
          >
            LOAD MORE PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}
