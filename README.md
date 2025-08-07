# 📘 BoostFlow — Next.js 14 Landing Page Template

**BoostFlow** is a high-converting landing page template built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. It’s designed for startups, marketers, and developers looking for a fast, clean, and responsive starting point for any digital product.

---

## 📂 Folder Structure

```
project-boostflow/
├── components/
│   ├── Hero.tsx
│   └── ...other components
├── public/
│   └── images/
│       └── hero.webp
├── styles/
│   └── globals.css
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## 🚀 Features

- ⚡ Built with **Next.js 14 (App Router)**
- 🎨 Styled with **Tailwind CSS 3**
- 🎥 Smooth animations using **Framer Motion**
- 💡 Ready-to-use components (Hero, Features, Testimonials, FAQ, Newsletter)
- 📱 Fully **responsive** and mobile-first design
- 🧩 Easy customization with clean code and Tailwind utility classes

---

## 🧠 Component Overview

### ✅ Hero Section (`components/Hero.tsx`)

- Gradient background with a two-tone text heading
- Responsive typography
- Highlighted text (`bg-clip-text`) and color emphasis (`text-amber-300`)
- Animated image preview with `Framer Motion`
- Hero image wrapped in soft glowing background using blur and opacity

#### 💡 To Customize:

- Change `text` inside the heading and paragraph as needed
- Replace the `hero.webp` image inside `/public/images/` with your own
- Adjust colors by editing the Tailwind gradient classes

---

## 💾 Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/project-boostflow.git
   ```

2. Navigate to the project folder:
   ```bash
   cd project-boostflow
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

---

## 🎨 Customization

You can easily change colors, fonts, spacing, and more by editing:

- `tailwind.config.ts` — for theme tokens and extensions
- `globals.css` — for any global styles
- `components/*.tsx` — for markup and Tailwind utility class changes

---

## 🖼️ Image Optimization

- All images are stored in `/public/images/`
- Use `.webp` or `.avif` for best performance
- The `<Image />` component from `next/image` is used for automatic optimization

---

## 🌍 SEO & Performance

- `<Head>` tags can be added in `app/layout.tsx` or via metadata for better SEO
- Optimized for Lighthouse performance (score improvements depend on content size)

---

## 📦 Deployment

You can deploy this project using **Vercel**:

```bash
vercel
```

---

## 📌 Notes

- Ensure that your content is royalty-free or you have the right to use it.
- Replace all example images and text with your project-specific content before uploading to ThemeForest.
- All code follows ThemeForest submission standards: modular, well-commented, and easy to customize.

---

## 📞 Support

If you have any issues setting up or customizing this theme, feel free to open an issue or contact the author via the marketplace support tab.