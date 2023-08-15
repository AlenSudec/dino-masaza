import React from 'react';

export function ReservationSection() {
    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>

            <section id="reserve" class="reservation-section">
                <h2>Make a Reservation</h2>
                <form class="reservation-form" onSubmit={onSubmit}>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label for="mobile">Mobile Phone:</label>
                    <input type="tel" id="mobile" name="mobile" required />

                    <label for="date">Date:</label>
                    <input type="date" id="date" name="date" required />

                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    )
}