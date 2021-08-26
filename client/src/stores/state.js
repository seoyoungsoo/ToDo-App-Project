const initState = () => {
  let store = {};

  const getState = () => {
    const data = JSON.parse(JSON.stringify(store));
    return data;
  };

  const setState = (state) => {
    store = state;
  };

  return { getState, setState };
};

export default initState;
