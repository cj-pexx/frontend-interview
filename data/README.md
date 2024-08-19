## Coding Task: Fetch Current City Weather Information

### Problem Statement
You are provided with the following three APIs:

1. **Get Current IP**:
   - `https://api.ipify.org` or `https://ipinfo.io/ip`

2. **IP to City Code API**:
   - This API allows you to retrieve the city code based on the current IP.
   - `https://restapi.amap.com/v3/ip?ip=${ipcode}&key=2c017fc4c0b5629c24d5167a291cd1d3`

3. **City Code to Weather API**:
   - This API provides the current day's weather information based on the city code.
   - `https://restapi.amap.com/v3/weather/weatherInfo?city=${citycode}&key=2c017fc4c0b5629c24d5167a291cd1d3`

### Task
Write a function that outputs the current weather information for the current city.


### Recommended Setup

We **strongly recommend** using `pnpm` to run your code. It offers better performance and disk space efficiency compared to other package managers.

To run your code, you can use the following command:

```bash
pnpm ts-node main.ts
