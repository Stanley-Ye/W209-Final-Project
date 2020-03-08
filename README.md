# W209-Final-Project

### To-Do:
* Create derived data for a few stocks.
* Annotate a regular stock chart with event dates (e.g., earnings, dividends).
  - Start by building chart in Jupyter notebook and then move to Vis tool (e.g., D3, Tableau).
* Import data set from Twitter for INTC for some specific dates surrounding earning and dividents.
* Create Tableau visuals to join the stock price to twitter action.
  
### Vis Ideas:
* Calender vis to track user-selected past/future key dates (e.g., earnings, dividends, revised revenue forecast) for user-selected stocks.
- Stock chart showing absolute value of daily % changes with color encoding (e.g., red/black = positive/negative) to denote direction.

### Use Cases:
* Plot Price Change (Next_Open - Current_Close) vs Date
  - Label dates of earnings releases, to demonstrate effect on Price Change.
  - Answer Questions:
    * What percentage of earnings releases results in positive Price Change?
    * What is the average amount (%) of positive Price Changes, post-earnings?  Repeat for negative Price Changes.
* Plot Price Change (Current_Close - Current_Open) vs Date
  - Answer Questions:
    * What percentage of days result in positive Price Change?
    * What is the daily average amount (%) of positive Price Changes?
* Plot Price Change (Current_Close - Current_Open) vs Tweets
  - Answes Questions:
    * How did the stock price move based on tweets around the earnings/divident date?
    * How does change in volumn correspond to social media conversation?

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
