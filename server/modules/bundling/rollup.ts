import rollup from "rollup";
import typescript from 'rollup-plugin-typescript2'; 

export async function bundleCodeToString(file: string) {

	const inputOptions = {
		input: file, // Replace with the correct entry file
		plugins: [typescript()],
	};

  const bundle = await rollup.rollup(inputOptions);
  const { output } = await bundle.generate({
    format: 'cjs', // Replace with your desired output format
  });
  
  // The output is an array of code chunks, typically just one
  const bundledCode = output[0].code;

  return bundledCode;
}