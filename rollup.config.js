import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'index.ts', // Replace with the correct entry file
  output: {
    file: 'bundle.js', // Replace with your desired output file name
    format: 'cjs',
  },
  plugins: [typescript()],
};
