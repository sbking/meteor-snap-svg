Package.describe({
  summary: "The JavaScript SVG library for the modern web. packaged for Meteor!"
});

Package.on_use(function (api) {
  api.add_files([
    'lib/dist/snap.svg-min.js',
  ], 'client'
  );
});