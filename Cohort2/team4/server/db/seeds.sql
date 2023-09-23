-- Seed data for the 'users' table
INSERT INTO users (id, email, first_name, last_name)
VALUES
    (1, 'john@example.com', 'John', 'Doe'),
    (2, 'jane@example.com', 'Jane', 'Smith'),
    (3, 'mike@example.com', 'Mike', 'Johnson');

-- Seed data for the 'events' table
INSERT INTO events (name, short_description, long_description, city, state, country, address, start_time, end_time, host) 
VALUES 
    ('Tech Conference 2023', 'Cutting-edge tech talks', 'Join us for a tech conference featuring talks on AI, blockchain, and more.', 'New York City', 'New York', 'United States', '123 Tech Street', '2023-07-20 09:00:00', '2023-07-21 18:00:00', 1),
    ('Music Festival 2023', 'Live performances and fun', 'A weekend of live music with top bands and exciting activities.', 'Los Angeles', 'California', 'United States', '456 Music Avenue', '2023-07-28 16:00:00', '2023-07-30 23:59:00', 2),
    ('Art Exhibition "Expressions"', 'Artworks by local artists', 'Explore various art pieces that express emotions and creativity.', 'London', NULL, 'United Kingdom', '789 Art Gallery Road', '2023-08-05 10:00:00', '2023-08-10 19:00:00', 3),
    ('Food Festival 2023', 'Cuisine from around the world', 'Taste the finest dishes from diverse cultures in this food extravaganza.', 'Sydney', 'New South Wales', 'Australia', '10 Foodie Lane', '2023-08-15 12:00:00', '2023-08-17 22:00:00', 1);

-- -- Seed data for the 'event_attendee' table
-- INSERT INTO event_attendee (attendance_id, event_id, user_id, speaker, date_registered)
-- VALUES
--     (1, 1, 2, 0, '2023-10-01 10:15:00'),
--     (2, 1, 3, 1, '2023-09-28 14:45:00'),
--     (3, 2, 1, 0, '2023-09-15 09:30:00'),
--     (4, 2, 3, 0, '2023-09-20 16:20:00'),
--     (5, 3, 1, 0, '2023-10-25 11:00:00'),
--     (6, 3, 2, 0, '2023-10-30 08:45:00');

-- -- Seed data for the 'ticket' table
-- INSERT INTO ticket (ticket_id, ticket_type, belongs_to)
-- VALUES
--     (1, 1, 2),
--     (2, 2, 3),
--     (3, 1, 1),
--     (4, 2, 1),
--     (5, 3, 3);

-- -- Seed data for the 'ticket_type' table
-- INSERT INTO ticket_type (type_id, event_id, ticket_name, ticket_price, ticket_description)
-- VALUES
--     (1, 1, 'Standard', 100.00, 'Access to all conference sessions'),
--     (2, 1, 'VIP', 250.00, 'Priority seating and exclusive networking opportunities'),
--     (3, 2, 'Beginner Workshop', 50.00, 'Introduction to basic concepts'),
--     (4, 2, 'Advanced Workshop', 75.00, 'In-depth coverage of advanced topics'),
--     (5, 3, 'General Admission', 25.00, 'Entry to the networking event');