const greetingList = ["You've got this!",
"Keep going",
"Believe in yourself",
"You're making progress",
"Stay positive",
"You are capable",
"You're doing great",
"Don't give up",
"Keep pushing forward",
"Every little bit helps",
"You're on the right track",
"You are strong",
"You're getting better every day",
"You can overcome anything",
"You're doing better than you think",
"You're unstoppable",
"You're a champion",
"You're amazing just the way you are",
"You have what it takes",
"You're making a difference"
];

export function getRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetingList.length);


return greetingList[randomIndex];
}