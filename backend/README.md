# CASHFLOW

 + cashFlow is a digital platform that facilitates the electronic transfer of funds, enabling users to receive, send, top up, and manage their funds efficiently. The application offers a quick and convenient solution for transferring funds between individuals or businesses, domestically or internationally.

## BACKEND
- Below is the ERD diagram to demonstrate the database models and associations:

       ![Alt text](CashFLow_18%20April.png)

  + The backend API was developed to enable both user features and administrative features, with the database including various routes for each type of user. 

## Getting started

- The following technologies were employed in the creation of the API:

    + Ruby
    + Rails
    + ActiveRecord
    + Postgresql (database)
    + Postman
    + Twillo
    + Render

## Minimum Viable Product (API Features in Models and Controllers)

### Users
+ The user should be able to: 

 - Create an account as a new user 
 - Login to the platform 
 - View analytics about his/ her wallet account
 - View their profile & Update profile details
 - Add funds to their existing wallet account
 - Add beneficiaries as contacts to their account so as to be able to send money them
 - Send money to existing beneficiaries within their accounts.
 - View a summary of transactions made by them within their account.

### Admin
  + The admin should be able to:
  
  - Perform CRUD operations on all users and their accounts. 
  - View a summary of all transactions made by users. 
  - View analytics of all user wallet accounts.
  - View trends in terms of profits made by a transaction so as to make future decisions.


## Routes
 ### Admin
    1. Login - `POST` '/login', to: 'admin#authenticate'.
    2. Logout - `DELETE` '/logout', to: 'admin#destroy'.
    3. Create Account - `POST` '/register', to: 'users#create'.
    4. Read Account - `GET` '/user', to: 'users#show'
    5. Read Transactions - `GET` '/transactions', to: 'transactions#index'.
    6. View analytics of all user wallet accounts: `GET` '/wallets', to: 'wallets#index'.
    7. To view trends - `GET` '/analytics/profits', to: 'analytics#profits'.


  #### Users
    1. To create an account as a new user: `POST` '/register', to: 'users#create'
    2. To login to the platform: `POST` '/login', to: 'sessions#create'
    3. To view analytics about his/her wallet account: `GET` '/wallets/analytics', to: 'wallets#analytics'
    4. To view their profile: `GET` '/users/:id', to: 'users#show'
    5. To update profile details: `PATCH` '/users/:id', to: 'users#update'
    6. To add funds to their existing wallet account: `POST` '/wallets/:id/add_funds', to: 'wallets#add_funds'
    7. To add beneficiaries as contacts to their account so as to be able to send them money: `POST` '/beneficiaries', to: 'beneficiaries#create'
    8. To send money to existing beneficiaries within their accounts: `POST` '/transactions', to: 'transactions#create'
    9. To view a summary of transactions made by them within their account: `GET` '/transactions', to: 'transactions#index'


## Live Link to the Deployment 

- The database was deployed in the live link below:

    [cashFlow](https://cashflow-1rf2.onrender.com/accounts)


## License 

+ The application was developed under the MIT License.


## Contributors

+ This project was contributed by:

    - Austin Obonyo: [AustinJnr](https://github.com/Austinjnr)
    - Moses Ochacha: [Mosesochacha](https://github.com/Mosesochacha)
    - Brian Wahungu: []
    - Alvin Njonjo: [FelaSupa](https://github.com/fela-Supa)
    - Maxwell Muchiri: [maxwellmuchiri](https://github.com/maxwellmuchiri)
    - Roy Ngei: [RoyZiO](https://github.com/RoyZiO)