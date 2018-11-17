# Crypto


This repository contains all the code necessary to run an analytical cryptocurrency portfolio on Google Sheets.

The portfolio code accomplishes 3 main objectives, each increasingly more advanced and reliant on the successful completion of the previous:

**Data Collection** in the function coinUpdate()
- [x] Collects, manipulates, and displays cryptocurrency price data in realtime (live) from exchange APIs for specific analytic use.

![dashboard](/previews/dash1.PNG)

**Graphical Visualization** in the function dailyAvg()
- [x] Measures and records rates of return for cryptocurrency and traditional stock market investments daily for automatic data visualization in the form of historical line graphs in linear and log scales.

![graphs](/previews/dash2.PNG)

**Predictive Modelling** in the function wolframSET() and wolframGET()
- [x] Passes collected historical data to WolframAlpha to create a curve of best fit for the rate of return at any given day. From this equation, we can find the specific day that one will reach a certain goal revenue amount. 

![model](/previews/dash3.PNG)


### Postscript:
This project is a work-in-progress in terms of increasing efficiency and adding functionality.
