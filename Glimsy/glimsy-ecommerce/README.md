# Glimsy E-Commerce

Welcome to the Glimsy E-Commerce project! This is a modern e-commerce site for Glimsy, a Kuwait-based scented candle brand. The project features a sleek design with both light and dark themes, ensuring a pleasant shopping experience for users.

## Features

- **Responsive Design**: The site is fully responsive, providing an optimal viewing experience across a wide range of devices.
- **Light and Dark Themes**: Users can easily switch between light and dark themes to suit their preferences.
- **Product Catalog**: A mock catalog of scented candles is included, showcasing various products with detailed descriptions.
- **Shopping Cart**: Users can add products to their cart and proceed to checkout seamlessly.

## Project Structure

The project is organized as follows:

```
glimsy-ecommerce
├── public
│   └── index.html          # Main HTML entry point
├── src
│   ├── main.tsx           # Entry point for the React application
│   ├── App.tsx            # Main App component with routing
│   ├── index.css          # Global CSS styles
│   ├── assets              # Custom assets like fonts
│   ├── components          # Reusable components (Header, Footer, ProductCard, etc.)
│   ├── pages               # Page components (Home, Shop, ProductPage, etc.)
│   ├── context             # Context for cart and theme management
│   ├── hooks               # Custom hooks for cart and theme
│   ├── data                # Mock product data
│   ├── styles              # CSS styles for themes and utilities
│   ├── utils               # Utility functions for formatting and currency
│   └── types               # TypeScript types and interfaces
├── package.json            # NPM configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.cjs     # Tailwind CSS configuration
├── postcss.config.cjs      # PostCSS configuration
├── .eslintrc.cjs           # ESLint configuration
├── .prettierrc             # Prettier configuration
└── README.md               # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd glimsy-ecommerce
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for checking out the Glimsy E-Commerce project! We hope you enjoy exploring our scented candle offerings.