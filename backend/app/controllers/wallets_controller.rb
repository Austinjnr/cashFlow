class WalletsController < ApplicationController
  def deposit
    account_id = params[:account_id]
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
    sender_wallet = Wallet.find_by(account_id: params[:sender_account_id])
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
