module.exports = {
  scenarios: [
    {
      name: 'ember-1.8',
      dependencies: {
        ember: '~1.8.0',
        handlebars: '~1.3.0',
        'ember-data': '1.0.0-beta.11',
      }
    },
    {
      name: 'ember-1.9',
      dependencies: {
        ember: '~1.9.0',
        handlebars: '~2.0.0',
        'ember-data': '1.0.0-beta.11'
      }
    },
    {
      name: 'ember-1.10',
      dependencies: {
        ember: '~1.10.0'
      }
    },
    {
      name: 'ember-1.11',
      dependencies: {
        ember: '~1.11.0'
      }
    },
    {
      name: 'ember-1.12',
      dependencies: {
        ember: '~1.12.0'
      }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    }
  ]
};
