class CreateObjectives < ActiveRecord::Migration[7.0]
  def change
    create_table :objectives do |t|
      t.string :title
      t.integer :weight

      t.timestamps
    end
  end
end
