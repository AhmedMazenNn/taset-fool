# Taset Fool Website

Welcome to the official repository for the **Taset Fool** website!  
Taset Fool is a local food store in Alexandria, Egypt, known for its delicious dishes and unique flavors. This website was designed to showcase the history, location, menu, and more, providing a seamless and engaging user experience.

---

## **About the Project**

Hi, I'm **Eng. Ahmed Mazen**, and I developed this website for Taset Fool.  
The goal of this project was to create a modern, responsive, and user-friendly website that highlights the store's offerings and provides an excellent user interface experience.

---

## **Features**

### **Core Features**
- **Responsive Design**: The website is fully responsive and works seamlessly on all devices (desktop, tablet, and mobile).
- **Interactive Menu**: A dynamic menu showcasing Taset Fool's dishes, complete with descriptions and prices.
- **Location and History**: A section dedicated to the store's history and location, including an embedded map.
- **Custom UI/UX**: Unique designs and animations to enhance the user experience.
- **Easy Navigation**: Intuitive navigation to help users explore the website effortlessly.

### **User Features**
- **User Authentication**:
  - Users can **login** or **signup** to access personalized features.
  - Secure authentication system to protect user data.
- **Shopping Cart**:
  - Users can **add products to the cart** with smooth, user-friendly animations.
  - Ability to **view the cart**, update quantities, and remove items.
  - **Checkout functionality** to complete purchases (simulated for demonstration purposes).

### **Dynamic Product Management**
- **Dynamic JSON File**:
  - The website uses a `products.json` file to dynamically load products.
  - The store owner can easily **add new products** to the menu by following the same syntax as existing products in the JSON file.
  - Example of adding a new product:
    ```json
    {
      "id": "4",
      "name": "New Dish",
      "price": 50,
      "image": "images/new-dish.jpg",
      "description": "A delicious new dish added to the menu."
    }
    ```

---

## **Technologies Used**

- **Frontend**:
  - HTML
  - CSS
  - Bootstrap
  - Bootstrap JS
  - JavaScript
  - jQuery
- **Backend**:
  - JSON (for dynamic product management)
- **User Authentication**:
  - Simulated using JavaScript (can be integrated with a backend service like Firebase or a custom API in the future).

---
