CREATE DATABASE IF NOT EXISTS blog_db;
USE blog_db;

CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255),
    role ENUM('User', 'Admin') NOT NULL
);

CREATE TABLE IF NOT EXISTS Blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    text TEXT NOT NULL,
    author_id INT NOT NULL,
    title VARCHAR(64) NOT NULL,
    FOREIGN KEY (author_id) REFERENCES Users(id)
);

CREATE TABLE IF NOT EXISTS Tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS Blog_Tags (
    blog_id INT NOT NULL,
    tag_id INT NOT NULL,
    PRIMARY KEY(blog_id, tag_id),
    CONSTRAINT fk_at_blog
        FOREIGN KEY (blog_id) REFERENCES Blogs(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_at_tag
        FOREIGN KEY (tag_id) REFERENCES Tags(id)
        ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO Tags (text) VALUES 
    ('Software Development'), 
    ('DevOps'),
    ('AI'),
    ('History'),
    ('Game Development'),
    ('Pixel Art'),
    ('Security'),
    ('Cloud Technologies'),
    ('Books'),
    ('Gaming'),
    ('Films');

INSERT INTO Users (username, email, password, role) VALUES 
    ('admin', 'asdfafd@gmail.com', '123456', 'Admin');

INSERT INTO Blogs (date, text, author_id, title) VALUES
    (CURRENT_DATE, 'fasdfdasfsadf adfadsfdasf afdasfsd afsd', 1, 'First Title');