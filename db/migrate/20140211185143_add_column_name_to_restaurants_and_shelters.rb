class AddColumnNameToRestaurantsAndShelters < ActiveRecord::Migration
  def up
    add_column :restaurants, :name, :string
    add_column :shelters, :name, :string
  end

  def down
    remove_column :restaurants, :name, :string
    remove_column :shelters, :name, :string
  end
end
