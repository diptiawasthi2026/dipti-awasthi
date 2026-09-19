import { NumerologyAnalysis } from '../types';

export const VEDIC_NUMBER_DATA: Record<number, {
  planet: string;
  element: string;
  archetype: string;
  strengths: string[];
  challenges: string;
  reflectiveGuidance: string;
}> = {
  1: {
    planet: "Surya (Sun)",
    element: "Fire",
    archetype: "The Initiator & Visionary",
    strengths: ["Natural initiative", "Clarity of purpose", "Independence", "Inspiring leadership"],
    challenges: "Patience with slower timelines and balancing individual drive with collaboration.",
    reflectiveGuidance: "Channel your inner fire into constructive creation. True authority leads with warmth, quiet dignity, and generosity of spirit."
  },
  2: {
    planet: "Chandra (Moon)",
    element: "Water",
    archetype: "The Intuitive Diplomat",
    strengths: ["Empathetic listening", "Intuitive perception", "Harmonizing relationships", "Gentle grace"],
    challenges: "Managing emotional sensitivity and establishing clear boundaries.",
    reflectiveGuidance: "Honor your intuition while remaining anchored in your own center. Your sensitivity is a profound superpower when grounded."
  },
  3: {
    planet: "Guru / Brihaspati (Jupiter)",
    element: "Ether / Space",
    archetype: "The Wise Counselor & Creative",
    strengths: ["Wisdom and optimism", "Expressive creativity", "Counseling ability", "Lifelong learning"],
    challenges: "Scattering creative focus and over-committing your energy.",
    reflectiveGuidance: "Structure your abundance of insights. Choose one or two focal projects where your wisdom can deeply uplift others."
  },
  4: {
    planet: "Rahu",
    element: "Earth / Air",
    archetype: "The Architect & Innovator",
    strengths: ["Original perspective", "Methodical organization", "Resilience", "Practical problem-solving"],
    challenges: "Rigidity and feeling misunderstood when challenging standard conventions.",
    reflectiveGuidance: "Pair your visionary ideas with patient foundational steps. Build stability step by step to realize lasting breakthroughs."
  },
  5: {
    planet: "Budha (Mercury)",
    element: "Earth",
    archetype: "The Adaptable Communicator",
    strengths: ["Mental agility", "Strategic communication", "Versatility", "Resourcefulness in business"],
    challenges: "Restlessness and jumping between interests before reaping full rewards.",
    reflectiveGuidance: "Embrace steady depth alongside your natural speed. Cultivate stillness to refine your sharp intellect into profound focus."
  },
  6: {
    planet: "Shukra (Venus)",
    element: "Water / Earth",
    archetype: "The Harmonizer & Caregiver",
    strengths: ["Aesthetic appreciation", "Compassionate nurturing", "Diplomatic balance", "Devotion to family"],
    challenges: "Overextending yourself for others and expecting perfection in relationships.",
    reflectiveGuidance: "Remember that self-care is the foundation of genuine service. Nurture your own peace before giving outward."
  },
  7: {
    planet: "Ketu",
    element: "Water / Fire",
    archetype: "The Mystic Seeker & Analyst",
    strengths: ["Spiritual depth", "Analytical intellect", "Solitary focus", "Penetrating insight into truth"],
    challenges: "Detachment, cynicism, or feeling isolated in noisy social environments.",
    reflectiveGuidance: "Trust your inner compass. Quiet contemplative time recharges your soul and connects your intellect to higher intuition."
  },
  8: {
    planet: "Shani (Saturn)",
    element: "Air / Earth",
    archetype: "The Karmic Builder & Master of Endurance",
    strengths: ["Perseverance", "Fairness and justice", "Organizing large endeavors", "Long-term maturity"],
    challenges: "Carrying heavy burdens in silence and impatience with early-stage hurdles.",
    reflectiveGuidance: "Time is your greatest ally. Every deliberate effort you sow with integrity builds enduring legacy and deep inner resilience."
  },
  9: {
    planet: "Mangal (Mars)",
    element: "Fire",
    archetype: "The Humanitarian Champion",
    strengths: ["Courage and conviction", "Generous humanitarian spirit", "Vitality", "Protective warmth"],
    challenges: "Impatience, lingering resentment, and holding on to past battles.",
    reflectiveGuidance: "Channel your courage into uplifting service and compassionate understanding. Forgiveness clears the channel for higher blessings."
  }
};

export function reduceToSingleDigit(num: number): number {
  if (num <= 0) return 1;
  while (num > 9) {
    num = String(num)
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }
  return num;
}

export function calculateVedicNumerology(dobString: string): NumerologyAnalysis | null {
  if (!dobString) return null;
  const parts = dobString.split('-');
  if (parts.length !== 3) return null;

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  if (isNaN(year) || isNaN(month) || isNaN(day)) return null;

  // Mulank (Driver Number) = reduction of birth day
  const mulank = reduceToSingleDigit(day);

  // Bhagyank (Destiny Number) = reduction of day + month + year
  const totalSum = day + month + year;
  const bhagyank = reduceToSingleDigit(totalSum);

  // Personal Year = reduction of day + month + current year (2026)
  const currentYear = new Date().getFullYear();
  const personalYear = reduceToSingleDigit(day + month + currentYear);

  const info = VEDIC_NUMBER_DATA[mulank] || VEDIC_NUMBER_DATA[1];

  return {
    mulank,
    bhagyank,
    personalYear,
    planet: info.planet,
    strengths: info.strengths,
    guidance: info.reflectiveGuidance
  };
}
