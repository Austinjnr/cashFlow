class CreateBeneficiaries < ActiveRecord::Migration[7.0]
  def change
    create_table :beneficiaries do |t|
      t.string :name
      t.string :email
      t.string :phone_number
      t.references :account ,foreign_key: true
      t.timestamps
    end
  end
end
