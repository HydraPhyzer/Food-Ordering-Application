let DefaultState = {
  SelectedItems: {
    Items: [],
    RestrauntName: "",
  },
};
let CartReducer = (State = DefaultState, Action) => {
  switch (Action.type) {
    case "ADD_TO_CART": {
      let NewState = { ...State };
      if (Action.payload.CheckBoxValue) {
        console.log(
          "Added to Cart",
          Action.payload.CheckBoxValue,
          Action.payload.RestrauntName
        );
        NewState.SelectedItems = {
          Items: [...NewState.SelectedItems.Items, Action.payload],
          RestrauntName: Action.payload.RestrauntName,
        };
      } else {
        console.log("Removed From Cart", Action.payload.CheckBoxValue);
        NewState.SelectedItems = {
          Items: [
            ...NewState.SelectedItems.Items.filter(
              (Item) => Item.title !== Action.payload.title
            ),
          ],
          RestrauntName: Action.payload.RestrauntName,
        };
      }
      return NewState;
    }

    default:
      return State;
  }
};

export default CartReducer;
