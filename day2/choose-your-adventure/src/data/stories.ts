import type { Story } from '../types/index';

export const stories: Record<string, Story> = {
  'home-for-holidays': {
    id: 'home-for-holidays',
    title: 'Home For The Holidays',
    movieTheme: 'Holiday Travels',
    description: 'Can you make it home for Christmas dinner despite a massive snowstorm and airport chaos?',
    startScenarioId: '1',
    scenarios: {
      '1': {
        id: '1',
        text: "You're at a busy airport on Christmas Eve, trying to get home to your family. The announcement board flickers - your flight has been delayed indefinitely due to a snowstorm. Your phone buzzes with a text from your family saying dinner starts in 4 hours.",
        isEnding: false,
        choices: [
          { text: 'Wait it out at the airport bar', nextScenarioId: '2A' },
          { text: 'Rent a car and drive through the snowstorm', nextScenarioId: '2B' },
          { text: 'Find a stranger to split a rental', nextScenarioId: '2C' },
          { text: 'Book a last-minute train ticket', nextScenarioId: '2D' }
        ]
      },
      '2A': {
        id: '2A',
        text: "Three hours later, you're still at the airport. You overhear a private pilot mention they're flying to a city 50 miles from your hometown.",
        isEnding: false,
        choices: [
          { text: 'Ask the pilot for a ride', nextScenarioId: '3A1' },
          { text: 'Stay put - wait for your flight', nextScenarioId: '3A2' },
          { text: 'Give up and book a hotel', nextScenarioId: '3A3' }
        ]
      },
      '2B': {
        id: '2B',
        text: "You're white-knuckling the steering wheel. Visibility is terrible. You see signs for a Cozy Inn or the Main Highway.",
        isEnding: false,
        choices: [
          { text: 'Take the exit for the Cozy Inn', nextScenarioId: '3B1' },
          { text: 'Push forward on the main highway', nextScenarioId: '3B2' },
          { text: 'Pull over and call for help', nextScenarioId: '3B3' }
        ]
      },
      '2C': {
        id: '2C',
        text: "You team up with Margaret. Halfway through, the car breaks down in a small town.",
        isEnding: false,
        choices: [
          { text: 'Find a local mechanic', nextScenarioId: '3C1' },
          { text: "Stay with Margaret's nephew", nextScenarioId: '3C2' },
          { text: 'Look for another ride-share or bus', nextScenarioId: '3C3' }
        ]
      },
      '2D': {
        id: '2D',
        text: "The train is packed. The conductor announces unexpected track maintenance ahead.",
        isEnding: false,
        choices: [
          { text: 'Chat with the musician next to you', nextScenarioId: '3D1' },
          { text: 'Volunteer to help organize a sing-along', nextScenarioId: '3D2' },
          { text: 'Use the delay to work on your laptop', nextScenarioId: '3D3' }
        ]
      },
      '3A1': {
        id: '3A1',
        text: "The pilot agrees! You're flying through clear skies. The pilot mentions they're heading to a Christmas party.",
        isEnding: false,
        choices: [
          { text: 'Accept the invitation to the party', nextScenarioId: 'END_A1a' },
          { text: 'Politely decline and call a cab', nextScenarioId: 'END_A1b' }
        ]
      },
      '3A2': {
        id: '3A2',
        text: "Your patience pays off! The flight is cleared. You arrive home at 11 PM to find your family waited for you.",
        isEnding: true,
        endingTitle: "The Patient Traveler"
      },
      '3A3': {
        id: '3A3',
        text: "You book a cozy hotel room. The staff surprises you with hot cocoa. You make unexpected friends.",
        isEnding: true,
        endingTitle: "Unexpected Connections"
      },
      '3B1': {
        id: '3B1',
        text: "The inn is beautiful. You spend Christmas Eve with other travelers. You arrive home safe in the morning.",
        isEnding: true,
        endingTitle: "Safe and Sound"
      },
      '3B2': {
        id: '3B2',
        text: "You persevere through the storm and arrive home just in time. You're the hero of Christmas!",
        isEnding: true,
        endingTitle: "The Christmas Hero"
      },
      '3B3': {
        id: '3B3',
        text: "A tow truck driver helps you home. Your family is still up and pulls you into the holiday fun.",
        isEnding: true,
        endingTitle: "The Christmas Miracle"
      },
      '3C1': {
        id: '3C1',
        text: "A mechanic fixes the car! You and Margaret arrive safely. Your family invites her for dinner.",
        isEnding: true,
        endingTitle: "A New Friend"
      },
      '3C2': {
        id: '3C2',
        text: "You spend a wonderful Christmas Eve with Margaret's nephew's family. A beautiful detour.",
        isEnding: true,
        endingTitle: "The Scenic Route"
      },
      '3C3': {
        id: '3C3',
        text: "The peaceful bus ride gives you time to reflect. You surprise your family at breakfast.",
        isEnding: true,
        endingTitle: "Peaceful Arrival"
      },
      '3D1': {
        id: '3D1',
        text: "The musician's stories enrich your journey. You arrive late to a loving note and cookies.",
        isEnding: true,
        endingTitle: "Soulful Journey"
      },
      '3D2': {
        id: '3D2',
        text: "Your sing-along goes viral! Your family has seen the video by the time you arrive home.",
        isEnding: true,
        endingTitle: "The Train Star"
      },
      '3D3': {
        id: '3D3',
        text: "You arrive home feeling accomplished. Your family greets you warmly. You made the most of it.",
        isEnding: true,
        endingTitle: "The Productive Traveler"
      },
      'END_A1a': {
        id: 'END_A1a',
        text: "The party is incredible. You arrive home late with new friends and amazing stories.",
        isEnding: true,
        endingTitle: "The Party Life"
      },
      'END_A1b': {
        id: 'END_A1b',
        text: "You arrive home at 10 PM. Your family rushes to hug you. You made it right on time.",
        isEnding: true,
        endingTitle: "Punctual Christmas"
      }
    }
  },
  'grinch-challenge': {
    id: 'grinch-challenge',
    title: 'The Christmas Spirit Challenge',
    movieTheme: 'Transformation',
    description: 'A broken heater and persistent neighbors might just change your grumpy mind.',
    startScenarioId: '1',
    scenarios: {
      '1': {
        id: '1',
        text: "You're the neighborhood Grinch. Your heat breaks, carolers appear, and you have a party invite.",
        isEnding: false,
        choices: [
          { text: 'Open the door to carolers', nextScenarioId: '2A' },
          { text: 'Ignore and call repair', nextScenarioId: '2B' },
          { text: 'Go to the party', nextScenarioId: '2C' },
          { text: 'Start a fire', nextScenarioId: '2D' }
        ]
      },
      '2A': {
        id: '2A',
        text: "It's kids from a local shelter. Their leader Lily smiles brightly despite the cold.",
        isEnding: false,
        choices: [
          { text: 'Donate and close door', nextScenarioId: '3A1' },
          { text: 'Invite them in', nextScenarioId: '3A2' },
          { text: 'Help them fundraise', nextScenarioId: '3A3' }
        ]
      },
      '2B': {
        id: '2B',
        text: "No repair until tomorrow. Your neighbor knocks to check on you.",
        isEnding: false,
        choices: [
          { text: "Stay at their place", nextScenarioId: '3B1' },
          { text: "Insist you're fine", nextScenarioId: '3B2' },
          { text: 'Ask for a handyman', nextScenarioId: '3B3' }
        ]
      },
      '2C': {
        id: '2C',
        text: "You're in pajamas at a party. They welcome you anyway! Judge the sweater contest?",
        isEnding: false,
        choices: [
          { text: 'Participate', nextScenarioId: '3C1' },
          { text: 'Stay in the corner', nextScenarioId: '3C2' },
          { text: 'Help in the kitchen', nextScenarioId: '3C3' }
        ]
      },
      '2D': {
        id: '2D',
        text: "Something's wrong with the chimney! Smoke is filling the room.",
        isEnding: false,
        choices: [
          { text: 'Run outside, call 911', nextScenarioId: '3D1' },
          { text: 'Put it out yourself', nextScenarioId: '3D2' },
          { text: "Bang on neighbor's door", nextScenarioId: '3D3' }
        ]
      },
      '3A1': {
        id: '3A1',
        text: "The kids return with cards. Your icy heart melts a little.",
        isEnding: true,
        endingTitle: "A Tiny Spark"
      },
      '3A2': {
        id: '3A2',
        text: "You drive them back with supplies. You feel a warmth you haven't felt in years.",
        isEnding: true,
        endingTitle: "The Generous Host"
      },
      '3A3': {
        id: '3A3',
        text: "You raise triple their goal! You're an honorary caroler now.",
        isEnding: true,
        endingTitle: "The Christmas Caroler"
      },
      '3B1': {
        id: '3B1',
        text: "You build gingerbread houses with their kids. Friends for life.",
        isEnding: true,
        endingTitle: "A New Family"
      },
      '3B2': {
        id: '3B2',
        text: "The neighborhood sings for you. A warm heart in a cold house.",
        isEnding: true,
        endingTitle: "Neighborhood Love"
      },
      '3B3': {
        id: '3B3',
        text: "A neighbor fixes it. You bake cookies. Kindness builds connection.",
        isEnding: true,
        endingTitle: "Community Spirit"
      },
      '3C1': {
        id: '3C1',
        text: "You win 'most improved'. You wake up with a smile.",
        isEnding: true,
        endingTitle: "The Life of the Party"
      },
      '3C2': {
        id: '3C2',
        text: "A kid asks why you're sad. Opening up helps you heal.",
        isEnding: true,
        endingTitle: "Healing Hearts"
      },
      '3C3': {
        id: '3C3',
        text: "You bond with the host over shared stories. A new tradition begins.",
        isEnding: true,
        endingTitle: "Deep Connections"
      },
      '3D1': {
        id: '3D1',
        text: "You join the firefighters for dinner. Crisis led to purpose.",
        isEnding: true,
        endingTitle: "The Hero's Welcome"
      },
      '3D2': {
        id: '3D2',
        text: "You manage it but realize you've been too isolated. You reconcile with family.",
        isEnding: true,
        endingTitle: "Reconciliation"
      },
      '3D3': {
        id: '3D3',
        text: "Sitting with your neighbor's family, you realize you're not alone anymore.",
        isEnding: true,
        endingTitle: "No Longer Alone"
      }
    }
  },
  'miracle-worker': {
    id: 'miracle-worker',
    title: 'The Christmas Miracle Worker',
    movieTheme: 'Leadership',
    description: 'The manager is sick on the busiest day. Can you handle the chaos?',
    startScenarioId: '1',
    scenarios: {
      '1': {
        id: '1',
        text: "Manager is sick, line is long, shipment is missing, child is crying. Go!",
        isEnding: false,
        choices: [
          { text: 'Help the lost child', nextScenarioId: '2A' },
          { text: 'Address angry customers', nextScenarioId: '2B' },
          { text: 'Call about shipment', nextScenarioId: '2C' },
          { text: 'Organize employees', nextScenarioId: '2D' }
        ]
      },
      '2A': {
        id: '2A',
        text: "Emma, age 6, lost her mom. She's terrified.",
        isEnding: false,
        choices: [
          { text: 'PA announcement', nextScenarioId: '3A1' },
          { text: 'Walk around to find mom', nextScenarioId: '3A2' },
          { text: 'Emma is your helper', nextScenarioId: '3A3' }
        ]
      },
      '2B': {
        id: '2B',
        text: "Customers are arguing. The noise is rising.",
        isEnding: false,
        choices: [
          { text: 'Offer discounts', nextScenarioId: '3B1' },
          { text: 'Honest explanation', nextScenarioId: '3B2' },
          { text: 'Call security', nextScenarioId: '3B3' }
        ]
      },
      '2C': {
        id: '2C',
        text: "Shipment is stuck. Customers want the hottest toy.",
        isEnding: false,
        choices: [
          { text: 'Rainchecks', nextScenarioId: '3C1' },
          { text: 'Nearby store stock', nextScenarioId: '3C2' },
          { text: 'Alternative gifts', nextScenarioId: '3C3' }
        ]
      },
      '2D': {
        id: '2D',
        text: "The team is stressed. Lead them.",
        isEnding: false,
        choices: [
          { text: 'Assign roles', nextScenarioId: '3D1' },
          { text: 'Flexibility', nextScenarioId: '3D2' },
          { text: 'Buddy system', nextScenarioId: '3D3' }
        ]
      },
      '3A1': {
        id: '3A1',
        text: "The reunion shifts the store's energy. You're employee of the month!",
        isEnding: true,
        endingTitle: "The Compassionate Leader"
      },
      '3A2': {
        id: '3A2',
        text: "You find her mom. Corporate gives you a bonus.",
        isEnding: true,
        endingTitle: "The Extra Mile"
      },
      '3A3': {
        id: '3A3',
        text: "Emma's mom finds her giggling. You've changed the store culture.",
        isEnding: true,
        endingTitle: "The Joy Maker"
      },
      '3B1': {
        id: '3B1',
        text: "Discounts saved the day. You'll be manager next year.",
        isEnding: true,
        endingTitle: "The Problem Solver"
      },
      '3B2': {
        id: '3B2',
        text: "The day becomes a community effort. You're on the news!",
        isEnding: true,
        endingTitle: "The Community Builder"
      },
      '3B3': {
        id: '3B3',
        text: "Security handled it, but you realize you want to teach instead.",
        isEnding: true,
        endingTitle: "New Career Path"
      },
      '3C1': {
        id: '3C1',
        text: "Integrity matters. You're respected.",
        isEnding: true,
        endingTitle: "The Honest Professional"
      },
      '3C2': {
        id: '3C2',
        text: "Collaboration beats competition. Headhunted for corporate!",
        isEnding: true,
        endingTitle: "The Strategic Partner"
      },
      '3C3': {
        id: '3C3',
        text: "Vouchers for memories! You're a retail consultant now.",
        isEnding: true,
        endingTitle: "The Culture Shifter"
      },
      '3D1': {
        id: '3D1',
        text: "Organization was perfect. Fast-tracked to executive.",
        isEnding: true,
        endingTitle: "The Organized Executive"
      },
      '3D2': {
        id: '3D2',
        text: "A loyal team with low turnover. You're a great manager.",
        isEnding: true,
        endingTitle: "The People's Manager"
      },
      '3D3': {
        id: '3D3',
        text: "The buddy system worked. You wrote a book on leadership.",
        isEnding: true,
        endingTitle: "The Empathetic Author"
      }
    }
  }
};
