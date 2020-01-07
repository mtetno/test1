const rules = {
  visitor: {
    static: ['inventory:list', 'home-page:visit', 'visitor-profile:visit'],
  },
  vendor: {
    static: [
      'inventory:list',
      'inventory:create',
      'users:getSelf',
      'home-page:visit',
      'dashboard-page:visit',
    ],
    dynamic: {
      'inventory:edit': ({userId, inventoryOwnerId}) => {
        if (!userId || !inventoryOwnerId) return false
        return userId === inventoryOwnerId
      },
    },
  },
  admin: {
    static: [
      'inventory:list',
      'inventory:create',
      'inventory:edit',
      'inventory:delete',
      'users:get',
      'users:getSelf',
      'home-page:visit',
      'dashboard-page:visit',
    ],
  },
}

export default rules
