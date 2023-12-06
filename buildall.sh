
function buildpath(){
	echo Building ./${1}index.d.ts;
	bun build ./${1}index.d.ts --outdir ./${1}
	mv ./${1}index.d.js ./${1}index.js
}

# tsc --declaration ./client/index.ts
# tsc --declaration ./client/extra.ts
# tsc --declaration ./client/html.ts
# tsc --declaration ./client/svg.ts

buildpath
buildpath svg/
buildpath extra/
buildpath react/
buildpath html/

bun run ./gendist.ts