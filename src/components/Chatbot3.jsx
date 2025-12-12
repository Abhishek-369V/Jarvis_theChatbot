import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  const OnChangeHandle = (e) => setInput(e.target.value);

  const OnSubmitHandle = async (e) => {
    e.preventDefault()
    setLoading(true);
    setError(null);
    setHistory((prev) => [...prev, { role: "user", content: input }]);

    if (!input.trim()) {
      setError("⚠️ Please enter a prompt");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent",

        {
          contents: [
            { parts: [
              { 
                text: input 
              }] }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": "AIzaSyBUnRA5VENJYeovNIG-_b2tur7jbVuAzRc",
          },
        }
      );

      const botReply =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response received.";

      setHistory((prev) => [...prev, { role: "bot", content: botReply }]);

    } catch (error) {
      console.error("Error:", error);
      setError("Error fetching Response!...")
    }

    setInput("");
    setLoading(false);
  };

  return (

    <div className="md:mt-5 md:p-4 p-1 mt-1">
      <div className="border rounded-md p-3 md:h-[70vh] sm:h-180 sm:w-90 h-120 w-78 md:w-[75vw] overflow-y-auto bg-gray-50">
        {history.map((msg, i) => (
          <div
            key={i}
            className={`my-2 p-2 rounded-lg ${msg.role === "user"
              ? "bg-indigo-300 text-right"
              : "bg-gray-300 text-left"
              }`}
          >
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        ))}
        {loading && <p className="italic">Thinking...</p>}
        {error && <p className="text-red-600">{error}</p>}
      </div>

      <form onSubmit={OnSubmitHandle} className="flex md:mt-5 mt-2 flex-row md:gap-2 gap-1">

        <div className="flex border rounded-md md:p-2 p-1 md:gap-2 gap-1">
          <input type="file" id="file" hidden />
          <label htmlFor="file">
            <img src="src\assets\Attachment.svg" alt="" className="w-6 md:w-8 border-1 p-0.5 rounded-full cursor-pointer hover:border-gray-700 hover:bg-gray-300" />
          </label>

          <input
          className="md:w-[65vw] w-50 outline-none"
            onChange={OnChangeHandle}
            type="text"
            value={input}
            placeholder="Ask me anything..."
          />
        </div>

        <button
          type="submit"
          className="bg-indigo-500 text-white md:px-4 px-2 rounded-md"
        >
          Generate
        </button>
      </form>

    </div>
  );
};

export default App;
