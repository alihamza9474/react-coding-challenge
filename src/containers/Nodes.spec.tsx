import React from "react";
import { mount } from "enzyme";
import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";
import ConnectedNodes from "./Nodes";
import Node from "../components/Node";
import { checkNodesStatus } from "../reducers/nodes";

describe("<Nodes />", () => {
  const nodes = {
    list: [
      {
        url: "https://thawing-springs-53971.herokuapp.com",
        online: false,
        name: "Node 1",
        loading: false,
      },
      {
        url: "https://secret-lowlands-62331.herokuapp.com",
        online: false,
        name: "Node 2",
        loading: false,
      },
    ],
  };

  let store: MockStoreEnhanced<unknown, {}>;

  function setup(): JSX.Element {
    const middlewares = [thunk];
    store = configureMockStore(middlewares)({ nodes });
    return (
      <Provider store={store}>
        <ConnectedNodes />
      </Provider>
    );
  }

  afterEach(() => {
    store.clearActions();
  });

  it("should contain <Node />", () => {
    const wrapper = mount(setup());

    expect(wrapper.find(Node).length).toEqual(2);
    expect(store.getActions()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          meta: expect.objectContaining({ arg: nodes.list }),
          type: checkNodesStatus.pending.type,
        }),
      ])
    );
  });

  it("should match snapshot", () => {
    const component = create(setup());
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
