// Implement your exercise in this file.  If you need to implement additional functions,
// remember to export them as well, if you need to access them in your unit test.
function computeMinimumAndMaximumSuspects(input) {
    let crimeInterval = input[0].split(" ").map(num => { return parseInt(num); });
    let totalSuspects = input[1];
    let suspectIntervals = input.slice(2, input.length).map(interval => { return interval.split(" ").map(num => { return parseInt(num); }); });

    let intervalSlots = {};
    for(let currentSlot = crimeInterval[0]; currentSlot <= crimeInterval[1]; currentSlot++) {
        intervalSlots[currentSlot] = 0;
        for(let j = 0; j < totalSuspects; j++) {
            if(currentSlot >= suspectIntervals[j][0] && currentSlot <= suspectIntervals[j][1]) {
                intervalSlots[currentSlot]++;
            }
        }
    }

    let slotCounts = Object.values(intervalSlots).sort();
    let minSuspects = slotCounts[0];
    let maxSuspects = slotCounts[slotCounts.length - 1];

    return [ minSuspects, maxSuspects ];
}

module.exports = { computeMinimumAndMaximumSuspects };

