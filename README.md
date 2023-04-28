# money-transfer

Cash-Flow is a digital platform that facilitates the electronic transfer of funds, enabling users to easily send, receive, and manage money online. It offers a quick and convenient solution for transferring funds between individuals or businesses, domestically or internationally.

## Backend

## Technology:
1. Backend: Ruby on Rails
2. Database: PostgreSQL

## Models:
1. Admin
    -Users
    -Transactions
    -Analytics
    -Trends
2. User
    -Account
    -Analytics
    -Profile
    -Wallet
    -Beneficiaries
    -Transactions.

## Controllers:
1. Admin
-The admin can create an account for himself, login and logout. The admin can also perform CRUD operations.
- The admin can View a summary of all transactions made by users
- The admin can View analytics of all user wallet accounts
- The admin can View trends in terms of profits made by a transaction so as to make future decisions.
2. User
- The user can Create an account as a new user
- The user can Login to the platform
- The user can View analytics about his/ her wallet account
- The user can View their profile & Update profile details
- The user can Add funds to their existing wallet account
- The user can Add beneficiaries as contacts to their account so as to be able to send money them
- The user can Send money to existing beneficiaries within their accounts
- The user can View a summary of transactions made by them within their account

## Routes:
1. Admin
    1. Login - post '/login', to: 'admin#authenticate'
    2. Logout - delete '/logout', to: 'admin#destroy'
    3. Create Account - post '/register', to: 'users#create'
    4. Read Account - get '/user', to: 'users#show'
    5. Read Transactions - get '/transactions', to: 'transactions#index'
    6. View analytics of all user wallet accounts: get '/wallets', to: 'wallets#index'
    7. To view trends - get '/analytics/profits', to: 'analytics#profits'
2. Users
    1. To create an account as a new user: post '/register', to: 'users#create'
    2. To login to the platform:post '/login', to: 'sessions#create'
    3. To view analytics about his/her wallet account: get '/wallets/analytics', to: 'wallets#analytics'
    4. To view their profile: get '/users/:id', to: 'users#show'
    5. To update profile details: patch '/users/:id', to: 'users#update'
    6. To add funds to their existing wallet account: post '/wallets/:id/add_funds', to: 'wallets#add_funds'
    7. To add beneficiaries as contacts to their account so as to be able to send them money: post '/beneficiaries', to: 'beneficiaries#create'
    8. To send money to existing beneficiaries within their accounts: post '/transactions', to: 'transactions#create'
    9. To view a summary of transactions made by them within their account: get '/transactions', to: 'transactions#index'
## Testing the routes of the API on Postman:

##  Best Alternative:

# Use the deployed link:
    https://cashflow-1rf2.onrender.com/

# Testing the routes:
1. Admin
    1. Login- post request: https://cashflow-1rf2.onrender.com/login
    2. Logout- delete request: https://cashflow-1rf2.onrender.com/logout
    3. Create Account- post request: https://cashflow-1rf2.onrender.com/register
    4. Read Account- get request: https://cashflow-1rf2.onrender.com/user
    5. Read Transactions- get request- https://cashflow-1rf2.onrender.com/transactions
    6. View analytics of all user wallet accounts- get request: https://cashflow-1rf2.onrender.com/wallets
    7. To view trends- get request: https://cashflow-1rf2.onrender.com/analytics/profits
2. Users
    1. To create an account as a new user- post request: https://cashflow-1rf2.onrender.com/register
    2. To login to the platform- post request: https://cashflow-1rf2.onrender.com/login
    3. To view analytics about his/her wallet account- get request: https://cashflow-1rf2.onrender.com/wallets/analytics
    4. To view their profile- get request: https://cashflow-1rf2.onrender.com/users/:id
    5. To update profile details- patch request: https://cashflow-1rf2.onrender.com/users/:id
    6. To add funds to their existing wallet account-post request: https://cashflow-1rf2.onrender.com/wallets/:id/add_funds
    7. To add beneficiaries as contacts to their account so as to be able to send them money-post request: https://cashflow-1rf2.onrender.com/beneficiaries
    8. To send money to existing beneficiaries within their accounts- post request: https://cashflow-1rf2.onrender.com/transactions
    9. To view a summary of transactions made by them within their account- get request: https://cashflow-1rf2.onrender.com/transactions

## Conclusion:
- This backend uses Ruby on Rails to serve some functions such as:
    1. Receiving and processing requests from the frontend or clients
    2. Retrieving and storing data in databases
    3. Running business logic and algorithms to process data
    4. Generating responses to send back to clients
    5. Handling user authentication and security
    6. Managing server-side operations such as database management, server configuration, and system-level tasks.

## Backend Developers:
1. Roy Ngei: Github username: RoyZiO
2. Brian Wahungu: Github username: BrianWahungu
3. Moses Ochacha: Github username: Mosesochacha

## License:
MIT License
