let DefaultState = {
  SelectedItems: {
    Items: [],
    RestrauntName: "",
  },
  User: {},
  FavouruteRestraunts: [],
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

    case "ADD_USER": {
      let NewState = { ...State };
      NewState.User = Action.payload.User;

      return NewState;
    }

    case "ADD_FAV": {
      let NewState = { ...State };
      NewState.FavouruteRestraunts = Action.payload.ID;
      return NewState;
    }

    default:
      return State;
  }
};

export default CartReducer;
