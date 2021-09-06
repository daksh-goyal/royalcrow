# RoyalCrow

RoyalCrow is an ecommerce platform for clothing. It lets users select the items from the list of available options and even do a mock checkout by doing a mock payment. This project uses [React](https://reactjs.org/) in frontend and [NodeJS](https://nodejs.org/en/) for the backend server. [Firebase](https://firebase.google.com/) is used as the database solution for this project. The project uses [Stripe API](https://stripe.com/docs/api) to enable a mock payment gateway. The project can be tried out [here](https://royalcrow.herokuapp.com/).

## Installation and Set Up

1. Clone this repo

   ```sh
   git clone https://github.com/daksh-goyal/royalcrow.git
   cd royalcrow/
   ```

2. Get the latest version of node for your OS from the official [NodeJS](https://nodejs.org/en/) website.

3. Install all the dependencies

   ```sh
   npm install
   npm install --prefix client
   ```

4. Create a Firebase project and set your config at `client/src/firebase/firebase.utils.js`

5. Replace the `publishableKey` var in `client/src/components/stripe-button/stripe-button.component.jsx` with your publishable stripe key.

6. Create a `.env` file inside the root project directory and set the `STRIPE_SECRET_KEY` to your stripe secret key. 

7. Start the development server

   ```sh
   npm run dev
   ```
## Building and Deploying

1. Generate a production build 

   ```sh
   npm run build --prefix client
   ```
   
## Packages Used

1. [Firebase](https://www.npmjs.com/package/firebase) to interact firebase API
2. [Styled-Components](https://styled-components.com/) for CSS-in-JS.
3. [Redux](https://redux.js.org/) for managing component states.
