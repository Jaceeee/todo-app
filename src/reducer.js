import uuid from 'uuid'

export const types = {
  ADD: "ADD",
  REMOVE: "REMOVE"
};

export const actionCreators = {
  add: item => {
    return { type: types.ADD, payload: item }
  },
  remove: item => {
    return { type: types.REMOVE, payload: item }
  }
};


const initialState = {
  projects: [
    {
      id: uuid.v4(),
      title: 'Business Website',
      category: 'Web Design'
    },
    {
      id: uuid.v4(),
      title: 'Social App',
      category: 'Mobile Development'
    },
    {
      id: uuid.v4(),
      title: 'Ecommerce Shopping Cart',
      category: 'Web Development'
    }
  ]
}

export const reducer = (state = initialState, action) => {
  const { projects } = state;
  const { type, payload } = action;
  switch (type) {
    case types.ADD: {
      payload.id == uuid.v4()
      return {
        ...state,
        projects: [payload, ...projects]
      }
      break;
    }
    case type.REMOVE: {
      return {
        ...state,
        projects: projects.filter((project) =>project.id !== payload)
      }
    }
  }
  return state;
}
