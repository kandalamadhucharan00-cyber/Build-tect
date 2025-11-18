// Package data with designs and materials
export const packagesData = {
  basic: {
    id: 'basic',
    name: 'Basic Package',
    title: 'Basic Package Materials',
    description: 'Essential materials for standard construction projects',
    designs: [
      {
        id: 'arch-layout',
        title: 'Architectural Layout | 2D',
        description: 'A basic drawing showing how rooms and spaces are organized in a building.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'basic-elevation',
        title: 'Basic Elevation',
        description: 'A simple drawing illustrating the external appearance and features of a building from a specific viewpoint.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'structural-design',
        title: 'Structural Design',
        description: 'A straightforward depiction outlining the internal framework and support system of a building or structure.',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    categories: [
      {
        id: 'designs',
        name: 'Designs & Drawings',
        active: true
      },
      {
        id: 'structure',
        name: 'Structure'
      },
      {
        id: 'kitchen',
        name: 'Kitchen'
      },
      {
        id: 'bathroom',
        name: 'Bathroom'
      },
      {
        id: 'doors-windows',
        name: 'Doors & Windows'
      },
      {
        id: 'painting',
        name: 'Painting'
      },
      {
        id: 'flooring',
        name: 'Flooring'
      },
      {
        id: 'electrical',
        name: 'Electrical'
      },
      {
        id: 'miscellaneous',
        name: 'Miscellaneous'
      }
    ],
    materials: {
      structure: [
        { name: 'Ordinary Portland Cement (OPC)', spec: 'Grade 43', price: 'Upto ₹350 per Bag', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Red Clay Brick', spec: 'Standard', price: 'Upto ₹8 per Piece', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'River Sand', spec: 'Fine Grade', price: 'Upto ₹1,500 per Ton', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'TMT Steel Bars', spec: '8mm-16mm', price: 'Upto ₹55 per Kg', image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Coarse Aggregates', spec: '20mm', price: 'Upto ₹1,800 per Ton', image: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      kitchen: [
        { name: 'Ceramic Tiles', spec: 'Standard Grade', price: 'Upto ₹35 per Sqft', image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Stainless Steel Sink', spec: 'Single Bowl', price: 'Upto ₹3,500 per Unit', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Basic Kitchen Faucet', spec: 'Chrome Finish', price: 'Upto ₹1,200 per Unit', image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      bathroom: [
        { name: 'Ceramic Floor Tiles', spec: 'Standard', price: 'Upto ₹30 per Sqft', image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Basic Commode', spec: 'White Ceramic', price: 'Upto ₹4,500 per Unit', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Wall Mounted Wash Basin', spec: 'Standard', price: 'Upto ₹2,500 per Unit', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'PVC Pipes', spec: 'Standard Grade', price: 'Upto ₹150 per Meter', image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      'doors-windows': [
        { name: 'Wooden Doors', spec: 'Sal Wood', price: 'Upto ₹8,000 per Unit', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Aluminum Windows', spec: 'Standard Frame', price: 'Upto ₹350 per Sqft', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Clear Float Glass', spec: '5mm', price: 'Upto ₹80 per Sqft', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      painting: [
        { name: 'Emulsion Paint', spec: 'Interior Matte', price: 'Upto ₹18 per Sqft', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Exterior Paint', spec: 'Weather Proof', price: 'Upto ₹22 per Sqft', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Putty', spec: 'Wall Primer', price: 'Upto ₹12 per Sqft', image: 'https://images.unsplash.com/photo-1598300188904-2c383a6e5c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      flooring: [
        { name: 'Ceramic Floor Tiles', spec: '2x2 feet', price: 'Upto ₹35 per Sqft', image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Vitrified Tiles', spec: 'Standard Grade', price: 'Upto ₹45 per Sqft', image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      electrical: [
        { name: 'Copper Wires', spec: '2.5mm', price: 'Upto ₹25 per Meter', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'MCB Board', spec: '4-Way', price: 'Upto ₹1,500 per Unit', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Switches & Sockets', spec: 'Standard White', price: 'Upto ₹150 per Unit', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'LED Bulbs', spec: '9W', price: 'Upto ₹200 per Unit', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      miscellaneous: [
        { name: 'Plaster of Paris', spec: 'Standard', price: 'Upto ₹15 per Kg', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Adhesives', spec: 'Tile Adhesive', price: 'Upto ₹350 per Bag', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Nails & Screws', spec: 'Assorted', price: 'Upto ₹80 per Kg', image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ]
    }
  },
  classic: {
    id: 'classic',
    name: 'Classic Package',
    title: 'Classic Package Materials',
    description: 'Enhanced materials for quality construction with better finishes',
    designs: [
      {
        id: 'arch-layout-3d',
        title: 'Architectural Layout | 2D',
        description: 'A basic drawing showing how rooms and spaces are organized in a building.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'basic-elevation-classic',
        title: 'Basic Elevation',
        description: 'A simple drawing illustrating the external appearance and features of a building from a specific viewpoint.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'structural-design-classic',
        title: 'Structural Design',
        description: 'A straightforward depiction outlining the internal framework and support system of a building or structure.',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '3d-elevation',
        title: '3D Elevation',
        description: 'A clear visual showcasing the three-dimensional appearance of a building from different angles.',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'electrical-drawings',
        title: 'Electrical Drawings',
        description: 'A detailed diagram showcasing the electrical layout and wiring plan for a building.',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'plumbing-drawings',
        title: 'Plumbing Drawings',
        description: 'A detailed diagram illustrating the plumbing layout and pipe routing for water supply and drainage.',
        image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    categories: [
      {
        id: 'designs',
        name: 'Designs & Drawings',
        active: true
      },
      {
        id: 'structure',
        name: 'Structure'
      },
      {
        id: 'kitchen',
        name: 'Kitchen'
      },
      {
        id: 'bathroom',
        name: 'Bathroom'
      },
      {
        id: 'doors-windows',
        name: 'Doors & Windows'
      },
      {
        id: 'painting',
        name: 'Painting'
      },
      {
        id: 'flooring',
        name: 'Flooring'
      },
      {
        id: 'electrical',
        name: 'Electrical'
      },
      {
        id: 'miscellaneous',
        name: 'Miscellaneous'
      }
    ],
    materials: {
      structure: [
        { name: 'Portland Pozzolana Cement (PPC)', spec: 'Grade 53', price: 'Upto ₹400 per Bag', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Fly Ash Bricks', spec: 'Eco-Friendly', price: 'Upto ₹10 per Piece', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'M-Sand', spec: 'Manufactured Sand', price: 'Upto ₹1,800 per Ton', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'TMT Steel Bars', spec: '8mm-25mm', price: 'Upto ₹60 per Kg', image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Ready Mix Concrete', spec: 'M20 Grade', price: 'Upto ₹5,500 per Cum', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'AAC Blocks', spec: 'Lightweight', price: 'Upto ₹55 per Piece', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      kitchen: [
        { name: 'Vitrified Tiles', spec: 'Polished', price: 'Upto ₹55 per Sqft', image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Granite Counter Top', spec: 'Standard Grade', price: 'Upto ₹180 per Sqft', image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Stainless Steel Sink', spec: 'Double Bowl', price: 'Upto ₹6,500 per Unit', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Premium Kitchen Faucet', spec: 'Chrome Finish', price: 'Upto ₹2,500 per Unit', image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Modular Kitchen Cabinets', spec: 'Laminated', price: 'Upto ₹1,200 per Sqft', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      bathroom: [
        { name: 'Vitrified Floor Tiles', spec: 'Anti-Skid', price: 'Upto ₹50 per Sqft', image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Wall Tiles', spec: 'Ceramic Glazed', price: 'Upto ₹40 per Sqft', image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Premium Commode', spec: 'Wall Mounted', price: 'Upto ₹8,500 per Unit', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Designer Wash Basin', spec: 'Counter Top', price: 'Upto ₹5,500 per Unit', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'CPVC Pipes', spec: 'Hot/Cold Water', price: 'Upto ₹200 per Meter', image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Shower Panel', spec: 'Chrome Finish', price: 'Upto ₹4,500 per Unit', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      'doors-windows': [
        { name: 'Teak Wood Doors', spec: 'Polished', price: 'Upto ₹15,000 per Unit', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'UPVC Windows', spec: 'Double Glazed', price: 'Upto ₹550 per Sqft', image: 'https://images.unsplash.com/photo-1534172553917-0ce2ef189cda?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Tempered Glass', spec: '6mm Safety', price: 'Upto ₹120 per Sqft', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Designer Door Handles', spec: 'Stainless Steel', price: 'Upto ₹800 per Unit', image: 'https://images.unsplash.com/photo-1610056494249-5d7e0e5e4c49?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      painting: [
        { name: 'Premium Emulsion', spec: 'Washable', price: 'Upto ₹28 per Sqft', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Exterior Texture Paint', spec: 'Weather Resistant', price: 'Upto ₹35 per Sqft', image: 'https://images.unsplash.com/photo-1598300188904-2c383a6e5c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Enamel Paint', spec: 'High Gloss', price: 'Upto ₹32 per Sqft', image: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Primer & Putty', spec: 'Premium Grade', price: 'Upto ₹18 per Sqft', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      flooring: [
        { name: 'Vitrified Tiles', spec: 'Polished 2x2 feet', price: 'Upto ₹60 per Sqft', image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Granite Flooring', spec: 'Polished', price: 'Upto ₹150 per Sqft', image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Wooden Flooring', spec: 'Laminated', price: 'Upto ₹180 per Sqft', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      electrical: [
        { name: 'Copper Wires', spec: '4mm Premium', price: 'Upto ₹35 per Meter', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'MCB Board', spec: '8-Way', price: 'Upto ₹2,500 per Unit', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Modular Switches', spec: 'Premium Finish', price: 'Upto ₹300 per Unit', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'LED Lights', spec: 'Designer 12W', price: 'Upto ₹400 per Unit', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Ceiling Fans', spec: 'Energy Efficient', price: 'Upto ₹2,500 per Unit', image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      miscellaneous: [
        { name: 'Waterproofing Compound', spec: 'Premium', price: 'Upto ₹80 per Sqft', image: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Tile Adhesive', spec: 'High Bond', price: 'Upto ₹450 per Bag', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Sealants', spec: 'Silicone Based', price: 'Upto ₹250 per Unit', image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Hardware Fittings', spec: 'Stainless Steel', price: 'Upto ₹150 per Kg', image: 'https://images.unsplash.com/photo-1610056494249-5d7e0e5e4c49?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ]
    }
  },
  premium: {
    id: 'premium',
    name: 'Premium Package',
    title: 'Premium Package Materials',
    description: 'Luxury materials with premium finishes for high-end construction',
    designs: [
      {
        id: 'arch-layout-premium',
        title: 'Architectural Layout | 2D',
        description: 'A basic drawing showing how rooms and spaces are organized in a building.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'basic-elevation-premium',
        title: 'Basic Elevation',
        description: 'A simple drawing illustrating the external appearance and features of a building from a specific viewpoint.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'structural-design-premium',
        title: 'Structural Design',
        description: 'A straightforward depiction outlining the internal framework and support system of a building or structure.',
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: '3d-elevation-premium',
        title: '3D Elevation',
        description: 'A clear visual showcasing the three-dimensional appearance of a building from different angles.',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'electrical-drawings-premium',
        title: 'Electrical Drawings',
        description: 'A detailed diagram showcasing the electrical layout and wiring plan for a building.',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'plumbing-drawings-premium',
        title: 'Plumbing Drawings',
        description: 'A detailed diagram illustrating the plumbing layout and pipe routing for water supply and drainage.',
        image: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'interior-design',
        title: 'Interior Design',
        description: 'Comprehensive interior design plans with detailed specifications and 3D visualizations.',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'landscape-design',
        title: 'Landscape Design',
        description: 'Professional landscape and garden design with detailed planting and hardscape plans.',
        image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ],
    categories: [
      {
        id: 'designs',
        name: 'Designs & Drawings',
        active: true
      },
      {
        id: 'structure',
        name: 'Structure'
      },
      {
        id: 'kitchen',
        name: 'Kitchen'
      },
      {
        id: 'bathroom',
        name: 'Bathroom'
      },
      {
        id: 'doors-windows',
        name: 'Doors & Windows'
      },
      {
        id: 'painting',
        name: 'Painting'
      },
      {
        id: 'flooring',
        name: 'Flooring'
      },
      {
        id: 'electrical',
        name: 'Electrical'
      },
      {
        id: 'miscellaneous',
        name: 'Miscellaneous'
      }
    ],
    materials: {
      structure: [
        { name: 'White Cement', spec: 'Premium Grade', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'AAC Blocks', spec: 'Lightweight Premium', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'M-Sand', spec: 'Washed & Graded', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'TMT Steel Bars', spec: 'Fe 550D Grade', image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Ready Mix Concrete', spec: 'M30 Grade', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Structural Steel Beams', spec: 'I-Beam Premium', image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      kitchen: [
        { name: 'Italian Marble', spec: 'Premium Grade', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Imported Granite', spec: 'Counter Top', image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Designer Sink', spec: 'Undermount Stainless Steel', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Premium Faucet', spec: 'Touch Control', image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Modular Kitchen', spec: 'Premium Finish with Soft Close', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Built-in Appliances', spec: 'Chimney, Hob, Oven', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      bathroom: [
        { name: 'Imported Tiles', spec: 'Designer Collection', image: 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Premium Sanitary Ware', spec: 'Wall Hung Commode', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Designer Wash Basin', spec: 'Vessel Type', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Jacuzzi/Bathtub', spec: 'Premium', image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Rain Shower', spec: 'Overhead with Body Jets', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Premium Fittings', spec: 'Gold/Chrome Finish', image: 'https://images.unsplash.com/photo-1610056494249-5d7e0e5e4c49?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Smart Mirror', spec: 'LED with Defogger', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      'doors-windows': [
        { name: 'Teak Wood Doors', spec: 'Premium Carved', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'UPVC Windows', spec: 'Triple Glazed', image: 'https://images.unsplash.com/photo-1534172553917-0ce2ef189cda?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Laminated Glass', spec: '8mm Safety', image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Designer Hardware', spec: 'Imported Brass', image: 'https://images.unsplash.com/photo-1610056494249-5d7e0e5e4c49?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Automatic Doors', spec: 'Sensor Based', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      painting: [
        { name: 'Luxury Emulsion', spec: 'Washable Premium', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Texture Paint', spec: 'Designer Finish', image: 'https://images.unsplash.com/photo-1598300188904-2c383a6e5c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Metallic Paint', spec: 'Special Effects', image: 'https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Imported Primer', spec: 'Premium Grade', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Wallpaper', spec: 'Designer Collection', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      flooring: [
        { name: 'Italian Marble', spec: 'Premium Polished', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Imported Granite', spec: 'Polished', image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Hardwood Flooring', spec: 'Engineered Oak', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Vinyl Flooring', spec: 'Luxury Plank', image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Epoxy Flooring', spec: 'Designer Finish', image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      electrical: [
        { name: 'Copper Wires', spec: '6mm Premium', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'MCB Board', spec: '16-Way Digital', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Designer Switches', spec: 'Touch Panel', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Smart Lighting', spec: 'App Controlled', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Home Automation', spec: 'Complete System', image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Premium Fans', spec: 'BLDC Technology', image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Chandelier', spec: 'Designer Collection', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ],
      miscellaneous: [
        { name: 'Premium Waterproofing', spec: 'Imported', image: 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Epoxy Adhesive', spec: 'High Strength', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Sealants', spec: 'Premium Silicone', image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Hardware', spec: 'Imported Brass', image: 'https://images.unsplash.com/photo-1610056494249-5d7e0e5e4c49?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'False Ceiling', spec: 'Gypsum with Lighting', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
        { name: 'Cladding', spec: 'Stone/Wood Veneer', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
      ]
    }
  }
}
