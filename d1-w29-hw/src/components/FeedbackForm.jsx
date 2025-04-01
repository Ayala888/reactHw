import React, { useState } from 'react';


export default function FeedbackForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState("");
    const [sebep, setSebep] = useState("");
    const [message, setMessage] = useState("");

    const nameValidation = /^[A-Za-zА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘә\s'-]+$/;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nameValidation.test(name)) {
            setMessage("❌ Атыңызды тек әріптермен жазыңыз!");
            return;
        }
        if (!email.includes("@")) {
            setMessage("❌ Email-ді дұрыс форматта енгізіңіз!");
            return;
        }
        if (feedback.length < 20) {
            setMessage("❌ Пікір кем дегенде 20 таңбадан тұруы керек!");
            return;
        }
        if (!rating) {
            setMessage("❌ Бағалауды таңдаңыз!");
            return;
        }
        if (rating < 3 && sebep.length < 5) {
            setMessage("❌ Төмен баға берген себебіңізді толтырыңыз!");
            return;
        }

        setMessage("✅ Рахмет, сіздің пікіріңіз маңызды!"); // Сәтті хабарлама
        setName("");
        setEmail("");
        setFeedback("");
        setRating("");
        setSebep("");
    };

    return (
        <div className="feedback-container">
            <h1>Кері байланыс формасы</h1>
            <form onSubmit={handleSubmit} className="feedback-form">
                <div className="form-group">
                    <label htmlFor="name">Аты-жөні:</label>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        value={email}
                        placeholder="example@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="feedback">Пікіріңіз:</label>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        required>
                    </textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="rating">Бағаңызды қойыңыз:</label>
                    <select value={rating} onChange={(e) => setRating(e.target.value)} required>
                      <option value="5">⭐⭐⭐⭐⭐ (Өте жақсы)</option>
                      <option value="4">⭐⭐⭐⭐ (Жақсы)</option>
                      <option value="3">⭐⭐⭐ (Қанағаттанарлық)</option>
                      <option value="2">⭐⭐ (Нашар)</option>
                      <option value="1">⭐ (Өте нашар)</option>
                    </select>
                </div>

                {rating && rating < 3 && (
                    <div className="form-group">
                        <label htmlFor="sebep">Не себепті төмен бағаладыңыз?</label>
                        <textarea
                            value={sebep}
                            onChange={(e) => setSebep(e.target.value)}
                            required
                        ></textarea>
                    </div>
                )}

                {message && <p className={message.includes("❌") ? "error-message" : "success-message"}>{message}</p>}

                <button type="submit" className="submit-button">Жіберу</button>
            </form>
        </div>
    );
}

