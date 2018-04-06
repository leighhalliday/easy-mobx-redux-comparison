import App from "./App";

jest.mock("../services/unsplash");

it("fetches images from unsplash and renders them on mount", done => {
  const wrapper = shallow(<App />);

  setTimeout(() => {
    wrapper.update();

    const state = wrapper.instance().state;
    expect(state.term).toEqual("Mountains");
    expect(state.status).toEqual("done");
    expect(state.images.length).toEqual(1);

    expect(wrapper.find("Image").length).toEqual(1);

    done();
  });
});
