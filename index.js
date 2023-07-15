
function getMenu() {
    document.addEventListener('DOMContentLoaded', function() {
        // Call the showMenuItems() function with the JSON data
        const menuData = [
          // JSON data here
          {
            "id": 1,
            "name": "Cheeseburger",
            "price": 5.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?cheeseburger"
          },
          {
            "id": 2,
            "name": "Pizza",
            "price": 8.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?pizza"
          },
          {
            "id": 3,
            "name": "Tacos",
            "price": 3.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?tacos"
          },
          {
            "id": 4,
            "name": "Sushi",
            "price": 11.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?sushi"
          },
          {
            "id": 5,
            "name": "Pasta",
            "price": 9.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?pasta"
          },
          {
            "id": 6,
            "name": "Fried Chicken",
            "price": 7.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?fried_chicken"
          },
          {
            "id": 7,
            "name": "Grilled Cheese Sandwich",
            "price": 4.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?grilled_cheese_sandwich"
          },
          {
            "id": 8,
            "name": "Steak",
            "price": 15.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?steak"
          },
          {
            "id": 9,
            "name": "Caesar Salad",
            "price": 6.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?caesar_salad"
          },
          {
            "id": 10,
            "name": "Fish and Chips",
            "price": 8.49,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?fish_and_chips"
          },
          {
            "id": 11,
            "name": "Ramen",
            "price": 9.49,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?ramen"
          },
          {
            "id": 12,
            "name": "Burrito",
            "price": 7.49,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?burrito"
          },
          {
            "id": 13,
            "name": "Pho",
            "price": 8.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?pho"
          },
          {
            "id": 14,
            "name": "Pad Thai",
            "price": 9.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?pad_thai"
          },
          {
            "id": 15,
            "name": "Gyro",
            "price": 6.49,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?gyro"
          },
          {
            "id": 16,
            "name": "Ice Cream",
            "price": 3.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?ice_cream"
          },
          {
            "id": 17,
            "name": "Smoothie",
            "price": 4.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?smoothie"
          },
          {
            "id": "18",
            "name": "Apple Pie",
            "price": 4.49,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?apple_pie"
          },
          {
            "id": 19,
            "name": "Chocolate Cake",
            "price": 5.49,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?chocolate_cake"
          },
          {
            "id": 20,
            "name": "Pancakes",
            "price": 4.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?pancakes"
          },
          {
            "id": 21,
            "name": "Cupcake",
            "price": 2.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?cupcake"
          },
          {
            "id": 22,
            "name": "Crepes",
            "price": 5.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?crepes"
          },
          {
            "id": 23,
            "name": "Club Sandwich",
            "price": 6.99,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?club_sandwich"
          },
          {
            "id": 24,
            "name": "Falafel",
            "price": 5.49,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?falafel"
          },
          {
            "id": 25,
            "name": "Curry",
            "price": 9.49,
            "imgSrc": "https://source.unsplash.com/random/1920x1080/?curry"
          }
        ];
        showMenuItems(menuData);
      });
  }
  
  function showMenuItems(menuItems) {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = ''; // Clear previous menu items
  
    menuItems.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
        menuItem.style.backgroundColor='light gray';

  
      const itemImage = document.createElement('img');
      itemImage.classList.add('item-image');
      itemImage.src = item.imgSrc;
      itemImage.alt = item.name;
      itemImage.style.width = '300px';
      itemImage.style.height = '200px';
      menuItem.appendChild(itemImage);

      const itemName = document.createElement('h3');
      itemName.textContent = item.name;
      menuItem.appendChild(itemName);
  
      const itemPrice = document.createElement('p');
      itemPrice.classList.add('price');
      itemPrice.textContent = '$' + item.price.toFixed(2);
      menuItem.appendChild(itemPrice);

      const addButton = document.createElement('div');
      addButton.classList.add('add-button');
      addButton.textContent = 'Add';
      menuItem.appendChild(addButton);
  
      menuContainer.appendChild(menuItem);
    });
  }
  
  // Call the showMenuItems() function with the JSON data

  
// Function to take an order
function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = {
                burgers: ['Burger 1', 'Burger 2', 'Burger 3']
            };
            resolve(order);
        }, 2500);
    });
}

// Function for order preparation
function orderPrep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderStatus = {
                order_status: true,
                paid: false
            };
            resolve(orderStatus);
        }, 1500);
    });
}

// Function for payment
function payOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const paymentStatus = {
                order_status: true,
                paid: true
            };
            resolve(paymentStatus);
        }, 1000);
    });
}

// Function to show "Thank you" message
function thankYou() {
    alert('Thank you for eating with us today!');
}

// Function to handle promises in sequence
async function handlePromises() {
    await getMenu();
    const order = await takeOrder();
    console.log('Order:', order);
    const orderStatus = await orderPrep();
    console.log('Order Status:', orderStatus);
    const paymentStatus = await payOrder();
    console.log('Payment Status:', paymentStatus);
    if (paymentStatus.paid) {
        thankYou();
    }
}

// Load the screen and start handling promises
handlePromises();