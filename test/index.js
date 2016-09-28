var test = require('stylelint-test-rule-tape')
var fn = require('../')

test(fn.rule, {
  ruleName: fn.ruleName,
  skipBasicChecks: true,

  accept: [
    {
      code: 'a { z-index: auto; }'
    },
    {
      code: 'a { z-index: inherit; }'
    },
    {
      code: 'a { z-index: initial; }'
    },
    {
      code: 'a { z-index: unset; }'
    },
    {
      code: ':root { --z-index : 1; } a { z-index: var(--z-index); }'
    }
  ],
  reject: [
    {
      code: 'a { z-index: -10; }',
      message: fn.messages.default()
    },
    {
      code: 'a { z-index: 0; }',
      message: fn.messages.default()
    },
    {
      code: 'a { z-index: 999; }',
      message: fn.messages.default()
    }
  ]
})
