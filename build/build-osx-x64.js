import nwbuild from 'nw-builder';

await nwbuild({
  mode: 'build',
  flavor: 'normal',
  platform: 'osx',
  arch: 'x64',
  srcDir: './dist',
  cacheDir: './node_modules/nw',
  outDir: './out',
  glob: false,
  logLevel: 'debug',
  version: '0.106.1',
  manifestUrl: 'https://nwjs.io/versions.json',
  app: {
    name: 'Demo',
    /* File path of icon from where it is copied. */
    icon: './dist/favicon.icns',
    LSApplicationCategoryType: 'public.app-category.utilities',
    CFBundleIdentifier: 'io.nwutils.demo',
    CFBundleName: 'Demo',
    CFBundleDisplayName: 'Demo',
    CFBundleSpokenName: 'Demo',
    CFBundleVersion: '0.0.0',
    CFBundleShortVersionString: '0.0.0',
    NSHumanReadableCopyright: 'Copyright (c) 2024 NW.js Utilities',
    NSLocalNetworkUsageDescription: 'Demo requires access to network to showcase its capabilities',
  }
});

console.log('\n✅mac打包完成');