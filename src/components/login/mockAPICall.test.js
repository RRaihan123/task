import axios from "axios";
import apiCall from '../../api/apiCall';

jest.mock('axios'); // mocking axios

it("Mocking API call using Axios", async () => {
  const response = {  // The response that has been mocked
    "data" : 
              [{
                 "body" : "quia et suscipit et architecto",
                 "id" : 87,
                 "title" : "sunt aut",
                 "userId" : 1
              }]
  };
  axios.get.mockResolvedValue(response); // returns a function which ensures that the above response is the expected response
  const result = await apiCall();
  expect(result).toEqual(87); // 87 is the expectation as "id" in the above response is 87
});

