class CreatePickupsTable < ActiveRecord::Migration
  def change
  	create_table :pickups do |t|
  		t.belongs_to :restaurant
  		t.belongs_to :shelter
			t.string :confirmation_code
			t.string :status
			t.datetime :closing_time
			t.text :food_description
			t.integer :meals

  		t.timestamps
  	end
  end
end
