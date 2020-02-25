# W209-Final-Project

### Input Data:
* Daily stock price (e.g., amd.csv)
* Earnings Dates (earnings_latest.csv)
* Dividend Dates/Amount (dividends_latest.csv)


### Derived Data:
* Daily price change (y-axis) vs. Date (x-axis)
  - Absolute dollar amount: (Close - Open)
  - Percentage: (Close - Open)/(Open) 
  
* Earnings price change (assuming earnings release after close) vs. Earnings Date (x-axis)
  - Absolute dollar amount: (Open after Event - Close before Event)
  - Percentage: (Open after Event - Close before Event)/(Close before Event)
  
* Dividend price change (assuming dividend after close) vs. Dividend Date (x-axis)
  - Dividend dollar amount
  - Absolute dollar amount: (Open after Event - Close before Event)
  - Percentage: (Open after Event - Close before Event)/(Close before Event)


### To-Do:
- Create derived data for a few stocks.
