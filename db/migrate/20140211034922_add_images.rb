class AddImages < ActiveRecord::Migration
  def up
    add_column :spacecats, :images, :text
  end

  def down
    remove_column :spacecats, :images, :text
  end
end
