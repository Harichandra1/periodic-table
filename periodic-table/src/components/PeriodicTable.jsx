import { useState } from 'react';

const PeriodicTable = () => {
  const [hoveredElement, setHoveredElement] = useState(null);

  // Define the periodic table elements
  const elements = [
    // Row 1
    { symbol: 'H', name: 'Hydrogen', group: 'nonmetal', period: 1, group_num: 1, atomic_number: 1 },
    { symbol: 'He', name: 'Helium', group: 'noble', period: 1, group_num: 18, atomic_number: 2 },

    // Row 2
    { symbol: 'Li', name: 'Lithium', group: 'alkali', period: 2, group_num: 1, atomic_number: 3 },
    { symbol: 'Be', name: 'Beryllium', group: 'alkaline', period: 2, group_num: 2, atomic_number: 4 },
    { symbol: 'B', name: 'Boron', group: 'metalloid', period: 2, group_num: 13, atomic_number: 5 },
    { symbol: 'C', name: 'Carbon', group: 'nonmetal', period: 2, group_num: 14, atomic_number: 6 },
    { symbol: 'N', name: 'Nitrogen', group: 'nonmetal', period: 2, group_num: 15, atomic_number: 7 },
    { symbol: 'O', name: 'Oxygen', group: 'nonmetal', period: 2, group_num: 16, atomic_number: 8 },
    { symbol: 'F', name: 'Fluorine', group: 'halogen', period: 2, group_num: 17, atomic_number: 9 },
    { symbol: 'Ne', name: 'Neon', group: 'noble', period: 2, group_num: 18, atomic_number: 10 },

    // Row 3
    { symbol: 'Na', name: 'Sodium', group: 'alkali', period: 3, group_num: 1, atomic_number: 11 },
    { symbol: 'Mg', name: 'Magnesium', group: 'alkaline', period: 3, group_num: 2, atomic_number: 12 },
    { symbol: 'Al', name: 'Aluminum', group: 'post-transition', period: 3, group_num: 13, atomic_number: 13 },
    { symbol: 'Si', name: 'Silicon', group: 'metalloid', period: 3, group_num: 14, atomic_number: 14 },
    { symbol: 'P', name: 'Phosphorus', group: 'nonmetal', period: 3, group_num: 15, atomic_number: 15 },
    { symbol: 'S', name: 'Sulfur', group: 'nonmetal', period: 3, group_num: 16, atomic_number: 16 },
    { symbol: 'Cl', name: 'Chlorine', group: 'halogen', period: 3, group_num: 17, atomic_number: 17 },
    { symbol: 'Ar', name: 'Argon', group: 'noble', period: 3, group_num: 18, atomic_number: 18 },

    // Row 4
    { symbol: 'K', name: 'Potassium', group: 'alkali', period: 4, group_num: 1, atomic_number: 19 },
    { symbol: 'Ca', name: 'Calcium', group: 'alkaline', period: 4, group_num: 2, atomic_number: 20 },
    { symbol: 'Sc', name: 'Scandium', group: 'transition', period: 4, group_num: 3, atomic_number: 21 },
    { symbol: 'Ti', name: 'Titanium', group: 'transition', period: 4, group_num: 4, atomic_number: 22 },
    { symbol: 'V', name: 'Vanadium', group: 'transition', period: 4, group_num: 5, atomic_number: 23 },
    { symbol: 'Cr', name: 'Chromium', group: 'transition', period: 4, group_num: 6, atomic_number: 24 },
    { symbol: 'Mn', name: 'Manganese', group: 'transition', period: 4, group_num: 7, atomic_number: 25 },
    { symbol: 'Fe', name: 'Iron', group: 'transition', period: 4, group_num: 8, atomic_number: 26 },
    { symbol: 'Co', name: 'Cobalt', group: 'transition', period: 4, group_num: 9, atomic_number: 27 },
    { symbol: 'Ni', name: 'Nickel', group: 'transition', period: 4, group_num: 10, atomic_number: 28 },
    { symbol: 'Cu', name: 'Copper', group: 'transition', period: 4, group_num: 11, atomic_number: 29 },
    { symbol: 'Zn', name: 'Zinc', group: 'transition', period: 4, group_num: 12, atomic_number: 30 },
    { symbol: 'Ga', name: 'Gallium', group: 'post-transition', period: 4, group_num: 13, atomic_number: 31 },
    { symbol: 'Ge', name: 'Germanium', group: 'metalloid', period: 4, group_num: 14, atomic_number: 32 },
    { symbol: 'As', name: 'Arsenic', group: 'metalloid', period: 4, group_num: 15, atomic_number: 33 },
    { symbol: 'Se', name: 'Selenium', group: 'nonmetal', period: 4, group_num: 16, atomic_number: 34 },
    { symbol: 'Br', name: 'Bromine', group: 'halogen', period: 4, group_num: 17, atomic_number: 35 },
    { symbol: 'Kr', name: 'Krypton', group: 'noble', period: 4, group_num: 18, atomic_number: 36 },

    // Row 5
    { symbol: 'Rb', name: 'Rubidium', group: 'alkali', period: 5, group_num: 1, atomic_number: 37 },
    { symbol: 'Sr', name: 'Strontium', group: 'alkaline', period: 5, group_num: 2, atomic_number: 38 },
    { symbol: 'Y', name: 'Yttrium', group: 'transition', period: 5, group_num: 3, atomic_number: 39 },
    { symbol: 'Zr', name: 'Zirconium', group: 'transition', period: 5, group_num: 4, atomic_number: 40 },
    { symbol: 'Nb', name: 'Niobium', group: 'transition', period: 5, group_num: 5, atomic_number: 41 },
    { symbol: 'Mo', name: 'Molybdenum', group: 'transition', period: 5, group_num: 6, atomic_number: 42 },
    { symbol: 'Tc', name: 'Technetium', group: 'transition', period: 5, group_num: 7, atomic_number: 43 },
    { symbol: 'Ru', name: 'Ruthenium', group: 'transition', period: 5, group_num: 8, atomic_number: 44 },
    { symbol: 'Rh', name: 'Rhodium', group: 'transition', period: 5, group_num: 9, atomic_number: 45 },
    { symbol: 'Pd', name: 'Palladium', group: 'transition', period: 5, group_num: 10, atomic_number: 46 },
    { symbol: 'Ag', name: 'Silver', group: 'transition', period: 5, group_num: 11, atomic_number: 47 },
    { symbol: 'Cd', name: 'Cadmium', group: 'transition', period: 5, group_num: 12, atomic_number: 48 },
    { symbol: 'In', name: 'Indium', group: 'post-transition', period: 5, group_num: 13, atomic_number: 49 },
    { symbol: 'Sn', name: 'Tin', group: 'post-transition', period: 5, group_num: 14, atomic_number: 50 },
    { symbol: 'Sb', name: 'Antimony', group: 'metalloid', period: 5, group_num: 15, atomic_number: 51 },
    { symbol: 'Te', name: 'Tellurium', group: 'metalloid', period: 5, group_num: 16, atomic_number: 52 },
    { symbol: 'I', name: 'Iodine', group: 'halogen', period: 5, group_num: 17, atomic_number: 53 },
    { symbol: 'Xe', name: 'Xenon', group: 'noble', period: 5, group_num: 18, atomic_number: 54 },

    // Row 6
    { symbol: 'Cs', name: 'Cesium', group: 'alkali', period: 6, group_num: 1, atomic_number: 55 },
    { symbol: 'Ba', name: 'Barium', group: 'alkaline', period: 6, group_num: 2, atomic_number: 56 },
    { symbol: 'La', name: 'Lanthanum', group: 'lanthanide', period: 6, group_num: 3, atomic_number: 57 }, // Placeholder for Lanthanides start
    { symbol: 'Hf', name: 'Hafnium', group: 'transition', period: 6, group_num: 4, atomic_number: 72 },
    { symbol: 'Ta', name: 'Tantalum', group: 'transition', period: 6, group_num: 5, atomic_number: 73 },
    { symbol: 'W', name: 'Tungsten', group: 'transition', period: 6, group_num: 6, atomic_number: 74 },
    { symbol: 'Re', name: 'Rhenium', group: 'transition', period: 6, group_num: 7, atomic_number: 75 },
    { symbol: 'Os', name: 'Osmium', group: 'transition', period: 6, group_num: 8, atomic_number: 76 },
    { symbol: 'Ir', name: 'Iridium', group: 'transition', period: 6, group_num: 9, atomic_number: 77 },
    { symbol: 'Pt', name: 'Platinum', group: 'transition', period: 6, group_num: 10, atomic_number: 78 },
    { symbol: 'Au', name: 'Gold', group: 'transition', period: 6, group_num: 11, atomic_number: 79 },
    { symbol: 'Hg', name: 'Mercury', group: 'transition', period: 6, group_num: 12, atomic_number: 80 },
    { symbol: 'Tl', name: 'Thallium', group: 'post-transition', period: 6, group_num: 13, atomic_number: 81 },
    { symbol: 'Pb', name: 'Lead', group: 'post-transition', period: 6, group_num: 14, atomic_number: 82 },
    { symbol: 'Bi', name: 'Bismuth', group: 'post-transition', period: 6, group_num: 15, atomic_number: 83 },
    { symbol: 'Po', name: 'Polonium', group: 'post-transition', period: 6, group_num: 16, atomic_number: 84 },
    { symbol: 'At', name: 'Astatine', group: 'halogen', period: 6, group_num: 17, atomic_number: 85 },
    { symbol: 'Rn', name: 'Radon', group: 'noble', period: 6, group_num: 18, atomic_number: 86 },

    // Row 7
    { symbol: 'Fr', name: 'Francium', group: 'alkali', period: 7, group_num: 1, atomic_number: 87 },
    { symbol: 'Ra', name: 'Radium', group: 'alkaline', period: 7, group_num: 2, atomic_number: 88 },
    { symbol: 'Ac', name: 'Actinium', group: 'actinide', period: 7, group_num: 3, atomic_number: 89 }, // Placeholder for Actinides start
    { symbol: 'Rf', name: 'Rutherfordium', group: 'transition', period: 7, group_num: 4, atomic_number: 104 },
    { symbol: 'Db', name: 'Dubnium', group: 'transition', period: 7, group_num: 5, atomic_number: 105 },
    { symbol: 'Sg', name: 'Seaborgium', group: 'transition', period: 7, group_num: 6, atomic_number: 106 },
    { symbol: 'Bh', name: 'Bohrium', group: 'transition', period: 7, group_num: 7, atomic_number: 107 },
    { symbol: 'Hs', name: 'Hassium', group: 'transition', period: 7, group_num: 8, atomic_number: 108 },
    { symbol: 'Mt', name: 'Meitnerium', group: 'transition', period: 7, group_num: 9, atomic_number: 109 },
    { symbol: 'Ds', name: 'Darmstadtium', group: 'transition', period: 7, group_num: 10, atomic_number: 110 },
    { symbol: 'Rg', name: 'Roentgenium', group: 'transition', period: 7, group_num: 11, atomic_number: 111 },
    { symbol: 'Cn', name: 'Copernicium', group: 'transition', period: 7, group_num: 12, atomic_number: 112 },
    { symbol: 'Nh', name: 'Nihonium', group: 'post-transition', period: 7, group_num: 13, atomic_number: 113 },
    { symbol: 'Fl', name: 'Flerovium', group: 'post-transition', period: 7, group_num: 14, atomic_number: 114 },
    { symbol: 'Mc', name: 'Moscovium', group: 'post-transition', period: 7, group_num: 15, atomic_number: 115 },
    { symbol: 'Lv', name: 'Livermorium', group: 'post-transition', period: 7, group_num: 16, atomic_number: 116 },
    { symbol: 'Ts', name: 'Tennessine', group: 'halogen', period: 7, group_num: 17, atomic_number: 117 },
    { symbol: 'Og', name: 'Oganesson', group: 'noble', period: 7, group_num: 18, atomic_number: 118 },

    // Lanthanides (Period 8 is a placeholder for rendering them separately)
    { symbol: 'Ce', name: 'Cerium', group: 'lanthanide', period: 8, group_num: 4, atomic_number: 58 }, // Group num starting from 4 for layout
    { symbol: 'Pr', name: 'Praseodymium', group: 'lanthanide', period: 8, group_num: 5, atomic_number: 59 },
    { symbol: 'Nd', name: 'Neodymium', group: 'lanthanide', period: 8, group_num: 6, atomic_number: 60 },
    { symbol: 'Pm', name: 'Promethium', group: 'lanthanide', period: 8, group_num: 7, atomic_number: 61 },
    { symbol: 'Sm', name: 'Samarium', group: 'lanthanide', period: 8, group_num: 8, atomic_number: 62 },
    { symbol: 'Eu', name: 'Europium', group: 'lanthanide', period: 8, group_num: 9, atomic_number: 63 },
    { symbol: 'Gd', name: 'Gadolinium', group: 'lanthanide', period: 8, group_num: 10, atomic_number: 64 },
    { symbol: 'Tb', name: 'Terbium', group: 'lanthanide', period: 8, group_num: 11, atomic_number: 65 },
    { symbol: 'Dy', name: 'Dysprosium', group: 'lanthanide', period: 8, group_num: 12, atomic_number: 66 },
    { symbol: 'Ho', name: 'Holmium', group: 'lanthanide', period: 8, group_num: 13, atomic_number: 67 },
    { symbol: 'Er', name: 'Erbium', group: 'lanthanide', period: 8, group_num: 14, atomic_number: 68 },
    { symbol: 'Tm', name: 'Thulium', group: 'lanthanide', period: 8, group_num: 15, atomic_number: 69 },
    { symbol: 'Yb', name: 'Ytterbium', group: 'lanthanide', period: 8, group_num: 16, atomic_number: 70 },
    { symbol: 'Lu', name: 'Lutetium', group: 'lanthanide', period: 8, group_num: 17, atomic_number: 71 },

    // Actinides (Period 9 is a placeholder for rendering them separately)
    { symbol: 'Th', name: 'Thorium', group: 'actinide', period: 9, group_num: 4, atomic_number: 90 }, // Group num starting from 4 for layout
    { symbol: 'Pa', name: 'Protactinium', group: 'actinide', period: 9, group_num: 5, atomic_number: 91 },
    { symbol: 'U', name: 'Uranium', group: 'actinide', period: 9, group_num: 6, atomic_number: 92 },
    { symbol: 'Np', name: 'Neptunium', group: 'actinide', period: 9, group_num: 7, atomic_number: 93 },
    { symbol: 'Pu', name: 'Plutonium', group: 'actinide', period: 9, group_num: 8, atomic_number: 94 },
    { symbol: 'Am', name: 'Americium', group: 'actinide', period: 9, group_num: 9, atomic_number: 95 },
    { symbol: 'Cm', name: 'Curium', group: 'actinide', period: 9, group_num: 10, atomic_number: 96 },
    { symbol: 'Bk', name: 'Berkelium', group: 'actinide', period: 9, group_num: 11, atomic_number: 97 },
    { symbol: 'Cf', name: 'Californium', group: 'actinide', period: 9, group_num: 12, atomic_number: 98 },
    { symbol: 'Es', name: 'Einsteinium', group: 'actinide', period: 9, group_num: 13, atomic_number: 99 },
    { symbol: 'Fm', name: 'Fermium', group: 'actinide', period: 9, group_num: 14, atomic_number: 100 },
    { symbol: 'Md', name: 'Mendelevium', group: 'actinide', period: 9, group_num: 15, atomic_number: 101 },
    { symbol: 'No', name: 'Nobelium', group: 'actinide', period: 9, group_num: 16, atomic_number: 102 },
    { symbol: 'Lr', name: 'Lawrencium', group: 'actinide', period: 9, group_num: 17, atomic_number: 103 },
  ];

  // Get element by period and group
  const getElementByPosition = (period, group_num) => {
    return elements.find(e => e.period === period && e.group_num === group_num);
  };

  // Define color mapping for element groups
 // ...existing code...
const groupColors = {
  'alkali': 'bg-pink-800/80',
  'alkaline': 'bg-orange-800/80',
  'transition': 'bg-yellow-700/80',
  'post-transition': 'bg-blue-800/80',
  'metalloid': 'bg-green-800/80',
  'nonmetal': 'bg-teal-800/80',
  'halogen': 'bg-purple-800/80',
  'noble': 'bg-indigo-800/80',
  'lanthanide': 'bg-red-800/80',
  'actinide': 'bg-rose-800/80',
};

const groupGlowColors = {
  'alkali': 'shadow-pink-700/70',
  'alkaline': 'shadow-orange-700/70',
  'transition': 'shadow-yellow-600/70',
  'post-transition': 'shadow-blue-700/70',
  'metalloid': 'shadow-green-700/70',
  'nonmetal': 'shadow-teal-700/70',
  'halogen': 'shadow-purple-700/70',
  'noble': 'shadow-indigo-700/70',
  'lanthanide': 'shadow-red-700/70',
  'actinide': 'shadow-rose-700/70',
};
// ...existing code...

  // Element cell component
const ElementCell = ({ element }) => {
    if (!element) return <div className="aspect-square min-w-[2.5rem]"></div>;

    const isHovered = hoveredElement === element.symbol;

    const baseClasses = "aspect-square min-w-[2.5rem] flex flex-col items-center justify-center text-center rounded-lg backdrop-blur-lg border border-white/20 transition-all duration-300 cursor-pointer relative";
    const hoverClasses = isHovered ?
      `${groupGlowColors[element.group]} shadow-lg scale-110 border-black/40 z-10` :
      'shadow-md hover:shadow-lg';
    const glassBgClass = `${groupColors[element.group]} bg-opacity-30`;

    return (
      <div
        className={`${baseClasses} ${glassBgClass} ${hoverClasses}`}
        onMouseEnter={() => setHoveredElement(element.symbol)}
        onMouseLeave={() => setHoveredElement(null)}
      >
        <div className="text-[8px] absolute top-0.5 right-0.5 text-white/1">{element.atomic_number}</div>
        <div className="text-xs font-semibold text-black">{element.symbol}</div>
        {isHovered && (
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-lg text-white text-xs rounded px-2 py-1 whitespace-nowrap shadow-xl z-20">
            <p className="font-bold">{element.name}</p>
            <p className="capitalize text-white/80 text-[10px]">{element.group}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative overflow-auto p-4 sm:p-8 w-full max-w-7xl mx-auto rounded-2xl backdrop-blur-3xl bg-white/30 border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.3),inset_0_0_30px_rgba(255,255,255,1)] transition-all">

      {/* Legend */}
      <div className="flex flex-wrap gap-x-3 gap-y-2 mb-6 justify-center px-2">
        {Object.entries(groupColors).map(([group, color]) => (
          <div key={group} className="flex items-center gap-1.5 text-xs text-white/90">
            <div className={`w-3 h-3 rounded-sm ${color.replace('/30','')} border border-white/20`}></div>
            <span className="capitalize">{group.replace('-', ' ')}</span>
          </div>
        ))}
      </div>

      {/* Group Numbers */}
      <div className="grid [grid-template-columns:repeat(18,minmax(2.5rem,1fr))] gap-1 mb-2 text-[10px] text-white/50 text-center">
        {Array.from({ length: 18 }, (_, i) => (
          <div key={`group-${i + 1}`}>{i + 1}</div>
        ))}
      </div>

      {/* Main Table Grid */}
      <div className="grid [grid-template-columns:repeat(18,minmax(2.5rem,1fr))] gap-1 min-w-[900px]">
        {Array.from({ length: 7 }, (_, periodIdx) => {
          const period = periodIdx + 1;
          return Array.from({ length: 18 }, (_, groupIdx) => {
            const group = groupIdx + 1;
            return (
              <ElementCell
                key={`p${period}-g${group}`}
                element={getElementByPosition(period, group)}
              />
            );
          });
        })}
      </div>

      {/* Gap */}
      <div className="col-span-18 h-4"></div>

      {/* Lanthanides */}
      <div className="grid grid-cols-[repeat(18,minmax(2.5rem,1fr))] gap-1 mt-4">
        <div className="col-span-2"></div>
        <div className="text-white/70 text-xs flex items-center justify-end pr-1">La-Lu</div>
        <ElementCell element={getElementByPosition(6, 3)} />
        {Array.from({ length: 14 }, (_, i) => i + 4).map(groupNum => (
          <ElementCell key={`lan-${groupNum}`} element={getElementByPosition(8, groupNum)} />
        ))}
      </div>

      {/* Actinides */}
      <div className="grid grid-cols-[repeat(18,minmax(2.5rem,1fr))] gap-1 mt-2">
        <div className="col-span-2"></div>
        <div className="text-white/70 text-xs flex items-center justify-end pr-1">Ac-Lr</div>
        <ElementCell element={getElementByPosition(7, 3)} />
        {Array.from({ length: 14 }, (_, i) => i + 4).map(groupNum => (
          <ElementCell key={`act-${groupNum}`} element={getElementByPosition(9, groupNum)} />
        ))}
      </div>
    </div>
  );
};

export default PeriodicTable;
