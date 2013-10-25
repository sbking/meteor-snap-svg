Package.describe({
  summary: "Snap SVG packaged for Meteor!"
});

Package.on_use(function (api) {
  api.add_files([
    'lib/dist/snap.svg-min.js',
  ], 'client'
  );
});