# Indie Brew

This project was built as part of a challenge. It is a **static Next.js application** exported using `next export`.

## 📂 Project Structure

- **`lib/assets/`** – All assets (images, logos, icons) are stored here.
- **`pages/`** – Main pages of the application.
- **`components/`** – Reusable UI components.
- **`styles/`** – Global and component-specific styles.

## 🚀 Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ibada13/indie-brew.git
   cd indie-brew
   ```

2. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Build & export the static site:
   ```bash
   pnpm build && pnpm export
   ```

## 🖼️ Assets Location
All images, logos, and other assets are stored in the `lib/assets/` directory. If you encounter missing assets, ensure the correct import path:
```js
import Logo from '@/lib/assets/logo.svg';
```

## 📌 Notes
- The app does **not** use API routes (static export only).
- Ensure your environment supports **Node.js 16+**.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

