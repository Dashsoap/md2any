const test = require('ava')
const md2Ant = require('..')

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => md2Ant(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(md2Ant('w'), 'w@zce.me')
  t.is(md2Ant('w', { host: 'wedn.net' }), 'w@wedn.net')
})
