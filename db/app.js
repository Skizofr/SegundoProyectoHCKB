const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '?LasTreron77?',
  database: 'secondproject',
});

connection.connect((err) => {
  if (err) {
    console.error('Connection to database failed:', err);
    return;
  }
  console.log('Connection to database successful:');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Request failed:', err);
      res.status(500).send('Server error');
      return;
    }
    console.log('Users retrieved:', results);
    res.json(results);
  });
});

app.get('/login', (req, res) => {
  connection.query('SELECT * FROM login', (err, results) => {
    if (err) {
      console.error('Request failed:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});

app.get('/signIn', (req, res) => {
  connection.query('SELECT * FROM signIn', (err, results) => {
    if (err) {
      console.error('Request failed:', err);
      res.status(500).send('Server Error');
      return;
    }
    res.json(results);
  });
});

app.get('/comments', (req, res) => {
  connection.query('SELECT * FROM comments', (err, results) => {
    if (err) {
      console.error('Request failed:', err);
      res.status(500).send('Server Error');
      return;
    }
    res.json(results);
  });
});

app.get('/votes', (req, res) => {
  connection.query('SELECT * FROM votes', (err, results) => {
    if (err) {
      console.error('Request failed:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});

app.post('/comments', (req, res) => {
  const { userId, commentText } = req.body;

  const sql =
    'INSERT INTO comments (userId, commentText, CURRENT_TIMESTAMP) VALUES (?, ?, ?)';
  const values = [userId, commentText, CURRENT_TIMESTAMP];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('Error inserting comment:', err);
      res.status(500).send('Server Error');
      return;
    }

    res.json({
      message: 'Comment created successfully',
      commentId: results.insertId,
    });
  });
});

app.patch('/users/:id', (request, response) => {
  const id = request.params.id;
  const { name, email, password_hash } = request.body;
  if (!name && !email && !password_hash) {
    response.status(400).send('Bad Request');
    return;
  }
  const getUserById = 'SELECT * FROM users WHERE id = ' + id;

  connection.query(getUserById, (err, results) => {
    if (err) {
      response.status(500).send('Error');
      return;
    }
    if (results.length === 0) {
      response.status(404).send('User not found');
      return;
    }
    let updateUsersSQL = 'UPDATE users SET';
    if (!!name) {
      updateUsersSQL += " name = '" + name + "',";
    }
    if (!!email) {
      updateUsersSQL += " email = '" + email + "',";
    }
    if (!!password_hash) {
      updateUsersSQL += " password_hash = '" + password_hash + "',";
    }
    updateUsersSQL = updateUsersSQL.slice(0, -1);
    updateUsersSQL += ' WHERE id = ' + id;

    connection.query(updateUsersSQL, (err, results) => {
      if (err) {
        response.status(500).send(err);
        return;
      }
      response.status(200).send(results);
      return;
    });
  });
});

app.listen(port, () => {
  console.log(`Server listening to http://localhost:${port}`);
});
