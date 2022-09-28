# Wallet Keeper Web3

#### Deploy link

- https://web3-wallet-keeper-binance.vercel.app/dashboard

## Technologies I used and why:

- Native React with CRA.
  - There was no need for something like Nextjs or Gatsby. Server Rendering wasn't going to change much, as SEO is not important (in this specific case), and because we are not going to fetch any type of data from the server, so no need for SSR, ISR, etc. Also, this application isn't image heavy, so there is no need for something similar to Next-Image.
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
- Cypress
  - E2E testing in this app is something necessary. We don't want to have a production bug where our main features suddently stopped working.

## Tests.

The 3 main features, which are wallet creation, wallet import and wallet recovery, are all end-to-end tested using cypress. Unfortunately, because of my workload this week, and also because of my somewhat limited experience with unit/integration testing, I wasn't able to deeply test these components. However, I'm very interested in this topic, and I would love to learn it with you guys.

## Security.

- All the wallets are encrypted moments after being generated or imported. Even if the wallets are saved in localStorage, the only way someone could access it's private keys or sign transactions with it, is if it has the password (which isn't stored anywhere) to decrypt the wallet. Also, this project is using infura to initialize the providers, and the API key is being stored as an environment variable on vercel.

## How to scale.

I didn't want to get out of the scope of the task, so I didn't develop most of the features that came into my mind. But this small app, even being a simple introduction, could actually scale with a few changes. First of all, a real database instead of localStorage, as it is pretty limited in size. Then, add a mobile version (this version doesn't support mobile). Finally, some very cool features, like actually being able to send transactions, check balances of all your ERC-20 and ERC-721 tokens, a history of transactions, adding custom networks (this one I was actually developing), etc.

I hope that there aren't any bugs :D

                _
                \`*-.
                 )  _`-.
                .  : `. .
                : _   '  \
                ; *` _.   `*-._
                `-.-'          `-.
                  ;       `       `.
                  :.       .        \
                  . \  .   :   .-'   .
                  '  `+.;  ;  '      :
                  :  '  |    ;       ;-.
                  ; '   : :`-:     _.`* ;
         [bug] .*' /  .*' ; .*`- +'  `*'
               `*-*   `*-*  `*-*'
