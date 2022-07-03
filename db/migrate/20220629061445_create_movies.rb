class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :actors
      t.string :genre
      t.string :image_url
      t.string :director

      t.timestamps
    end
  end
end
