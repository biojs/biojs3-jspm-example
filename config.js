System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.6.17",
    "babel-runtime": "npm:babel-runtime@5.6.17",
    "bio-container": "github:biojs/bio-container@0.0.4",
    "bio-element": "github:biojs/bio-element@0.0.2",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.13",
    "html": "github:Hypercubed/systemjs-plugin-html@master",
    "lodash": "github:lodash/lodash@3.10.0",
    "polymer": "github:greenify/polymer-js@1.0.5",
    "text": "github:systemjs/plugin-text@0.0.2",
    "webcomponentsjs-lite": "github:webcomponents/webcomponentsjs@0.7.2",
    "github:biojs/bio-container@0.0.4": {
      "bio-element": "github:biojs/bio-element@0.0.2"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.6.17": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

