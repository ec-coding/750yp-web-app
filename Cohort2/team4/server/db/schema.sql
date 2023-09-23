DROP DATABASE IF EXISTS dsd_eventmgmt;
CREATE DATABASE dsd_eventmgmt;
USE dsd_eventmgmt;

CREATE TABLE users (
    user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(30) UNIQUE NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    auth_key VARCHAR(255) NOT NULL
);

CREATE TABLE events (
    event_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    short_description VARCHAR(255),
    long_description MEDIUMTEXT,
    city VARCHAR(255),
    state VARCHAR(255),
    country VARCHAR(255),
    address VARCHAR(255),
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    host INT,
);

-- CREATE TABLE event_attendee (
--     attendance_id INT NOT NULL PRIMARY KEY,
--     event_id INT,
--     user_id INT,
--     speaker BOOL,
--     date_registered TIMESTAMP,
--     FOREIGN KEY (event_id) REFERENCES events(event_id),
--     FOREIGN KEY (user_id) REFERENCES users(id)
-- );

-- CREATE TABLE ticket (
--     ticket_id INT AUTO_INCREMENT PRIMARY KEY,
--     ticket_type INT,
--     belongs_to INT,
--     FOREIGN KEY (ticket_type) REFERENCES ticket_type(type_id),
--     FOREIGN KEY (belongs_to) REFERENCES users(id)
-- );

-- CREATE TABLE ticket_type (
--     type_id INT PRIMARY KEY,
--     event_id INT,
--     ticket_name VARCHAR(255),
--     ticket_price DECIMAL(10, 2),
--     ticket_description VARCHAR(255),
--     FOREIGN KEY (event_id) REFERENCES events(event_id)
-- );
