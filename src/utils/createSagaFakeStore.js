const createSagaFakeStore = store => {
    const dispatchedActions = []

    const fakeStore = {
        getState: () => store,
        dispatch: action => dispatchedActions.push(action),
    }

    return { dispatchedActions, fakeStore }
}

export default createSagaFakeStore
