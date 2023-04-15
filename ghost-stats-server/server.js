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
const path = require('path');
const ghostStats = require(path.join(__dirname, 'ghoststats.json'));
const ghostMetadata = require(path.join(__dirname, 'ghostmetadata.json'));


const createGhostsTableQuery = `
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

const createGhostMetadataTableQuery = `
CREATE TABLE IF NOT EXISTS ghost_metadata (
  id INTEGER PRIMARY KEY,
  name TEXT,
  description TEXT,
  backdrop TEXT,
  background TEXT,
  backpack TEXT,
  blastoff TEXT,
  body TEXT,
  eyes TEXT,
  face TEXT,
  glasses TEXT,
  hands TEXT,
  hat TEXT,
  hideme TEXT,
  html TEXT,
  outfit TEXT,
  rank INTEGER,
  score REAL,
  special TEXT,
  svg TEXT,
  varatts INTEGER
);`;

db.serialize(() => {
  // Create ghosts table and insert data
  db.run(createGhostsTableQuery, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Ghost table created");
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
          ghost["Ghost ID"],
          ghost["Ghost Name"],
          ghost["Rarity Rank"],
          ghost["Rank Modifier"],
          ghost["Stamina"],
          ghost["Smarts"],
          ghost["Luck"],
          ghost["Speed"],
          ghost["Meadows Modifier"],
          ghost["Dunes Modifier"],
          ghost["Tundra Modifier"],
          ghost["Deadlands Modifier"],
          ghost["Toxic Swamps Modifier"],
          ghost["Scorched Earth Modifier"],
          ghost["Twilight Forest Modifier"],
          ghost["Cyber District Modifier"],
          ghost["Alien Modifier"],
          ghost["Farming Length"],
        ];
        db.run(insertGhostQuery, params, (err) => {
          if (err) {
            console.error(err.message);
          }
        });
      });
    }
  });

  // Create ghost_metadata table and insert data
  db.run(createGhostMetadataTableQuery, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Ghost metadata table created");
      ghostMetadata.forEach((ghost) => {
        const insertGhostMetadataQuery = `
      INSERT INTO ghost_metadata (
        id, name, description, backdrop, background, backpack, blastoff, body, eyes,
        face, glasses, hands, hat, hideme, html, outfit, rank, score, special, svg, varatts
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
      `;
        const params = [
          ghost["id"],
          ghost["name"],
          ghost["description"],
          ghost["backdrop"],
          ghost["background"],
          ghost["backpack"],
          ghost["blastoff"],
          ghost["body"],
          ghost["eyes"],
          ghost["face"],
          ghost["glasses"],
          ghost["hands"],
          ghost["hat"],
          ghost["hideme"],
          ghost["html"],
          ghost["outfit"],
          ghost["rank"],
          ghost["score"],
          ghost["special"],
          ghost["svg"],
          ghost["varatts"],
        ];
        db.run(insertGhostMetadataQuery, params, (err) => {
          if (err) {
            console.error(err.message);
          }
        });
      });
    }
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


  // API endpoint to get all ghost metadata
  app.get('/api/ghost-metadata', (req, res) => {
    const query = 'SELECT * FROM ghost_metadata;';
    db.all(query, [], (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: 'An error occurred while fetching ghost metadata.' });
      } else {
        res.json(rows);
      }
    });
  });

  // API endpoint to get a specific ghost metadata by ID
  app.get('/api/ghost-metadata/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM ghost_metadata WHERE id = ?;';
    db.get(query, [id], (err, row) => {
      if (err) {
        console.error(err.message);
        res.status(500).json({ error: 'An error occurred while fetching the ghost metadata.' });
      } else if (row) {
        res.json(row);
      } else {
        res.status(404).json({ error: 'Ghost metadata not found.' });
      }
    });
  });
}); // <-- Add this line here

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
