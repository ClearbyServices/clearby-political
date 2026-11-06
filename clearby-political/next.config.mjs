/** Static export: `npm run build` creates an /out folder to upload to Hostinger public_html */
const nextConfig = { output: 'export', trailingSlash: true, images: { unoptimized: true } };
export default nextConfig;
