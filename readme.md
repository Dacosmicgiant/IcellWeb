# Innovation Cell Website 🚀

A modern, responsive website for the College Innovation Cell built with React and Tailwind CSS. This platform serves as a hub for innovation, connecting students, mentors, and resources.

## 🌟 Features

- **Modern Design**: Clean and responsive UI built with React and Tailwind CSS
- **Interactive Components**: Dynamic animations and user-friendly interfaces
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Fast loading times and smooth animations

### 📱 Key Pages

- **Home**: Dynamic landing page with animated hero section
- **About**: Team information and mission statement
- **Events**: Upcoming and past events with filtering
- **Projects**: Showcase of student projects with category filtering
- **Blog**: Latest news and articles
- **Developers**: Meet the development team
- **Contact**: Get in touch form with interactive map

## 🛠️ Technologies Used

- React 18
- React Router v6
- Tailwind CSS
- Lucide Icons
- PostCSS

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/IcellWeb.git
```

2. Navigate to frontend directory

```bash
cd frontend
npm i
```

3. Open new terminal and navigate to backend

```bash
cd backend
npm i
```

4. Start the development server

- frontend

```bash
cd frontend
npm run start
```

- backend

```bash
cd backend
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
innovation-cell-website/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── home/
│   │   ├── about/
│   │   ├── events/
│   │   ├── projects/
│   │   ├── blog/
│   │   └── contact/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## 🎨 Customization

### Colors

The default color scheme can be modified in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#FFA500", // Orange
        secondary: "#FFFFFF", // White
        accent: "#333333", // Dark Gray
      },
    },
  },
};
```

### Typography

The website uses the following fonts:

- Headings: Poppins
- Body: Roboto
- Additional: Montserrat

## 🔧 Development

### Commands

- `npm run start`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm test`: Run tests

### Adding New Pages

1. Create new component in `src/pages`
2. Add route in `src/routes.jsx`
3. Add navigation link in `src/components/common/Header.jsx`

## 📱 Responsive Design

The website is responsive with breakpoints at:

- Mobile: 320px
- Tablet: 768px
- Desktop: 1024px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👥 Team

- Project Lead: Gaurav Pawar
- Frontend Developer: Gaurav Pawar and Aditya Chauhan
- UI/UX Designer: Vishakha Karande
- Content Writer: Aditya Chauhan

## 📞 Support

For support, email [support@innovationcell.edu] or join our Slack channel.

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- All our contributors and supporters

---

Built with ❤️ by the Innovation Cell Team
