import { uiActions } from './ui-slice';

export const sendCartData = cartData => async dispatch => {
  dispatch(
    uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    })
  );

  const sendRequest = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_FIREBASE_URL}/cart.json`,
      {
        method: 'PUT',
        body: JSON.stringify(cartData),
      }
    );

    if (!response.ok) {
      throw new Error('Sending cart data failed!');
    }
  };

  try {
    await sendRequest();
    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      })
    );
  } catch {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      })
    );
  }
};
