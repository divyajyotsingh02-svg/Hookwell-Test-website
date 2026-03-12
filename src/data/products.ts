export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  imagePath?: string; 
  features: string[];
  specsType: "table" | "models";
  specs: any; 
}

export const products: Product[] = [
  {
    slug: "chain-pulley-block",
    name: "CHAIN PULLEY BLOCK",
    subtitle: "Heavy Duty Triple Spur Gear Series",
    description: "Built for strength and reliability. The Pulman Chain Pulley Block is a heavy-duty, triple spur gear series engineered for optimal operating pull and extended chain life.",
    imagePath: "/products/chain-block.png",
    features: [
      "Capacity Range 1T, 2T, 3T, 5T, 10T",
      "CE & ISI Certified Chain Pulley Blocks – Assured quality",
      "Made in INDIA design with optimal operating pull – Assured reliability",
      "Double chain Guide Rollers – Accurate alignment of load chain",
      "Pocketed alloy steel load chain wheel – Extended chain life",
      "Case hardened gears – Extended working life",
      "Use of needle roller bearings – High operating efficiency",
      "Smooth passage of load chain – Unique cover design",
      "Self sustaining maintenance free friction brake – Reduced downtime",
      "Grade 80 load chain for strength & wear resistance",
      "Anti corrosive powder coated finish cover & zinc plated parts – Better aesthetics",
      "Lifelong lubrication – Minimal maintenance required",
      "Light weight and sturdy – Ease of handling",
      "Forged free swivelling upper & lower hook block with safety latch – Higher grade safety"
    ],
    specsType: "table",
    specs: {
      headers: ["CAPACITY", "1T", "2T", "3T", "5T", "8T", "10T"],
      rows: [
        ["Number of falls of load chain (Nos.)", "1", "2", "1", "2", "3", "4"],
        ["Load Chain size Dia. (mm)", "6.3", "6.3", "10", "10", "10", "10"],
        ["Hand Chain size Dia. (mm)", "5", "5", "5", "5", "5", "5"],
        ["Weight at 3 M Lift (Kg)", "10", "11", "20", "59", "94", "130"],
        ["Extra weight per additional M lift (Kg)", "1.8", "2.6", "3.0", "5.7", "7.9", "10.1"],
        ["Running pull on hand chain (Kg)", "25", "28", "34", "41", "46", "43"],
        ["Velocity ratio", "45", "90", "78", "155", "234", "312"]
      ]
    }
  },
  {
    slug: "electric-wire-rope-hoist",
    name: "Electrical Wire Rope Hoist",
    subtitle: "With Electrical Geared Trolley",
    description: "Electrical Wire Rope Hoist features robust construction and high operating efficiency, designed for heavy industrial lifting.",
    imagePath: "/products/wire-hoist.png",
    features: [
      "Available capacities from 1 Ton to 5 Ton",
      "Lift height up to 6 mtrs",
      "Equipped with disk brakes for enhanced safety",
      "Robust steel body structure",
      "Premium electrical contactors from Siemens / Schneider",
      "High quality Usha Martin wire ropes"
    ],
    specsType: "table",
    specs: {
      headers: ["CAPACITY", "1 Ton", "2 Ton", "3 Ton", "5 Ton"],
      rows: [
        ["BRAND", "Pulman", "Pulman", "Pulman", "Pulman"],
        ["LIFT", "6 mtrs", "6 mtrs", "6 mtrs", "6 mtrs"],
        ["MAIN MOTOR", "1.5 HP - 960 rpm (S4 Make Crompton/Bharat Bijlee)", "2 HP - 960 rpm (S4 Make Crompton/Bharat Bijlee)", "3 HP - 960 rpm (S4 Make Crompton/Bharat Bijlee)", "5 HP - 960 rpm (S4 Make Crompton/Bharat Bijlee)"],
        ["CT MOTOR", "0.5 HP - 1400 rpm", "0.5 HP - 1400 rpm", "0.5 HP - 1400 rpm", "1 HP - 1400 rpm"],
        ["WIRE ROPE", "10 mm Of Usha Martin", "8 mm Of Usha Martin", "10 mm Of Usha Martin", "12 mm Of Usha Martin"],
        ["NO. OF FALL", "2", "4", "4", "4"],
        ["BREAK", "Disk Brake", "Double Disk Brake - 150 mm", "Double Disk Brake - 190 mm", "Double Disk Brake - 190 mm"],
        ["BODY STRUCTURE", "Steel", "Steel", "Steel", "Steel"],
        ["ELECTRICAL CONTACTOR", "9 amp - for both motors of Siemens, Schneider", "9 amp - for both motors of Siemens, Schneider", "12 amp for main motor & 9 amp for CT motor", "16 amp for main motor & 9 amp for Ct motor"]
      ]
    }
  },
  {
    slug: "ratchet-lever-hoist",
    name: "Ratchet Lever Hoist",
    subtitle: "Heavy Duty Pulling & Tensioning",
    description: "Built with German technology for critical lifting, pulling, and tensioning. The Ratchet Lever Hoist is engineered with an ergonomic handle, safe automatic brakes, and anti-corrosive housing for flawless operation in tight spaces.",
    imagePath: "/products/ratchet-hoist.png",
    features: [
      "Available capacities from 0.75 Ton to 9 Ton",
      "Standard 1.5 meter galvanized & tempered high tensile load chain",
      "Easy Free Chaining with selector lever",
      "Integrated chain guide for smooth entry into sprocket wheel",
      "Drop-forged load hooks with closed safety latches",
      "Fully chrome-plated, rust-free durable body"
    ],
    specsType: "table",
    specs: {
      headers: ["SPECIFICATION", "0.75 Ton", "1.5 Ton", "3.0 Ton", "6.0 Ton"],
      rows: [
        ["STANDARD LIFT", "1.5 m", "1.5 m", "1.5 m", "1.5 m"],
        ["NO. OF FALLS", "1", "1", "1", "2"],
        ["LEVER FORCE", "22 daN", "24 daN", "32 daN", "34 daN"],
        ["MIN. HEADROOM", "320 mm", "380 mm", "480 mm", "600 mm"],
        ["NET WEIGHT", "6.5 Kg", "9.5 Kg", "16 Kg", "28 Kg"]
      ]
    }
  },
  {
    slug: "geared-traveling-trolley",
    name: "Geared Traveling Trolley",
    subtitle: "Smooth Movement for Heavy Loads",
    description: "Designed for seamless maneuverability along I-beams. Our Geared Traveling Trolleys incorporate contoured wheels and precision-machined gears for noiseless operation and effortless load positioning.",
    imagePath: "/products/geared-trolley.png",
    features: [
      "Load capacities available consistently from 1 Ton up to 10 Ton",
      "Precision machined case-hardened alloy steel gears",
      "Sealed ball bearing wheels for perfectly smooth operation",
      "Adjustable flange width for varying beam sizes",
      "Built-in anti-drop and de-railing guides for maximum safety",
      "Anti-corrosive powder coated finish"
    ],
    specsType: "table",
    specs: {
      headers: ["CAPACITY", "1 Ton", "2 Ton", "3 Ton", "5 Ton", "10 Ton"],
      rows: [
        ["I-BEAM WIDTH", "75-125 mm", "75-125 mm", "100-150 mm", "125-175 mm", "150-175 mm"],
        ["MIN. CURVE RADIUS", "1.0 m", "1.1 m", "1.3 m", "1.4 m", "1.7 m"],
        ["WHEEL DIAMETER", "80 mm", "100 mm", "120 mm", "140 mm", "180 mm"],
        ["NET WEIGHT", "14 Kg", "20 Kg", "34 Kg", "52 Kg", "95 Kg"]
      ]
    }
  }
];
