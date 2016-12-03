# Siphon
Siphonjs is an easy-to-use data extraction library for Nodejs designed to work at scale.

## Features

- Intuitive and readable API
- Rotating proxies to enable higher volume searches 
- Clustered servers for improved performance and error handling
- Regex-enabled searching
- Custom number of retries
- Custom runtime interval
- Direct database storage
- Pre-configured Selenium Web Driver for advanced DOM manipulation
- Pre-configured Redis access for scaling to multiple servers
- Lightweight with no large required dependencies

## Install
```
$ npm install --save siphonjs
```

## Usage

Collect 1000 temperatures in a matter of seconds!

```
const siphon = require('siphonjs');

const urls = [];

for(let i = 90025; i < 91025; i++) {
  urls.push(`https://www.wunderground.com/cgi-bin/findweather/getForecast?query=${i}`);
}

siphon()
.setURLs(urls)
.find(/[0-9]{2}\.[0-9]/)
.run()
```

## Required Dependencies

- `request` for http request handling

## Optional Dependencies

- `redis` for parallel processing with multiple servers
- `selenium-webdriver` for jobs requiring full client-side rendering

# API

Using Siphon is simple! After requiring the Siphon module, simply invoke it and chain as many methods as you'd like. Execute with .run().

### .get

### .find

### .setURLS

### .retries

### .store

### .setProxies

### .setInterval

### .selenium

### .run

## Team

![Image of Will](https://avatars0.githubusercontent.com/u/7759384?v=3&s=150)
![Image of George](https://avatars3.githubusercontent.com/u/18508195?v=3&s=150)
![Image of Soo](https://avatars1.githubusercontent.com/u/15530782?v=3&s=150)

## License

MIT


