class CreateSpacecats < ActiveRecord::Migration
  def up
    create_table :spacecats do |t|
      t.string      :name
      t.text        :bio
      t.string      :color
      t.string      :personality
      t.integer     :planets

      t.timestamps
    end
  end

  def down
    drop_table :spacecats
  end

end
