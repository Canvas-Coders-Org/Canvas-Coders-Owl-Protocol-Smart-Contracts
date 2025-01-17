![CC_Final_Logo](https://user-images.githubusercontent.com/100870737/229332203-693d9f52-c9bd-4078-8413-83f44ec00f51.PNG)

## CANVAS CODERS
Unleash Your Creativity Through Art And Code

Canvas Coders is an interactive educational platform that is transforming the learning experience with project-based learning, based on art and coding fundamentals, real-time peer-to-peer learning, and incentivizing progress web 3 rewards. This allows users to pair programs with other learners, as they work together to complete artistic coding challenges. As the learners progress, they are awarded proof-of-knowledge NFTs. These are verifiable on-chain and offer a unique opportunity for users to boost their resumes through verified credentials. Also, this provides an easy, novel, and convenient way to demonstrate knowledge to partner educational institutions and employment partners.

## TECH STACK
BlockFuse leveraged the following technologies:
* Owl Protocol
* Polygon
* IPFS
* nextjs
* solidity
* bash
* codeandbox
* css
* git
* github
* gitpod
* html
* javascript
* node.js
* p5.js
* react
* shell
* typescript
* vercel for CI/CD
* checkly for QA

## SUBMISSION DETAILS
* [Video Demo](https://www.youtube.com/watch?v=oVL6sk8FROA)
* [Devpost](https://devpost.com/software/canvas-coders-unleash-your-creativity-through-art-and-code)


## NFT DEMO
![Canvas_Coders_Gifs](https://user-images.githubusercontent.com/100870737/229333619-4e163e72-496f-450b-9982-b0dc8d586a09.gif)
### Displayed NFT: Tech Tyro (For Beginners on the Dev Track)

## NFT CATEGORIES
* Creative Track
  * Dabbling Doodler
  * Paint Posse
  * Masterpiece Maker
* Dev Track
  * Tech Tyro
  * Hustling Hacker
  * Tech Titan



## NFT DEPLOYMENT DETAILS
* https://discord.com/channels/@me/1091421894143660162/1091939913991204956
* https://discord.com/channels/@me/1091421894143660162/1091940063014821998
* https://discord.com/channels/@me/1091421894143660162/1091940197240934450
* https://discord.com/channels/@me/1091421894143660162/1091940340044398663
* https://mumbai.polygonscan.com/address/0xcd2ada00c48a27faa5cc67f9a1ed55b89ddf7f77
* https://discord.com/channels/@me/1091421894143660162/1091940533540225186


## DEVELOPER INSTRUCTIONS FOR "Canvas_Coders_Owl_Protocol_Smart_Contracts"
A starter repository to deploy NFT collection using Owl Protocol's [CLI](https://github.com/owlprotocol/owlprotocol/tree/main/packages/cli)

See our [docs](http://localhost:3000/contracts/getting-started/cli) on how to get started with our CLI

## Getting started

### Requirements
* Node.js v16 or v18
* PNPM (NPM is fine too)
* Owl Protocol CLI

### Install
* Install the CLI if you haven't already:
```bash
pnpm install -g @owlprotocol/nft-sdk-cli
```

* Install node modules:
```bash
pnpm install
```

### Environment variables
* `NETWORK`: the network settings to use in the `networks.json` file.
    * Note: you can add more network settings in that file.
* `HD_WALLET_MNEMONIC`: the mnemonic to use for blockchain interactions with the CLI.
* `PRIVATE_KEY_0`: instead of `HD_WALLET_MNEMONIC`, you can directly specify a private key.

Note: by default, the `owl-cli` looks at `.env.development` for environment variables if it exists.

### Project setup
Create a folder under `projects`, say `my-project`:

```bash
mkdir projects/my-project
```

Create your `traits.ts` and `collections.ts` files in that folder.

## Compiling projects
Run the `build` script to compile TypeScript files in the `projects` foldfer into JavaScript files.

```bash
pnpm run build
```

### Run Ganache or configure the network you want to use

Running Ganache locally is easy:
```bash
pnpm i -g ganache
ganache --wallet.mnemonic '<MY MNEMONIC>'
```

This must match the `HD_WALLET_MNEMONIC` in the `.env.development` file.

## Generating a collection JSON Schema
```bash
owl-cli generateJsonSchema collections.js --projectFolder=projects/<my-project>
```

## Continue with our docs at: 

[https://docs.owlprotocol.xyz/contracts](https://docs.owlprotocol.xyz/contracts)


## NEXT STEPS & UPDATES
Canvas Coders plans to continue expanding its offerings and providing a personalized learning experience that helps early learners discover and adopt the tools to become lifelong learners of ART + STEAM. In the future, we hope to partner with schools and community centers to provide access to our platform to those who may not have the means to afford traditional art and coding education. We also plan to integrate emerging technologies such as virtual and augmented reality to provide an even more immersive learning experience.

On the technical side, we plan to continue to build with Owl Protocol and explore integrations with other Web 3 Tools, such as Lit Protocol for gated content based on NFTs held by users.
