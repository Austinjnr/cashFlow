# app/models/wallet.rb
class Wallet < ApplicationRecord
  belongs_to :account

  validates :balance, presence: true, numericality: { greater_than_or_equal_to: 0 }

  def top_up(amount)
    transaction_fee = calculate_transaction_fee(amount)
    new_balance = balance + amount - transaction_fee

    update!(
      balance: new_balance,
      last_transaction: "Top up: #{amount}"
    )

    Transaction.create!(
      transaction_type: 'Top up',
      amount: amount,
      transaction_fee: transaction_fee,
      account: account
    )
  end

  def transfer(amount, recipient_account)
    raise ArgumentError, "Recipient account must be different" if account == recipient_account
    raise ArgumentError, "Insufficient balance" if amount > balance

    transaction_fee = calculate_transaction_fee(amount)
    new_balance = balance - amount - transaction_fee

    update!(
      balance: new_balance,
      last_transaction: "Transfer: #{amount}",
      last_transaction_recipient_account_id: recipient_account.id
    )

    Transaction.create!(
      transaction_type: 'Transfer',
      amount: amount,
      transaction_fee: transaction_fee,
      account: account,
      recipient_account: recipient_account
    )

    recipient_account.wallet.receive_transfer(amount, account)
  end

  def receive_transfer(amount, sender_account)
    transaction_fee = calculate_transaction_fee(amount)
    new_balance = balance + amount

    update!(
      balance: new_balance,
      last_transaction: "Received transfer: #{amount}",
      last_transaction_sender_account_id: sender_account.id
    )

    Transaction.create!(
      transaction_type: 'Received transfer',
      amount: amount,
      transaction_fee: transaction_fee,
      account: account,
      sender_account: sender_account
    )
  end

  private

  def calculate_transaction_fee(amount)
    case amount
    when 0..200
      0
    when 201..500
      20
    when 501..1000
      100
    else
      120
    end
  end
end
