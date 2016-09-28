import stylelint from 'stylelint'

export const ruleName = 'plugin/no-z-index'
export const messages = stylelint.utils.ruleMessages(ruleName, {
  default: () => {
    return 'You should not use numeric values for z-index.'
  }
})

module.exports = stylelint.createPlugin(ruleName, (options) => (cssRoot, result) => {
  cssRoot.walkDecls('z-index', (decl) => {
    // Check if the z-index value is one of the following non-numeric values
    const allowedValue = ['auto', 'inherit', 'initial', 'unset']
    const value = decl.value
    if (allowedValue.indexOf(value.toLowerCase()) >= 0) return

    const cssVarRegex = /var\(.*\)/
    if (cssVarRegex.test(value)) return

    stylelint.utils.report({
      ruleName: ruleName,
      result: result,
      node: decl,
      message: messages.default()
    })
  })
})

module.exports.ruleName = ruleName
module.exports.messages = messages
