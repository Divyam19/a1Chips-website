import React, { useState } from 'react';
import Navbar from './Navbar';

interface Product {
    id: number;
    name: string;
    wt: string;
    price_INR: number;
    description: string;
    image: string;
    category: string;
  }

  const products: Product[] = [
    {
      "id": 1,
      "name": "BANANA 4 CUT SALT",
      "wt": "250g",
      "price_INR": 140,
      "description": "An over the hill product from the Keralam. A must have snack from the banana leaf of magnanimous Onam Sadhya. A unique and healthy snack from the heart of South India, banana are sliced into 4 cuts, deep fried in Pure Coconut oil and salted.",
      "image": "/src/assets/product_images/banana_4_cut_salt.jpg",
      "category":"chips"
    },
    {
      "id": 2,
      "name": "TAPIOCA CHIPS STICK CHILLY",
      "wt": "200g",
      "price_INR": 80,
      "description": "A typical product from the soils of South India, popularly Known as Tapioca (Kappa, Cassava, Maravalli). A easy to munch snack, where the tapiocas are sliced into sticks for more tempting snack experience and with a toss of Hot Chilly Powder.\nSavour the thick stick sliced tapioca’s deep fried till golden brown and spiced just right.",
      "image": "/src/assets/product_images/tapioca_chips_stick_chilly.jpg",
      "category":"chips"
    },
    {
      "id": 3,
      "name": "POTATO CHIPS PUDINA",
      "wt": "100g",
      "price_INR": 70,
      "description": "All time favorite snack right from the  late 1800″s to till date, Potato Chips has been the world’s Favorite snack for all age groups. We have made this popular snack with twist of  A1 Chips MAGIC. Grab a Pack and Relish the Leafy Pudina Flavor at every bite.\nSavour the thinly sliced potatoes deep fried till golden brown and spiced right.\nIngredients: Potato, Edible Veg Oil, Salt, Mint Leaves, Onion, Garlic.",
      "image": "/src/assets/product_images/potato_chips_pudina.jpeg",
      "category":"chips"
    },
    {
      "id": 4,
      "name": "JACKFRUIT CHIPS",
      "wt": "200g",
      "price_INR": 130,
      "description": "A well known Munchies from the Gods Own Country, homemade snack from the homes of Kerala, made from perfectly aged jackfruit and deep fried in PURE COCONUT OIL. Ready to fulfill your taste buds.\n Are you a vegan looking for a delicious and satisfying snack? Look no further than jackfruit chips. These crispy and flavorful chips are not only a delicious treat but also a healthy alternative to traditional potato chips. Packed with nutrients and free from harmful additives, jackfruit chips are the perfect guilt-free snack. Made from ripe jackfruit, these chips are a great source of fiber, potassium, and Vitamin C. They also provide a unique taste, combining the sweetness of the fruit with a savory crunch. Whether you’re enjoying them on their own or dipping them in a vegan-friendly sauce, jackfruit chips are sure to satisfy your cravings. Unlike many other snacks on the market, jackfruit chips are made with all-natural ingredients and are free from preservatives and artificial flavors. They are also gluten-free and suitable for those with dietary restrictions. So, if you’re looking for a vegan snack that not only tastes great but is also good for you, give jackfruit chips a try. Your taste buds and your body will thank you.",
      "image": "/src/assets/product_images/jackfruit_chips.jpg",
      "category":"chips"
    },
    {
      "id": 5,
      "name": "CASSAVA CHIPS CHILLY",
      "wt": "160g",
      "price_INR": 80,
      "description": "A typical product from the soils of South India, popularly Known as Tapioca (Kappa, Cassava, Maravalli). A easy to munch snack, where the tapiocas are sliced thick for more tempting snack experience and with a toss of Hot Chilly Powder.\n Savour the thick sliced tapioca’s deep fried till golden brown and spiced just right.",
      "image": "/src/assets/product_images/cassava_chips_chilly.jpg",
      "category":"chips"
    },
    {
      "id": 6,
      "name": "ULTRA THIN KERALA BANANA CHIPS",
      "wt": "200g",
      "price_INR": 140,
      "description": "A unique and healthy snack from the heart of South India, banana are sliced thin, deep fried in pure coconut oil and salted.\n In a world where potato chips and popcorn dominate snack time, there’s a humble snack that’s making its way to the forefront – kerala banana chips. These crispy, flavorful slices of banana have been gaining popularity, not just as a healthier alternative to traditional snacks, but also for their intriguing journey from farm to table. we delve into the fascinating story behind banana chips. We explore the origins of this delicious snack, its cultural significance in different parts of the world, and the unique process of turning fresh bananas into crispy chips. From the lush plantations where bananas are grown to the meticulous process of slicing and drying, we unravel the behind-the-scenes of banana chips production.  click here to know more.\n We also shed light on the nutritional benefits these chips offer, making them a guilt-free indulgence for snack lovers. Join us on this flavorful journey as we dive into the world of banana chips, discovering the rich history and exquisite craftsmanship that goes into creating this beloved snack.\n The secret is in the simplicity: It all starts with farm grown fresh and carefully selected raw bananas, bought to our state-of-the-art production facility which goes under quality checks then sliced ULTRA THIN and deep fried in PURE COCONUT OIL and sprinkled with rain of salt for perfection, packed with care.",
      "image": "/src/assets/product_images/ultra_thin_kerala_banana_chips.jpg",
      "category":"chips"
    },
    {
      "id": 7,
      "name": "POTATO CHILLI CHIPS TOMATO",
      "wt": "200g",
      "price_INR": 140,
      "description": "All time favourite snack right from the  late 1800″s to till date, Potato Chips has been the world’s Favourite snack for all age groups. We have made this popular snack with twist of  A1 Chips MAGIC. Grab a Pack and Relish the Tomato Flavour at every bite.\nSavour the thinly sliced potatoes deep fried till golden brown and spiced right.",
      "image": "/src/assets/product_images/potato_chips_chilli_tomato.jpg",
      "category":"chips"
    },
    {
      "id": 8,
      "name": "POTATO CHIPS HOT CHILLY",
      "wt": "200g",
      "price_INR": 120,
      "description": "All time favourite snack right from the  late 1800″s to till date, Potato Chips has been the world’s Favourite snack for all age groups. We have made this popular snack with twist of  A1 Chips MAGIC. Grab a Pack and Relish the Hot Chilly at every bite.\nSavour the thinly sliced potatoes deep fried till golden brown and spiced right.",
      "image": "/src/assets/product_images/potato_chips_hot_chilly.jpg",
      "category":"chips"
    },
    {
      "id": 9,
      "name": "POTATO CHIPS CLASSIC SALT",
      "wt": "200g",
      "price_INR": 120,
      "description": "All time favorite snack right from the  late 1800″s to till date, Potato Chips has been the world’s Favorite snack for all age groups. We have made this popular snack with twist of  A1 Chips MAGIC. Grab a Pack and Relish the classic salted chips at every bite.\nSavour the thinly sliced potatoes deep fried till golden brown and spiced right.",
      "image": "/src/assets/product_images/potato_chips_classic_salt.jpg",
      "category":"chips"
    },
    {
      "id": 10,
      "name": "TAPIOCA CHIPS CLASSIC SALT",
      "wt": "160g",
      "price_INR": 85,
      "description": "A typical product from the soils of South India, popularly Known as Tapioca (Kappa, Cassava, Maravalli). A easy to munch snack, where the tapiocas are sliced thick for more tempting snack experience.\n Savour the thick sliced tapioca’s deep fried till golden brown and classically salted.",
      "image": "/src/assets/product_images/tapioca_chips_classic_Salt.jpg",
      "category":"chips"
    },
    {
      "id": 11,
      "name": "TAPIOCA CHIPS SALSA MASALA",
      "wt": "160g",
      "price_INR": 85,
      "description": "A typical product from the soils of South India, popularly Known as Tapioca (Kappa, Cassava, Maravalli). A easy to munch snack, where the tapiocas are sliced thick for more tempting snack experience.\n Savour the thick sliced tapioca’s deep fried till golden brown and sprinkled with salsa.\n Ingredients: Tapioca, Edible Veg Oil, Salt, Cumin, Pepper Powder, Chilly Powder, Mint Powder.",
      "image": "/src/assets/product_images/Tapioca_chips_salsa_masala.jpg",
      "category":"chips"
    },
    {
      "id": 12,
      "name": "BANANA CHIPS LINE N ONION",
      "wt": "180g",
      "price_INR": 120,
      "description": "A unique and healthy snack from the heart of South India, banana are sliced thick, deep fried in pure coconut oil and salted.\n The secret is in the simplicity: It all starts with farm grown fresh and carefully selected raw bananas, bought to our state-of-the-art production facility which goes under quality checks then sliced THICK and deep fried and spiced, packed with care.\nIngredients: Banana, Edible Veg Oil, Lemon Powder, Salt, Chilly Powder, Onion Powder.",
      "image": "/src/assets/product_images/banana_chips_lime_n_onion.jpg",
      "category":"chips"
    },
    {
      "id": 14,
      "name": "KARA BOONDHI",
      "wt": "200g",
      "price_INR": 100,
      "description": "A very simple spicy snack hailing from the household recipes of south India. This special snack is made from chickpea flour roasted in the shape of small balls that melt in every bite. This snack is a common Tea time snack for all the snack craving while at Work or at Home. Kara boodhi pairs with your morning Breakfast Curd Vada sprinkled on top. Also, with a cup of Fresh thick curd.",
      "image": "/src/assets/product_images/kara_boondhi.jpg",
      "category":"mixture"
    },
    {
      "id": 15,
      "name": "CORN MIXTURE CLASSIC",
      "wt": "200g",
      "price_INR": 100,
      "description": "The most loved crispy snack of India with a mix of nuts and aromatic spices, it makes a delicious munch anytime!\nIngredients: Corn Flakes, Roasted Bengal Gram, Edible Veg Oil, Red Chilly Powder, Salt.",
      "image": "/src/assets/product_images/corn_mixture-classic.jpg",
      "category":"mixture"
    },
    {
      "id": 16,
      "name": "COUNTRY MIXTURE",
      "wt": "200g",
      "price_INR": 100,
      "description": "The most loved crispy snack of India with a mix of nuts and aromatic spices, it makes a delicious munch anytime!\nIngredients: Gram Flour, Rice Flour, Rice Flakes, Ground Nut, Edible Veg Oil, Red Chilly Powder, Salt.",
      "image": "/src/assets/product_images/country_mixture.jpg",
      "category":"mixture"
    },
    {
      "id": 17,
      "name": "GARLIC MURUKKU SALT",
      "wt": "200g",
      "price_INR": 100,
      "description": "A South India popular snack known for its twisted shape, texture, aroma, and crunchy taste. A common snack prepared at homes for various occasions and festivals as a part of the celebration.\nFeel the karuk muruk at every bite. Munch The garlic in a new way.\nIngredients: Rice Flour, Gram Flour, Edible Veg Oil, Garlic, Cumin, Salt.",
      "image": "/src/assets/product_images/garlic_murukku_salt.jpg",
      "category":"murukku"
    },
    {
      "id": 18,
      "name": "BUTTER MURUKKU",
      "wt": "200g",
      "price_INR": 100,
      "description": "A South India popular snack known for its twisted shape, texture, aroma, and crunchy taste. A common snack prepared at homes for various occasions and festivals as a part of the celebration. The special murukku has a special Butter aroma, When ready to snack.\nFeel the karuk muruk at every bite.",
      "image": "/src/assets/product_images/butter_murukku.jpg",
      "category":"murukku"
    },      
    {
      "id": 19,
      "name": "CHILLY MURUKKU",
      "wt": "250g",
      "price_INR": 100,
      "description": "Every time you hear snack time, the first snack comes our mind is MURUKKU !!. Here we have made that craving my maintaining the traditional hand made murukku with the special blend of A1 Chips standards.\nA popular savoury snack made traditionally that gives a crackling effect when you bite into it.",
      "image": "/src/assets/product_images/chilly_murukku.jpg",
      "category":"murukku"
    },
    {
      "id": 20,
      "name": "HAND MURUKKU",
      "wt": "250g",
      "price_INR": 120,
      "description": "Every time you hear snack time, the first snack comes our mind is MURUKKU !!. Here we have made that craving my maintaining the traditional hand made murukku with the special blend of A1 Chips standards.\nTake a bite with a cup of tea or dip into a cup of sambar for more twisted cravings.\nA popular savoury snack made traditionally that gives a crackling effect when you bite into it.",
      "image": "/src/assets/product_images/hand_murukku.jpg",
      "category":"murukku"
    },
    {
      "id": 21,
      "name": "THATTAI MURUKKU",
      "wt": "250g",
      "price_INR": 120,
      "description": "A south Indian deep fried snack made with rice flour and commonly prepared during Janmashtami or Sri Krishna Jayanthi festival.",
      "image": "/src/assets/product_images/thattai_murukku.jpg",
      "category":"murukku"
    },
    {
      "id": 22,
      "name": "SESAME RIBBON PAKODA",
      "wt": "200g",
      "price_INR": 100,
      "description": "An old home made snack for the tea time munchies, Well Known for its long ribbon like shape, Easy to take in and Soft.  Yummy savoury snacks made from rice flour and a go\nIngredients: Rice Flour, Roasted Bengal Gram Flour, Gram Flour, Corn Flour, Edible Veg Oil, White Sesame, Salt, Red Chilly Powder, Asafoetida.",
      "image": "/src/assets/product_images/sesame_ribbon_pakoda.jpg",
      "category":"pakoda"
    },
    {
      "id": 23,
      "name": "CHEESE BALLS",
      "wt": "80g",
      "price_INR": 60,
      "description": "A good old snack right from the school days, is now back. Toss them in and feel the Creamy Cheese melt in your Mouth. Comes in a handy package full of Creamy Cheese flavored corn balls. Suitable for a short snack time cravings!!!",
      "image": "/src/assets/product_images/cheese_balls.jpg",
      "category":"puffed_snacks"
    },
    {
      "id": 24,
      "name": "CHOCO POPCORN",
      "wt": "110",
      "price_INR": 90,
      "description": "A purely enjoyable snack, presenting a sweet variation of popcorn with a splash of freshly topped chocolate flavor",
      "image": "/src/assets/product_images/choco_popcorn.jpg",
      "category":"puffed_snacks"
    },
    {
      "id": 25,
      "name": "CARAMEL POPCORN",
      "wt": "110g",
      "price_INR": 90,
      "description": "A purely enjoyable snack, presenting a sweet variation of popcorn with a splash of freshly melted caramel flavour",
      "image": "/src/assets/product_images/caramel_popcorn.jpg",
      "category":"puffed_snacks"
    },
    {
      "id": 26,
      "name": "COFFEE POPCORN",
      "wt": "110",
      "price_INR": 90,
      "description": "A purely enjoyable snack, presenting a sweet variation of popcorn with a splash of freshly melted caramel flavour",
      "image": "/src/assets/product_images/coffee_popcorn.jpg",
      "category":"puffed_snacks"
    },
    {
      "id": 27,
      "name": "BROKEN PEANUT CHIKKI BAR CANDY",
      "wt": "200g",
      "price_INR": 90,
      "description": "Original Kadalai Mittai (Chikki Candy) and Peanut candy. Chikki sweet is a traditional Indian sweet (brittle) generally made from nuts and jaggery. There are several different varieties of chikki in addition to the most common groundnut (peanut) chikki.",
      "image": "/src/assets/product_images/broken_peanut_chikkibar_candy.jpeg",
      "category":"chikkies"
    },
    {
      "id": 28,
      "name": "BROKEN PENUT CHIKKI BUTTON",
      "wt": "200g",
      "price_INR": 90,
      "description": "Original Kadalai Mittai (Chikki Candy) and Peanut candy. Chikki sweet is a traditional Indian sweet (brittle) generally made from nuts and jaggery. There are several different varieties of chikki in addition to the most common groundnut (peanut) chikki.",
      "image": "/src/assets/product_images/broken_peanut_chikki_button_candy.jpeg",
      "category":"chikkies"
    },
    {
      "id": 29,
      "name": "PEANUT CHIKKI BAR CANDY",
      "wt": "200g",
      "price_INR": 90,
      "description": "Original Kadalai Mittai (Chikki Candy) and Peanut candy. Chikki sweet is a traditional Indian sweet (brittle) generally made from nuts and jaggery. There are several different varieties of chikki in addition to the most common groundnut (peanut) chikki.",
      "image": "/src/assets/product_images/peanut_chikki_bar_candy.jpeg",
      "category":"chikkies"
    },
    {
      "id": 30,
      "name": "PEANUT CHIKKI BUTTON CANDY",
      "wt": "200g",
      "price_INR": 90,
      "description": "Original Kadalai Mittai (Chikki Candy) and peanut candy. Chikki sweet is a traditional Indian sweet (brittle) generally made from nuts and jaggery. There are several different varieties of chikki in addition to the most common groundnut (peanut) chikki.",
      "image": "/src/assets/product_images/peanut_chikki_button_candy.jpeg",
      "category":"chikkies"
    },
    {
      "id": 31,
      "name": "WHITE SESAME BUTTON CANDY",
      "wt": "200g",
      "price_INR": 90,
      "description": "Original White sesame Kadalai Mittai (Chikki Candy) and white Sesame candy. Chikki sweet is a traditional Indian sweet (brittle) generally made from nuts and jaggery. There are several different varieties of chikki in addition to the most common groundnut (peanut) chikki.",
      "image": "/src/assets/product_images/white_sesame_button_candy.jpg",
      "category":"chikkies"
    },
    {
      "id": 32,
      "name": "BLACK SESAME BUTTON CANDY",
      "wt": "200g",
      "price_INR": 90,
      "description": "Original black sesame Kadalai Mittai (Chikki Candy) and Black Sesame candy. Chikki sweet is a traditional Indian sweet (brittle) generally made from nuts and jaggery. There are several different varieties of chikki in addition to the most common groundnut (peanut) chikki.",
      "image": "/src/assets/product_images/black_sesame_button_candy.jpg",
      "category":"chikkies"
    }
];



const ProductCard: React.FC<Product> = ({ id, name, wt, price_INR, image }) => {
  return (
    <a  className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-gray-300 ring hover:ring-red-600 hover:ring-opacity-90 hover:ring-opacity-50 hover:transition-all hover:duration-300 hover:border-spacing-4">
      <img className="w-full h-30 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2  hover:font-bold" >{name}</div>
        <p className="text-gray-700 text-base  hover:font-bold">{`${wt} | ₹${price_INR}`}</p>
      </div>
    </a>
  );
};
  interface ProductCategoryProps {
    category: string;
    products: Product[];
  }
  
  const ProductCategory: React.FC<ProductCategoryProps> = ({ category, products }) => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">{category}</h2>
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    );
  };
  
  const ProductList: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
    const categories = Array.from(new Set(products.map((product) => product.category)));
  
    const filteredProducts = selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;
  
    return (
      <div>
        <div className="mb-4">
          <button
            className={`mr-4 ${
              selectedCategory === null ? 'bg-red-600 text-white' : 'bg-gray-300'
            } px-2 py-1 rounded-xl`}
            onClick={() => setSelectedCategory(null)}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`mr-4 ${
                selectedCategory === category ? 'bg-red-600 text-white' : 'bg-gray-300'
              } px-2 py-1 rounded-xl`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {selectedCategory ? (
          <ProductCategory category={selectedCategory} products={filteredProducts} />
        ) : (
          <div className="flex flex-wrap justify-center">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  const ProductPage: React.FC<{ match: { params: { productId: string } } }> = ({ match }) => {
    const productId = parseInt(match.params.productId, 10);
    const product = products.find((p) => p.id === productId);
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    return (
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        {/* Add more details about the product */}
      </div>
    );
  };
  
  export { ProductList, ProductPage };