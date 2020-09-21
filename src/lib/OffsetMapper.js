const instruments = [
  {
    offsetX: 0,
    offsetY: 0,
    instrument_number: 1,
    name: 'Violin I',
  },
  {
    offsetX: 0,
    offsetY: 1,
    instrument_number: 2,
    name: 'Violin I',
  },
  {
    offsetX: 1,
    offsetY: 0,
    instrument_number: 3,
    name: 'Violin I',
  },
  {
    offsetX: 1,
    offsetY: 1,
    instrument_number: 4,
    name: 'Violin I',
  },
  {
    offsetX: 2,
    offsetY: 0,
    instrument_number: 5,
    name: 'Violin I',
  },
  {
    offsetX: 2,
    offsetY: 1,
    instrument_number: 6,
    name: 'Violin I',
  },
  {
    offsetX: 3,
    offsetY: 0,
    instrument_number: 7,
    name: 'Violin I',
  },
  {
    offsetX: 3,
    offsetY: 1,
    instrument_number: 8,
    name: 'Violin I',
  },
  {
    offsetX: 4,
    offsetY: 0,
    instrument_number: 9,
    name: 'Violin I',
  },
  {
    offsetX: 4,
    offsetY: 1,
    instrument_number: 10,
    name: 'Violin I',
  },
  {
    offsetX: 4,
    offsetY: 2,
    instrument_number: 11,
    name: 'Violin I',
  },
  {
    offsetX: 3.5,
    offsetY: 3,
    instrument_number: 12,
    name: 'Violin I',
  },
  {
    offsetX: 5,
    offsetY: 0,
    instrument_number: 13,
    name: 'Violin I',
  },
  {
    offsetX: 5,
    offsetY: 1,
    instrument_number: 14,
    name: 'Violin I',
  },
  {
    offsetX: 5,
    offsetY: 2,
    instrument_number: 15,
    name: 'Violin I',
  },
  {
    offsetX: 4.5,
    offsetY: 3,
    instrument_number: 16,
    name: 'Violin I',
  },
  {
    name: 'Violin II',
    instrument_number: 1,
    offsetX: 0,
    offsetY: 0,
  },
  {
    name: 'Violin II',
    instrument_number: 2,
    offsetX: -1,
    offsetY: 0.5,
  },
  {
    name: 'Violin II',
    instrument_number: 3,
    offsetX: 1,
    offsetY: 0,
  },
  {
    name: 'Violin II',
    instrument_number: 4,
    offsetX: 0.5,
    offsetY: 1,
  },
  {
    name: 'Violin II',
    instrument_number: 5,
    offsetX: -0.5,
    offsetY: 1.5,
  },
  {
    name: 'Violin II',
    instrument_number: 6,
    offsetX: -1.5,
    offsetY: 1.5,
  },
  {
    name: 'Violin II',
    instrument_number: 7,
    offsetX: 2,
    offsetY: 0,
  },
  {
    name: 'Violin II',
    instrument_number: 8,
    offsetX: 1.5,
    offsetY: 1,
  },
  {
    name: 'Violin II',
    instrument_number: 9,
    offsetX: 1,
    offsetY: 2,
  },
  {
    name: 'Violin II',
    instrument_number: 10,
    offsetX: 0,
    offsetY: 2.5,
  },
  {
    name: 'Violin II',
    instrument_number: 11,
    offsetX: -1,
    offsetY: 2.5,
  },
  {
    name: 'Violin II',
    instrument_number: 12,
    offsetX: -2,
    offsetY: 2.5,
  },
];

const output = instruments
  .filter((instrument) => instrument.name === 'Violin II')
  .sort((a, b) => (a.instrument_number > b.instrument_number ? 1 : -1));

const { x, y } = output[0];

// for (let i = 0; i < map.instruments.length; i++) {
//   const offsetX = x - map.instruments[i].x;
//   const offsetY = y - map.instruments[i].y;
//   output.push({
//     offsetX,
//     offsetY,
//     instrument_number: map.instruments[i].instrument_number,
//   });
// }
console.log(output);
export default instruments;
