# vue-typescript-template


This project extends VueCLI default typescript template. The goal is to provide a quick and simple vuejs template that includes the common plugins and folder structure needed to build a single-page app of any size or requirement. This allows you to spend less time on project setup and more time on the business logic of the application.


## Features

This template includes the following features out of the box: 
- Automatic Route Discovery (similar to NuxtJS) 
- Automatic Layout System (Similar to NuxtJS)
- REST API modules that are extensible (built with Axios)
- Vue-meta integration 
- TailwindCSS integration (Optional)
- An organized folder structure.


## Usage

Clone the repository into a new folder (e.g "my-app")
```
git clone https://github.com/Doctordrayfocus/vue-typescript-template.git .
```
Change directory
```
cd my-app
```
Install app modules
```
npm install
```

Start VueCLI server
```
npm run serve
```

## Project Folders
The project folders are explained in more detail below..
 
### /public
This folder contains your project assets that must be exposed to the public. These can be images, CSS, or script files, among other things.

### /src
This folder contains the entire codebase for your project. You can add new folders here to expand the project folder structure.

### /src/assets

This section contains assets that are only intended for internal use. These are assets that you want to import into your codebase, such as raw JSON files, build scripts, or CSS files.

### /src/common

The common folder contains scripts that hold global variables that will be used throughout your app. Constant variables for your.env files, for example (such as APP NAME, API KEY, EVN TYPE, and so on) can be parsed and exposed from there.

```ts
export const API_URL = "";
export const RESOURCES_URL = "";
export const APP_URL = "";
```
### /src/components

The component folder looks similar to VueCLI's. It contains your project's components file. You can make separate folders for each domain of your application.
For example, if you are developing an e-commerce app, you should create separate folders for  User, Products, and so on. You can also include a "common" folder that contains components used throughout your application, such as form components like text fields and buttons.


### /src/layouts

Layouts allow you to create multiple layout systems throughout your app. You can have a "Auth" layout for your authentication pages (Login, Register, Forgot Password, and so on), and a "Dashboard" layout for the rest of your application's pages.
The default layout for this project is implemented in 'AppLayoutDefault.vue'. Any page that does not specify a layout inherits this layout.

#### Create a new layout

To make a new layout, place a new file in the layout folder, such as "Sample," and insert `<slot/>` where you want your page data to appear.

```vue
<template>
  <div>
    <!-- Your are free to design the layout to fit your appication -->
    <h2>From Sample Layout</h2>
    <!-- Your page content would be inserted here -->
    <slot />
  </div>
</template>
```
When you add a file, it will be automatically discovered. You can learn more about how the layout discovery system works by clicking [here](https://itnext.io/vue-tricks-smart-layouts-for-vuejs-5c61a472b69b).

#### Use a layout
Add a layout attribute to your vue script to use it in a page.
```vue
<template>
  <div>
    <h1>This is the sample index page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";
export default defineComponent({
  name: "SampleIndexPage",
  layout: "Sample", // add the layout file name here
  setup() {
    useMeta({
      title: "Sample Index Page",
    });
    return {};
  },
});
</script>
```

### /scr/modules

This folder contains your application's "Types" definition. Depending on the size of your project, each domain may have a single file containing all of its type definitions, or a folder containing all of the different type definition files for that domain. Here's an example of a file containing a type definition.
```ts
export type SampleModel = {
  var1: string;
  var2: number[];
};
```

### /src/router

These projects handle routing automatically. The source code for this is contained in the folder. The automatic routing is dependent on the "views" folder and handles routing similarly to NuxtJS. The 'index.vue' file in the views folder is the default (home) route, while all other folders in the file become sub-routes. The routing system also supports dynamic routing. Please read more about how the routing works [here](https://itnext.io/vue-tricks-smart-router-for-vuejs-93c287f46b50).

### /scr/services

This handles Rest API requests. It is Axios-based and includes two extensible modules, `ModelService.ts` and `ReadOnlyService.ts`.
The service modules assume that your application API is organized into separate domains with similar URL prefixes. For example, all API requests for the "Users" domain begin with "/users," whereas those for the "Products" domain begin with "/products."

#### Create a new api service
You can extend either ReadOnlyService or ModelService to create a new api service for each project domain. The ReadOnlyService supports only read api requests (get, fetch, search), whereas the ModelServic supports both read and write api requests (get, fetch, search, update, create, delete). As an example,
```ts
// SampleApiService.ts
import { AxiosResponse } from "axios";
import { ReadOnlyApiService } from "./common/ReadOnlyService";

export class SampleApiService extends ReadOnlyApiService {
  constructor() {
    // this is equivalent to your base_url/sample
    super("sample");
  }

  public async customRequest(
    data = {}
  ): Promise<AxiosResponse<unknown, unknown>> {
    try {
      const response: AxiosResponse = await this.axiosInstance.post(
        this.getUrl() + "/login",
        data
      );

      return response;
    } catch (err) {
      this.handleErrors(err);
      // you can handle request specific error here
      throw err;
    }
  }
}
```
Once the service is created, add it to the global api module in `api.ts`
```ts
import { SampleApiService } from "./SampleApiService";

export const $api = {
  sample: new SampleApiService(),
};
```
To use the api service,
```ts
$api.sample.customRequest().then((response) => {
   // your response here
})
```

### /src/composable

The VueJs composition API is used by default in this project. This folder contains your application's business logic. For larger apps, you can create new folders for each of your app domains, or for smaller ones, you can create a single file to hold your business logic for each domain. Here's an example:
```ts
// sample.ts
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
```

### /src/store

This folder is where you keep track of the state of your application. By default, this project uses vue-store. However, you can switch to Pinia, which is the recommended state management package for Vue 3.
### /src/views

This folder houses all of your app pages. 
> Because the route discovery system relies on the component name to properly route the page, each page must have a unique name.


### /src/App.vue
This is the most important part of your application. In most cases, no changes to the file are required.

### /src/main.ts
This is your Vue application's entry point. You can remove or add new global plugins to your application from this file.

## Facing any issue?
If you have any questions or need more information, please contact me on Twitter [@drayfocus](https://twitter.com/drayfocus) or via email at drayfocus@gmail.com. 

## Happy Building!
