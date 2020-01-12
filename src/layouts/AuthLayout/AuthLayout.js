import rules from '../../routes/rbac-rules'

const check = (inputRules, role, action, data) => {
  const permissions = inputRules[role]
  if (!permissions) {
    // role is not present in the inputRules
    return false
  }

  const staticPermissions = permissions.static

  if (staticPermissions && staticPermissions.includes(action)) {
    // static rule not provided for action
    return true
  }

  const dynamicPermissions = permissions.dynamic

  if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions[action]
    if (!permissionCondition) {
      // dynamic rule not provided for action
      return false
    }

    return permissionCondition(data)
  }
  return false
}

const ValidateUserAccess = (props) =>
  check(rules, props.role, props.perform, props.data) ? props.yes() : props.no()

ValidateUserAccess.defaultProps = {
  yes: () => null,
  no: () => null,
}

export default ValidateUserAccess
