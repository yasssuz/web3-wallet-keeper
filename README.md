# Wallet Keeper Web3

## Technologies I used and why:

- Native React with Vite.
  - There was no need for something like Nextjs or Gatsby. Server Rendering wasn't going to change much, as SEO is not important (in this specific case), and because we are not going to fetch any type of data from the server. I choosed Vite over create-react-app as it is a much faster environment.
- State management with Context Api.
  - State management will not be a problem for this app, so I preferred to stick with a more simpler and easier approach than redux, the native Context Api.
- Typescript.
  - I mean who doesn't like Typescript :D
- Emotion.
  - It is better supported with React 18.
- React Router.
  - Basic routing functionalities.
- React Hook Form.
  - It's lighter and more performant than Formik, as it uses the idea of uncontrolled components by default. Also, as I knew that I would have a lot of small forms in this app (specially if we scale), it's important to padronize and centralize the logic between forms.
- Ethers.
  - Smaller bundle-size than Web3.js, and I also really like their Docs.
- Framer Motion.
  - For some fancy animations. I really like the small bundle-size you can achieve using the "m" component.

## What and how I built this.

Still writing this part...

## How to scale.

I didn't want to get out of the scope of the task, so I didn't develop most of the features that came into my mind. But this small app, even being a simple introduction, could actually scale with a few changes. First of all, a real database instead of localStorage, as it is pretty limited in size. Then, add a mobile version (this version doesn't support mobile). Finally, some very cool features, like actually being able to send transactions, check balances of all your ERC-20 and ERC-721 tokens, a history of transactions, etc.

## Where and what I researched.

Still writing this part...
