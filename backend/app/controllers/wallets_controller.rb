class WalletsController < ApplicationController
  def deposit
    account_id = session[:current_account_id]
    amount = params[:amount].to_i
    transaction_fee = calculate_transaction_fee(amount)

    wallet = Wallet.find_by(account_id: account_id)
    wallet.balance += amount - transaction_fee
    wallet.last_transaction = "deposit"
    wallet.save!

    Transaction.create!(
      transaction_type: "deposit",
      amount: amount,
      transaction_fee: transaction_fee,
      account_id: account_id
    )

    render json: { message: "Deposit successful" }, status: :ok
  end

  def send_money
    sender_wallet = Wallet.find_by(account_id: session[:current_account_id])
    receiver_wallet = Wallet.find_by(account_id: params[:receiver_account_id])

    if sender_wallet.nil? || receiver_wallet.nil?
      render json: { message: "Invalid account ID" }, status: :bad_request
      return
    end

    amount = params[:amount].to_i
    transaction_fee = calculate_transaction_fee(amount)

    if sender_wallet.balance < amount + transaction_fee
      render json: { message: "Insufficient funds" }, status: :bad_request
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

    render json: { message: "Send successful", transaction: transaction }, status: :ok
  end


  def wallet_statistics
    stats = {
      daily: {
        transactions: Transaction.where(created_at: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day).count,
        amount: Transaction.where(created_at: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day).sum(:amount),
        transaction_fee: Transaction.where(created_at: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day).sum(:transaction_fee),
        company_income: Transaction.where(created_at: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day).sum(:transaction_fee)
      },
      weekly: {
        transactions: Transaction.where(created_at: Time.zone.now.beginning_of_week..Time.zone.now.end_of_week).count,
        amount: Transaction.where(created_at: Time.zone.now.beginning_of_week..Time.zone.now.end_of_week).sum(:amount),
        transaction_fee: Transaction.where(created_at: Time.zone.now.beginning_of_week..Time.zone.now.end_of_week).sum(:transaction_fee),
        company_income: Transaction.where(created_at: Time.zone.now.beginning_of_week..Time.zone.now.end_of_week).sum(:transaction_fee)
      },
      monthly: {
        transactions: Transaction.where(created_at: Time.zone.now.beginning_of_month..Time.zone.now.end_of_month).count,
        amount: Transaction.where(created_at: Time.zone.now.beginning_of_month..Time.zone.now.end_of_month).sum(:amount),
        transaction_fee: Transaction.where(created_at: Time.zone.now.beginning_of_month..Time.zone.now.end_of_month).sum(:transaction_fee),
        company_income: Transaction.where(created_at: Time.zone.now.beginning_of_month..Time.zone.now.end_of_month).sum(:transaction_fee)
      },
      yearly: {
        transactions: Transaction.where(created_at: Time.zone.now.beginning_of_year..Time.zone.now.end_of_year).count,
        amount: Transaction.where(created_at: Time.zone.now.beginning_of_year..Time.zone.now.end_of_year).sum(:amount),
        transaction_fee: Transaction.where(created_at: Time.zone.now.beginning_of_year..Time.zone.now.end_of_year).sum(:transaction_fee),
        company_income: Transaction.where(created_at: Time.zone.now.beginning_of_year..Time.zone.now.end_of_year).sum(:transaction_fee)
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