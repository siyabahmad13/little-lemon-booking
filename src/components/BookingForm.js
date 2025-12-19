import { useState } from "react";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !time || !email) {
      setError("Please fill all required fields");
      return;
    }

    alert("Table booked successfully!");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form">
      <h2>Reserve a Table</h2>

      <label>
        Date:
        <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      </label>

      <label>
        Time:
        <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
      </label>

      <label>
        Guests:
        <input type="number" min="1" max="10" value={guests}
          onChange={e => setGuests(e.target.value)} />
      </label>

      <label>
        Email:
        <input type="email" value={email}
          onChange={e => setEmail(e.target.value)} required />
      </label>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Book Table</button>
    </form>
  );
}

export default BookingForm;
