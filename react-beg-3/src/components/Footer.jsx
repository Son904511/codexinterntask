// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500 mt-auto">
      <p>© {new Date().getFullYear()} MySite. All rights reserved.</p>
    </footer>
  );
}
