class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :user_id
      t.string :movie_id
      t.string :rating
      t.string :description

      t.timestamps
    end
  end
end
