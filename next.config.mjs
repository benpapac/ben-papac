// import type { NextConfig } from "next";


const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = ''; // add a / into the string.

if (isGithubActions) {
	// trim off `<owner>/`
	const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');

	assetPrefix = `/${repo}/`;
	basePath = `/${repo}`;
}

// module.exports = {
// 	assetPrefix: assetPrefix,
// 	basePath: basePath,
// };

const nextConfig = {
	/* config options here */
	assetPrefix: assetPrefix,
	basePath: basePath,
	// images: {
	// 	loader: 'imgix',
	// 	path: 'benpapac-sources.imgix.net',
	// },
	output: 'export',
};

export default nextConfig;
