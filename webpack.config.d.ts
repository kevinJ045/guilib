import sass = require("sass");
export let mode: string;
export let entry: string;
export namespace output {
    let path: string;
    let filename: string;
}
export namespace resolve {
    let modules: string[];
}
export let watch: boolean;
export namespace optimization {
    let chunkIds: string;
    let moduleIds: string;
    let mangleExports: boolean;
}
export namespace module {
    let rules: ({
        test: RegExp;
        use: string[];
        exclude: RegExp;
    } | {
        test: RegExp;
        use: (string | {
            loader: string;
            options: {
                implementation: typeof sass;
            };
        })[];
        exclude?: undefined;
    })[];
}
