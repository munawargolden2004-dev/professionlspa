// Page copy for each treatment. Prices and durations come from services.js (or {{price:slug:minutes}} tokens),
// so they are never typed out here. Register: massage helps the body feel looser and more relaxed. No clinical claims.
// Process details (what happens in a visit) are general descriptions; the owner should confirm each one.

export const commonSkip = [
  'You are pregnant',
  'You have had a recent fracture or surgery',
  'You have a fever or an infection',
  'Your blood pressure is not under control',
  'A doctor is already treating the area you want massaged',
]
export const skipClosing = 'If a doctor is treating you, check with them first. If you are unsure, tell us when you book and we will advise you before the session.'

// Short line shown above each treatment's introduction. Written for people reading the page, not for search engines.
export const leads = {
  'thai-massage': 'A floor-based massage with stretching and rhythmic pressure.',
  'deep-tissue-massage': 'Slow, firm pressure for muscles that feel knotted.',
  'swedish-massage': 'Long, flowing strokes with warm oil for a calm, easy session.',
  'aromatherapy-massage': 'Gentle oil massage with a scent chosen to help you unwind.',
  'hot-stone-massage': 'Smooth warm stones with long, unhurried strokes.',
  'sports-massage': 'Firm, focused work for people who train or play hard.',
  'full-body-massage': 'Our standard oil massage, covering the whole body.',
  'mens-full-body-massage': 'A full-body oil massage given by a male therapist.',
  'head-shoulder-massage': 'Focused work on the scalp, neck and shoulders.',
  'back-neck-massage': 'Focused work along the back and up into the neck.',
  'foot-massage': 'Feet, ankles and calves, for tired legs after a long day.',
}

export const content = {
  'thai-massage': {
    intro: [
      'Thai massage is given on a padded mat. The therapist moves through the body in a steady sequence of pressure, gentle stretches and slow rocking, using hands, forearms and sometimes feet.',
      'People often choose it when they feel stiff rather than sore: tight hips, short hamstrings, or a body that feels heavy after sitting all day. You stay clothed, so no oil is used.',
    ],
    note: 'Wear loose, comfortable clothing that lets you move easily.',
    best: ['Stiff hips', 'Tight hamstrings', 'Feeling heavy after long sitting', 'People who prefer no oil', 'Stretching-style work'],
    steps: [
      'We ask a few questions first: where you feel tight, anything to avoid, and how firm you like the pressure.',
      'You lie on the mat and the therapist starts with long, rhythmic pressure along the legs and back.',
      'Stretches follow, taken only as far as is comfortable. Tell the therapist at any point if you want to stop or change.',
      'The session finishes with slow pressure on the shoulders and neck, and a short pause before you sit up.',
    ],
    skip: ['Your joints are very loose or painful'],
    aftercare: 'Drink some water and take a short, easy walk in the evening.',
    related: ['deep-tissue-massage', 'full-body-massage', 'sports-massage'],
  },

  'deep-tissue-massage': {
    intro: [
      'Deep tissue massage uses slow, firm strokes and steady pressure on the deeper layers of muscle. The therapist works on one area at a time with the forearms, knuckles and thumbs, and eases off when the muscle softens.',
      'It suits tension that returns to the same places: the ridge across the shoulders after long hours at a screen, a stubborn spot near the shoulder blade, or calves and thighs that feel tight after training. It is firmer than a relaxing massage, so tell us your preference at the start.',
    ],
    note: 'Some tenderness the next day is common, similar to after a workout, and usually settles within a day or two.',
    best: ['Tension that keeps returning', 'Desk-work shoulders', 'Tight upper back', 'Heavy training schedules', 'People who like firm pressure'],
    steps: [
      'We ask where you feel the tension and how firm you want the pressure, then agree a starting point.',
      'You lie on the table under a towel. Only the area being worked is uncovered.',
      'The therapist warms the muscle, then moves into slower, deeper pressure on the tight spots. Tell us to ease off or go deeper at any time.',
      'The session ends with lighter strokes to settle the area.',
    ],
    skip: ['You bruise easily or take blood-thinning medicine', 'You have a skin condition over the area to be worked'],
    aftercare: 'Drink water, keep the area warm that evening, and avoid a hard workout the same day.',
    related: ['back-neck-massage', 'sports-massage', 'swedish-massage'],
  },

  'swedish-massage': {
    intro: [
      'Swedish massage is the classic relaxing massage: long, flowing strokes with warm oil, gentle kneading and light circular movements at a comfortable pressure. It is designed to help tight muscles loosen and help the mind slow down.',
      'It is a good first massage, and an easy choice if you simply want time where nothing is asked of you. The pressure is light to medium, and you can ask for it to be firmer or softer at any point.',
    ],
    best: ['Your first massage', 'General tension', 'Winding down after a busy week', 'Light to medium pressure', 'An hour to switch off'],
    steps: [
      'A few questions first: any sore spots, anything to avoid, and how firm you like the pressure.',
      'You lie on the table under a towel, and only the part being worked is uncovered.',
      'The therapist works through the back, legs, arms and shoulders with long strokes and gentle kneading, spending longer where you feel tight.',
      'The final minutes slow down, and you have time to sit up and drink some water.',
    ],
    skip: ['You have a skin condition or open wound over the area to be worked'],
    aftercare: 'Keep the evening quiet if you can, and drink some water.',
    related: ['full-body-massage', 'aromatherapy-massage', 'hot-stone-massage'],
  },

  'aromatherapy-massage': {
    intro: [
      'Aromatherapy massage is a slow oil massage with a scent chosen for the session, such as lavender. The massage itself follows the same unhurried strokes as a Swedish massage; the scent is part of the experience.',
      'People choose it for a quiet hour, or for a way to unwind after a stressful day.',
    ],
    note: 'Tell us before the session if you are sensitive to strong scents or essential oils, and we will use a milder option.',
    best: ['A quiet, scented hour', 'Stress held in the shoulders', 'Winding down before sleep', 'A gentle first massage'],
    steps: [
      'We ask about any scent sensitivities and check which oil you would like.',
      'You lie on the table under a towel, with only the area being worked uncovered.',
      'The therapist uses long oiled strokes and gentle kneading across the back, shoulders and arms.',
      'The session slows at the end, and you have a moment to settle before getting up.',
    ],
    skip: ['You are sensitive to strong scents or essential oils'],
    aftercare: 'Dim the lights, drink water, and take your time getting up.',
    related: ['swedish-massage', 'head-shoulder-massage', 'full-body-massage'],
  },

  'hot-stone-massage': {
    intro: [
      'Hot stone massage uses smooth, warmed stones placed on the body and held in the hands, with long strokes that carry the warmth into the muscles. The heat helps the body relax, and the stones are used to guide the pressure.',
      'It is a good choice in cold weather, or when your muscles feel slow to settle.',
    ],
    note: 'The stones are warm, never hot. Tell the therapist straight away if anything feels too warm.',
    best: ['Cold-weather stiffness', 'Muscles that feel slow to settle', 'A deeply relaxing hour', 'People who like warmth'],
    steps: [
      'We ask about any heat sensitivity and confirm the pressure you like.',
      'You lie face-down with a towel, and the warmed stones are placed along the back.',
      'The therapist uses the stones and hands to work along the back, legs and shoulders with long, slow strokes.',
      'The stones are removed gradually, and you have time to rest before getting up.',
    ],
    skip: ['You have reduced feeling in your skin', 'You have a heat-sensitive skin condition'],
    aftercare: 'Stay warm for the rest of the evening and drink some water.',
    related: ['deep-tissue-massage', 'swedish-massage', 'full-body-massage'],
  },

  'sports-massage': {
    intro: [
      'Sports massage is firm, focused work for people who train, run, lift, or play sport. The therapist concentrates on the muscles you use most and on the areas that feel heavy or tight after exercise.',
      'It can be booked after a training session or when you have a busy schedule of activity and want your legs to feel lighter.',
    ],
    best: ['After training', 'Tight hamstrings', 'Heavy legs', 'Busy weeks of activity', 'Firm pressure'],
    steps: [
      'We ask what you do and where you feel tight, so the session focuses on the right areas.',
      'You lie face-down under a towel, and the leg or area being worked is uncovered.',
      'The therapist uses firm strokes and kneading along the muscles, with extra time on the tight spots.',
      'The session ends with lighter strokes to settle the muscles.',
    ],
    skip: ['You have a recent muscle tear or sprain'],
    aftercare: 'Drink water, have a light meal, and rest your legs that evening.',
    related: ['deep-tissue-massage', 'thai-massage', 'foot-massage'],
  },

  'full-body-massage': {
    intro: [
      'Our full body massage is a standard oil massage covering the back, shoulders, arms, legs and feet. It uses warm oil, flowing strokes and steady kneading at a medium pressure, and it is the session to book if you are not sure which technique you want.',
      'It is available in 30, 40, 60 and 90 minute lengths, all on the same rate card.',
    ],
    best: ['Not sure what to book', 'General aches after a long week', 'A full, unhurried session', 'Medium pressure'],
    steps: [
      'We ask a few questions first, including any areas to focus on or avoid.',
      'You lie on the table under a towel, and only the area being worked is uncovered.',
      'The therapist moves through the whole body with long strokes and kneading, spending more time where you feel tight.',
      'The final minutes slow down, and you have time to sit up before you leave.',
    ],
    skip: ['You have a skin condition or open wound over the area to be worked'],
    aftercare: 'Drink a glass of water and keep the evening easy.',
    related: ['swedish-massage', 'deep-tissue-massage', 'mens-full-body-massage'],
  },

  'mens-full-body-massage': {
    metaLead: 'Full body massage for men in Bahria Town, given by a male therapist.',
    // TODO owner: confirm a male therapist is available for every shift before running ads for this page.
    intro: [
      'The full body massage for men is our standard oil massage, given by a male therapist. It covers the back, shoulders, arms, legs and feet with warm oil, flowing strokes and steady kneading.',
      'It suits tight shoulders from desk work, sore legs after training, and a stiff back after long drives. Pressure can be firmer or lighter at any point.',
    ],
    note: 'A towel covers you throughout, and only the area being worked is uncovered.',
    best: ['Men who prefer a male therapist', 'Desk-work shoulders', 'Sore legs after training', 'A stiff back after driving'],
    steps: [
      'We ask a few questions first, including any areas to focus on or avoid.',
      'You lie on the table under a towel, and only the area being worked is uncovered.',
      'The therapist works through the back, shoulders, arms, legs and feet with oil and steady kneading.',
      'The session finishes with slower strokes, and you have time to sit up before you leave.',
    ],
    skip: ['You have a skin condition or open wound over the area to be worked'],
    aftercare: 'Drink a glass of water and keep the evening easy.',
    related: ['deep-tissue-massage', 'sports-massage', 'full-body-massage'],
  },

  'head-shoulder-massage': {
    intro: [
      'Head and shoulder massage focuses on the scalp, neck and shoulders. It is a short session that works well for people who spend long hours at a desk or on a phone.',
      'A thirty-minute session is an easy way to try massage, and it can be booked on its own or after a full-body session.',
    ],
    best: ['Desk-work shoulders', 'A stiff neck', 'Long hours on a phone or laptop', 'A short first session'],
    steps: [
      'We ask where you feel tight, so the time goes to the right places.',
      'You sit or lie comfortably, with a towel over your shoulders.',
      'The therapist works on the scalp, neck and shoulders with steady pressure and kneading.',
      'The session finishes slowly, and you have a moment to settle before you stand.',
    ],
    skip: ['You have a recent neck injury', 'You have a scalp or skin condition'],
    aftercare: 'Roll your shoulders back, drop them, and take a short break from the screen.',
    related: ['back-neck-massage', 'aromatherapy-massage', 'foot-massage'],
  },

  'back-neck-massage': {
    intro: [
      'Back and neck massage concentrates on the muscles along the spine and up into the neck. It is a focused, shorter session for people who feel stiff in one area rather than all over.',
      'A thirty-minute session is a simple way to start, and it can be extended to forty minutes if you would like more time.',
    ],
    best: ['Lower back stiffness after sitting', 'A stiff neck', 'Upper-back tightness', 'A short, focused session'],
    steps: [
      'We ask where you feel most stiff and how firm you like the pressure.',
      'You lie face-down under a towel, and only the back and neck are uncovered.',
      'The therapist works along the spine and into the neck with oil, kneading and steady pressure.',
      'The session ends with lighter strokes, and you have time to rest before getting up.',
    ],
    skip: ['You have a recent back or neck injury', 'You have a condition affecting the spine'],
    aftercare: 'Take a short walk, stay warm, and stand up and move every hour or so.',
    related: ['head-shoulder-massage', 'deep-tissue-massage', 'full-body-massage'],
  },

  'foot-massage': {
    intro: [
      'Foot massage works on the soles, ankles and calves. It is a relaxing, shorter session that suits tired legs after a long day on your feet.',
      'Thirty and forty minute sessions are both available, and this is a good first visit if you want a gentle start.',
    ],
    best: ['Tired legs', 'Feet that feel heavy', 'All-day standing', 'A gentle first session'],
    steps: [
      'We ask which areas feel most tired so the session focuses there.',
      'You sit or lie comfortably, with your feet and lower legs uncovered.',
      'The therapist works on the soles, ankles and calves with oil and steady pressure.',
      'The session finishes slowly, and you have time to put your shoes on at your own pace.',
    ],
    skip: ['You have an open sore, infection or fungal condition on the feet', 'You have poor circulation in your legs'],
    aftercare: 'Put your feet up for ten minutes that evening and drink some water.',
    related: ['back-neck-massage', 'sports-massage', 'full-body-massage'],
  },
}
