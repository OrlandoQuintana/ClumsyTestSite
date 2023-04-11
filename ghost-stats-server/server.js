const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

// Connect to SQLite database
const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Load JSON data into database
const ghostStats = require('./ghoststats.json');
const createTableQuery = `
CREATE TABLE IF NOT EXISTS ghosts (
  id INTEGER PRIMARY KEY,
  name TEXT,
  rarity_rank INTEGER,
  rank_modifier REAL,
  stamina INTEGER,
  smarts INTEGER,
  luck INTEGER,
  speed INTEGER,
  meadows_modifier REAL,
  dunes_modifier REAL,
  tundra_modifier REAL,
  deadlands_modifier REAL,
  toxic_swamps_modifier REAL,
  scorched_earth_modifier REAL,
  twilight_forest_modifier REAL,
  cyber_district_modifier REAL,
  alien_modifier REAL,
  farming_length TEXT
);`;

db.serialize(() => {
  db.run(createTableQuery, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Ghost table created');
      ghostStats.forEach((ghost) => {
        const insertGhostQuery = `
        INSERT INTO ghosts (
          id, name, rarity_rank, rank_modifier, stamina, smarts, luck, speed,
          meadows_modifier, dunes_modifier, tundra_modifier, deadlands_modifier,
          toxic_swamps_modifier, scorched_earth_modifier, twilight_forest_modifier,
          cyber_district_modifier, alien_modifier, farming_length
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;
        const params = [
          ghost['Ghost ID'], ghost['Ghost Name'], ghost['Rarity Rank'],
          ghost['Rank Modifier'], ghost['Stamina'], ghost['Smarts'],
          ghost['Luck'], ghost['Speed'], ghost['Meadows Modifier'],
          ghost['Dunes Modifier'], ghost['Tundra Modifier'],
          ghost['Deadlands Modifier'], ghost['Toxic Swamps Modifier'],
          ghost['Scorched Earth Modifier'], ghost['Twilight Forest Modifier'],
          ghost['Cyber District Modifier'], ghost['Alien Modifier'],
          ghost['Farming Length'],
        ];
        db.run(insertGhostQuery, params, (err) => {
          if (err) {
            console.error(err.message);
          }
        });
      });
    }
  });
});

// API endpoint to get all ghosts
app.get('/api/ghosts', (req, res) => {
  const query = 'SELECT * FROM ghosts;';
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'An error occurred while fetching ghosts.' });
    } else {
      res.json(rows);
    }
  });
});

// API endpoint to get a specific ghost by ID
app.get('/api/ghosts/:id', (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM ghosts WHERE id = ?;';
  db.get(query, [id], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'An error occurred while fetching the ghost.' });
    } else if (row) {
      res.json(row);
    } else {
      res.status(404).json({ error: 'Ghost not found.' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
