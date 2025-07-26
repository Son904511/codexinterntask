import { useState, useEffect } from "react";
import axios from "axios";

const languageMap = {
  hi: "Hindi",
  fr: "French",
  es: "Spanish",
  de: "German",
  ar: "Arabic",
};

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLang, setTargetLang] = useState("hi");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("translationHistory");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("translationHistory", JSON.stringify(history));
  }, [history]);

  const translateText = async () => {
    if (!inputText.trim()) {
      setTranslatedText("❌ Please enter some text.");
      return;
    }

    setLoading(true);
    try {
      const options = {
        method: "POST",
        url: "https://google-translate113.p.rapidapi.com/api/v1/translator/text",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
          "x-rapidapi-host": "google-translate113.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          from: "en",
          to: targetLang,
          text: inputText,
        },
      };

      const response = await axios.request(options);
      const translated = response.data.trans;
      setTranslatedText(translated);

      setHistory([
        {
          input: inputText,
          output: translated,
          lang: targetLang,
          time: new Date().toLocaleString(),
        },
        ...history.slice(0, 9),
      ]);
    } catch (error) {
      console.error(error);
      setTranslatedText("⚠️ Error translating text.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("translationHistory");
  };

  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-indigo-100 to-purple-200 text-gray-900"
      } min-h-screen px-4 py-6`}
    >
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-300">
            🌐 Text Translator
          </h1>
          <button
            onClick={toggleDarkMode}
            className="text-sm bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <textarea
          rows={4}
          placeholder="Enter English text..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full mb-4 p-4 rounded-lg border-2 border-indigo-300 focus:ring-2 focus:ring-indigo-400 resize-none dark:bg-gray-700 dark:text-white"
        />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="p-3 border-2 border-indigo-300 rounded-lg w-full md:w-1/3 dark:bg-gray-700 dark:text-white"
          >
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="de">German</option>
            <option value="ar">Arabic</option>
          </select>

          <button
            onClick={translateText}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all w-full md:w-auto"
          >
            {loading ? "Translating..." : "Translate"}
          </button>
        </div>

        <div className="relative bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 p-4 rounded-lg min-h-[80px]">
          <p className="whitespace-pre-line text-gray-800 dark:text-white">
            {translatedText || "📝 Translation will appear here."}
          </p>
          {translatedText && (
            <button
              onClick={copyToClipboard}
              className="absolute top-2 right-2 text-xs bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
            >
              📋 Copy
            </button>
          )}
        </div>

        {history.length > 0 && (
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                🕓 Translation History
              </h2>

              <button
                onClick={clearHistory}
                className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Clear
              </button>
            </div>
            <ul className="max-h-48 overflow-y-auto space-y-2 text-sm">
              {history.map((h, i) => (
                <li
                  key={i}
                  className="bg-gray-200 text-gray-900 dark:bg-gray-600 dark:text-white p-2 rounded"
                >
                  <div>
                    <strong>Input:</strong> {h.input}
                  </div>
                  <div>
                    <strong>Output:</strong> {h.output}
                  </div>
                  <div>
                    <strong>To:</strong> {languageMap[h.lang] || h.lang}
                    <span className="float-right">{h.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Translator;
