const types = [
  'REGISTRATION',
];

const Types = types.reduce((acc, value) => {
  acc[value] = value;
  return acc;
}, {});

export default Types;