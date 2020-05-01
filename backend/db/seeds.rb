Heroine.destroy_all
Power.destroy_all

power1 = Power.create(name: "PEW PEW", description:"Large laser beam")
power2 = Power.create(name: "PEW", description:"Mid-sized laser beam")
power3 = Power.create(name: "Pew", description:"Small laser beam")

Heroine.create(name: "Kat", super_name: "Super Lady", power: power1)
Heroine.create(name: "Ash", super_name: "Wonder Gal", power: power2)
Heroine.create(name: "Lara", super_name: "Tomb Raider", power: power3)