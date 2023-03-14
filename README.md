# [Factorial Challenge](https://github.com/matilore/metrics_dashboard)

<hr/>

### Setup

It requires node 16.19.1 and npm 8.19.3.

Execute the following commands at root level

```bash
npm install
```

### API Seed

```bash
npm run seed
```

### Start application

```bash
npm start
```

### Build application (not required for running in local environment)

```bash
npm run build
```

## API Endpoints

- GET: <http://localhost:8000/api/v1/metrics> Get user metrics
- PUT: <http://localhost:8000/api/v1/metrics/update> Get user metrics

## Client Endpoints

- <http://localhost:3000>

### APP Structure

```bash

.
└── Root/
    ├── packages/
    │   ├── client/
    │   │   ├── src/
    │   │   │   ├── common/
    │   │   │   │   ├── Form/
    │   │   │   │   │   ├── styleComponents/
    │   │   │   │   │   │   ├── index.tsx
    │   │   │   │   │   │   ├── contracts.tsx
    │   │   │   │   │   │   └── styleComponents.tsx
    │   │   │   │   │   ├── contracts.tsx
    │   │   │   │   │   ├── Form.tsx
    │   │   │   │   │   └── index.ts
    │   │   │   │   └── Modal/
    │   │   │   │       ├── styleComponents/
    │   │   │   │       │   ├── index.tsx
    │   │   │   │       │   └── styleComponents.tsx
    │   │   │   │       ├── Modal.tsx
    │   │   │   │       └── index.tsx
    │   │   │   ├── config/
    │   │   │   │   └── axios.tsx
    │   │   │   ├── features/
    │   │   │   │   ├── App/
    │   │   │   │   │   ├── App.tsx
    │   │   │   │   │   └── index.tsx
    │   │   │   │   ├── Dashboard/
    │   │   │   │   │   ├── contracts.tsx
    │   │   │   │   │   ├── constants.tsx
    │   │   │   │   │   ├── styleComponents/
    │   │   │   │   │   │   ├── index.tsx
    │   │   │   │   │   │   └── styleComponents.tsx
    │   │   │   │   │   ├── datamodel/
    │   │   │   │   │   │   ├── api.tsx
    │   │   │   │   │   │   └── model.tsx
    │   │   │   │   │   ├── components/
    │   │   │   │   │   │   ├── AverageSection/
    │   │   │   │   │   │   │   ├── components/
    │   │   │   │   │   │   │   │   ├── Average.tsx
    │   │   │   │   │   │   │   │   ├── Average.test.tsx
    │   │   │   │   │   │   │   │   └── index.tsx
    │   │   │   │   │   │   │   ├── styleComponents/
    │   │   │   │   │   │   │   │   ├── index.tsx
    │   │   │   │   │   │   │   │   └── styleComponents.tsx
    │   │   │   │   │   │   │   ├── AveragesSection.tsx
    │   │   │   │   │   │   │   ├── AveragesSection.test.tsx
    │   │   │   │   │   │   │   ├── contracts.tsx
    │   │   │   │   │   │   │   └── index.tsx
    │   │   │   │   │   │   ├── ChartSection/
    │   │   │   │   │   │   │   ├── index.tsx
    │   │   │   │   │   │   │   └── ChartSection.tsx/
    │   │   │   │   │   │   │       └── components/
    │   │   │   │   │   │   │           ├── Chart/
    │   │   │   │   │   │   │           │   ├── Chart.tsx
    │   │   │   │   │   │   │           │   └── index.tsx
    │   │   │   │   │   │   │           └── MetricSelector/
    │   │   │   │   │   │   │               ├── index.tsx
    │   │   │   │   │   │   │               ├── Selector.test.tsx
    │   │   │   │   │   │   │               ├── Selector.tsx
    │   │   │   │   │   │   │               └── styleComponents.tsx
    │   │   │   │   │   │   └── HeaderSection/
    │   │   │   │   │   │       ├── styledComponents/
    │   │   │   │   │   │       │   └── index.tsx
    │   │   │   │   │   │       ├── HeaderSection.tsx
    │   │   │   │   │   │       └── index.tsx
    │   │   │   │   │   ├── Dashboard.tsx
    │   │   │   │   │   └── index.tsx
    │   │   │   │   ├── helpers/
    │   │   │   │   │   ├── index.tsx
    │   │   │   │   │   └── helpers.test.tsx
    │   │   │   │   ├── styles/
    │   │   │   │   │   └── constants/
    │   │   │   │   │       ├── colors.tsx
    │   │   │   │   │       ├── fontSizes.tsx
    │   │   │   │   │       └── index.tsx
    │   │   │   │   ├── globalStyles.tsx
    │   │   │   │   ├── helmet.tsx
    │   │   │   │   └── theme.tsx
    │   │   │   ├── index.html
    │   │   │   └── index.ts
    │   │   ├── customTypes.d.ts
    │   │   ├── jest.config.js
    │   │   ├── package.json
    │   │   ├── tsconfig.json
    │   │   ├── webpack.common.js
    │   │   ├── webpack.dev.js
    │   │   └── webpack.prod.js
    │   └── api/
    │       ├── src/
    │       │   ├── @types/
    │       │   │   └── global.d.ts
    │       │   ├── bin/
    │       │   │   └── seeds.ts
    │       │   ├── contracts/
    │       │   │   ├── userMetrics.ts
    │       │   │   └── user.ts
    │       │   ├── controllers/
    │       │   │   ├── helpers.ts
    │       │   │   ├── index.ts
    │       │   │   └── userMetricsController.ts
    │       │   ├── dataSources/
    │       │   │   ├── index.ts
    │       │   │   └── mongoose.ts
    │       │   ├── index.ts
    │       │   ├── middlewares/
    │       │   │   ├── attachTimestamps.ts
    │       │   │   ├── index.ts
    │       │   │   ├── notFoundMiddleware.ts
    │       │   │   └── corsMiddleware.ts
    │       │   ├── models/
    │       │   │   ├── index.ts
    │       │   │   ├── user.ts
    │       │   │   └── userMetrics.ts
    │       │   ├── routes/
    │       │   │   ├── index.ts
    │       │   │   └── metrics.ts
    │       │   ├── services/
    │       │   │   ├── index.ts
    │       │   │   ├── userService.ts
    │       │   │   └── userMetricsService.ts
    │       │   └── utils/
    │       │       └── dates.ts
    │       ├── .env
    │       ├── .eslintrc
    │       ├── .gitignore
    │       ├── .prettierrc
    │       ├── package.json
    │       └── tsconfig.json
    ├── README.md
    ├── LICENSE
    ├── package.json
    └── package-lock.json
```

## Main libraries used

#### Client

- React
- Webpack
- Typescript
- Jest
- testing-library/react
- React awesome styledgrid
- React chartjs 2
- React hook form
- Styled components

#### Api

- Express
- Typescript
- Mongoose

### Technical Considerations

- _I LEFT THE .ENV FILE IN THIS SPECIFIC CASE IN ORDER TO ALLOW THE EASY INSTALL AND USE BY THE REVIEWERS WITHOUT THE NECESSITY OF USING THIRD PARTIES SECRETS MANAGEMENT TOOLS_
- I decided to use npm workspaces in order to make easier and elegant the install and execution of the 2 different packages.
- I used a different file structure between api and client because the nature of React make personally easier to manage and segment files per feature and not so much by functionality. In the API you will find main folder encapsuling services, models... in react you could find a datamodel inside the Dashboard main folder. Styles components also appear in different folder hierarchy based on the specificity of its use.
- I tested few components in the client but i deprioritized the testing of the api.
- I used mongoose to increase rigidity in terms of schema for MongoDB.
- In order to reduce complexity I decided to have one single User in the DB, all metrics will be related to that user. At the same time I decided to create the User collection in order to reflect some scalability for an immaginary extension of the app in terms of funtionality.
- There is 1 main collection 'usermetrics', this is unique for each user (1 to 1 relation) but it includes 3 different categories of metrics dataseries. So 1 has many metrics divided by metric type and the type of metrics could be expanded in the future.
- I didn't use any route package or redux because the product didn't required it.
- I created a PUT route method because in reality the creation of user metrics is donde by the seed file. What the user is doing by interacting is updating the resource.
- The client uses relative paths for http requests, I added a proxy in the dev server in order to manage this case. The build script is generating an output of client + api in _root/dist_

### Product Considerations

- The main idea behind the metrics dashboard is that the user should upload 1 metric for each category per day. Adding more than 1 metric of the same type per day would create misleading information. For the purpose of allowing experimenting and using the app I didn't implement any frontend or backend validation to limit the number of post.
