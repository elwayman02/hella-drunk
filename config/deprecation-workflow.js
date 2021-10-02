self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
  workflow: [
    {
      handler: 'silence',
      matchId: 'deprecated-run-loop-and-computed-dot-access',
    },
    { handler: 'silence', matchId: 'ember-global' },
    { handler: 'silence', matchId: 'ember-source.deprecation-without-for' },
    { handler: 'silence', matchId: 'ember-source.deprecation-without-since' },
    {
      handler: 'silence',
      matchId: 'ember.built-in-components.legacy-attribute-arguments',
    },
    { handler: 'silence', matchId: 'empress-blog:content-model-author' },
    { handler: 'silence', matchId: 'implicit-injections' },
    { handler: 'silence', matchId: 'manager-capabilities.modifiers-3-13' },
    { handler: 'silence', matchId: 'old-deprecate-method-paths' },
    { handler: 'silence', matchId: 'this-property-fallback' },
  ],
};
