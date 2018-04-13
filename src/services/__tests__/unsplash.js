import mockAxios from "axios";
import unsplash from "../unsplash";

it("calls axios and returns images", async () => {
  // setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        results: ["cute.jpg"]
      }
    })
  );

  // work
  const images = await unsplash("kittens");

  // assertions / expects
  expect(images).toEqual(["cute.jpg"]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
        query: "kittens"
      }
    }
  );
});
