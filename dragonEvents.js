const dragonEvents = [
    { type: 'attack', value: 12, target: 'player-dorkman'},
    { type: 'eat', value: 12, target: 'horse'},
    { type: 'attack', value: 12, target: 'player-fluffykiss'},
    { type: 'attack', value: 12, target: 'player-dorkman'},
]

const totalDamageOnDorkman = dragonEvents
.filter((event) => {
    return event.type === 'attack';
})
.filter((event) => {
    return event.target === 'player-dorkman';
})
.map((event) => {
    return event.value;
})
.reduce((prev, value) => {
    return ( prev || 0) + value
})

const whatsToEat = dragonEvents.filter(dragon => dragon.target === 'eat')

console.log('totalDamageOnDorkman\n', totalDamageOnDorkman);