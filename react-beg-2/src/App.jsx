import { useState, useEffect, useCallback } from "react";
import QRCode from "react-qr-code";

const App = () => {
  const [randomString, setRandomString] = useState("");
  const [length, setLength] = useState(10);
  const [includeLetters, setIncludeLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);

  const generateRandomString = useCallback(() => {
    let chars = "";
    if (includeLetters)
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_+[]{}<>?";

    if (!chars) {
      setRandomString("⚠️ Select at least one character type!");
      return;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setRandomString(result);
    setHistory((prev) => [result, ...prev.slice(0, 4)]);
  }, [length, includeLetters, includeNumbers, includeSymbols]);

  useEffect(() => {
    generateRandomString();
  }, [generateRandomString]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(randomString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleDark = () => setDarkMode(!darkMode);

  const modeClasses = darkMode
    ? "bg-gray-900 text-white"
    : "bg-white text-gray-800";

  const containerClasses = darkMode
    ? "bg-gradient-to-br from-gray-800 to-gray-900"
    : "bg-gradient-to-br from-purple-100 to-indigo-200";

  return (
    <div
      className={`min-h-screen ${containerClasses} flex items-center justify-center px-4 transition-colors duration-300`}
    >
      <div
        className={`shadow-2xl rounded-2xl p-8 w-full max-w-lg ${modeClasses}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">🔐 Random String Generator</h1>
          <button
            onClick={toggleDark}
            className="text-sm px-3 py-1 rounded bg-indigo-500 hover:bg-indigo-600 text-white"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Output */}
        <div
          className={`font-mono p-4 rounded-lg mb-4 border min-h-[60px] break-all ${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          {randomString}
        </div>

        {/* Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium mb-1">Length</label>
            <input
              type="number"
              min="1"
              max="100"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeLetters}
              onChange={() => setIncludeLetters(!includeLetters)}
              id="letters"
              className="accent-indigo-600"
            />
            <label htmlFor="letters">Letters</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              id="numbers"
              className="accent-indigo-600"
            />
            <label htmlFor="numbers">Numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              id="symbols"
              className="accent-indigo-600"
            />
            <label htmlFor="symbols">Symbols</label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button
            onClick={generateRandomString}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Generate
          </button>
          <button
            onClick={copyToClipboard}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {copied ? "✅ Copied!" : "📋 Copy"}
          </button>
        </div>

        {/* QR Code */}
        {randomString && !randomString.startsWith("⚠️") && (
          <div className="flex flex-col items-center gap-2 mb-6">
            <QRCode value={randomString} size={128} />
            <p className="text-sm text-gray-500">QR Code of string</p>
          </div>
        )}

        {/* History */}
        {history.length > 1 && (
          <div>
            <h2 className="font-semibold mb-2">Previous Strings</h2>
            <ul className="text-sm list-disc ml-4 text-gray-600 dark:text-gray-300 space-y-1">
              {history.slice(1).map((str, i) => (
                <li key={i}>{str}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
