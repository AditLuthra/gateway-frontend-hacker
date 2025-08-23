export function StoreSection() {
  const storeItems = [
    {
      id: "dev-boards",
      icon: "fas fa-microchip",
      title: "Dev Boards",
      description: "Arduino, Raspberry Pi, ESP32",
      price: "$15-$75",
      color: "makr-yellow"
    },
    {
      id: "3d-filaments",
      icon: "fas fa-cube",
      title: "3D Filaments",
      description: "PLA, ABS, PETG, Specialty",
      price: "$25-$60",
      color: "makr-blue"
    },
    {
      id: "makr-gear",
      icon: "fas fa-tshirt",
      title: "Makr Gear",
      description: "Hoodies, T-shirts, Stickers",
      price: "$12-$45",
      color: "terminal-green"
    },
    {
      id: "tool-kits",
      icon: "fas fa-tools",
      title: "Tool Kits",
      description: "Soldering, Precision, Multi",
      price: "$30-$150",
      color: "makr-yellow"
    }
  ];

  return (
    <section id="store" className="py-20 bg-gradient-to-b from-transparent to-dark-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-makr-yellow mb-4">
            MAKR.STORE
          </h2>
          <p className="text-xl text-dark-text max-w-3xl mx-auto">
            Gear up with cutting-edge maker supplies and exclusive Makrx merchandise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {storeItems.map((item) => (
            <div 
              key={item.id}
              className="neon-border rounded-lg p-6 bg-dark-surface/30 text-center group hover:scale-105 transition-transform"
              data-testid={`store-item-${item.id}`}
            >
              <div className={`text-${item.color} text-4xl mb-4`}>
                <i className={item.icon}></i>
              </div>
              <h3 className={`font-mono font-bold text-${item.color} mb-2`}>
                {item.title}
              </h3>
              <p className="text-sm text-dark-text mb-4">{item.description}</p>
              <div className="text-2xl font-mono font-bold text-terminal-green">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            className="px-8 py-4 bg-makr-yellow text-black font-mono font-bold rounded-md hover:bg-transparent hover:text-makr-yellow border-2 border-makr-yellow transition-all"
            data-testid="button-browse-store"
          >
            <i className="fas fa-shopping-cart mr-2"></i>
            BROWSE STORE
          </button>
        </div>
      </div>
    </section>
  );
}
