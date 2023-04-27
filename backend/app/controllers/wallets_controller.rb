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
    else
      20
    end
  end
end
