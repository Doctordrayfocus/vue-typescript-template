import { SampleModel } from "./../modules/sample";
import { $api } from "@/services/api";
import { ref } from "vue";

const sampleApiData = ref<SampleModel>();

// sanple get request
const sampleGetRequest = (resourceId: string): void => {
  $api.sample.get(resourceId).then((response) => {
    sampleApiData.value = response.data;
  });
};

// sample fetch
const sampleFetchRequest = (): void => {
  $api.sample.fetch().then((response) => {
    console.log(response);
  });
};

// sample search
const sampleSearchRequest = (query: string): void => {
  $api.sample.search(query).then((response) => {
    console.log(response);
  });
};

// sample post

// This will only work if the sampleApiService extends the ModelService
// The ModelService is for read and write(Post, Put, Delete) api requests

// const samplePostRequest = (data = {}) => {
//   $api.sample.post(data).then((response) => {
//     console.log(response);
//   });
// };

export const useSample = {
  sampleGetRequest,
  sampleFetchRequest,
  sampleSearchRequest,
};
