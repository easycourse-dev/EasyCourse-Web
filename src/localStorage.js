export const loadRouteState = () => {
  try {
    const serializedState = localStorage.getItem('route-state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}

export const saveRouteState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('route-state', serializedState)
  } catch (error) {
    // Ignore write errors
    console.log(error)
  }
}
