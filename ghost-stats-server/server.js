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
<<<<<<< HEAD
const ghostMetadata = require('./ghostmetadata.json');

const createGhostsTableQuery = `
=======
const createTableQuery = `
>>>>>>> 3846217 (Initial commit)
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

<<<<<<< HEAD
const createGhostMetadataTableQuery = `
CREATE TABLE IF NOT EXISTS ghost_metadata (
  id INTEGER PRIMARY KEY,
  name TEXT,
  description TEXT,
=======
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


// Load JSON data for ghost_metadata into the database
const ghostMetadata = require('./ghostmetadata.json');
const createMetadataTableQuery = `
CREATE TABLE IF NOT EXISTS ghost_metadata (
  id INTEGER PRIMARY KEY,
>>>>>>> 3846217 (Initial commit)
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
<<<<<<< HEAD
=======
  name TEXT,
>>>>>>> 3846217 (Initial commit)
  outfit TEXT,
  rank INTEGER,
  score REAL,
  special TEXT,
  svg TEXT,
  varatts INTEGER
);`;

db.serialize(() => {
<<<<<<< HEAD
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
=======
  db.run(createMetadataTableQuery, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Ghost Metadata table created');
      ghostMetadata.forEach((metadata) => {
        const insertMetadataQuery = `
        INSERT INTO ghost_metadata (
          id, backdrop, background, backpack, blastoff, body, eyes, face, glasses,
          hands, hat, hideme, html, name, outfit, rank, score, special, svg, varatts
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
        `;
        const params = [
          metadata['id'], metadata['backdrop'], metadata['background'],
          metadata['backpack'], metadata['blastoff'], metadata['body'],
          metadata['eyes'], metadata['face'], metadata['glasses'],
          metadata['hands'], metadata['hat'], metadata['hideme'],
          metadata['html'], metadata['name'], metadata['outfit'],
          metadata['rank'], metadata['score'], metadata['special'],
          metadata['svg'], metadata['varatts'],
        ];
        db.run(insertMetadataQuery, params, (err) => {
>>>>>>> 3846217 (Initial commit)
          if (err) {
            console.error(err.message);
          }
        });
      });
    }
  });
<<<<<<< HEAD

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


  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
=======
});

// API endpoint to get all ghost metadata
app.get('/api/ghostmetadata', (req, res) => {
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
app.get('/api/ghostmetadata/:id', (req, res) => {
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


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
>>>>>>> 3846217 (Initial commit)
