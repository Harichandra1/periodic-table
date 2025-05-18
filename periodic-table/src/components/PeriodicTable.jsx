import { useState, useMemo } from 'react';
import elements from '../data/elements.json';

const groupLabels = {
  'alkali': 'Alkali Metal',
  'alkaline': 'Alkaline Earth',
  'transition': 'Transition Metal',
  'post-transition': 'Post-Transition',
  'metalloid': 'Metalloid',
  'nonmetal': 'Nonmetal',
  'halogen': 'Halogen',
  'noble': 'Noble Gas',
  'lanthanide': 'Lanthanide',
  'actinide': 'Actinide',
};

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

const PeriodicTable = () => {
  const [hoveredElement, setHoveredElement] = useState(null);
  const [search, setSearch] = useState('');
  const [filterGroup, setFilterGroup] = useState('');
  const [filterPeriod, setFilterPeriod] = useState('');

  // Filtered elements
  const filteredElements = useMemo(() => {
    return elements.filter(e => {
      const matchesSearch =
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.symbol.toLowerCase().includes(search.toLowerCase());
      const matchesGroup = filterGroup ? e.group === filterGroup : true;
      const matchesPeriod = filterPeriod ? e.period === Number(filterPeriod) : true;
      return matchesSearch && matchesGroup && matchesPeriod;
    });
  }, [search, filterGroup, filterPeriod]);

  // Get element by period and group
  const getElementByPosition = (period, group_num) => {
    return filteredElements.find(e => e.period === period && e.group_num === group_num);
  };

  // Unique periods and groups for dropdowns
  const periods = Array.from(new Set(elements.map(e => e.period))).sort((a, b) => a - b);

  // Element cell component
  const ElementCell = ({ element }) => {
    if (!element) return <div className="aspect-square min-w-[2.5rem]"></div>;
    const isHovered = hoveredElement === element.symbol;
    const baseClasses =
      "aspect-square min-w-[2.5rem] flex flex-col items-center justify-center text-center rounded-lg backdrop-blur-lg border border-white/20 transition-all duration-300 cursor-pointer relative";
    const hoverClasses = isHovered
      ? `${groupGlowColors[element.group]} shadow-lg scale-110 border-black/40 z-10`
      : 'shadow-md hover:shadow-lg hover:scale-105';
    const glassBgClass = `${groupColors[element.group]} bg-opacity-30`;

    return (
      <div
        className={`${baseClasses} ${glassBgClass} ${hoverClasses}`}
        onMouseEnter={() => setHoveredElement(element.symbol)}
        onMouseLeave={() => setHoveredElement(null)}
      >
        <div className="text-[8px] absolute top-0.5 right-0.5 text-white/40">{element.atomic_number}</div>
        <div className="text-xs font-semibold text-black">{element.symbol}</div>
        {isHovered && (
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-lg text-white text-xs rounded px-3 py-2 whitespace-nowrap shadow-xl z-20 min-w-[120px]">
            <p className="font-bold text-base">{element.name}</p>
            <p className="capitalize text-white/80 text-[10px]">{groupLabels[element.group] || element.group}</p>
            <div className="flex flex-wrap gap-2 mt-1 text-[10px]">
              <span>Atomic: {element.atomic_number}</span>
              <span>Period: {element.period}</span>
              <span>Group: {element.group_num}</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative overflow-auto p-4 sm:p-8 w-full max-w-7xl mx-auto rounded-2xl backdrop-blur-3xl bg-white/30 border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.3),inset_0_0_30px_rgba(255,255,255,1)] transition-all">

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6 justify-center items-center">
        <input
          type="text"
          placeholder="Search by name or symbol"
          className="px-3 py-1 rounded border border-white/30 bg-white/60 text-black text-sm focus:outline-none focus:ring"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="px-2 py-1 rounded border border-white/30 bg-white/60 text-black text-sm"
          value={filterGroup}
          onChange={e => setFilterGroup(e.target.value)}
        >
          <option value="">All Groups</option>
          {Object.entries(groupLabels).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
        <select
          className="px-2 py-1 rounded border border-white/30 bg-white/60 text-black text-sm"
          value={filterPeriod}
          onChange={e => setFilterPeriod(e.target.value)}
        >
          <option value="">All Periods</option>
          {periods.map(period => (
            <option key={period} value={period}>{period}</option>
          ))}
        </select>
        {(search || filterGroup || filterPeriod) && (
          <button
            className="px-2 py-1 rounded bg-red-500 text-white text-xs"
            onClick={() => {
              setSearch('');
              setFilterGroup('');
              setFilterPeriod('');
            }}
          >
            Clear
          </button>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-3 gap-y-2 mb-6 justify-center px-2">
        {Object.entries(groupColors).map(([group, color]) => (
          <div key={group} className="flex items-center gap-1.5 text-xs text-white/90">
            <div className={`w-3 h-3 rounded-sm ${color.replace('/30','')} border border-white/20`}></div>
            <span className="capitalize">{groupLabels[group]}</span>
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
