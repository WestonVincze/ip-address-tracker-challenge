# IP Address Tracker Challenge

## About

This project is a challenge for Frontend Mentor - it displays various geographic data with a map and marker based on the provided IP address or domain. If none are provided, the client device's IP is used.

[Challenge Instructions](./original-instructions.md)

Design files can be found in `design` directory

## Purpose

The primary purpose of this project was for me to experiment with tailwind. Although I prefer writing my own CSS, I recognize the potential performance benefits of CSS-in-JS and the importance of knowing widely used libraries like tailwind.

## Getting Started

### API

First, you'll need to have a valid API key for `ipdata`. You can set up an account for free on [their website](https://ipdata.co/).

Create a `.env.local` file and add the variable `NEXT_IPDATA_API_KEY` with your API key as the value.

### Mock Data (Optional)

If no API key is found, mock data will be used, which can be found in `app/api/ipData/mockResponse.json`

** You can always return mock data by adding the query parameter `useMock=true` to the `ipData` request. Or by adding the environment variable `NEXT_USEMOCK=true` to `.env.local` **

### Dependencies

Install dependencies with npm:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Credits

Developed by [Weston Vincze](https://westonvincze.com)

Challenge: [Frontend Mentor](https://www.frontendmentor.io/)

IP data: [ipdata](https://ipdata.co/)

Map: [LeafletJS](https://leafletjs.com/)
