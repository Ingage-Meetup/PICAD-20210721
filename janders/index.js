function crime_scene(data) {
  const [crime_data, _, ...people] = process_data(data);
  const crime_times = range(crime_data[0], crime_data[1]);

  const interviews = people.map((i) => range(i[0], i[1]));

  const times = interviews.reduce((acc, interview) => {
    interview.forEach((i) => {
      if (crime_times.includes(i)) {
        acc[i] === undefined ? (acc[i] = 1) : (acc[i] += 1);
      }
    });
    return acc;
  }, {});

  const sorted_times = Object.values(times).sort();

  return `${sorted_times[0]} ${sorted_times.reverse()[0]}`;
}

function range(begin, end) {
  return [...Array(end + 1 - begin).keys()].map((value) => (value += begin));
}

function process_data(data) {
  return data
    .replace(/\n\n/g, ",")
    .split(",")
    .map((pairs) => pairs.split(" ").map((num_string) => parseInt(num_string)));
}

module.exports = {
  range,
  crime_scene,
  process_data,
};
