

ActiveRecord::Schema[7.0].define(version: 2023_04_19_054419) do
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
    t.index ["user_id"], name: "index_accounts_on_user_id"
  end

  create_table "beneficiaries", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone_number"
    t.bigint "account_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id"], name: "index_beneficiaries_on_account_id"
  end

  create_table "transactions", force: :cascade do |t|
    t.string "transaction_type"
    t.integer "amount"
    t.string "transaction_fee"
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
    t.index ["account_id"], name: "index_wallets_on_account_id"
  end

  add_foreign_key "accounts", "users"
  add_foreign_key "beneficiaries", "accounts"
  add_foreign_key "transactions", "accounts"
  add_foreign_key "transactions", "beneficiaries"
  add_foreign_key "wallets", "accounts"
end
