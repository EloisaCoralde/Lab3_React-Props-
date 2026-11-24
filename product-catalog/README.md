# Product Catalog — Laboratory Exercise 3

A responsive mini product catalog demonstrating React props, component reuse, callback props, conditional rendering, `children`, and rendering lists with `.map()`.

## Requirements

- Node.js (LTS recommended)
- npm

## Run the project

1. Extract the ZIP file.
2. Open the `product-catalog` folder in VS Code.
3. Open a terminal in that folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL printed in the terminal (usually `http://localhost:5173`).

To verify a production build, run `npm run build`.

## Project structure

```text
product-catalog/
├── public/
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   └── ProductCard.css
│   ├── data/
│   │   └── products.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Guide questions

1. **What is the difference between props and state?**  
   Props are values passed from a parent component to a child component. State is data a component manages and can update over time. In this project, product details are passed as props, while the cart count and last-added product are stored as state in `App`.

2. **Why can a child component not modify the props it receives?**  
   Props are read-only. Keeping them read-only makes data flow predictable and lets the parent remain responsible for the values it passes to its children.

3. **How does the `onAddToCart` callback allow data to flow from child to parent even though props only flow downward?**  
   The parent passes a function to the child as a prop. When the user clicks the button, the child calls that function and sends the product title. The function runs in the parent, allowing the parent to update its cart state.

4. **Why is the `key` prop required when rendering a list with `.map()`? What could happen if it is missing or duplicated?**  
   A key gives each rendered item a stable identity so React can track items between renders. Missing or duplicated keys can cause warnings and make updates or reused elements behave unexpectedly.

5. **What does the `children` prop allow you to do that a normal prop does not?**  
   `children` lets a component receive content placed between its opening and closing tags. This makes it easy to place flexible content, such as a New or Sale badge, inside a reusable product card.

## Git and GitHub submission

Run these commands from the project folder, replacing the URL with the URL of your own **private** GitHub repository:

```bash
git init
git add .
git commit -m "Initial Vite project setup"
git add src/data/products.js
git commit -m "Add sample product data"
git add src/components
git commit -m "Create reusable ProductCard component"
git add src/App.jsx
git commit -m "Add cart callback and running message"
git add src
git commit -m "Style responsive product catalog"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/product-catalog.git
git push -u origin main
```

Create the GitHub repository with **Private** visibility. Do not add collaborators unless you choose to grant them access.
