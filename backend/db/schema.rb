# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_04_29_120732) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "phone_number"
    t.string "avatar_url"
    t.string "name"
    t.integer "id_number"
    t.integer "account_number"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_number"], name: "index_accounts_on_account_number", unique: true
    t.index ["user_id"], name: "index_accounts_on_user_id"
  end

  create_table "beneficiaries", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone_number"
    t.bigint "account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "account_number"
    t.index ["account_id"], name: "index_beneficiaries_on_account_id"
  end

  create_table "transactions", force: :cascade do |t|
    t.string "transaction_type"
    t.integer "amount"
    t.decimal "balance"
    t.integer "receiver_account_number"
    t.decimal "transaction_fee", precision: 8, scale: 2
    t.bigint "account_id"
    t.bigint "beneficiary_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id"], name: "index_transactions_on_account_id"
    t.index ["beneficiary_id"], name: "index_transactions_on_beneficiary_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "wallets", force: :cascade do |t|
    t.integer "balance"
    t.string "last_transaction"
    t.bigint "account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "total_transactions_per_day"
    t.integer "total_transactions_per_week"
    t.integer "total_transactions_per_month"
    t.integer "total_transactions_per_year"
    t.decimal "total_amount_per_day"
    t.decimal "total_amount_per_week"
    t.decimal "total_amount_per_month"
    t.decimal "total_amount_per_year"
    t.decimal "total_transaction_fee_per_day"
    t.decimal "total_transaction_fee_per_week"
    t.decimal "total_transaction_fee_per_month"
    t.decimal "total_transaction_fee_per_year"
    t.decimal "company_income_per_day"
    t.decimal "company_income_per_week"
    t.decimal "company_income_per_month"
    t.decimal "company_income_per_year"
    t.integer "account_number"
    t.index ["account_id"], name: "index_wallets_on_account_id"
    t.index ["account_number"], name: "index_wallets_on_account_number", unique: true
  end

  add_foreign_key "accounts", "users"
  add_foreign_key "beneficiaries", "accounts"
  add_foreign_key "transactions", "accounts"
  add_foreign_key "transactions", "beneficiaries"
  add_foreign_key "wallets", "accounts"
  add_foreign_key "wallets", "accounts", column: "account_number", primary_key: "account_number"
end
