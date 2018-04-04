import Form from "./Form";

it("triggers calls fetchImages on form submission", () => {
  const spy = sinon.spy();
  const wrapper = mount(<Form fetchImages={spy} />);

  wrapper
    .find("form")
    .first()
    .simulate("submit");

  expect(spy.calledOnce).toBe(true);
});
