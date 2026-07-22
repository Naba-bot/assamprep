export default function Footer() {
    return (
      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} AssamPrep. All rights reserved.
        </div>
      </footer>
    );
  }