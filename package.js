Package.describe({
  summary: "Snap SVG package for Meteor!"
});

Package.on_use(function (api) {
  api.use('client');
  api.add_files([
    'lib/dist/snap.svg-min.js',
  ], 'client'
  );
});