export interface MonthAvailability {
  monthIndex: number; // 1 - 12
  shortName: string; // 'Jan', 'Feb', ...
  status: 'peak' | 'moderate' | 'dormant';
}

export interface SeasonalInfo {
  currentMonth: number;
  monthName: string;
  seasonName: string;
  status: 'peak' | 'moderate' | 'dormant' | 'reserve';
  statusLabel: string;
  statusColor: string; // Tailwind color classes
  harvestWindow: string;
  growerRegion: string;
  harvestNote: string;
  daysRemainingInCycle: number;
  monthlySchedule: MonthAvailability[];
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MONTH_SHORTS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

/**
 * Returns seasonal botanical availability for a product based on month (1-12).
 * Defaults to current month if omitted.
 */
export function getSeasonalAvailability(productId: string, targetMonth?: number): SeasonalInfo {
  const now = new Date();
  const currentMonth = targetMonth ?? (now.getMonth() + 1); // 1-12
  const monthName = MONTH_NAMES[currentMonth - 1];

  let seasonName = 'Autumn Equinox Edit';
  if ([12, 1, 2].includes(currentMonth)) seasonName = 'Winter Solstice / Dormant Edit';
  else if ([3, 4, 5].includes(currentMonth)) seasonName = 'Spring Vernal Flush';
  else if ([6, 7, 8].includes(currentMonth)) seasonName = 'Summer High-Sun Edit';
  else seasonName = 'Autumn Equinox Harvest';

  // Specific botanical schedules per arrangement
  if (productId === 'ethereal-greens') {
    // Peonies & Eucalyptus: Peak in late Spring through Autumn (May - Nov)
    const peakMonths = [5, 6, 7, 8, 9, 10];
    const moderateMonths = [4, 11];
    const isPeak = peakMonths.includes(currentMonth);
    const isModerate = moderateMonths.includes(currentMonth);

    const status = isPeak ? 'peak' : isModerate ? 'moderate' : 'reserve';
    const statusLabel = isPeak
      ? 'Peak Autumn Harvest · Available Now'
      : isModerate
      ? 'Late Crop Allocation · Limited Stems'
      : 'Greenhouse Climate Reserve';

    const statusColor = isPeak
      ? 'text-emerald-700 bg-emerald-500/10 border-emerald-500/30'
      : isModerate
      ? 'text-amber-700 bg-amber-500/10 border-amber-500/30'
      : 'text-sky-700 bg-sky-500/10 border-sky-500/30';

    return {
      currentMonth,
      monthName,
      seasonName,
      status,
      statusLabel,
      statusColor,
      harvestWindow: 'May — November',
      growerRegion: 'Santa Barbara Coastal Ridge, CA',
      harvestNote: `${monthName} offers optimal coral peony petal tension and rich aromatic sap in Gunni eucalyptus.`,
      daysRemainingInCycle: 30 - now.getDate() + 1,
      monthlySchedule: MONTH_SHORTS.map((short, idx) => {
        const m = idx + 1;
        return {
          monthIndex: m,
          shortName: short,
          status: peakMonths.includes(m) ? 'peak' : moderateMonths.includes(m) ? 'moderate' : 'dormant'
        };
      })
    };
  }

  if (productId === 'midnight-orchid') {
    // Rare Vanda Orchid: Controlled Greenhouse all-year with supreme winter/autumn blooms
    const peakMonths = [8, 9, 10, 11, 12, 1];
    const moderateMonths = [2, 3, 7];
    const isPeak = peakMonths.includes(currentMonth);
    const isModerate = moderateMonths.includes(currentMonth);

    const status = isPeak ? 'peak' : isModerate ? 'moderate' : 'reserve';
    const statusLabel = isPeak
      ? 'Prime Vanda Bloom · Rare Stem Active'
      : isModerate
      ? 'Controlled Harvest · Micro-Batch'
      : 'Dormant Cycle · Waitlist Open';

    const statusColor = isPeak
      ? 'text-purple-400 bg-purple-500/15 border-purple-500/30'
      : isModerate
      ? 'text-amber-400 bg-amber-500/15 border-amber-500/30'
      : 'text-slate-400 bg-slate-500/15 border-slate-500/30';

    return {
      currentMonth,
      monthName,
      seasonName,
      status,
      statusLabel,
      statusColor,
      harvestWindow: 'August — January',
      growerRegion: 'Hilo Highland Mist Sanctuary, HI',
      harvestNote: `${monthName} humidity levels trigger deep obsidian-violet pigments across single Vanda orchid petals.`,
      daysRemainingInCycle: 30 - now.getDate() + 1,
      monthlySchedule: MONTH_SHORTS.map((short, idx) => {
        const m = idx + 1;
        return {
          monthIndex: m,
          shortName: short,
          status: peakMonths.includes(m) ? 'peak' : moderateMonths.includes(m) ? 'moderate' : 'dormant'
        };
      })
    };
  }

  // Blush Peony Structura
  // Garden roses and bleached ruscus: Peak in Spring & Autumn (March - June, Sept - Nov)
  const peakMonths = [3, 4, 5, 9, 10, 11];
  const moderateMonths = [6, 7, 8, 12];
  const isPeak = peakMonths.includes(currentMonth);
  const isModerate = moderateMonths.includes(currentMonth);

  const status = isPeak ? 'peak' : isModerate ? 'moderate' : 'dormant';
  const statusLabel = isPeak
    ? 'Peak Autumn Flush · Sourced Daily'
    : isModerate
    ? 'Subtle Bloom · Sourced Weekly'
    : 'Winter Pruning · Advance Orders Only';

  const statusColor = isPeak
    ? 'text-emerald-700 bg-emerald-500/10 border-emerald-500/30'
    : isModerate
    ? 'text-amber-700 bg-amber-500/10 border-amber-500/30'
    : 'text-slate-600 bg-slate-500/10 border-slate-500/30';

  return {
    currentMonth,
    monthName,
    seasonName,
    status,
    statusLabel,
    statusColor,
    harvestWindow: 'March — June · Sept — Nov',
    growerRegion: 'Sonoma Valley Heritage Gardens, CA',
    harvestNote: `${monthName} cool morning marine fog yields dense alabaster rose centers and fragrant foliage.`,
    daysRemainingInCycle: 30 - now.getDate() + 1,
    monthlySchedule: MONTH_SHORTS.map((short, idx) => {
      const m = idx + 1;
      return {
        monthIndex: m,
        shortName: short,
        status: peakMonths.includes(m) ? 'peak' : moderateMonths.includes(m) ? 'moderate' : 'dormant'
      };
    })
  };
}
