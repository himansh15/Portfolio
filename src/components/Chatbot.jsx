import { useRef, useState, useEffect } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const SUGGESTIONS = [
  "Show me projects",
  "Tell me about your skills",
  "Do you have internship experience?",
  "What technologies do you use?",
  "Where did you study?",
  "How can I contact you?",
];

function getBotReply(message) {
  const lower = message.toLowerCase();
  if (lower.includes("project")) {
    return (
      <>
        You can check out my projects here:{" "}
        <a href="#projects" className="text-cyan-600 underline">Projects</a>
      </>
    );
  }
  if (lower.includes("skill")) {
    return "I'm skilled in React, Three.js, TailwindCSS, and modern web technologies.";
  }
  if (lower.includes("internship")) {
    return "Yes! I have internship experience at [Your Previous Company/Institution].";
  }
  if (lower.includes("technolog")) {
    return "I use React, Three.js, TailwindCSS, Vite, and more!";
  }
  if (lower.includes("study") || lower.includes("education")) {
    return "I studied at [Your University/College] and have a background in [Your Field].";
  }
  if (lower.includes("contact")) {
    return (
      <>
        You can <a href="#contact" className="text-cyan-600 underline">contact me via this form</a>,
        or leave a message here!
      </>
    );
  }
  if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) {
    return "Hello! How can I assist you about my portfolio?";
  }
  return "I'm sorry, I didn't get that. You can ask about projects, skills, contact, studies, or internships!";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: (
        <>
          <b>Hi! I’m a bot here to introduce you to Himanshu Ranjan's portfolio.</b>
          <br />
          Ask me about sections, tech, or leave a message!
          <br />
        </>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const chatContentRef = useRef(null);

  const addMessage = (text, from = "user") => {
    setMessages((m) => [...m, { from, text }]);
  };

  const handleUserMessage = (text) => {
    addMessage(text, "user");

    // Basic check for send-message intent
    if (text.toLowerCase().startsWith("message:")) {
      addMessage(
        "Thank you! Your message will be read soon. (Demo: connect this with your backend/email)",
        "bot"
      );
      return;
    }

    // Navigation (quick link via chat)
    if (["about", "project", "contact"].some((kw) => text.toLowerCase().includes(kw))) {
      addMessage(getBotReply(text), "bot");
      return;
    }

    // FAQ/Other
    addMessage(getBotReply(text), "bot");
  };

  const handleSend = (e) => {
    e?.preventDefault?.();
    if (input.trim() === "") return;
    handleUserMessage(input.trim());
    setInput("");
  };

  // When clicking a suggestion, send it as a user message immediately:
  const handleSuggestionClick = (s) => {
    setInput(""); // Optionally clear any pending input
    handleUserMessage(s);
  };

  // Scroll to bottom of chat on new message
  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages, open]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="bg-white text-gray-900 shadow-lg rounded-2xl w-80 mb-3 flex flex-col border border-gray-200">
          {/* Robot image and Header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-100">
            <span className="flex-shrink-0">
              <img
                src="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f916.svg"
                alt="Robot"
                className="w-7 h-7"
                loading="lazy"
              />
            </span>
            <div className="font-semibold">Chatbot Assistant</div>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-gray-800 transition ml-auto"
              aria-label="Close chatbot"
            >
              ✕
            </button>
          </div>
          {/* Chat Content */}
          <div
            ref={chatContentRef}
            className="my-chatbot-content flex-1 overflow-y-auto px-4 py-2 max-h-64 space-y-2"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${
                    msg.from === "bot"
                      ? "bg-gray-100 text-gray-900"
                      : "bg-cyan-500 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          {/* Suggestions */}
          <div className="px-4 pb-2 flex flex-wrap gap-2">
            {SUGGESTIONS.map((s, idx) => (
              <button
                key={idx}
                type="button"
                className="bg-gray-200 hover:bg-cyan-200 text-xs text-gray-900 rounded-full px-3 py-1 transition"
                onClick={() => handleSuggestionClick(s)}
                tabIndex={0}
              >
                {s}
              </button>
            ))}
          </div>
          {/* Chat Input */}
          <form
            onSubmit={handleSend}
            className="px-2 py-2 border-t flex gap-2 bg-gray-50"
            autoComplete="off"
          >
            <input
              type="text"
              name="chatbot-input"
              aria-label="Chat message"
              placeholder='Type your question, or start with "Message: ..." to send a message!'
              className="flex-1 rounded px-3 py-2 text-xs outline-none border border-gray-200 bg-white"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) handleSend(e);
              }}
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          bg-cyan-500
          hover:bg-cyan-600
          text-white
          p-3
          rounded-full
          shadow-lg
          transition
          flex items-center justify-center
          focus-visible:ring-2 focus-visible:ring-cyan-400
          hover:scale-110 active:scale-95
          hover:shadow-cyan-300/40
        "
        aria-label="Open chatbot"
      >
        <IoChatbubbleEllipsesOutline size={28} />
      </button>
    </div>
  );
}