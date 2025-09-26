import React, { useState } from "react";
import OpenAI from "openai";
import Hnav from "./Hnav";



const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "You are a helpful assistant",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [result, setResult] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || !age || !sex) {
      alert("Please fill in all fields.");
      return;
    }

    const prompt = `You are a helpful AI health assistant. Based on the following user symptoms, suggest 3–5 possible medical conditions.

AGE: ${age}
SEX: ${sex}
SYMPTOMS: "${input}"

Present each suggestion as a clearly separated card in text block format. Each card should include:
- CONDITION NAME
- Description
- Severity (low, medium, high)
- Recommendation

Format each card like this:


Condition Name: [Name] (un uppercase and in orange) 
Description: [Brief explanation]  
Severity: Medium  
Recommendation: [Advice]  


for eac response, Do not provide a diagnosis. Always recommend consulting a healthcare professional. Format all cards consistently and clearly. Use line breaks and separators to make each card visually distinct.`;

    const newMessages = [...messages, { role: "user", content: prompt }];
    setMessages(newMessages);
    setInput("");
    setAge("");
    setSex("");
    setLoading(true);

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: newMessages,
      });

      const reply = response.choices[0].message.content;
      setMessages([...newMessages, { role: "assistant", content: reply }]);
      setResult(reply);
    } catch (error) {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Something went wrong, try again later!",
        },
      ]);
      setResult("Something went wrong, try again later!");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <Hnav/> <br /><hr /><br />
      <form
        onSubmit={sendMessage}
        className="space-y-6 p-9 md:mx-20 sm:mx-9 shadow-2xl shadow-gray-400 bg-slate-100 rounded-xl"
      >
        <h2 className="text-2xl font-bold text-slate-800">Symptom Assistant</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-slate-700 mb-1 "
            >
              Age
            </label>
            <input
              type="text"
              className="block w-full px-3 py-2 bg-slate-50 border border-orange-300 rounded-md shadow-sm sm:text-sm"
              placeholder="e.g., 35"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="sex"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Sex
            </label>
            <select
              className="block w-full px-3 py-2 bg-slate-50 border border-orange-300 rounded-md shadow-sm sm:text-sm"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="symptoms"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Describe your symptoms
          </label>
          <textarea
            rows={6}
            className="block w-full px-3 py-2 bg-slate-50 border border-orange-300 rounded-md shadow-sm sm:text-sm"
            placeholder="e.g., I have a sore throat, a runny nose, and I've been coughing for 3 days."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-md shadow-sm disabled:bg-slate-400 disabled:cursor-not-allowed transition"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Submit"}
        </button>

        {/* {result && (
          <div className="mt-6 bg-white p-4 rounded-md shadow">
            <h3 className="text-lg font-semibold text-slate-800 mb-2">AI Suggestions:</h3>
            <pre className="whitespace-pre-wrap text-sm text-slate-700">{result}</pre>
          </div>
        )} */}
      </form>

      <div className="mt-10 w-full max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-6">
        <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-4 tracking-tight">
          Assistant Response
        </h2>
        <div className="h-96 overflow-y-auto space-y-3 p-4 bg-white/5 rounded-xl border border-white/20">
          {messages
            .filter((msg) => msg.role !== "system")
            .map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed animate-fadeIn flex flex-col ${
                  msg.role === "user"
                    ? "bg-orange-300 text-white ml-auto rounded-br-none shadow-lg"
                    : "bg-white text-gray-800 mr-auto rounded-bl-none shadow"
                }`}
              >
                <strong className="flex flex-col text-xs opacity-70 mb-1">
                  {msg.role === "user" ? "You" : "Assistant"}
                </strong>
                {msg.content}
              </div>
            ))}
          {loading && (
            <p className="text-sm text-gray-400 italic animate-pulse">
              Assistant is thinking...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
