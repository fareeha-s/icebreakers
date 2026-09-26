-- Slack workspaces that installed the app via "Add to Slack".
CREATE TABLE teams (
  team_id TEXT PRIMARY KEY,
  bot_token TEXT NOT NULL,
  team_name TEXT,
  installed_at INTEGER NOT NULL
);

-- One daily-question schedule per channel. next_at is the UTC ms of the next post.
CREATE TABLE dailies (
  team_id TEXT NOT NULL,
  channel_id TEXT NOT NULL,
  hour INTEGER NOT NULL,
  minute INTEGER NOT NULL,
  tz TEXT NOT NULL,
  filter TEXT,
  set_by TEXT NOT NULL,
  next_at INTEGER NOT NULL,
  PRIMARY KEY (team_id, channel_id)
);
CREATE INDEX dailies_next_at ON dailies (next_at);

-- Questions a channel has already seen, so it doesn't get repeats.
CREATE TABLE seen (
  team_id TEXT NOT NULL,
  channel_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  at INTEGER NOT NULL
);
CREATE INDEX seen_channel ON seen (team_id, channel_id, at);
