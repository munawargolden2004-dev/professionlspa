import { business, formatHours, hoursLabel, isAllDay } from './business'
import { fullBodyRates, formatPrice, minPrice } from './services'

// Only facts the owner has confirmed. Anything not yet confirmed (staff, room set-up, policies such as
// cancellation, tax, tipping, walk-ins) is not stated here. Ask the owner before adding it.
const hours = business.hours.map((b) => `${hoursLabel(b)} ${formatHours(b)}`).join(', ')
const rate60 = fullBodyRates.find((r) => r.minutes === 60).price
const rate30 = fullBodyRates.find((r) => r.minutes === 30).price

export const faqs = [
  {
    q: 'How much does a massage cost?',
    a: `A 60-minute full-body massage is ${formatPrice(rate60)}. The shortest targeted session starts at ${formatPrice(minPrice)} for 30 minutes. Every price is on the prices page.`,
  },
  {
    q: 'Where is Professional Spa?',
    a: `${business.address.street}, ${business.address.city}, ${business.address.region}. Call ${business.phone} if you need directions.`,
  },
  {
    q: 'Are you open 24 hours?',
    a: business.hours.every(isAllDay)
      ? 'Yes. We are open 24 hours a day, seven days a week. Message us on WhatsApp or call to book a time.'
      : `Our opening hours are: ${hours}.`,
  },
  {
    q: 'What are your opening hours?',
    a: business.hours.every(isAllDay) ? 'We are open 24 hours a day, seven days a week.' : `We are open: ${hours}.`,
  },
  {
    q: 'Which massages do you offer?',
    a: 'Full-body sessions include Thai, deep tissue, Swedish, aromatherapy, hot stone, sports, full body oil and a full body massage for men. Targeted sessions cover the head and shoulders, the back and neck, and the feet.',
  },
  {
    q: 'Do all full-body massages cost the same?',
    a: `Yes. All full-body massages share one rate card: ${fullBodyRates.map((r) => `${r.minutes} minutes ${formatPrice(r.price)}`).join(', ')}.`,
  },
  {
    q: 'What is the price of a 30 minute massage?',
    a: `A 30-minute full-body massage is ${formatPrice(rate30)}. A 30-minute targeted session starts at ${formatPrice(minPrice)}. Every price is on the prices page.`,
  },
  {
    q: 'Thai massage or deep tissue massage: which should I book?',
    a: 'Thai massage combines stretching with rhythmic pressure, and you stay clothed. Deep tissue uses slow, firm pressure on the deeper muscle layers. If you feel stiff, Thai may suit you. If you have knots that keep returning, deep tissue may suit you better.',
  },
  {
    q: 'I do not know which massage to choose. What should I book?',
    a: 'Tell us where you feel tight and how firm you like the pressure. If you are still unsure, the full-body massage is a good all-round choice, or a 30-minute targeted session is a shorter first visit.',
  },
  {
    q: 'Is this my first massage? What should I expect?',
    a: 'Your therapist will ask a few questions first, about where you feel tight and how firm you like the pressure. You will be covered with a towel, and only the area being worked is uncovered. You can ask for more or less pressure at any time.',
  },
  {
    q: 'Who should check with a doctor before booking?',
    a: 'Please check with your doctor first if you are pregnant, have had a recent fracture or surgery, have a fever or infection, have uncontrolled blood pressure, or are being treated by a doctor for the problem you want massaged.',
  },
]
