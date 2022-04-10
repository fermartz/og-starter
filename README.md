<img src="https://github.com/ferMartz/og-starter/blob/main/frontend/assets/og-starter.png" />

# IC Firestarter

Modern starter and mini playground for the Internet Computer powered by [Create IC APP](https://github.com/MioQuispe/create-ic-app), [ViteJS](https://vitejs.dev/), [ReactJS](https://reactjs.org/), & [Material UI](https://mui.com/)

## Requirements

- Install the following version of the DFINITY Canister SDK

```
DFX_VERSION=0.9.2 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

- NodeJS >=16.0.0

## Get Started

With Git:

```
git clone https://github.com/ferMartz/og-starter.git
```

With NPM:

```
cd og-starter
npm install
```

Start the backend

```
dfx start --background
dfx deploy
```

Start the frontend

```
npm run dev
```

Thats it! Play around on your local Internet Computer.
