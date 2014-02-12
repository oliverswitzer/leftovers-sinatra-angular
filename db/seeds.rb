Restaurant.create!(
    "name" => "Poop",
    "address" => "21 Jumpstreet",
    "phone" => "718-555-0808"
    )
Restaurant.create!(
    "name" => "Test",
    "address" => "78 Poop Street",
    "phone" => "718-555-0808"
    )
Restaurant.create!(
    "name" => "Tony's Pizza",
    "address" => "12 Jumpstreet",
    "phone" => "718-555-0808"
    )
Restaurant.create!(
    "name" => "Test2",
    "address" => "21 Jumpstreet",
    "phone" => "718-555-0808"
    )
Shelter.create!(
  "name" => "Test", 
  "address" => "21 Jumpstreet",
    "phone" => "718-555-0808"
  )
Shelter.create!(
  "name" => "Test2", 
  "address" => "21 Jumpstreet",
    "phone" => "718-555-0808"
  )
Shelter.create!(
  "name" => "Test3", 
  "address" => "21 Jumpstreet",
    "phone" => "718-555-0808"
  )
Shelter.create!(
  "name" => "Test4", 
  "address" => "21 Jumpstreet",
    "phone" => "718-555-0808"
  )
Pickup.create!(
  restaurant_id: 1,
  shelter_id: 1,
  confirmation_code: "ASDFASD234A",
  status: "Not picked up",
  closing_time: Time.now,
  food_description: "DELICIOUS PIZZA",
  meals: 1
  )
Pickup.create!(
  restaurant_id: 2,
  shelter_id: 2,
  confirmation_code: "ASDFASD234A",
  status: "Not picked up",
  closing_time: Time.now,
  food_description: "DELICIOUS Hamburgers",
  meals: 50
  )
Pickup.create!(
  restaurant_id: 3,
  shelter_id: 3,
  confirmation_code: "ASDFASD234A",
  status: "Not picked up",
  closing_time: Time.now,
  food_description: "DELICIOUS PASTA",
  meals: 10
  )
Pickup.create!(
  restaurant_id: 4,
  shelter_id: 4,
  confirmation_code: "ASDFASD234A",
  status: "Not picked up",
  closing_time: Time.now,
  food_description: "DELICIOUS FALAFEL",
  meals: 2
  )