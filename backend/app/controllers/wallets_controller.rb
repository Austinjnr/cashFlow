class WalletsController < ApplicationController

  def deposit
    account_id = params[:account_id]
    amount = params[:amount].to_i
    transaction_fee = calculate_transaction_fee(amount)

    wallet = Wallet.find_by(account_id: account_id)
    wallet.balance += amount - transaction_fee
    wallet.last_transaction = "deposit"
    wallet.save!

    transaction = Transaction.create!(
      transaction_type: "deposit",
      amount: amount,
      transaction_fee: transaction_fee,
      account_id: account_id
    )

    render json: {
      message: "Dear customer, you have successfully deposited Ksh. <span style='color: blue;'>#{amount}</span>. Your new account balance is <span style='color: yellow;'>#{wallet.balance}</span> on <span style='color: blue;'>#{transaction.created_at.in_time_zone("Africa/Nairobi").strftime("%A, %d %B %Y")}</span>, at <span style='color: blue;'>#{transaction.created_at.in_time_zone("Africa/Nairobi").strftime("%I:%M %p")}</span>. Thank you for choosing CashFlow. We move together."
    }, status: :ok
    
  end



  def index
    wallets = Wallet.all 
    render json: { wallets: wallets }
  end
  def wallet
    receiver_wallet = Wallet.find_by_account_number(params[:receiver_account_number])
    render json: { receiver_wallet: receiver_wallet }
  end

  def send_money
    sender_wallet = Wallet.find_by(account_id: params[:sender_account_id])
    receiver_wallet = Wallet.find_by_account_number(params[:receiver_account_number])

    if sender_wallet.nil? || receiver_wallet.nil?
      render json: { error: "Invalid sender or receiver account" }, status: :bad_request
      return
    end

    amount = params[:amount].to_i
    transaction_fee = calculate_transaction_fee(amount)

    if sender_wallet.balance < amount + transaction_fee
      render json: { error: "Insufficient funds" }, status: :bad_request
      return
    end

    sender_wallet.balance -= amount + transaction_fee
    sender_wallet.last_transaction = "send"
    sender_wallet.save!

    receiver_wallet.balance += amount
    receiver_wallet.last_transaction = "receive"
    receiver_wallet.save!

    transaction = Transaction.create!(
      transaction_type: "send",
      amount: amount,
      transaction_fee: transaction_fee,
      account_id: sender_wallet.account_id,
      beneficiary_id: receiver_wallet.account_id
    )

    render json: {
      message: "Dear customer, you have successfully sent <span style='color: blue;'>#{amount}</span> to <span style='color: yellow;'>#{receiver_wallet.account_number}</span>, on <span style='color: blue;'>#{transaction.created_at.in_time_zone("Africa/Nairobi").strftime("%A, %d %B %Y")}</span>, at <span style='color: blue;'>#{transaction.created_at.in_time_zone("Africa/Nairobi").strftime("%I:%M %p")}</span>. Your new account balance is <span style='color: yellow;'>#{sender_wallet.balance}</span>. Transaction fee was <span style='color: green;'>#{transaction_fee}</span>. Thank you for choosing CashFlow. We move together.",
      transaction: transaction
    }, status: :ok 
  end
  
  
  def wallet_statistics
    stats = {
      daily: {
        transactions: Transaction.where(created_at: Time.zone.now.all_day).count,
        amount: Transaction.where(created_at: Time.zone.now.all_day).sum(:amount),
        transaction_fee: Transaction.where(created_at: Time.zone.now.all_day).sum(:transaction_fee),
        company_income: Transaction.where(created_at: Time.zone.now.all_day).sum(:transaction_fee)-Transaction.where(created_at: Time.zone.now.all_day).sum(:transaction_fee) * 0.05 
      },
      weekly: {
        transactions: Transaction.where(created_at: Time.zone.now.all_week).count,
        amount: Transaction.where(created_at: Time.zone.now.all_week).sum(:amount),
        transaction_fee: Transaction.where(created_at: Time.zone.now.all_week).sum(:transaction_fee),
        company_income: Transaction.where(created_at: Time.zone.now.all_week).sum(:transaction_fee) - Transaction.where(created_at: Time.zone.now.all_week).sum(:transaction_fee) * 0.1
      },
      monthly: {
        transactions: Transaction.where(created_at: Time.zone.now.all_month).count,
        amount: Transaction.where(created_at: Time.zone.now.all_month).sum(:amount),
        transaction_fee: Transaction.where(created_at: Time.zone.now.all_month).sum(:transaction_fee),
        company_income: Transaction.where(created_at: Time.zone.now.all_month).sum(:transaction_fee) - Transaction.where(created_at: Time.zone.now.all_month).sum(:transaction_fee) * 0.15
      },
      yearly: {
        transactions: Transaction.where(created_at: Time.zone.now.all_year).count,
        amount: Transaction.where(created_at: Time.zone.now.all_year).sum(:amount),
        transaction_fee: Transaction.where(created_at: Time.zone.now.all_year).sum(:transaction_fee),
        company_income: Transaction.where(created_at: Time.zone.now.all_year).sum(:transaction_fee)- Transaction.where(created_at: Time.zone.now.all_year).sum(:transaction_fee) * 0.88
      }
    }


  
    data = {
      columns: ['Statistic', 'Daily', 'Weekly', 'Monthly', 'Yearly'],
      rows: [
        ['Total Transactions', stats[:daily][:transactions], stats[:weekly][:transactions], stats[:monthly][:transactions], stats[:yearly][:transactions]],
        ['Total Amount', stats[:daily][:amount], stats[:weekly][:amount], stats[:monthly][:amount], stats[:yearly][:amount]],
        ['Total Transaction Fee', stats[:daily][:transaction_fee], stats[:weekly][:transaction_fee], stats[:monthly][:transaction_fee], stats[:yearly][:transaction_fee]],
        ['Company Income', stats[:daily][:company_income], stats[:weekly][:company_income], stats[:monthly][:company_income], stats[:yearly][:company_income]]
      ]
    }
  
    render json: data
  end
  

  private

  def calculate_transaction_fee(amount)
    case amount
    when 0...200
      0
    when 200...500
      3
    when 500...1000
      6
    when 1000...5000
      11
    when 5000...10000
      15
    when 10000...20000
      20
    when 20000...40000
      25
    else
      30
    end
  end
end