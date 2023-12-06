
function buildpath(){
	echo Building ./${1}index.d.ts;
	bun build ./${1}index.d.ts --outdir ./${1}
	mv ./${1}index.d.js ./${1}index.js
}

buildpath
buildpath svg/
buildpath extra/
buildpath react/
buildpath html/
