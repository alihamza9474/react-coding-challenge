const initialState = () => ({
  nodes: {
    list: [
      {
        url: "https://thawing-springs-53971.herokuapp.com",
        online: false,
        name: "Node 1",
        loading: false,
        // blocks: [
        //   {
        //     id: "001",
        //     description:
        //       "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.",
        //   },
        //   {
        //     id: "002",
        //     description:
        //       "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
        //   },
        //   {
        //     id: "003",
        //     description:
        //       "Maecenas sed diam eget risus varius blandit sit amet non magna.",
        //   },
        //   {
        //     id: "004",
        //     description:
        //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
        //   },
        //   {
        //     id: "005",
        //     description:
        //       "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet.",
        //   },
        //   {
        //     id: "006",
        //     description:
        //       "Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod.",
        //   },
        // ],
      },
      {
        url: "https://secret-lowlands-62331.herokuapp.com",
        online: false,
        name: "Node 2",
        loading: false,
      },
      {
        url: "https://calm-anchorage-82141.herokuapp.com",
        online: false,
        name: "Node 3",
        loading: false,
      },
      {
        url: "http://localhost:3002",
        online: false,
        name: "Node 4",
        loading: false,
      },
    ],
  },
});
export default initialState;
