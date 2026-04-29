import nwbuild from 'nw-builder';

await nwbuild({
  mode: 'build',
  flavor: 'normal',
  platform: 'win',
  arch: 'x64',
  srcDir: './dist',  // 指定需要打包的应用程序目录
  cacheDir: './node_modules/nw',
  outDir: './out',  // 输出目录
  glob: false,
  logLevel: 'debug',
  version: '0.106.1',
  manifestUrl: 'https://nwjs.io/versions.json',
  app: {
    name: 'Demo',
    /* File path of icon from where it is copied. */
    icon: './dist/favicon.ico',
    version: '0.0.0',
    comments: 'Diagnostic information',
    company: 'NW.js Utilities',
    fileDescription: 'This is a demo app to test nw-builder functionality',
    fileVersion: '0.0.0',
    internalName: 'Demo',
    legalCopyright: 'Copyright (c) 2024 NW.js Utilities',
    originalFilename: 'Demo',
    productName: 'Demo',
    productVersion: '0.0.0',
  }
});

console.log('\n✅window打包完成');