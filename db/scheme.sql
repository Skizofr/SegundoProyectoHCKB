CREATE DATABASE IF NOT EXISTS secondProject;

USE secondProject;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(250),
    password_hash VARCHAR(250)
);

INSERT INTO users (name, email, password_hash)
VALUES
('User1', 'user1@example.com', 'hash1'),
('User2', 'user2@example.com', 'hash2'),
('User3', 'user3@example.com', 'hash3');

CREATE TABLE login (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(250),
    password_hash VARCHAR(250)
);

INSERT INTO login (email, password_hash)
VALUES
('user1@example.com', 'hash1');

CREATE TABLE signIn (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(250),
    password_hash VARCHAR(250)
);

INSERT INTO signIn (name, email, password_hash)
VALUES
('User1', 'user1@example.com', 'hash1');

CREATE TABLE comments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    commentText TEXT,
    commentDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id)
);

INSERT INTO comments (userId, commentText, commentDate)
VALUES
(1, 'commentTextUser1', CURRENT_TIMESTAMP),
(2, 'commentTextUser2', CURRENT_TIMESTAMP),
(1, 'commentTextUser1', CURRENT_TIMESTAMP);

CREATE TABLE votes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT,
    commentId INT,
    vote INT,
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (commentId) REFERENCES comments(id)
);

ALTER TABLE comments
ADD COLUMN totalVotes INT DEFAULT 0,
ADD COLUMN points INT DEFAULT 0;

INSERT INTO votes (userId, commentId, vote)
VALUES (1, 1, 1);

SELECT
    comments.*,
    SUM(votes.vote) AS points,
    COUNT(votes.id) AS totalVotes
FROM
    comments
    LEFT JOIN votes ON comments.id = votes.commentId
WHERE
    comments.id = 1;

