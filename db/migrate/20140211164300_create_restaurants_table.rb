class CreateRestaurantsTable < ActiveRecord::Migration
  def change
  	create_table :restaurants do |t|
  		t.string :address
  		t.float :latitude
  		t.float :longitude
  		t.string :phone
  		t.timestamps
  	end
  end
end
