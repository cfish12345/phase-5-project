# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding users..."
10.times do
    User.create(
        username: Faker::Creature::Animal.name,
        password: "test",
        name: Faker::Movies::LordOfTheRings.character,
        profile_img: Faker::Avatar.image(size: "50x50", format: "jpg")
    )
end

puts "Seeding movies..."

Movie.create(director: "Todd Phillips", title: "Joker(2019)", actors: "Joaquin Pheonix, Robert De Niro", genre: "Crime, Drama", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDJOKE_WB023.jpg?w=1024")
Movie.create(director: "Bong Joon-ho", title: "Parasite(2019)", actors: "Yeo-jeong Cho, Park Seo-joon", genre: "Drama", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDPARA_EC167.jpg?w=1024")
Movie.create(director: "Quentin Tarantino", title: "Once Upon A Time In Hollywood(2019)", actors: "Brad Pitt, Leonardo Dicaprio, Margot Robbie, Dakota Fanning", genre: "Comedy, Drama", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDONUP_EC175.jpg?w=1024")
Movie.create(director: "Ryan Coogler", title: "Black Panther(2018)", actors: "Chadwick Boseman, Michael B. Jordan, Letita Wright", genre: "Action, Adventure, Fantasy", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDBLPA_EC076-1.jpg?w=1024")
Movie.create(director: "Alfonso Cuaron", title: "Roma(2018)", actors: "Yalitza Aparicio, Marina de Tavira", genre: "Drama", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDROMA_EC082.jpg?w=1024")

Movie.create(director: "Jordan Peele", title: "Get Out(2017)", actors: "Daniel Kaluuya, Allison Williams", genre: "Horror", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDGEOU_EC005.jpg?w=1024")
Movie.create(director: "Guillermo del Toro", title: "The Shape of Water(2017)", actors: "Sally Hawkins, Doug Jones, Richard Jenkins", genre: "Fantasy, Romance", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDSHOF_FS027.jpg?w=1024")
Movie.create(director: "George Miller", title: "Mad Max: Fury Road(2015)", actors: "Tom Hardy, Charlize Theron, Nicholas Hoult", genre: "Action, Adventure", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDMAMA_EC192.jpg?w=1024")
Movie.create(director: "Alejandro Gonzalez Inarritu", title: "The Revenant(2015)", actors: "Leonardo Dicaprio, Tom Hardy, Will Poulter", genre: "Adventure, Drama, Thriller", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDREVE_FE024.jpg?w=1024")
Movie.create(director: "David Fincher", title: "The Social Network(2010)", actors: "Jesse Eisenberg, Andrew Garfield, Justin Timberlake", genre: "Drama, Biography", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDSONE_EC037.jpg?w=1024")

Movie.create(director: "James Cameron", title: "Avatar(2009)", actors: "Zoe Saldana, Sam Worthington, Michelle Rodriguez", genre: "Sci-Fi", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDAVAT_FE021.jpg?w=1024")
Movie.create(director: "Danny Boyle", title: "Slumdog Millionaire(2008)", actors: "Dev Patel, Freida Pinto", genre: "Comedy, Drama", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDSLMI_FS062.jpg?w=1024")
Movie.create(director: "Kathryn Bigelow", title: "The Hurt Locker(2008)", actors: "Jeremy Renner, Anthony Mackie, Guy Pearce", genre: "War, Drama, Action", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDHULO_EC051.jpg?w=1024")
Movie.create(director: "Jon Favreau", title: "Iron Man(2008)", actors: "Robert Downey Jr., Jon Favreau, Gwyneth Paltrow", genre: "Action, Adventure, Fantasy", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDIRMA_EC058.jpg?w=1024")
Movie.create(director: "Larry Charles", title: "Borat(2006)", actors: "Sacha Baron Cohen, Pamela Anderson", genre: "Comedy", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDBORA_FE005.jpg?w=1024")

Movie.create(director: "Paul Thomas Anderson", title: "There Will Be Blood(2007)", actors: "Daniel Day-Lewis, Paul Dano", genre: "Drama", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDTHWI_EC044.jpg?w=1024")
Movie.create(director: "Ethan Coen", title: "No Country for Old Men(2007)", actors: "Javier Bardem, Tommy Lee Jones, Josh Brolin, Woody Harrelson", genre: "Crime, Mystery & thriller, Drama", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDNOCO_EC143.jpg?w=1024")
Movie.create(director: "Martin Scorsese", title: "The Departed(2006)", actors: "Leonardo Dicaprio, Vera Farmiga, Jack Nicholson, Matt Damon, Mark Wahlberg", genre: "Crime, Mystery & thriller, Drama", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDDEPA_EC105.jpg?w=1024")
Movie.create(director: "Martin Campbell", title: "Casino Royale(2006)", actors: "Daniel Craig, Eva Green, Judi Dench", genre: "Action, Adventure", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDCARO_EC085.jpg?w=1024")
Movie.create(director: "Clint Eastwood", title: "Million Dollar Baby(2004)", actors: "Clint Eastwood, Hilary Swank, Morgan Freeman, Jay Baruchel", genre: "sports drama", image_url: "https://deadline.com/wp-content/uploads/2020/12/MCDMIDO_EC007.jpg?w=1024")

puts "Seeding reviews..."

10.times do
    Review.create(
        user_id: Faker::Number.between(from: 1, to: 10),
        movie_id: Faker::Number.between(from: 1, to: 20),
        rating: Faker::Number.between(from: 6, to: 10),
        description: Faker::Quote.famous_last_words 
    )
end

puts "Seeding actors..."

Actor.create(name: "Joaquin Pheonix", image_url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQBJ5WIGdOodM789dhGsBNLwbBWR21ppLZ1tfKp48QoBq5cfazm")


puts "Seeding actor movies..."


ActorMovie.create(movie_id: 1, actor_id: 1)

puts "Seeding Complete!🦀"